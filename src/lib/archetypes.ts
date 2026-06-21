export const ARCHETYPES = [
  "The Seeker",
  "The Sage",
  "The Creator",
  "The Explorer",
  "The Visionary",
  "The Guardian",
] as const;

export type Archetype =
  (typeof ARCHETYPES)[number];