"use client";

import { motion } from "framer-motion";

export function AmbientBackground() {
  const particles = Array.from({ length: 32 });

  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        -z-50
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
          opacity: [0.12, 0.24, 0.12],
          x: [0, 70, 0],
          y: [0, -40, 0],
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
          w-[1000px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]
          blur-[180px]
        "
      />

      {/* =====================================================
          SECOND GOLDEN GLOW
      ====================================================== */}

      <motion.div
        animate={{
          x: [-120, 120, -120],
          y: [40, -30, 40],
          opacity: [0.05, 0.13, 0.05],
          scale: [0.95, 1.08, 0.95],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-250px]
          top-[20%]
          h-[600px]
          w-[900px]
          rounded-full
          bg-[#D6B25E]
          blur-[190px]
        "
      />

      {/* =====================================================
          PURPLE INTELLIGENCE GLOW
      ====================================================== */}

      <motion.div
        animate={{
          x: [-50, 70, -50],
          y: [30, -50, 30],
          opacity: [0.04, 0.11, 0.04],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-300px]
          top-[15%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#8B5CF6]
          blur-[180px]
        "
      />

      {/* =====================================================
          HORIZONTAL GOLDEN LIGHT RIBBON 01
      ====================================================== */}

      <motion.div
        animate={{
          x: ["-65%", "55%", "-65%"],
          y: [0, -25, 0],
          opacity: [0.18, 0.42, 0.18],
          scaleY: [1, 1.35, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-25%]
          top-[28%]
          h-[90px]
          w-[150%]
          rotate-[-3deg]
          rounded-[50%]
          bg-[#D6B25E]/25
          blur-[55px]
        "
      />

      {/* =====================================================
          HORIZONTAL GOLDEN LIGHT RIBBON 02
      ====================================================== */}

      <motion.div
        animate={{
          x: ["45%", "-55%", "45%"],
          y: [0, 35, 0],
          opacity: [0.12, 0.34, 0.12],
          scaleY: [1, 1.5, 1],
        }}
        transition={{
          duration: 23,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-25%]
          top-[48%]
          h-[110px]
          w-[150%]
          rotate-[2deg]
          rounded-[50%]
          bg-[#D6B25E]/20
          blur-[65px]
        "
      />

      {/* =====================================================
          HORIZONTAL GOLDEN LIGHT RIBBON 03
      ====================================================== */}

      <motion.div
        animate={{
          x: ["-55%", "60%", "-55%"],
          y: [0, -45, 0],
          opacity: [0.08, 0.28, 0.08],
          scaleY: [1, 1.3, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-30%]
          top-[67%]
          h-[130px]
          w-[160%]
          rotate-[-2deg]
          rounded-[50%]
          bg-[#D6B25E]/15
          blur-[75px]
        "
      />

      {/* =====================================================
          SOFT WHITE HORIZONTAL THREAD
      ====================================================== */}

      <motion.div
        animate={{
          x: ["-60%", "55%", "-60%"],
          opacity: [0.015, 0.08, 0.015],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-25%]
          top-[39%]
          h-[35px]
          w-[150%]
          rotate-[1deg]
          rounded-full
          bg-white
          blur-[30px]
        "
      />

      {/* =====================================================
          GOLDEN HORIZONTAL CORE
          VERY SUBTLE — INSIDE THE BLUR
      ====================================================== */}

      <motion.div
        animate={{
          x: ["-40%", "40%", "-40%"],
          opacity: [0.05, 0.16, 0.05],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-20%]
          top-[50%]
          h-[2px]
          w-[140%]
          rotate-[1deg]
          bg-gradient-to-r
          from-transparent
          via-[#D6B25E]
          to-transparent
          blur-[5px]
        "
      />

      {/* =====================================================
          FLOATING PARTICLES
      ====================================================== */}

      {particles.map((_, i) => (
        <motion.span
          key={i}
          initial={{
            opacity: 0,
          }}
          animate={{
            y: [0, -70 - (i % 4) * 20, 0],
            x: [
              0,
              (i % 2 === 0 ? 1 : -1) * (15 + (i % 5) * 8),
              0,
            ],
            opacity: [0.05, 0.45, 0.05],
            scale: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 5 + (i % 5),
            repeat: Infinity,
            delay: i * 0.22,
            ease: "easeInOut",
          }}
          className="
            absolute
            h-[3px]
            w-[3px]
            rounded-full
            bg-[#D6B25E]
            blur-[0.5px]
          "
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
          }}
        />
      ))}

      {/* =====================================================
          EXTRA SOFT PARTICLES
      ====================================================== */}

      {Array.from({ length: 16 }).map((_, i) => (
        <motion.span
          key={`soft-${i}`}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.18, 0],
          }}
          transition={{
            duration: 7 + (i % 4),
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
          className="
            absolute
            h-[5px]
            w-[5px]
            rounded-full
            bg-[#D6B25E]
            blur-[3px]
          "
          style={{
            left: `${(i * 61) % 100}%`,
            top: `${(i * 47) % 100}%`,
          }}
        />
      ))}

      {/* =====================================================
          DARK CINEMATIC OVERLAY
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/25
          via-transparent
          to-black/65
        "
      />

      {/* =====================================================
          CENTER VIGNETTE
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(5,5,5,0.45)_70%,#050505_100%)]
        "
      />
    </div>
  );
}