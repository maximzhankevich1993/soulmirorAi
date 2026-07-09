export type GuestAction = "soulScan" | "dream" | "tarot";

const STORAGE_KEY = "soulmirror_guest";

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

  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return DEFAULT_USAGE;
  }

  try {
    return JSON.parse(saved);
  } catch {
    return DEFAULT_USAGE;
  }
}

function saveUsage(data: GuestUsage) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function canUseGuest(action: GuestAction) {
  const usage = getUsage();
  return usage[action] < 1;
}

export function consumeGuest(action: GuestAction) {
  const usage = getUsage();

  usage[action]++;

  saveUsage(usage);
}

export function resetGuestUsage() {
  localStorage.removeItem(STORAGE_KEY);
}