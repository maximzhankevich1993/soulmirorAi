
"use client";

import { motion } from "framer-motion";

export function AmbientBackground() {
  const particles = Array.from({ length: 32 });

  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden bg-[#050505]">
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
          y: [0, -70, 0],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[900px]
          w-[1200px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]
          blur-[220px]
        "
      />

      {/* =====================================================
          SECOND GOLDEN CLOUD
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, -180, 0],
          y: [0, 100, 0],
          scale: [1, 1.08, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-250px]
          top-[-250px]
          h-[850px]
          w-[1100px]
          rounded-full
          bg-[#D6B25E]
          blur-[200px]
        "
      />

      {/* =====================================================
          PURPLE INTELLIGENCE ATMOSPHERE
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, 160, 0],
          y: [0, 120, 0],
          scale: [1, 1.08, 1],
          opacity: [0.05, 0.11, 0.05],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-350px]
          top-[5%]
          h-[900px]
          w-[800px]
          rounded-full
          bg-[#8B5CF6]
          blur-[220px]
        "
      />

      {/* =====================================================
          CENTRAL GOLDEN ENERGY
      ====================================================== */}

      <motion.div
        animate={{
          opacity: [0.10, 0.20, 0.10],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-[42%]
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
          GOLDEN CINEMATIC LINES
      ====================================================== */}

      <svg
        className="
          absolute
          inset-0
          h-full
          w-full
          opacity-100
        "
        viewBox="0 0 1600 1000"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* MAIN FLOWING LINE */}

        <motion.path
          d="
            M -200 720
            C 120 420,
              330 420,
              570 610
            C 820 810,
              1010 720,
              1180 430
            C 1330 180,
              1510 220,
              1800 80
          "
          stroke="#D6B25E"
          strokeWidth="1.6"
          strokeLinecap="round"
          initial={{
            pathLength: 0.25,
            opacity: 0.25,
          }}
          animate={{
            pathLength: [0.25, 1, 0.25],
            opacity: [0.25, 0.85, 0.25],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* SECOND FLOWING LINE */}

        <motion.path
          d="
            M -200 180
            C 180 420,
              430 720,
              700 470
            C 950 240,
              1180 120,
              1800 500
          "
          stroke="#D6B25E"
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={{
            pathLength: 0.2,
            opacity: 0.15,
          }}
          animate={{
            pathLength: [0.2, 1, 0.2],
            opacity: [0.15, 0.65, 0.15],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* THIRD LONG ORBIT */}

        <motion.path
          d="
            M -300 900
            C 180 780,
              350 120,
              820 300
            C 1170 440,
              1300 850,
              1900 700
          "
          stroke="#E7C978"
          strokeWidth="0.8"
          strokeLinecap="round"
          initial={{
            pathLength: 0.1,
            opacity: 0.12,
          }}
          animate={{
            pathLength: [0.1, 1, 0.1],
            opacity: [0.12, 0.45, 0.12],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />

        {/* VERY SUBTLE WHITE THREAD */}

        <motion.path
          d="
            M -100 430
            C 300 180,
              580 850,
              980 500
            C 1220 280,
              1450 450,
              1750 250
          "
          stroke="#F4F1EA"
          strokeWidth="0.45"
          strokeLinecap="round"
          animate={{
            opacity: [0.08, 0.3, 0.08],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* =====================================================
          GOLDEN LINE GLOW
      ====================================================== */}

      <svg
        className="
          pointer-events-none
          absolute
          inset-0
          h-full
          w-full
          opacity-40
        "
        viewBox="0 0 1600 1000"
        preserveAspectRatio="none"
        fill="none"
      >
        <motion.path
          d="
            M -200 720
            C 120 420,
              330 420,
              570 610
            C 820 810,
              1010 720,
              1180 430
            C 1330 180,
              1510 220,
              1800 80
          "
          stroke="#D6B25E"
          strokeWidth="7"
          strokeLinecap="round"
          opacity="0.12"
          filter="blur(7px)"
          animate={{
            pathLength: [0.25, 1, 0.25],
            opacity: [0.08, 0.2, 0.08],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.path
          d="
            M -200 180
            C 180 420,
              430 720,
              700 470
            C 950 240,
              1180 120,
              1800 500
          "
          stroke="#D6B25E"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.08"
          filter="blur(6px)"
          animate={{
            pathLength: [0.2, 1, 0.2],
            opacity: [0.06, 0.16, 0.06],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </svg>

      {/* =====================================================
          FLOATING PARTICLES
      ====================================================== */}

      <div className="absolute inset-0">
        {particles.map((_, i) => (
          <motion.span
            key={i}
            animate={{
              y: [0, -70 - (i % 4) * 20, 0],
              x: [
                0,
                (i % 2 === 0 ? 1 : -1) * (10 + (i % 5) * 5),
                0,
              ],
              opacity: [0.08, 0.55, 0.08],
              scale: [0.7, 1.25, 0.7],
            }}
            transition={{
              duration: 5 + (i % 6),
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
          LIGHT BEAMS
      ====================================================== */}

      <motion.div
        animate={{
          opacity: [0.02, 0.08, 0.02],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[16%]
          top-[-20%]
          h-[180%]
          w-[2px]
          rotate-[18deg]
          bg-gradient-to-b
          from-transparent
          via-[#D6B25E]
          to-transparent
          blur-[2px]
        "
      />

      <motion.div
        animate={{
          opacity: [0.02, 0.07, 0.02],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[14%]
          top-[-20%]
          h-[180%]
          w-[2px]
          -rotate-[22deg]
          bg-gradient-to-b
          from-transparent
          via-[#D6B25E]
          to-transparent
          blur-[2px]
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
          VIGNETTE
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_32%,rgba(5,5,5,.35)_68%,#050505_100%)]
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
          to-transparent
        "
      />
    </div>
  );
}

