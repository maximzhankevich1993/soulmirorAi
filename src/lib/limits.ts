export type PlanType = "free" | "day" | "pro";

export const LIMITS = {
  free: {
    soulScan: 1,
    dream: 1,
    tarot: 1,
  },
  day: {
    unlimited: true,
  },
  pro: {
    unlimited: true,
  },
} as const;

export function isUnlimited(plan: PlanType) {
  return plan === "day" || plan === "pro";
}

export function getLimit(plan: PlanType, type: "soulScan" | "dream" | "tarot") {
  if (plan === "free") {
    return LIMITS.free[type];
  }

  return Infinity;
}