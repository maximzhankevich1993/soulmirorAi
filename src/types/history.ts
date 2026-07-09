export type SoulScanHistoryItem = {
  id: string;
  input: string;
  archetype: string;
  emotion: string;
  insight: string;
  createdAt: string;
};

export type DreamHistoryItem = {
  id: string;
  dream: string;
  summary: string;
  emotion: string;
  interpretation: string;
  createdAt: string;
};