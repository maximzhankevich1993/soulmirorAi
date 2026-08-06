import { Motion } from "./motion";

export const defaultTransition = {
  duration: Motion.duration.normal,
  ease: Motion.ease.smooth,
};

export const cinematicTransition = {
  duration: Motion.duration.cinematic,
  ease: Motion.ease.cinematic,
};

export const loadingTransition = {
  duration: Motion.duration.loading,
  repeat: Infinity,
  ease: "easeInOut",
};