export type SoulState =
  | "calm"
  | "focus"
  | "healing"
  | "shadow"
  | "awakening";


export const soulStates = {
  calm: {
    name: "Calm",
    color: "#D6B25E",
    emissive: "#8B5CF6",
    intensity: 1.5,
    description:
      "Balance, peace and inner harmony.",
  },

  focus: {
    name: "Focus",
    color: "#8B5CF6",
    emissive: "#4F46E5",
    intensity: 2,
    description:
      "Clarity, attention and awareness.",
  },

  healing: {
    name: "Healing",
    color: "#67E8F9",
    emissive: "#06B6D4",
    intensity: 1.8,
    description:
      "Recovery and emotional renewal.",
  },

  shadow: {
    name: "Shadow",
    color: "#312E81",
    emissive: "#111827",
    intensity: 1.2,
    description:
      "Exploring hidden parts of yourself.",
  },

  awakening: {
    name: "Awakening",
    color: "#F4F1EA",
    emissive: "#D6B25E",
    intensity: 2.5,
    description:
      "A new stage of transformation.",
  },
};