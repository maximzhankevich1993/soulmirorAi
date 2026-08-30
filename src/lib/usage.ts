import { prisma } from "@/lib/prisma";
import { getActor } from "@/lib/getActor";

export type UsageType =
  | "soulScan"
  | "dream"
  | "tarot";

export type AccessResult = {
  allowed: boolean;
  reason?: string;

  guest: boolean;

  userId?: string;

  plan: "free" | "day" | "pro";

  remaining: number;
};

/*
 * =========================================================
 * FREE LIMIT
 * =========================================================
 *
 * Each tool can be used 2 times for free.
 *
 * This is NOT a daily limit.
 * The limit is lifetime-based for the free plan.
 *
 * Soul Scan  → 2 free uses
 * Dream      → 2 free uses
 * Tarot      → 2 free uses
 *
 * After that → paid plan required.
 *
 * =========================================================
 */

const FREE_LIMIT = 2;

/*
 * =========================================================
 * CHECK ACCESS
 * =========================================================
 */

export async function checkAccess(
  type: UsageType
): Promise<AccessResult> {
  const actor = await getActor();

  /*
   * =======================================================
   * GUEST USER
   * =======================================================
   */

  if (actor.type === "guest") {
    const session =
      await prisma.guestSession.findUnique({
        where: {
          guestId: actor.guestId,
        },
      });

    const used =
      session?.[type] ?? 0;

    /*
     * Free limit reached
     */

    if (used >= FREE_LIMIT) {
      return {
        allowed: false,
        guest: true,
        plan: "free",
        remaining: 0,
        reason: "FREE_LIMIT_REACHED",
      };
    }

    /*
     * Free access available
     */

    return {
      allowed: true,
      guest: true,
      plan: "free",
      remaining: FREE_LIMIT - used,
    };
  }

  /*
   * =======================================================
   * REGISTERED USER
   * =======================================================
   */

  const dbUser =
    await prisma.user.findUnique({
      where: {
        id: actor.userId,
      },
      include: {
        plan: true,
      },
    });

  /*
   * =======================================================
   * USER PLAN
   * =======================================================
   */

  const plan =
    (dbUser?.plan?.plan as
      | "free"
      | "day"
      | "pro") ?? "free";

  /*
   * =======================================================
   * PAID PLANS
   * =======================================================
   *
   * Day Pass / Pro have no free usage restriction.
   *
   */

  if (plan !== "free") {
    return {
      allowed: true,
      guest: false,
      userId: actor.userId,
      plan,
      remaining: Infinity,
    };
  }

  /*
   * =======================================================
   * FREE REGISTERED USER
   * =======================================================
   *
   * IMPORTANT:
   *
   * We intentionally DO NOT filter by date.
   *
   * The free limit is lifetime-based.
   *
   */

  const usage =
    await prisma.userUsage.findUnique({
      where: {
        userId: actor.userId,
      },
    });

  const used =
    usage?.[type] ?? 0;

  /*
   * Free limit reached
   */

  if (used >= FREE_LIMIT) {
    return {
      allowed: false,
      guest: false,
      userId: actor.userId,
      plan,
      remaining: 0,
      reason: "FREE_LIMIT_REACHED",
    };
  }

  /*
   * Free usage remaining
   */

  return {
    allowed: true,
    guest: false,
    userId: actor.userId,
    plan,
    remaining: FREE_LIMIT - used,
  };
}

/*
 * =========================================================
 * INCREASE USAGE
 * =========================================================
 *
 * IMPORTANT:
 *
 * This function does NOT reset usage every day.
 *
 * Each user's total lifetime free usage is stored.
 *
 * =========================================================
 */

export async function increaseUsage(
  userId: string,
  type: UsageType
) {
  /*
   * Find existing usage record
   */

  const existing =
    await prisma.userUsage.findUnique({
      where: {
        userId,
      },
    });

  /*
   * Create usage record if it doesn't exist
   */

  if (!existing) {
    await prisma.userUsage.create({
      data: {
        userId,

        soulScan:
          type === "soulScan"
            ? 1
            : 0,

        dream:
          type === "dream"
            ? 1
            : 0,

        tarot:
          type === "tarot"
            ? 1
            : 0,
      },
    });

    return;
  }

  /*
   * Increase selected tool
   */

  await prisma.userUsage.update({
    where: {
      userId,
    },

    data: {
      [type]: {
        increment: 1,
      },
    },
  });
}