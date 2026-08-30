
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

  used: number;
  limit: number;
  remaining: number;
};

const FREE_LIMIT = 2;

/*
 * =========================================================
 * CHECK ACCESS
 * =========================================================
 *
 * FREE LIMIT:
 *
 * Soul Scan       → 2 total
 * Dream Analysis  → 2 total
 * Tarot           → 2 total
 *
 * NOT DAILY.
 *
 * After the user reaches 2 uses of a specific tool,
 * that tool requires a paid plan.
 *
 * The limit is enforced on the server.
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

    const remaining = Math.max(
      FREE_LIMIT - used,
      0
    );

    if (used >= FREE_LIMIT) {
      return {
        allowed: false,
        guest: true,
        plan: "free",
        used,
        limit: FREE_LIMIT,
        remaining: 0,
        reason: "FREE_LIMIT_REACHED",
      };
    }

    return {
      allowed: true,
      guest: true,
      plan: "free",
      used,
      limit: FREE_LIMIT,
      remaining,
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
   * Paid users have unlimited access.
   */

  if (plan !== "free") {
    return {
      allowed: true,
      guest: false,
      userId: actor.userId,
      plan,
      used: 0,
      limit: Infinity,
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
   * We DO NOT check today's date.
   *
   * We count the user's TOTAL usage across all
   * UserUsage records.
   * =======================================================
   */

  const usageRecords =
    await prisma.userUsage.findMany({
      where: {
        userId: actor.userId,
      },
      select: {
        soulScan: true,
        dream: true,
        tarot: true,
      },
    });

  const used = usageRecords.reduce(
    (total, record) =>
      total + (record[type] ?? 0),
    0
  );

  const remaining = Math.max(
    FREE_LIMIT - used,
    0
  );

  /*
   * FREE LIMIT REACHED
   */

  if (used >= FREE_LIMIT) {
    return {
      allowed: false,
      guest: false,
      userId: actor.userId,
      plan,
      used,
      limit: FREE_LIMIT,
      remaining: 0,
      reason: "FREE_LIMIT_REACHED",
    };
  }

  /*
   * FREE ACCESS STILL AVAILABLE
   */

  return {
    allowed: true,
    guest: false,
    userId: actor.userId,
    plan,
    used,
    limit: FREE_LIMIT,
    remaining,
  };
}

/*
 * =========================================================
 * INCREASE USAGE
 * =========================================================
 *
 * Adds exactly one usage to the user's lifetime total.
 *
 * The date is kept in the database for history/statistics,
 * but it is NOT used for enforcing the free limit.
 * =========================================================
 */

export async function increaseUsage(
  userId: string,
  type: UsageType
) {
  const today = new Date();

  today.setHours(
    0,
    0,
    0,
    0
  );

  await prisma.userUsage.upsert({
    where: {
      userId_date: {
        userId,
        date: today,
      },
    },

    update: {
      [type]: {
        increment: 1,
      },
    },

    create: {
      userId,
      date: today,

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

