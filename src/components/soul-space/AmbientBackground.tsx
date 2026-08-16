"use client";

import { motion } from "framer-motion";

export function AmbientBackground() {
  const particles = Array.from({ length: 30 });

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
          GOLDEN CINEMATIC LINES
      ====================================================== */}

      <svg
        className="
          absolute
          inset-0
          h-full
          w-full
          overflow-visible
        "
        viewBox="0 0 1000 800"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* ---------------------------------------------------
            LINE 1
        ---------------------------------------------------- */}

        <motion.path
          d="
            M -100 560
            C 100 430, 190 430, 310 520
            C 430 610, 500 650, 620 540
            C 740 430, 800 300, 1100 390
          "
          stroke="#D6B25E"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          animate={{
            pathLength: [0, 1, 1, 0],
            opacity: [0, 0.65, 0.65, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ---------------------------------------------------
            LINE 2
        ---------------------------------------------------- */}

        <motion.path
          d="
            M -100 260
            C 80 350, 180 470, 330 380
            C 480 290, 570 140, 710 250
            C 840 350, 900 500, 1100 450
          "
          stroke="#D6B25E"
          strokeWidth="0.8"
          vectorEffect="non-scaling-stroke"
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          animate={{
            pathLength: [0, 1, 1, 0],
            opacity: [0, 0.4, 0.4, 0],
          }}
          transition={{
            duration: 18,
            delay: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ---------------------------------------------------
            LINE 3
        ---------------------------------------------------- */}

        <motion.path
          d="
            M -100 690
            C 120 580, 250 600, 390 690
            C 530 780, 650 720, 760 590
            C 850 485, 960 500, 1100 580
          "
          stroke="#D6B25E"
          strokeWidth="0.6"
          vectorEffect="non-scaling-stroke"
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          animate={{
            pathLength: [0, 1, 1, 0],
            opacity: [0, 0.28, 0.28, 0],
          }}
          transition={{
            duration: 20,
            delay: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ---------------------------------------------------
            SOFT WHITE THREAD
        ---------------------------------------------------- */}

        <motion.path
          d="
            M -100 160
            C 160 90, 250 230, 430 180
            C 600 130, 700 40, 1100 180
          "
          stroke="#F4F1EA"
          strokeWidth="0.45"
          vectorEffect="non-scaling-stroke"
          animate={{
            opacity: [0.05, 0.22, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* =====================================================
          GLOW ALONG THE LINES
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.12]
          blur-[10px]
        "
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 1000 800"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="
              M -100 560
              C 100 430, 190 430, 310 520
              C 430 610, 500 650, 620 540
              C 740 430, 800 300, 1100 390
            "
            stroke="#D6B25E"
            strokeWidth="5"
            vectorEffect="non-scaling-stroke"
          />

          <path
            d="
              M -100 260
              C 80 350, 180 470, 330 380
              C 480 290, 570 140, 710 250
              C 840 350, 900 500, 1100 450
            "
            stroke="#D6B25E"
            strokeWidth="4"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* =====================================================
          FLOATING GOLD PARTICLES
      ====================================================== */}

      <div className="absolute inset-0">
        {particles.map((_, i) => {
          const left = (i * 37) % 100;
          const top = (i * 53) % 100;

          return (
            <motion.span
              key={i}
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                y: [0, -60 - (i % 4) * 20, 0],
                x: [0, (i % 2 === 0 ? 1 : -1) * 15, 0],
                opacity: [0.08, 0.5, 0.08],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 5 + (i % 5),
                delay: i * 0.25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                h-[2px]
                w-[2px]
                rounded-full
                bg-[#D6B25E]
                shadow-[0_0_8px_rgba(214,178,94,0.7)]
              "
              style={{
                left: `${left}%`,
                top: `${top}%`,
              }}
            />
          );
        })}
      </div>

      {/* =====================================================
          CINEMATIC DARK OVERLAY
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/20
          via-transparent
          to-black/65
        "
      />

      {/* =====================================================
          VIGNETTE
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_25%,rgba(5,5,5,0.28)_65%,#050505_100%)]
        "
      />
    </div>
  );
}