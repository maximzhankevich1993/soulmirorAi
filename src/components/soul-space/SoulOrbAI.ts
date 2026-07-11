import type { SoulState } from "./SoulOrbStates";


export function getSoulState(
  emotion?: string,
  archetype?: string
): SoulState {

  const value =
    `${emotion} ${archetype}`.toLowerCase();


  // Healing emotions
  if (
    value.includes("sad") ||
    value.includes("hurt") ||
    value.includes("pain") ||
    value.includes("healing") ||
    value.includes("loss")
  ) {
    return "healing";
  }


  // Shadow emotions
  if (
    value.includes("fear") ||
    value.includes("anger") ||
    value.includes("shadow") ||
    value.includes("anxiety")
  ) {
    return "shadow";
  }


  // Focus emotions
  if (
    value.includes("focus") ||
    value.includes("clarity") ||
    value.includes("wisdom") ||
    value.includes("sage")
  ) {
    return "focus";
  }


  // Transformation
  if (
    value.includes("change") ||
    value.includes("awakening") ||
    value.includes("growth") ||
    value.includes("rebirth")
  ) {
    return "awakening";
  }


  return "calm";
}