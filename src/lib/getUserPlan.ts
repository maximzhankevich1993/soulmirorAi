import { prisma } from "@/lib/prisma";
import { getUser } from "@/lib/getUser";

export async function getUserPlan() {
  const user = await getUser();

  if (!user) return "free";

  const dbUser = await prisma.user.findUnique({
    where: { email: user.email! },
  });

  return dbUser?.plan || "free";
}