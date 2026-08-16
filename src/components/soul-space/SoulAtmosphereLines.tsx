"use client";

import { motion } from "framer-motion";

export function SoulAtmosphereLines() {
  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-[-40]
        overflow-hidden
      "
    >
      {/* =====================================================
          LINE 1
      ====================================================== */}

      <motion.div
        animate={{
          x: ["-35%", "25%", "-35%"],
          y: ["8%", "18%", "8%"],
          opacity: [0.18, 0.42, 0.18],
          scaleY: [1, 1.25, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-25%]
          top-[12%]
          h-[120px]
          w-[150%]
          rotate-[-4deg]
          rounded-[50%]
          bg-[#D6B25E]/20
          blur-[45px]
        "
      />

      {/* =====================================================
          LINE 2
      ====================================================== */}

      <motion.div
        animate={{
          x: ["25%", "-30%", "25%"],
          y: ["0%", "12%", "0%"],
          opacity: [0.12, 0.35, 0.12],
          scaleY: [1, 1.4, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="
          absolute
          left-[-20%]
          top-[38%]
          h-[150px]
          w-[145%]
          rotate-[3deg]
          rounded-[50%]
          bg-[#D6B25E]/15
          blur-[55px]
        "
      />

      {/* =====================================================
          LINE 3
      ====================================================== */}

      <motion.div
        animate={{
          x: ["-30%", "30%", "-30%"],
          y: ["0%", "-10%", "0%"],
          opacity: [0.1, 0.3, 0.1],
          scaleY: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="
          absolute
          left-[-20%]
          top-[62%]
          h-[170px]
          w-[145%]
          rotate-[-2deg]
          rounded-[50%]
          bg-[#D6B25E]/12
          blur-[60px]
        "
      />

      {/* =====================================================
          LINE 4
      ====================================================== */}

      <motion.div
        animate={{
          x: ["30%", "-25%", "30%"],
          y: ["0%", "8%", "0%"],
          opacity: [0.08, 0.28, 0.08],
          scaleY: [1, 1.35, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
        className="
          absolute
          left-[-25%]
          top-[82%]
          h-[140px]
          w-[150%]
          rotate-[4deg]
          rounded-[50%]
          bg-[#D6B25E]/10
          blur-[55px]
        "
      />

      {/* =====================================================
          SOFT GOLD CORE
      ====================================================== */}

      <motion.div
        animate={{
          opacity: [0.05, 0.13, 0.05],
          scaleX: [0.9, 1.15, 0.9],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[220px]
          w-[120%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]/10
          blur-[90px]
        "
      />
    </div>
  );
}