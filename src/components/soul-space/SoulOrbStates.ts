import type * as THREE from "three";

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
    rotation: 0.003,
    breathing: 0.03,
    particleSpeed: 1,
  },


  focus: {
    name: "Focus",
    color: "#8B5CF6",
    emissive: "#4F46E5",
    intensity: 2,
    rotation: 0.006,
    breathing: 0.02,
    particleSpeed: 1.5,
  },


  healing: {
    name: "Healing",
    color: "#67E8F9",
    emissive: "#06B6D4",
    intensity: 1.8,
    rotation: 0.002,
    breathing: 0.05,
    particleSpeed: 1.2,
  },


  shadow: {
    name: "Shadow",
    color: "#312E81",
    emissive: "#111827",
    intensity: 1.2,
    rotation: 0.001,
    breathing: 0.01,
    particleSpeed: 0.5,
  },


  awakening: {
    name: "Awakening",
    color: "#F4F1EA",
    emissive: "#D6B25E",
    intensity: 2.5,
    rotation: 0.008,
    breathing: 0.07,
    particleSpeed: 2,
  },

};