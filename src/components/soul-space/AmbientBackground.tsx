"use client";

import { motion } from "framer-motion";

export function AmbientBackground() {
  const particles = Array.from({ length: 35 });

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
          GOLDEN CENTRAL ATMOSPHERE
      ====================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [-30, 30, -30],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[1100px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]
          blur-[190px]
        "
      />

      {/* =====================================================
          SECOND GOLDEN LIGHT
      ====================================================== */}

      <motion.div
        animate={{
          x: [-180, 180, -180],
          y: [80, -80, 80],
          scale: [0.9, 1.1, 0.9],
          opacity: [0.04, 0.11, 0.04],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-250px]
          top-[25%]
          h-[500px]
          w-[900px]
          rounded-full
          bg-[#D6B25E]
          blur-[180px]
        "
      />

      {/* =====================================================
          PURPLE INTELLIGENCE LIGHT
      ====================================================== */}

      <motion.div
        animate={{
          x: [80, -80, 80],
          y: [-50, 70, -50],
          scale: [1, 1.12, 1],
          opacity: [0.025, 0.07, 0.025],
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
          h-[650px]
          w-[700px]
          rounded-full
          bg-[#8B5CF6]
          blur-[200px]
        "
      />

      {/* =====================================================
          HORIZONTAL GOLDEN LIGHT THREADS
      ====================================================== */}

      <svg
        className="
          absolute
          inset-0
          h-full
          w-full
          overflow-visible
        "
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* -------------------------------------------------
            LINE 1
        -------------------------------------------------- */}

        <motion.path
          d="
            M-300 300
            C50 80 280 560 650 350
            C950 180 1180 520 1900 250
          "
          stroke="#D6B25E"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.16"
          filter="blur(14px)"
          animate={{
            d: [
              `
                M-300 300
                C50 80 280 560 650 350
                C950 180 1180 520 1900 250
              `,
              `
                M-300 420
                C120 620 350 120 720 390
                C1050 620 1350 120 1900 400
              `,
              `
                M-300 300
                C50 80 280 560 650 350
                C950 180 1180 520 1900 250
              `,
            ],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* -------------------------------------------------
            LINE 2
        -------------------------------------------------- */}

        <motion.path
          d="
            M-400 520
            C0 720 300 260 620 480
            C950 700 1200 250 2000 500
          "
          stroke="#D6B25E"
          strokeWidth="7"
          strokeLinecap="round"
          opacity="0.12"
          filter="blur(12px)"
          animate={{
            d: [
              `
                M-400 520
                C0 720 300 260 620 480
                C950 700 1200 250 2000 500
              `,
              `
                M-400 430
                C100 180 350 650 700 420
                C1050 180 1400 650 2000 380
              `,
              `
                M-400 520
                C0 720 300 260 620 480
                C950 700 1200 250 2000 500
              `,
            ],
          }}
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* -------------------------------------------------
            LINE 3 — THINNER
        -------------------------------------------------- */}

        <motion.path
          d="
            M-300 650
            C180 430 380 760 800 600
            C1150 470 1350 700 1900 560
          "
          stroke="#F4F1EA"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.1"
          filter="blur(5px)"
          animate={{
            x: [-80, 80, -80],
            y: [30, -30, 30],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* -------------------------------------------------
            LINE 4 — UPPER
        -------------------------------------------------- */}

        <motion.path
          d="
            M-400 180
            C100 400 350 50 700 220
            C1050 390 1400 80 2000 220
          "
          stroke="#D6B25E"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.08"
          filter="blur(10px)"
          animate={{
            y: [-30, 35, -30],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* =====================================================
          MOVING GOLDEN LIGHT STREAK
      ====================================================== */}

      <motion.div
        animate={{
          x: ["-120%", "120%"],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 4,
        }}
        className="
          absolute
          left-0
          top-[42%]
          h-[80px]
          w-[45%]
          rounded-full
          bg-gradient-to-r
          from-transparent
          via-[#D6B25E]/20
          to-transparent
          blur-[35px]
        "
      />

      {/* =====================================================
          SECOND MOVING STREAK
      ====================================================== */}

      <motion.div
        animate={{
          x: ["120%", "-120%"],
          opacity: [0, 0.35, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 2,
        }}
        className="
          absolute
          right-0
          top-[62%]
          h-[100px]
          w-[50%]
          rounded-full
          bg-gradient-to-r
          from-transparent
          via-[#D6B25E]/15
          to-transparent
          blur-[40px]
        "
      />

      {/* =====================================================
          FLOATING PARTICLES
      ====================================================== */}

      <div className="absolute inset-0">
        {particles.map((_, index) => (
          <motion.span
            key={index}
            className="
              absolute
              h-[2px]
              w-[2px]
              rounded-full
              bg-[#D6B25E]
              shadow-[0_0_8px_rgba(214,178,94,0.7)]
            "
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${(index * 53) % 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              x: [
                0,
                index % 2 === 0 ? 25 : -25,
                0,
              ],
              opacity: [
                0.05,
                0.65,
                0.05,
              ],
              scale: [
                0.7,
                1.4,
                0.7,
              ],
            }}
            transition={{
              duration: 5 + (index % 6),
              delay: index * 0.18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* =====================================================
          SOFT PARTICLE CLOUD
      ====================================================== */}

      <motion.div
        animate={{
          opacity: [0.03, 0.08, 0.03],
          scale: [1, 1.04, 1],
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
          h-[800px]
          w-[1400px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]
          blur-[220px]
        "
      />

      {/* =====================================================
          VIGNETTE
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_25%,rgba(5,5,5,.35)_70%,#050505_100%)]
        "
      />

      {/* =====================================================
          TOP DARKNESS
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
          BOTTOM DARKNESS
      ====================================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-64
          bg-gradient-to-t
          from-[#050505]
          to-transparent
        "
      />

      {/* =====================================================
          CINEMATIC OVERLAY
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/10
          via-transparent
          to-black/40
        "
      />
    </div>
  );
}