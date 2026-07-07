export type PlanType =
  | "free"
  | "day"
  | "monthly"
  | "yearly";

export const PLANS = {
  free: {
    name: "Free",
    price: 0,

    soulScanLimit: 1,
    dreamLimit: 1,
    tarotLimit: 1,

    duration: null,
  },

  day: {
    name: "Day Pass",
    price: 2.99,

    soulScanLimit: Infinity,
    dreamLimit: Infinity,
    tarotLimit: Infinity,

    duration: "24h",
  },

  monthly: {
    name: "Monthly",
    price: 12.99,

    soulScanLimit: Infinity,
    dreamLimit: Infinity,
    tarotLimit: Infinity,

    duration: "30d",
  },

  yearly: {
    name: "Yearly",
    price: 79,

    soulScanLimit: Infinity,
    dreamLimit: Infinity,
    tarotLimit: Infinity,

    duration: "365d",
  },
} as const;


export function getPlanLimits(plan: PlanType) {
  return PLANS[plan];
}