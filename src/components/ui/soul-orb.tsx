"use client";

import { motion } from "framer-motion";

interface SoulOrbProps {
  size?: number;
  className?: string;
}

export function SoulOrb({
  size = 260,
  className = "",
}: SoulOrbProps) {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      {/* Outer Purple Aura */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full bg-[#8B5CF6]/15 blur-3xl"
      />

      {/* Gold Aura */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-8 rounded-full bg-[#D6B25E]/15 blur-3xl"
      />

      {/* Rotating Ring 1 */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-0
          rounded-full
          border
          border-[#D6B25E]/15
        "
      />

      {/* Rotating Ring 2 */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-6
          rounded-full
          border
          border-[#8B5CF6]/15
        "
      />

      {/* Floating Core */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          flex
          h-28
          w-28
          items-center
          justify-center
          rounded-full
          border
          border-[#D6B25E]/30
          bg-white/[0.04]
          backdrop-blur-2xl
          shadow-[0_0_60px_rgba(214,178,94,0.15)]
        "
      >
        {/* Reflection */}
        <div className="absolute left-4 top-3 h-8 w-8 rounded-full bg-white/10 blur-sm" />

        {/* Core Gradient */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D6B25E]/10 via-transparent to-[#8B5CF6]/10" />

        {/* Symbol */}
        <motion.div
          animate={{
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            relative
            z-10
            text-3xl
            text-[#F4F1EA]
          "
        >
          ✦
        </motion.div>
      </motion.div>

      {/* Orbit Particle 1 */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0"
      >
        <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#D6B25E]" />
      </motion.div>

      {/* Orbit Particle 2 */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-10"
      >
        <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#8B5CF6]" />
      </motion.div>
    </div>
  );
}