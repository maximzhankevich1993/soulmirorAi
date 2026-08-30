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
 * Each tool has 2 lifetime free uses.
 *
 * Soul Scan       → 2 free uses
 * Dream Analysis  → 2 free uses
 * Tarot           → 2 free uses
 *
 * NOT daily.
 * NOT monthly.
 *
 * After the limit is reached,
 * a paid plan is required.
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
   * GUEST
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

    if (used >= FREE_LIMIT) {
      return {
        allowed: false,
        guest: true,
        plan: "free",
        remaining: 0,
        reason: "FREE_LIMIT_REACHED",
      };
    }

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
        usage: true,
      },
    });

  /*
   * =======================================================
   * PLAN
   * =======================================================
   */

  const plan =
    (dbUser?.plan?.plan as
      | "free"
      | "day"
      | "pro") ?? "free";

  /*
   * =======================================================
   * PAID PLAN
   * =======================================================
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
   * FREE USER
   * =======================================================
   */

  const used =
    dbUser?.usage?.[type] ?? 0;

  if (used >= FREE_LIMIT) {
    return {
      allowed: false,
      guest: false,
      userId: actor.userId,
      plan: "free",
      remaining: 0,
      reason: "FREE_LIMIT_REACHED",
    };
  }

  return {
    allowed: true,
    guest: false,
    userId: actor.userId,
    plan: "free",
    remaining: FREE_LIMIT - used,
  };
}

/*
 * =========================================================
 * INCREASE USER USAGE
 * =========================================================
 *
 * Lifetime usage.
 *
 * No dates.
 * No daily reset.
 *
 * =========================================================
 */

export async function increaseUsage(
  userId: string,
  type: UsageType
) {
  await prisma.userUsage.upsert({
    where: {
      userId,
    },

    update: {
      [type]: {
        increment: 1,
      },
    },

    create: {
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
}

/*
 * =========================================================
 * INCREASE GUEST USAGE
 * =========================================================
 *
 * Guests also have 2 lifetime free uses
 * for each individual tool.
 *
 * =========================================================
 */

export async function increaseGuestUsage(
  guestId: string,
  type: UsageType
) {
  await prisma.guestSession.upsert({
    where: {
      guestId,
    },

    update: {
      [type]: {
        increment: 1,
      },
    },

    create: {
      guestId,

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

      expiresAt: null,
    },
  });
}