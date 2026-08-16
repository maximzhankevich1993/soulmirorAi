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
          GOLDEN ATMOSPHERE
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
          min-h-screen
          min-w-full
          opacity-70
        "
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* MAIN GOLD THREAD */}

        <motion.path
          d="
            M -180 650
            C 80 470, 220 420, 430 540
            C 650 665, 720 760, 940 570
            C 1120 410, 1260 190, 1620 280
          "
          stroke="#D6B25E"
          strokeWidth="1.2"
          strokeLinecap="round"
          animate={{
            pathLength: [0.35, 1, 0.35],
            opacity: [0.18, 0.8, 0.18],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* SECOND GOLD THREAD */}

        <motion.path
          d="
            M -220 180
            C 120 320, 250 650, 520 590
            C 790 530, 820 180, 1090 250
            C 1280 300, 1390 480, 1650 420
          "
          stroke="#D6B25E"
          strokeWidth="0.9"
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

        {/* THIRD THIN THREAD */}

        <motion.path
          d="
            M -160 780
            C 220 700, 350 300, 640 390
            C 930 480, 1040 720, 1300 590
            C 1420 530, 1510 390, 1640 350
          "
          stroke="#F4F1EA"
          strokeWidth="0.45"
          strokeLinecap="round"
          animate={{
            pathLength: [0.15, 1, 0.15],
            opacity: [0.04, 0.3, 0.04],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        {/* FOURTH GOLD THREAD */}

        <motion.path
          d="
            M -100 420
            C 180 620, 360 700, 580 520
            C 790 350, 970 90, 1210 220
            C 1390 315, 1460 510, 1600 600
          "
          stroke="#D6B25E"
          strokeWidth="0.6"
          strokeLinecap="round"
          animate={{
            pathLength: [0.25, 1, 0.25],
            opacity: [0.05, 0.4, 0.05],
          }}
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
        />
      </svg>

      {/* =====================================================
          GLOW ALONG THE MAIN LINE
      ====================================================== */}

      <motion.div
        animate={{
          x: ["-20%", "120%"],
          opacity: [0, 0.35, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-0
          top-[55%]
          h-[2px]
          w-[35%]
          rotate-[-7deg]
          bg-gradient-to-r
          from-transparent
          via-[#D6B25E]
          to-transparent
          blur-[4px]
        "
      />

      {/* =====================================================
          FLYING GOLD PARTICLES
      ====================================================== */}

      <div className="absolute inset-0">
        {Array.from({ length: 35 }).map((_, i) => (
          <motion.span
            key={i}
            className="
              absolute
              h-[2px]
              w-[2px]
              rounded-full
              bg-[#D6B25E]
              shadow-[0_0_8px_rgba(214,178,94,0.7)]
            "
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, (i % 2 === 0 ? 25 : -25), 0],
              opacity: [0.05, 0.65, 0.05],
              scale: [0.6, 1.3, 0.6],
            }}
            transition={{
              duration: 5 + (i % 5),
              repeat: Infinity,
              delay: i * 0.25,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* =====================================================
          SOFT VIGNETTE
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_30%,rgba(5,5,5,.3)_65%,#050505_100%)]
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
          h-48
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
          h-56
          bg-gradient-to-t
          from-[#050505]
          to-transparent
        "
      />

      {/* =====================================================
          CINEMATIC NOISE
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