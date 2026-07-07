import { prisma } from "@/lib/prisma";
import { getUser } from "@/lib/getUser";
import type { PlanType } from "@/lib/plans";

export async function getUserPlan(): Promise<PlanType> {
  const user = await getUser();

  if (!user) {
    return "free";
  }

  const userPlan = await prisma.userPlan.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (!userPlan) {
    return "free";
  }

  if (
    userPlan.expiresAt &&
    userPlan.expiresAt < new Date()
  ) {
    return "free";
  }

  return userPlan.plan as PlanType;
}