"use client";

import { motion } from "framer-motion";

export function CinematicOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden">

      {/* Ambient Glow */}

      <motion.div
        className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/5 blur-[180px]"
        animate={{
          opacity: [0.08, 0.16, 0.08],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Top Light */}

      <motion.div
        className="absolute -top-64 left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-amber-300/5 blur-[140px]"
        animate={{
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      {/* Bottom Glow */}

      <motion.div
        className="absolute bottom-[-300px] left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-yellow-500/5 blur-[170px]"
        animate={{
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
      />
    </div>
  );
}