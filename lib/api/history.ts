import type {
  SoulScanHistoryItem,
  DreamHistoryItem,
} from "@/types/history";

/**
 * Soul Scan history
 */
export async function getSoulScanHistory(): Promise<SoulScanHistoryItem[]> {
  const res = await fetch("/api/soul-scan");

  if (!res.ok) {
    throw new Error("Failed to load soul scan history");
  }

  return res.json();
}

/**
 * Dream history
 */
export async function getDreamHistory(): Promise<DreamHistoryItem[]> {
  const res = await fetch("/api/history/dream-analysis");

  if (!res.ok) {
    throw new Error("Failed to load dream history");
  }

  return res.json();
}