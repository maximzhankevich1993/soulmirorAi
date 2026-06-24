export interface SoulScanHistoryItem {
  id: string;
  input: string;
  archetype: string;
  emotion: string;
  insight: string;
  createdAt: string;
}

export interface DreamHistoryItem {
  id: string;
  dream: string;
  summary: string;
  emotion: string;
  interpretation: string;
  createdAt: string;
}