export type SoulState =
  | "calm"
  | "focus"
  | "healing"
  | "shadow"
  | "awakening";



export interface SoulStateConfig {

  name: string;

  color: string;

  emissive: string;

  intensity: number;

  rotation: number;

  breathing: number;

  particleSpeed: number;

  particleSize: number;

  auraOpacity: number;

  auraScale: number;

  cameraDepth: number;

  cameraIntensity: number;

}




export const soulStates: Record<
  SoulState,
  SoulStateConfig
> = {



  calm: {

    name: "Calm",

    color: "#D6B25E",

    emissive: "#8B5CF6",

    intensity: 1.5,

    rotation: 0.003,

    breathing: 0.03,

    particleSpeed: 1,

    particleSize: 0.025,

    auraOpacity: 0.08,

    auraScale: 1,

    cameraDepth: 3.5,

    cameraIntensity: 0.5,

  },




  focus: {

    name: "Focus",

    color: "#8B5CF6",

    emissive: "#4F46E5",

    intensity: 2,

    rotation: 0.006,

    breathing: 0.02,

    particleSpeed: 1.5,

    particleSize: 0.03,

    auraOpacity: 0.1,

    auraScale: 1.05,

    cameraDepth: 3.2,

    cameraIntensity: 0.8,

  },





  healing: {

    name: "Healing",

    color: "#67E8F9",

    emissive: "#06B6D4",

    intensity: 1.8,

    rotation: 0.002,

    breathing: 0.05,

    particleSpeed: 1.2,

    particleSize: 0.035,

    auraOpacity: 0.12,

    auraScale: 1.12,

    cameraDepth: 3.8,

    cameraIntensity: 0.6,

  },






  shadow: {

    name: "Shadow",

    color: "#312E81",

    emissive: "#111827",

    intensity: 1.2,

    rotation: 0.001,

    breathing: 0.01,

    particleSpeed: 0.5,

    particleSize: 0.015,

    auraOpacity: 0.04,

    auraScale: 0.95,

    cameraDepth: 4,

    cameraIntensity: 0.4,

  },







  awakening: {

    name: "Awakening",

    color: "#F4F1EA",

    emissive: "#D6B25E",

    intensity: 2.5,

    rotation: 0.008,

    breathing: 0.07,

    particleSpeed: 2,

    particleSize: 0.05,

    auraOpacity: 0.18,

    auraScale: 1.2,

    cameraDepth: 2.8,

    cameraIntensity: 1,

  },


};