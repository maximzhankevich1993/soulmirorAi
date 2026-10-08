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

const FREE_LIMIT = 2;

export async function checkAccess(
  type: UsageType
): Promise<AccessResult> {
  const actor = await getActor();

  console.log("CHECK ACCESS ACTOR:", {
    actor,
    type,
  });

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

    console.log("GUEST ACCESS DEBUG:", {
      guestId: actor.guestId,
      type,
      used,
      limit: FREE_LIMIT,
    });

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

  console.log(
    "REGISTERED USER ACCESS DEBUG:",
    {
      userId: actor.userId,
      dbUser,
      plan: dbUser?.plan,
      usage: dbUser?.usage,
      type,
    }
  );

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

  console.log("REGISTERED USER PLAN:", {
    userId: actor.userId,
    plan,
  });

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

  console.log("REGISTERED USER USAGE CHECK:", {
    userId: actor.userId,
    type,
    used,
    limit: FREE_LIMIT,
    allowed: used < FREE_LIMIT,
  });

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

export async function increaseUsage(
  userId: string,
  type: UsageType
) {
  console.log("INCREASE USER USAGE:", {
    userId,
    type,
  });

  const result =
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

  console.log(
    "USER USAGE AFTER UPSERT:",
    result
  );
}

export async function increaseGuestUsage(
  guestId: string,
  type: UsageType
) {
  console.log("INCREASE GUEST USAGE:", {
    guestId,
    type,
  });

  const result =
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

  console.log(
    "GUEST USAGE AFTER UPSERT:",
    result
  );
}