import { getActor } from "@/lib/getActor";
import { getUser } from "@/lib/getUser";
import { createAdminClient } from "@/lib/supabase/admin";
import type { PlanType } from "@/lib/plans";

export type UsageType = "soulScan" | "dream" | "tarot";

export type AccessResult = {
  allowed: boolean;
  reason?: string;
  guest: boolean;
  userId?: string;
  plan: PlanType;
  remaining: number;
};

const FREE_LIMIT = 2;

function throwIfError(error: { message: string } | null, context: string) {
  if (error) {
    console.error(`${context}: ${error.message}`);
    throw new Error(context);
  }
}

async function ensureUserRows(userId: string, email: string) {
  const supabase = createAdminClient();

  const userResult = await supabase
    .from("User")
    .upsert(
      { id: userId, email },
      { onConflict: "id" }
    );
  throwIfError(userResult.error, "Failed to sync user");

  const planResult = await supabase
    .from("UserPlan")
    .upsert(
      {
        id: crypto.randomUUID(),
        userId,
        plan: "free",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      { onConflict: "userId", ignoreDuplicates: true }
    );
  throwIfError(planResult.error, "Failed to initialize user plan");
}

export async function checkAccess(type: UsageType): Promise<AccessResult> {
  const actor = await getActor();
  const supabase = createAdminClient();

  if (actor.type === "guest") {
    const { data, error } = await supabase
      .from("GuestSession")
      .select("soulScan,dream,tarot")
      .eq("guestId", actor.guestId)
      .maybeSingle();

    throwIfError(error, "Failed to load guest usage");
    const used = Number(data?.[type] ?? 0);

    return used >= FREE_LIMIT
      ? {
          allowed: false,
          guest: true,
          plan: "free",
          remaining: 0,
          reason: "FREE_LIMIT_REACHED",
        }
      : {
          allowed: true,
          guest: true,
          plan: "free",
          remaining: FREE_LIMIT - used,
        };
  }

  const authUser = await getUser();
  if (!authUser?.email) {
    return {
      allowed: false,
      guest: false,
      userId: actor.userId,
      plan: "free",
      remaining: 0,
      reason: "USER_EMAIL_MISSING",
    };
  }

  await ensureUserRows(actor.userId, authUser.email);

  const [{ data: planRow, error: planError }, { data: usage, error: usageError }] =
    await Promise.all([
      supabase
        .from("UserPlan")
        .select("plan,expiresAt")
        .eq("userId", actor.userId)
        .maybeSingle(),
      supabase
        .from("UserUsage")
        .select("soulScan,dream,tarot")
        .eq("userId", actor.userId)
        .maybeSingle(),
    ]);

  throwIfError(planError, "Failed to load user plan");
  throwIfError(usageError, "Failed to load user usage");

  let plan = (planRow?.plan ?? "free") as PlanType;
  const validPlans: PlanType[] = ["free", "day", "monthly", "yearly"];
  if (!validPlans.includes(plan)) plan = "free";

  if (planRow?.expiresAt && new Date(planRow.expiresAt).getTime() <= Date.now()) {
    plan = "free";
  }

  if (plan !== "free") {
    return {
      allowed: true,
      guest: false,
      userId: actor.userId,
      plan,
      remaining: Infinity,
    };
  }

  const used = Number(usage?.[type] ?? 0);
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

export async function increaseUsage(userId: string, type: UsageType) {
  const supabase = createAdminClient();
  const { error } = await supabase.rpc("increment_user_usage", {
    p_user_id: userId,
    p_type: type,
  });
  throwIfError(error, "Failed to increment user usage");
}

export async function increaseGuestUsage(guestId: string, type: UsageType) {
  const supabase = createAdminClient();
  const { error } = await supabase.rpc("increment_guest_usage", {
    p_guest_id: guestId,
    p_type: type,
  });
  throwIfError(error, "Failed to increment guest usage");
}
