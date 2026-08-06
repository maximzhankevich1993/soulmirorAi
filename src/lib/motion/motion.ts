export const Motion = {
  duration: {
    instant: 0.15,
    fast: 0.3,
    normal: 0.6,
    slow: 1,
    cinematic: 1.6,
    loading: 2.8,
  },

  ease: {
    smooth: [0.22, 1, 0.36, 1],
    soft: [0.16, 1, 0.3, 1],
    cinematic: [0.65, 0, 0.35, 1],
  },

  blur: {
    hidden: 16,
    visible: 0,
  },

  scale: {
    hidden: 0.96,
    visible: 1,
    hover: 1.02,
    pressed: 0.98,
  },

  opacity: {
    hidden: 0,
    visible: 1,
  },

  y: {
    hidden: 40,
    visible: 0,
  },
} as const;