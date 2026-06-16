"use client";

import { Variants } from "framer-motion";

/**
 * Base fade + lift animation
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * Stagger container for sections/grids
 */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

/**
 * Card hover lift (motion-friendly)
 */
export const hoverLift: Variants = {
  rest: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -6,
    scale: 1.02,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

/**
 * Soft glow pulse for Hero elements
 */
export const glowPulse: Variants = {
  rest: {
    opacity: 0.4,
    scale: 1,
  },
  animate: {
    opacity: [0.3, 0.6, 0.3],
    scale: [1, 1.05, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};