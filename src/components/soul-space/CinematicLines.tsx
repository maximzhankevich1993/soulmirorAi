
"use client";

import { motion } from "framer-motion";

export function CinematicLines() {
  const particles = Array.from({ length: 18 });

  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        z-0
        overflow-hidden
      "
      aria-hidden="true"
    >
      {/* =====================================================
          GOLDEN ATMOSPHERE
      ====================================================== */}

      <motion.div
        animate={{
          opacity: [0.12, 0.24, 0.12],
          scale: [1, 1.08, 1],
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
          h-[650px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]/[0.08]
          blur-[180px]
        "
      />

      {/* =====================================================
          HORIZONTAL GOLDEN LIGHT THREADS
      ====================================================== */}

      <svg
        className="
          absolute
          left-[-10%]
          top-0
          h-full
          w-[120%]
          min-w-[1200px]
          overflow-visible
        "
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Main upper line */}

        <motion.path
          d="
            M -200 250
            C 100 80, 300 80, 520 250
            C 760 440, 930 450, 1160 270
            C 1360 110, 1530 150, 1800 300
          "
          stroke="#D6B25E"
          strokeWidth="8"
          strokeLinecap="round"
          filter="blur(9px)"
          opacity="0.42"
          animate={{
            d: [
              `
                M -200 250
                C 100 80, 300 80, 520 250
                C 760 440, 930 450, 1160 270
                C 1360 110, 1530 150, 1800 300
              `,
              `
                M -200 310
                C 120 450, 330 450, 550 260
                C 780 60, 980 70, 1190 300
                C 1400 520, 1580 470, 1800 250
              `,
              `
                M -200 250
                C 100 80, 300 80, 520 250
                C 760 440, 930 450, 1160 270
                C 1360 110, 1530 150, 1800 300
              `,
            ],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main bright core */}

        <motion.path
          d="
            M -200 250
            C 100 80, 300 80, 520 250
            C 760 440, 930 450, 1160 270
            C 1360 110, 1530 150, 1800 300
          "
          stroke="#D6B25E"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.55"
          animate={{
            pathLength: [0.2, 1, 0.2],
            pathOffset: [0, 0.25, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Lower line */}

        <motion.path
          d="
            M -200 650
            C 100 800, 300 790, 530 610
            C 760 430, 960 430, 1190 620
            C 1400 790, 1580 800, 1800 620
          "
          stroke="#D6B25E"
          strokeWidth="10"
          strokeLinecap="round"
          filter="blur(11px)"
          opacity="0.28"
          animate={{
            d: [
              `
                M -200 650
                C 100 800, 300 790, 530 610
                C 760 430, 960 430, 1190 620
                C 1400 790, 1580 800, 1800 620
              `,
              `
                M -200 580
                C 120 400, 320 420, 550 650
                C 780 850, 980 850, 1210 600
                C 1400 390, 1600 430, 1800 650
              `,
              `
                M -200 650
                C 100 800, 300 790, 530 610
                C 760 430, 960 430, 1190 620
                C 1400 790, 1580 800, 1800 620
              `,
            ],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary thin line */}

        <motion.path
          d="
            M -200 430
            C 180 300, 400 350, 650 450
            C 900 550, 1120 540, 1380 390
            C 1540 300, 1660 310, 1800 400
          "
          stroke="#F4F1EA"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.18"
          animate={{
            pathLength: [0, 1, 0],
            pathOffset: [0, 0.2, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* =====================================================
          GOLD PARTICLES
      ====================================================== */}

      {particles.map((_, index) => (
        <motion.span
          key={index}
          className="
            absolute
            h-[2px]
            w-[2px]
            rounded-full
            bg-[#D6B25E]
            shadow-[0_0_12px_rgba(214,178,94,0.8)]
          "
          style={{
            left: `${(index * 47) % 100}%`,
            top: `${(index * 31) % 100}%`,
          }}
          animate={{
            y: [0, -35, 0],
            x: [0, index % 2 === 0 ? 18 : -18, 0],
            opacity: [0.08, 0.7, 0.08],
            scale: [0.6, 1.4, 0.6],
          }}
          transition={{
            duration: 5 + (index % 5),
            delay: index * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* =====================================================
          EDGE VIGNETTE
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_25%,rgba(5,5,5,0.3)_72%,rgba(5,5,5,0.75)_100%)]
        "
      />
    </div>
  );
}

