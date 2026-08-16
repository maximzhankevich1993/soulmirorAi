```tsx
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
          scale: [1, 1.15, 1],
          x: [0, 100, 0],
          y: [0, -70, 0],
          opacity: [0.12, 0.22, 0.12],
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
          h-[900px]
          w-[1100px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]
          blur-[180px]
        "
      />

      {/* =====================================================
          SECOND GOLDEN CLOUD
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, -180, 0],
          y: [0, 90, 0],
          scale: [1, 1.08, 1],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-300px]
          top-[-300px]
          h-[850px]
          w-[1100px]
          rounded-full
          bg-[#D6B25E]
          blur-[200px]
        "
      />

      {/* =====================================================
          PURPLE INTELLIGENCE CLOUD
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 120, 0],
          scale: [1, 1.1, 1],
          opacity: [0.06, 0.13, 0.06],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-300px]
          top-[10%]
          h-[800px]
          w-[800px]
          rounded-full
          bg-[#8B5CF6]
          blur-[220px]
        "
      />

      {/* =====================================================
          LOWER PURPLE MIST
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -100, 0],
          opacity: [0.04, 0.1, 0.04],
        }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-350px]
          left-[-250px]
          h-[700px]
          w-[700px]
          rounded-full
          bg-[#8B5CF6]
          blur-[210px]
        "
      />

      {/* =====================================================
          CINEMATIC GOLDEN LIGHT THREADS
      ====================================================== */}

      <svg
        className="
          absolute
          inset-0
          h-full
          w-full
          opacity-90
        "
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Main flowing line */}

        <motion.path
          d="
            M -200 620
            C 120 360,
              340 820,
              650 590
            C 900 405,
              1060 160,
              1250 350
            C 1380 480,
              1480 280,
              1650 120
          "
          stroke="#D6B25E"
          strokeWidth="1.5"
          strokeLinecap="round"
          pathLength={1}
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          animate={{
            pathLength: [0, 1, 1, 0],
            opacity: [0, 0.8, 0.55, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Second crossing line */}

        <motion.path
          d="
            M -150 220
            C 180 500,
              420 110,
              720 330
            C 980 520,
              1160 720,
              1600 430
          "
          stroke="#D6B25E"
          strokeWidth="1"
          strokeLinecap="round"
          pathLength={1}
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          animate={{
            pathLength: [0, 1, 1, 0],
            opacity: [0, 0.55, 0.35, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            delay: 4,
            ease: "easeInOut",
          }}
        />

        {/* Thin white-gold line */}

        <motion.path
          d="
            M -100 760
            C 260 690,
              400 410,
              760 470
            C 1040 520,
              1210 780,
              1550 610
          "
          stroke="#F4F1EA"
          strokeWidth="0.55"
          strokeLinecap="round"
          pathLength={1}
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          animate={{
            pathLength: [0, 1, 1, 0],
            opacity: [0, 0.35, 0.2, 0],
          }}
          transition={{
            duration: 23,
            repeat: Infinity,
            delay: 7,
            ease: "easeInOut",
          }}
        />

        {/* =================================================
            STATIC SOFT THREADS
        ================================================== */}

        <motion.path
          d="
            M -100 400
            C 300 180,
              480 650,
              800 420
            C 1050 240,
              1260 330,
              1550 170
          "
          stroke="#D6B25E"
          strokeWidth="0.7"
          strokeLinecap="round"
          opacity="0.22"
        />

        <motion.path
          d="
            M -100 120
            C 300 300,
              540 180,
              840 380
            C 1110 560,
              1300 500,
              1550 700
          "
          stroke="#D6B25E"
          strokeWidth="0.5"
          strokeLinecap="round"
          opacity="0.14"
        />
      </svg>

      {/* =====================================================
          MOVING GOLDEN BEAMS
      ====================================================== */}

      <motion.div
        animate={{
          opacity: [0.02, 0.09, 0.02],
          x: [-30, 40, -30],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[12%]
          top-[-20%]
          h-[150%]
          w-px
          rotate-[18deg]
          bg-gradient-to-b
          from-transparent
          via-[#D6B25E]
          to-transparent
          blur-[1px]
        "
      />

      <motion.div
        animate={{
          opacity: [0.02, 0.08, 0.02],
          x: [30, -40, 30],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[14%]
          top-[-20%]
          h-[150%]
          w-px
          -rotate-[20deg]
          bg-gradient-to-b
          from-transparent
          via-[#D6B25E]
          to-transparent
          blur-[1px]
        "
      />

      {/* =====================================================
          CENTRAL ENERGY
      ====================================================== */}

      <motion.div
        animate={{
          opacity: [0.08, 0.16, 0.08],
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
          top-[48%]
          h-[450px]
          w-[450px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]
          blur-[150px]
        "
      />

      {/* =====================================================
          FLOATING PARTICLES
      ====================================================== */}

      <div className="absolute inset-0">
        {particles.map((_, i) => (
          <motion.span
            key={i}
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              y: [0, -90, 0],
              x: [0, i % 2 === 0 ? 15 : -15, 0],
              opacity: [0.05, 0.55, 0.05],
              scale: [0.5, 1, 0.5],
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
          SUBTLE WHITE PARTICLES
      ====================================================== */}

      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.span
            key={`white-${i}`}
            animate={{
              y: [0, -60, 0],
              opacity: [0.02, 0.2, 0.02],
            }}
            transition={{
              duration: 7 + (i % 4),
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            className="
              absolute
              h-px
              w-px
              rounded-full
              bg-[#F4F1EA]
            "
            style={{
              left: `${(i * 71) % 100}%`,
              top: `${(i * 43) % 100}%`,
            }}
          />
        ))}
      </div>

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
          CINEMATIC VIGNETTE
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_32%,rgba(5,5,5,.42)_68%,#050505_100%)]
        "
      />

      {/* =====================================================
          TOP FADE
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
          BOTTOM FADE
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
          FINAL CINEMATIC VEIL
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-black/[0.08]
        "
      />
    </div>
  );
}
```
