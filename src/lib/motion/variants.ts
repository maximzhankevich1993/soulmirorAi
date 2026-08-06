import { Motion } from "./motion";

export const fadeUp = {
  hidden: {
    opacity: Motion.opacity.hidden,
    y: Motion.y.hidden,
    scale: Motion.scale.hidden,
    filter: `blur(${Motion.blur.hidden}px)`,
  },

  visible: {
    opacity: Motion.opacity.visible,
    y: Motion.y.visible,
    scale: Motion.scale.visible,
    filter: `blur(${Motion.blur.visible}px)`,
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
  },
};

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },

  visible: {
    opacity: 1,
    scale: 1,
  },
};