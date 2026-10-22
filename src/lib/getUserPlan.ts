import { getUser } from "@/lib/getUser";
import { createAdminClient } from "@/lib/supabase/admin";
import type { PlanType } from "@/lib/plans";

export async function getUserPlan(): Promise<PlanType> {
  const user = await getUser();

  if (!user) {
    return "free";
  }

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("UserPlan")
    .select("plan,expiresAt")
    .eq("userId", user.id)
    .maybeSingle();

  if (error) {
    console.error("Failed to load user plan:", error.message);
    throw new Error("Failed to load user plan");
  }

  if (!data) return "free";

  if (data.expiresAt && new Date(data.expiresAt).getTime() <= Date.now()) {
    return "free";
  }

  const allowedPlans: PlanType[] = ["free", "day", "monthly", "yearly"];
  return allowedPlans.includes(data.plan as PlanType)
    ? (data.plan as PlanType)
    : "free";
}
