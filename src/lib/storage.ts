export function getUsage(
  key: string
): number {
  if (typeof window === "undefined") {
    return 0;
  }

  const value =
    localStorage.getItem(key);

  return value ? Number(value) : 0;
}

export function incrementUsage(
  key: string
) {
  if (typeof window === "undefined") {
    return;
  }

  const current =
    getUsage(key);

  localStorage.setItem(
    key,
    String(current + 1)
  );
}

export function hasReachedLimit(
  key: string,
  limit: number
) {
  return getUsage(key) >= limit;
}