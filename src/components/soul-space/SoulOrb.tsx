"use client";

import { motion } from "framer-motion";

export function SoulOrb() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Outer Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.75, 0.45],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[340px] w-[340px] rounded-full bg-[#D6B25E]/20 blur-[120px]"
      />

      {/* Purple Glow */}
      <motion.div
        animate={{
          scale: [1.05, 1.2, 1.05],
          rotate: [0, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[280px] w-[280px] rounded-full border border-[#8B5CF6]/20"
      />

      {/* Main Orb */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative flex h-[220px] w-[220px] items-center justify-center overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-[#D6B25E]/40 via-[#8B5CF6]/20 to-[#09090B] shadow-[0_0_120px_rgba(214,178,94,.25)] backdrop-blur-3xl"
      >
        {/* Shine */}
        <motion.div
          animate={{
            x: [-220, 220],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 h-full w-20 rotate-12 bg-white/10 blur-xl"
        />

        {/* Core */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="h-24 w-24 rounded-full bg-[#F4F1EA]/90 blur-sm"
        />
      </motion.div>

    </div>
  );
}