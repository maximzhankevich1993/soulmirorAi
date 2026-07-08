export type GuestAction =
  | "soulScan"
  | "dream"
  | "tarot";

const KEY = "soulmirror_guest_usage";

type GuestUsage = {
  soulScan: number;
  dream: number;
  tarot: number;
};

const DEFAULT_USAGE: GuestUsage = {
  soulScan: 0,
  dream: 0,
  tarot: 0,
};

function getUsage(): GuestUsage {
  if (typeof window === "undefined") {
    return DEFAULT_USAGE;
  }

  const saved = localStorage.getItem(KEY);

  if (!saved) {
    return DEFAULT_USAGE;
  }

  return JSON.parse(saved);
}

function saveUsage(usage: GuestUsage) {
  localStorage.setItem(KEY, JSON.stringify(usage));
}

export function canUseGuest(action: GuestAction) {
  const usage = getUsage();

  return usage[action] < 1;
}

export function useGuest(action: GuestAction) {
  const usage = getUsage();

  usage[action] += 1;

  saveUsage(usage);
}