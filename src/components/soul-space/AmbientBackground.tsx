"use client";

import { motion } from "framer-motion";

export function AmbientBackground() {
  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-0
        overflow-hidden
        bg-[#050505]
      "
    >
      {/* =====================================================
          BASE
      ====================================================== */}

      <div className="absolute inset-0 bg-[#050505]" />

      {/* =====================================================
          MAIN GOLDEN ATMOSPHERE
      ====================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          x: [0, 100, 0],
          y: [0, -60, 0],
          opacity: [0.08, 0.16, 0.08],
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
          h-[850px]
          w-[1100px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]
          blur-[220px]
        "
      />

      {/* =====================================================
          GOLDEN HORIZONTAL LIGHT — TOP
      ====================================================== */}

      <motion.div
        animate={{
          x: ["-45%", "20%", "-45%"],
          y: [0, 35, 0],
          opacity: [0.18, 0.42, 0.18],
          scaleX: [0.9, 1.15, 0.9],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-[20%]
          h-[95px]
          w-[150vw]
          -translate-x-1/2
          rounded-[50%]
          bg-[#D6B25E]/40
          blur-[55px]
        "
      />

      {/* =====================================================
          GOLDEN HORIZONTAL LIGHT — CENTER
      ====================================================== */}

      <motion.div
        animate={{
          x: ["35%", "-25%", "35%"],
          y: [0, -45, 0],
          opacity: [0.12, 0.35, 0.12],
          scaleX: [1, 1.2, 1],
        }}
        transition={{
          duration: 23,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-[47%]
          h-[130px]
          w-[160vw]
          -translate-x-1/2
          rounded-[50%]
          bg-[#D6B25E]/35
          blur-[75px]
        "
      />

      {/* =====================================================
          GOLDEN HORIZONTAL LIGHT — BOTTOM
      ====================================================== */}

      <motion.div
        animate={{
          x: ["-30%", "30%", "-30%"],
          y: [0, 30, 0],
          opacity: [0.08, 0.28, 0.08],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-[72%]
          h-[110px]
          w-[145vw]
          -translate-x-1/2
          rounded-[50%]
          bg-[#D6B25E]/25
          blur-[80px]
        "
      />

      {/* =====================================================
          SHARP CORE INSIDE THE BLUR
      ====================================================== */}

      <motion.div
        animate={{
          x: ["-35%", "30%", "-35%"],
          opacity: [0.05, 0.16, 0.05],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-[20.8%]
          h-[2px]
          w-[135vw]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#D6B25E]
          to-transparent
          blur-[2px]
        "
      />

      {/* =====================================================
          SECOND GOLD CORE
      ====================================================== */}

      <motion.div
        animate={{
          x: ["30%", "-30%", "30%"],
          opacity: [0.03, 0.12, 0.03],
        }}
        transition={{
          duration: 23,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-[47.5%]
          h-[2px]
          w-[140vw]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#D6B25E]
          to-transparent
          blur-[2px]
        "
      />

      {/* =====================================================
          PURPLE INTELLIGENCE GLOW
      ====================================================== */}

      <motion.div
        animate={{
          x: [-50, 70, -50],
          y: [30, -40, 30],
          scale: [1, 1.12, 1],
          opacity: [0.04, 0.11, 0.04],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-250px]
          top-[25%]
          h-[700px]
          w-[700px]
          rounded-full
          bg-[#8B5CF6]
          blur-[220px]
        "
      />

      {/* =====================================================
          FLOATING PARTICLES
      ====================================================== */}

      {Array.from({ length: 32 }).map((_, i) => (
        <motion.span
          key={i}
          animate={{
            y: [0, -70 - (i % 4) * 20, 0],
            x: [0, (i % 2 === 0 ? 1 : -1) * 20, 0],
            opacity: [0.08, 0.55, 0.08],
            scale: [0.7, 1.25, 0.7],
          }}
          transition={{
            duration: 5 + (i % 5),
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
            shadow-[0_0_10px_rgba(214,178,94,0.7)]
          "
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
          }}
        />
      ))}

      {/* =====================================================
          SOFT WHITE ATMOSPHERE
      ====================================================== */}

      <motion.div
        animate={{
          opacity: [0.015, 0.04, 0.015],
          x: [-100, 100, -100],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-30%]
          top-[35%]
          h-[300px]
          w-[120vw]
          rounded-full
          bg-white
          blur-[160px]
        "
      />

      {/* =====================================================
          VIGNETTE
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(5,5,5,0.28)_65%,#050505_100%)]
        "
      />

      {/* =====================================================
          TOP DARK
      ====================================================== */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-64
          bg-gradient-to-b
          from-[#050505]
          via-[#050505]/70
          to-transparent
        "
      />

      {/* =====================================================
          BOTTOM DARK
      ====================================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-72
          bg-gradient-to-t
          from-[#050505]
          via-[#050505]/70
          to-transparent
        "
      />

      {/* =====================================================
          SUBTLE NOISE
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.018]
          mix-blend-soft-light
        "
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.82' numOctaves='3'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}