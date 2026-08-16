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
      {/* Main horizontal golden light */}
      <motion.div
        animate={{
          x: ["-45%", "25%", "-45%"],
          y: ["-10%", "8%", "-10%"],
          scaleX: [1, 1.2, 1],
          opacity: [0.18, 0.32, 0.18],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-[35%]
          h-[180px]
          w-[140%]
          -translate-x-1/2
          rounded-full
          bg-[#D6B25E]/20
          blur-[85px]
        "
      />

      {/* Secondary horizontal golden light */}
      <motion.div
        animate={{
          x: ["35%", "-25%", "35%"],
          y: ["10%", "-8%", "10%"],
          scaleX: [1.1, 0.9, 1.1],
          opacity: [0.1, 0.24, 0.1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-[58%]
          h-[140px]
          w-[130%]
          -translate-x-1/2
          rounded-full
          bg-[#D6B25E]/15
          blur-[95px]
        "
      />

      {/* Soft white horizontal reflection */}
      <motion.div
        animate={{
          x: ["-30%", "30%", "-30%"],
          opacity: [0.03, 0.1, 0.03],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-[45%]
          h-[100px]
          w-[120%]
          -translate-x-1/2
          rounded-full
          bg-white/10
          blur-[100px]
        "
      />

      {/* Purple atmosphere */}
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -60, 0],
          opacity: [0.04, 0.1, 0.04],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-15%]
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#8B5CF6]/10
          blur-[180px]
        "
      />

      {/* Floating particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          animate={{
            y: [0, -50, 0],
            x: [0, i % 2 === 0 ? 20 : -20, 0],
            opacity: [0.05, 0.35, 0.05],
          }}
          transition={{
            duration: 5 + (i % 5),
            repeat: Infinity,
            delay: i * 0.35,
            ease: "easeInOut",
          }}
          className="
            absolute
            h-[2px]
            w-[2px]
            rounded-full
            bg-[#D6B25E]
          "
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
          }}
        />
      ))}

      {/* Soft vignette */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(5,5,5,.35)_75%,#050505_100%)]
        "
      />
    </div>
  );
}