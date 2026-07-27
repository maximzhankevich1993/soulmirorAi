"use client";

import { motion } from "framer-motion";

export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden bg-[#050505]">

      {/* Base */}

      <div className="absolute inset-0 bg-[#050505]" />



      {/* Main Golden Atmosphere */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          x: [0, 120, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 48,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2

          h-[1400px]
          w-[1400px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full
          bg-[#D6B25E]/10

          blur-[260px]
        "
      />



      {/* Upper Golden Cloud */}

      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 62,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[-500px]
          left-[10%]

          h-[900px]
          w-[1200px]

          rounded-full
          bg-[#D6B25E]/5

          blur-[220px]
        "
      />



      {/* Purple Mist */}

      <motion.div
        animate={{
          x: [0, 160, 0],
          y: [0, 120, 0],
        }}
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-400px]
          top-[10%]

          h-[1100px]
          w-[900px]

          rounded-full
          bg-[#8B5CF6]/8

          blur-[260px]
        "
      />



      {/* Lower Purple Mist */}

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, -120, 0],
        }}
        transition={{
          duration: 74,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-500px]
          left-[-300px]

          h-[900px]
          w-[900px]

          rounded-full
          bg-[#8B5CF6]/6

          blur-[240px]
        "
      />



      {/* Light Beam Left */}

      <motion.div
        animate={{
          opacity: [0.02, 0.06, 0.02],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
        }}
        className="
          absolute

          left-[18%]
          top-[-20%]

          h-[180%]
          w-[1px]

          rotate-[18deg]

          bg-gradient-to-b
          from-transparent
          via-[#D6B25E]
          to-transparent

          blur-sm
        "
      />



      {/* Light Beam Right */}

      <motion.div
        animate={{
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
        }}
        className="
          absolute

          right-[15%]
          top-[-20%]

          h-[180%]
          w-[1px]

          -rotate-[22deg]

          bg-gradient-to-b
          from-transparent
          via-[#D6B25E]
          to-transparent

          blur-sm
        "
      />



      {/* Central Energy */}

      <motion.div
        animate={{
          opacity: [0.08, 0.16, 0.08],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
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



      {/* Noise */}

      <div
        className="absolute inset-0 opacity-[0.018] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.82' numOctaves='3'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />



      {/* Soft Vignette */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_38%,rgba(5,5,5,.45)_70%,#050505_100%)]
        "
      />



      {/* Dark Top */}

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



      {/* Dark Bottom */}

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