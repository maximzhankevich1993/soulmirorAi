
"use client";

import { motion } from "framer-motion";

export function AmbientBackground() {
  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-[-50]
        overflow-hidden
      "
    >
      {/* =====================================================
          DEEP CINEMATIC ATMOSPHERE
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[#050505]
        "
      />

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
          CINEMATIC LIGHT THREADS
      ====================================================== */}

      <svg
        className="
          absolute
          inset-0
          h-full
          w-full
          opacity-20
        "
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* GOLDEN CURVED LINE */}

        <motion.path
          d="
            M-100 500
            C250 300
            500 650
            900 350
            C1100 200
            1300 300
            1400 100
          "
          stroke="#D6B25E"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          animate={{
            pathLength: [0.2, 1, 0.2],
            opacity: [0.35, 0.9, 0.35],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* SECOND GOLDEN CURVED LINE */}

        <motion.path
          d="
            M-200 150
            C150 500
            450 100
            800 420
            C1050 650
            1250 400
            1400 550
          "
          stroke="#D6B25E"
          strokeWidth="0.8"
          vectorEffect="non-scaling-stroke"
          animate={{
            pathLength: [0.15, 1, 0.15],
            opacity: [0.15, 0.55, 0.15],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* WHITE CINEMATIC THREAD */}

        <motion.path
          d="
            M0 200
            C300 450
            650 100
            1200 500
          "
          stroke="#F4F1EA"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
          animate={{
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* =====================================================
          FLOATING PARTICLES
      ====================================================== */}

      <div className="absolute inset-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.span
            key={i}
            animate={{
              y: [0, -80, 0],
              opacity: [0.1, 0.5, 0.1],
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
            "
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
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
    </div>
  );
}

