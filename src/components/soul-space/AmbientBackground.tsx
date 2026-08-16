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
      "
    >
      {/* =====================================================
          DEEP CINEMATIC ATMOSPHERE
      ====================================================== */}

      <div className="absolute inset-0 bg-[#050505]" />

      {/* =====================================================
          GOLDEN EON LIGHT
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
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]
          blur-[180px]
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
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-0
          right-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#8B5CF6]
          blur-[160px]
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
          opacity-60
        "
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Main flowing golden line */}

        <motion.path
          d="
            M-150 560
            C80 400
            180 280
            390 390
            C570 485
            670 690
            900 500
            C1080 350
            1170 170
            1400 260
          "
          stroke="#D6B25E"
          strokeWidth="1"
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

        {/* Second large flowing line */}

        <motion.path
          d="
            M-200 170
            C100 340
            260 510
            510 400
            C730 305
            790 100
            1050 220
            C1180 280
            1300 420
            1450 350
          "
          stroke="#D6B25E"
          strokeWidth="0.8"
          strokeLinecap="round"
          animate={{
            pathLength: [0.2, 1, 0.2],
            opacity: [0.08, 0.55, 0.08],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Third subtle crossing line */}

        <motion.path
          d="
            M-100 720
            C220 620
            300 180
            600 300
            C820 390
            900 650
            1220 520
            C1320 480
            1380 350
            1450 220
          "
          stroke="#F4F1EA"
          strokeWidth="0.5"
          strokeLinecap="round"
          animate={{
            pathLength: [0.1, 1, 0.1],
            opacity: [0.04, 0.28, 0.04],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        {/* Fourth golden wave */}

        <motion.path
          d="
            M-200 350
            C100 200
            280 250
            470 470
            C650 680
            850 620
            1030 410
            C1170 250
            1300 220
            1450 300
          "
          stroke="#D6B25E"
          strokeWidth="0.6"
          strokeLinecap="round"
          animate={{
            pathLength: [0.1, 1, 0.1],
            opacity: [0.05, 0.4, 0.05],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
        />
      </svg>

      {/* =====================================================
          SECONDARY GOLDEN THREAD — MOBILE VISIBILITY
      ====================================================== */}

      <motion.div
        animate={{
          x: ["-20%", "20%", "-20%"],
          rotate: [-4, 4, -4],
          opacity: [0.08, 0.22, 0.08],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-20%]
          top-[38%]
          h-px
          w-[140%]
          rotate-[8deg]
          bg-gradient-to-r
          from-transparent
          via-[#D6B25E]/70
          to-transparent
          blur-[1px]
        "
      />

      {/* =====================================================
          FLOATING PARTICLES
      ====================================================== */}

      <div className="absolute inset-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.span
            key={i}
            animate={{
              y: [0, -80, 0],
              x: [0, i % 2 === 0 ? 15 : -15, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [0.7, 1.15, 0.7],
            }}
            transition={{
              duration: 5 + (i % 5),
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
            className="
              absolute
              h-1
              w-1
              rounded-full
              bg-[#D6B25E]
              shadow-[0_0_8px_rgba(214,178,94,0.5)]
            "
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          ADDITIONAL SOFT PARTICLES
      ====================================================== */}

      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.span
            key={`soft-${i}`}
            animate={{
              y: [0, -120, 0],
              opacity: [0.02, 0.18, 0.02],
            }}
            transition={{
              duration: 8 + (i % 4),
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeInOut",
            }}
            className="
              absolute
              h-[2px]
              w-[2px]
              rounded-full
              bg-[#F4F1EA]
            "
            style={{
              left: `${(i * 67) % 100}%`,
              top: `${(i * 29) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          DARK CINEMATIC OVERLAY
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/20
          via-transparent
          to-black/60
        "
      />

      {/* =====================================================
          CENTER VIGNETTE
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_25%,rgba(5,5,5,0.18)_55%,rgba(5,5,5,0.65)_100%)]
        "
      />
    </div>
  );
}