export type PlanType = "free" | "day" | "pro";

export const PLANS = {
  free: {
    name: "Free",
    soulScanLimit: 1,
    dreamLimit: 1,
    tarotLimit: 1,
  },

  day: {
    name: "Day Pass",
    soulScanLimit: Infinity,
    dreamLimit: Infinity,
    tarotLimit: Infinity,
  },

  pro: {
    name: "Pro",
    soulScanLimit: Infinity,
    dreamLimit: Infinity,
    tarotLimit: Infinity,
  },
} as const;

export function getPlanLimits(plan: PlanType) {
  return PLANS[plan];
}