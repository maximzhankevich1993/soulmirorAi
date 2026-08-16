"use client";

import { motion } from "framer-motion";

export function AmbientBackground() {
  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-[-10]
        overflow-hidden
        bg-[#050505]
      "
    >
      {/* =====================================================
          BASE
      ====================================================== */}

      <div className="absolute inset-0 bg-[#050505]" />

      {/* =====================================================
          CENTRAL GOLDEN ATMOSPHERE
      ====================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[1000px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]
          blur-[180px]
        "
      />

      {/* =====================================================
          HORIZONTAL GOLDEN LIGHT THREAD 01
      ====================================================== */}

      <motion.div
        animate={{
          x: ["-35%", "15%", "-35%"],
          y: ["0%", "-8%", "0%"],
          scaleX: [0.95, 1.15, 0.95],
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-10%]
          top-[27%]
          h-[90px]
          w-[120%]
          rounded-[50%]
          bg-[#D6B25E]/30
          blur-[32px]
        "
      />

      {/* =====================================================
          HORIZONTAL GOLDEN LIGHT THREAD 02
      ====================================================== */}

      <motion.div
        animate={{
          x: ["20%", "-25%", "20%"],
          y: ["0%", "7%", "0%"],
          scaleX: [1, 1.12, 1],
          opacity: [0.18, 0.42, 0.18],
        }}
        transition={{
          duration: 23,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-10%]
          top-[43%]
          h-[120px]
          w-[120%]
          rounded-[50%]
          bg-[#D6B25E]/25
          blur-[42px]
        "
      />

      {/* =====================================================
          HORIZONTAL GOLDEN LIGHT THREAD 03
      ====================================================== */}

      <motion.div
        animate={{
          x: ["-20%", "25%", "-20%"],
          y: ["0%", "-5%", "0%"],
          scaleX: [1, 1.18, 1],
          opacity: [0.15, 0.38, 0.15],
        }}
        transition={{
          duration: 27,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-10%]
          top-[61%]
          h-[100px]
          w-[120%]
          rounded-[50%]
          bg-[#D6B25E]/20
          blur-[38px]
        "
      />

      {/* =====================================================
          HORIZONTAL GOLDEN LIGHT THREAD 04
      ====================================================== */}

      <motion.div
        animate={{
          x: ["15%", "-20%", "15%"],
          y: ["0%", "6%", "0%"],
          scaleX: [1, 1.15, 1],
          opacity: [0.12, 0.32, 0.12],
        }}
        transition={{
          duration: 31,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-10%]
          top-[76%]
          h-[80px]
          w-[120%]
          rounded-[50%]
          bg-[#D6B25E]/20
          blur-[34px]
        "
      />

      {/* =====================================================
          BRIGHT CORE OF THE MAIN LINE
      ====================================================== */}

      <motion.div
        animate={{
          x: ["-30%", "20%", "-30%"],
          y: ["0%", "-8%", "0%"],
          opacity: [0.08, 0.25, 0.08],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-10%]
          top-[30%]
          h-[4px]
          w-[120%]
          rounded-full
          bg-[#D6B25E]
          blur-[7px]
        "
      />

      {/* =====================================================
          SECOND BRIGHT CORE
      ====================================================== */}

      <motion.div
        animate={{
          x: ["20%", "-25%", "20%"],
          y: ["0%", "7%", "0%"],
          opacity: [0.05, 0.18, 0.05],
        }}
        transition={{
          duration: 23,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-10%]
          top-[45%]
          h-[3px]
          w-[120%]
          rounded-full
          bg-[#D6B25E]
          blur-[6px]
        "
      />

      {/* =====================================================
          GOLDEN FLOATING PARTICLES
      ====================================================== */}

      <div className="absolute inset-0">
        {Array.from({ length: 35 }).map((_, i) => (
          <motion.span
            key={i}
            animate={{
              x: [0, (i % 2 === 0 ? 35 : -35), 0],
              y: [0, -70 - (i % 4) * 20, 0],
              opacity: [0.08, 0.45, 0.08],
              scale: [0.7, 1.2, 0.7],
            }}
            transition={{
              duration: 5 + (i % 6),
              repeat: Infinity,
              delay: i * 0.25,
              ease: "easeInOut",
            }}
            className="
              absolute
              h-[2px]
              w-[2px]
              rounded-full
              bg-[#D6B25E]
              shadow-[0_0_8px_rgba(214,178,94,0.8)]
            "
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          SOFT GOLDEN HAZE
      ====================================================== */}

      <motion.div
        animate={{
          opacity: [0.04, 0.1, 0.04],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-[48%]
          h-[500px]
          w-[1100px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]/20
          blur-[150px]
        "
      />

      {/* =====================================================
          CINEMATIC VIGNETTE
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(
            ellipse_at_center,
            transparent_25%,
            rgba(5,5,5,0.2)_60%,
            rgba(5,5,5,0.85)_100%
          )]
        "
      />

      {/* =====================================================
          TOP DARK FADE
      ====================================================== */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-48
          bg-gradient-to-b
          from-[#050505]
          to-transparent
        "
      />

      {/* =====================================================
          BOTTOM DARK FADE
      ====================================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-56
          bg-gradient-to-t
          from-[#050505]
          to-transparent
        "
      />
    </div>
  );
}