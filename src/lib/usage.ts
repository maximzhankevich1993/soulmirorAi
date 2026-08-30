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
 * =====================================================
 * FREE PLAN LIMIT
 * =====================================================
 *
 * Каждый пользователь получает:
 *
 * Soul Scan        → 2 раза
 * Dream Analysis   → 2 раза
 * Tarot            → 2 раза
 *
 * Лимит lifetime.
 *
 * Никакого ежедневного сброса.
 *
 * После достижения лимита требуется платный план.
 *
 * =====================================================
 */

const FREE_LIMIT = 2;

/*
 * =====================================================
 * CHECK ACCESS
 * =====================================================
 */

export async function checkAccess(
  type: UsageType
): Promise<AccessResult> {
  const actor = await getActor();

  /*
   * ===================================================
   * GUEST USER
   * ===================================================
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
     * Free usage available
     */

    return {
      allowed: true,
      guest: true,
      plan: "free",
      remaining: FREE_LIMIT - used,
    };
  }

  /*
   * ===================================================
   * REGISTERED USER
   * ===================================================
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
   * Determine current plan
   */

  const plan =
    (dbUser?.plan?.plan as
      | "free"
      | "day"
      | "pro") ?? "free";

  /*
   * ===================================================
   * PAID PLANS
   * ===================================================
   *
   * Day Pass / Pro:
   *
   * No free-limit restriction.
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
   * ===================================================
   * FREE PLAN
   * ===================================================
   *
   * IMPORTANT:
   *
   * We intentionally DO NOT filter by date.
   *
   * The limit is lifetime.
   *
   */

  const usage =
    await prisma.userUsage.findFirst({
      where: {
        userId: actor.userId,
      },

      orderBy: {
        date: "asc",
      },
    });

  /*
   * ===================================================
   * CALCULATE TOTAL USAGE
   * ===================================================
   *
   * UserUsage may contain multiple records if old
   * daily logic created them.
   *
   * Therefore we calculate the total usage across
   * all records instead of relying on one date.
   *
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

  /*
   * ===================================================
   * LIMIT REACHED
   * ===================================================
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
   * ===================================================
   * FREE USAGE AVAILABLE
   * ===================================================
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
 * =====================================================
 * INCREASE USAGE
 * =====================================================
 *
 * Records one usage.
 *
 * IMPORTANT:
 *
 * This function does NOT reset anything by date.
 *
 * We keep the existing UserUsage structure for
 * compatibility with the database.
 *
 * The access check above calculates the lifetime
 * total across all records.
 *
 * =====================================================
 */

export async function increaseUsage(
  userId: string,
  type: UsageType
) {
  /*
   * Use one permanent usage record for the user.
   *
   * We use the earliest existing record if available.
   */

  const existing =
    await prisma.userUsage.findFirst({
      where: {
        userId,
      },

      orderBy: {
        date: "asc",
      },
    });

  /*
   * ===================================================
   * EXISTING RECORD
   * ===================================================
   */

  if (existing) {
    await prisma.userUsage.update({
      where: {
        id: existing.id,
      },

      data: {
        [type]: {
          increment: 1,
        },
      },
    });

    return;
  }

  /*
   * ===================================================
   * CREATE FIRST RECORD
   * ===================================================
   */

  const date = new Date();

  date.setHours(0, 0, 0, 0);

  await prisma.userUsage.create({
    data: {
      userId,
      date,

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