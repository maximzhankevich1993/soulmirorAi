"use client";

import { motion } from "framer-motion";

export function AmbientBackground() {
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
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.25, 0.12],
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
          h-[1000px]
          w-[1000px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]
          blur-[220px]
        "
      />

      {/* =====================================================
          PURPLE INTELLIGENCE GLOW
      ====================================================== */}

      <motion.div
        animate={{
          x: [-40, 40, -40],
          y: [20, -20, 20],
          opacity: [0.08, 0.18, 0.08],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-200px]
          right-[-200px]
          h-[700px]
          w-[700px]
          rounded-full
          bg-[#8B5CF6]
          blur-[200px]
        "
      />

      {/* =====================================================
          SECONDARY GOLDEN GLOW
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 70, 0],
          opacity: [0.04, 0.1, 0.04],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-250px]
          top-[-200px]
          h-[700px]
          w-[800px]
          rounded-full
          bg-[#D6B25E]
          blur-[200px]
        "
      />

      {/* =====================================================
          GOLDEN CINEMATIC LIGHT THREADS
      ====================================================== */}

      <svg
        className="
          absolute
          inset-0
          h-full
          w-full
          opacity-40
        "
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Main flowing line */}

        <motion.path
          d="
            M-150 560
            C80 300
            300 720
            520 470
            C720 240
            900 600
            1120 350
            C1250 200
            1350 280
            1450 120
          "
          stroke="#D6B25E"
          strokeWidth="1.2"
          strokeLinecap="round"
          animate={{
            pathLength: [0.15, 1, 0.15],
            opacity: [0.15, 0.75, 0.15],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Second elegant curve */}

        <motion.path
          d="
            M-100 180
            C180 480
            390 100
            650 350
            C880 570
            1050 240
            1320 470
          "
          stroke="#D6B25E"
          strokeWidth="0.8"
          strokeLinecap="round"
          animate={{
            pathLength: [0.05, 1, 0.05],
            opacity: [0.05, 0.45, 0.05],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Third distant line */}

        <motion.path
          d="
            M-200 700
            C120 500
            300 520
            500 650
            C760 820
            980 420
            1220 520
            C1320 560
            1400 620
            1500 580
          "
          stroke="#D6B25E"
          strokeWidth="0.55"
          strokeLinecap="round"
          animate={{
            pathLength: [0.2, 1, 0.2],
            opacity: [0.04, 0.3, 0.04],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        {/* Soft white secondary thread */}

        <motion.path
          d="
            M0 260
            C260 500
            520 120
            780 390
            C980 600
            1120 300
            1400 500
          "
          stroke="#F4F1EA"
          strokeWidth="0.45"
          strokeLinecap="round"
          animate={{
            opacity: [0.04, 0.22, 0.04],
            pathLength: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </svg>

      {/* =====================================================
          FLOATING GOLD PARTICLES
      ====================================================== */}

      <div className="absolute inset-0">
        {Array.from({ length: 35 }).map((_, i) => (
          <motion.span
            key={i}
            animate={{
              y: [0, -80 - (i % 4) * 20, 0],
              x: [
                0,
                i % 2 === 0 ? 15 : -15,
                0,
              ],
              opacity: [0.08, 0.55, 0.08],
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
              h-[2px]
              w-[2px]
              rounded-full
              bg-[#D6B25E]
              shadow-[0_0_8px_rgba(214,178,94,0.45)]
            "
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          SMALLER PARTICLES
      ====================================================== */}

      <div className="absolute inset-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={`small-${i}`}
            animate={{
              y: [0, 50, 0],
              opacity: [0.03, 0.25, 0.03],
            }}
            transition={{
              duration: 7 + (i % 4),
              repeat: Infinity,
              delay: i * 0.35,
              ease: "easeInOut",
            }}
            className="
              absolute
              h-px
              w-px
              rounded-full
              bg-white
            "
            style={{
              left: `${(i * 61) % 100}%`,
              top: `${(i * 29) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          LIGHT BEAM — LEFT
      ====================================================== */}

      <motion.div
        animate={{
          opacity: [0.02, 0.07, 0.02],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[18%]
          top-[-20%]
          h-[180%]
          w-px
          rotate-[18deg]
          bg-gradient-to-b
          from-transparent
          via-[#D6B25E]
          to-transparent
          blur-sm
        "
      />

      {/* =====================================================
          LIGHT BEAM — RIGHT
      ====================================================== */}

      <motion.div
        animate={{
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[15%]
          top-[-20%]
          h-[180%]
          w-px
          -rotate-[22deg]
          bg-gradient-to-b
          from-transparent
          via-[#D6B25E]
          to-transparent
          blur-sm
        "
      />

      {/* =====================================================
          CENTRAL ENERGY
      ====================================================== */}

      <motion.div
        animate={{
          opacity: [0.08, 0.16, 0.08],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-[45%]
          h-[520px]
          w-[520px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]
          blur-[150px]
        "
      />

      {/* =====================================================
          NOISE
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

      {/* =====================================================
          SOFT VIGNETTE
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_38%,rgba(5,5,5,.45)_70%,#050505_100%)]
        "
      />

      {/* =====================================================
          DARK TOP
      ====================================================== */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-64
          bg-gradient-to-b
          from-[#050505]
          to-transparent
        "
      />

      {/* =====================================================
          DARK BOTTOM
      ====================================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-72
          bg-gradient-to-t
          from-[#050505]
          to-transparent
        "
      />

      {/* =====================================================
          DARK SIDE FADE
      ====================================================== */}

      <div
        className="
          absolute
          inset-y-0
          left-0
          w-40
          bg-gradient-to-r
          from-[#050505]/60
          to-transparent
        "
      />

      <div
        className="
          absolute
          inset-y-0
          right-0
          w-40
          bg-gradient-to-l
          from-[#050505]/60
          to-transparent
        "
      />
    </div>
  );
}