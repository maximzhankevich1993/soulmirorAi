"use client";

import { motion } from "framer-motion";

export function SoulSectionAtmosphere() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        z-0
        overflow-hidden
      "
    >
      {/* =====================================================
          GOLDEN HORIZONTAL LIGHT — LEFT
      ====================================================== */}

      <motion.div
        animate={{
          x: ["-35%", "35%", "-35%"],
          y: ["-8%", "8%", "-8%"],
          opacity: [0.18, 0.34, 0.18],
          scaleY: [0.8, 1.15, 0.8],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-35%]
          top-[18%]
          h-[180px]
          w-[170%]
          rounded-[50%]
          bg-[#D6B25E]/20
          blur-[85px]
        "
      />

      {/* =====================================================
          GOLDEN HORIZONTAL LIGHT — RIGHT
      ====================================================== */}

      <motion.div
        animate={{
          x: ["35%", "-35%", "35%"],
          y: ["8%", "-6%", "8%"],
          opacity: [0.12, 0.28, 0.12],
          scaleY: [1, 0.75, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-40%]
          top-[55%]
          h-[220px]
          w-[180%]
          rounded-[50%]
          bg-[#D6B25E]/16
          blur-[100px]
        "
      />

      {/* =====================================================
          THIN GOLDEN CORE
      ====================================================== */}

      <motion.div
        animate={{
          x: ["-25%", "25%", "-25%"],
          opacity: [0.08, 0.22, 0.08],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-25%]
          top-[35%]
          h-[2px]
          w-[150%]
          bg-gradient-to-r
          from-transparent
          via-[#D6B25E]
          to-transparent
          blur-[4px]
        "
      />

      {/* =====================================================
          SECOND GOLDEN CORE
      ====================================================== */}

      <motion.div
        animate={{
          x: ["25%", "-25%", "25%"],
          opacity: [0.04, 0.16, 0.04],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-25%]
          top-[70%]
          h-[1px]
          w-[150%]
          bg-gradient-to-r
          from-transparent
          via-[#F4F1EA]
          to-transparent
          blur-[3px]
        "
      />

      {/* =====================================================
          PURPLE ATMOSPHERE
      ====================================================== */}

      <motion.div
        animate={{
          x: [-80, 80, -80],
          y: [40, -40, 40],
          opacity: [0.03, 0.09, 0.03],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-20%]
          top-[20%]
          h-[500px]
          w-[700px]
          rounded-full
          bg-[#8B5CF6]
          blur-[180px]
        "
      />

      {/* =====================================================
          FLOATING PARTICLES
      ====================================================== */}

      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          animate={{
            x: [0, (i % 2 === 0 ? 1 : -1) * 50, 0],
            y: [0, -70, 0],
            opacity: [0.05, 0.35, 0.05],
            scale: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 5 + (i % 5),
            repeat: Infinity,
            delay: i * 0.25,
            ease: "easeInOut",
          }}
          className="
            absolute
            h-[3px]
            w-[3px]
            rounded-full
            bg-[#D6B25E]
            blur-[1px]
          "
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
          }}
        />
      ))}

      {/* =====================================================
          SOFT VIGNETTE
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,5,5,.45)_100%)]
        "
      />
    </div>
  );
}