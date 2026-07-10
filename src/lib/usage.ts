import { prisma } from "@/lib/prisma";
import { getUser } from "@/lib/getUser";

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

const FREE_LIMIT = 1;

export async function checkAccess(
  type: UsageType
): Promise<AccessResult> {
  const user = await getUser();

  // -------------------------
  // Guest
  // -------------------------

  if (!user) {
    return {
      allowed: true,
      guest: true,
      plan: "free",
      remaining: 1,
    };
  }

  // -------------------------
  // Registered user
  // -------------------------

  const dbUser = await prisma.user.findUnique({
    where: {
      email: user.email!,
    },
  });

  const plan =
    (dbUser?.plan as "free" | "day" | "pro") ??
    "free";

  if (plan !== "free") {
    return {
      allowed: true,
      guest: false,
      userId: user.id,
      plan,
      remaining: Infinity,
    };
  }

  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const usage = await prisma.userUsage.findUnique({
    where: {
      userId_date: {
        userId: user.id,
        date: today,
      },
    },
  });

  const used =
    usage?.[type] ?? 0;

  if (used >= FREE_LIMIT) {
    return {
      allowed: false,
      guest: false,
      userId: user.id,
      plan,
      remaining: 0,
      reason: "FREE_LIMIT_REACHED",
    };
  }

  return {
    allowed: true,
    guest: false,
    userId: user.id,
    plan,
    remaining: FREE_LIMIT - used,
  };
}

export async function increaseUsage(
  userId: string,
  type: UsageType
) {
  const today = new Date();

  today.setHours(0, 0, 0, 0);

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

      soulScan: type === "soulScan" ? 1 : 0,
      dream: type === "dream" ? 1 : 0,
      tarot: type === "tarot" ? 1 : 0,
    },
  });
}