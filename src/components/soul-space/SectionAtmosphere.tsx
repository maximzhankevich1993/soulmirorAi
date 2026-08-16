"use client";

import { motion } from "framer-motion";

export function SoulSectionAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* =====================================================
          GOLDEN HORIZONTAL THREAD 01
      ====================================================== */}

      <motion.div
        animate={{
          x: ["-35%", "35%", "-35%"],
          y: ["-8%", "8%", "-8%"],
          opacity: [0.18, 0.38, 0.18],
          scaleY: [1, 1.35, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-25%]
          top-[18%]
          h-[90px]
          w-[150%]
          rounded-[50%]
          bg-[#D6B25E]/25
          blur-[45px]
        "
      />

      {/* =====================================================
          GOLDEN HORIZONTAL THREAD 02
      ====================================================== */}

      <motion.div
        animate={{
          x: ["30%", "-30%", "30%"],
          y: ["5%", "-5%", "5%"],
          opacity: [0.1, 0.3, 0.1],
          scaleY: [1, 1.5, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-25%]
          top-[52%]
          h-[110px]
          w-[150%]
          rounded-[50%]
          bg-[#D6B25E]/20
          blur-[55px]
        "
      />

      {/* =====================================================
          GOLDEN HORIZONTAL THREAD 03
      ====================================================== */}

      <motion.div
        animate={{
          x: ["-20%", "25%", "-20%"],
          y: ["4%", "-7%", "4%"],
          opacity: [0.08, 0.24, 0.08],
          scaleY: [1, 1.4, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-20%]
          top-[78%]
          h-[80px]
          w-[140%]
          rounded-[50%]
          bg-[#D6B25E]/15
          blur-[50px]
        "
      />

      {/* =====================================================
          PURPLE SECONDARY ATMOSPHERE
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 80, 0],
          opacity: [0.04, 0.1, 0.04],
        }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-250px]
          top-[25%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#8B5CF6]/10
          blur-[180px]
        "
      />

      {/* =====================================================
          SOFT GOLD CENTER
      ====================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.025, 0.07, 0.025],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]
          blur-[200px]
        "
      />

      {/* =====================================================
          DARK VIGNETTE
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_35%,rgba(5,5,5,.4)_75%,#050505_100%)]
        "
      />
    </div>
  );
}