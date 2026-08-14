"use client";

import { motion } from "framer-motion";
import { cinematicTransition } from "@/lib/motion";

interface LoadingScreenProps {
  title?: string;
  subtitle?: string;
}

export function LoadingScreen({
  title = "SoulMirror",
  subtitle = "Reflect. Understand. Evolve.",
}: LoadingScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#050505]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Deep ambient atmosphere */}
      <motion.div
        className="absolute h-[560px] w-[560px] rounded-full bg-amber-300/[0.07] blur-[140px]"
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [0.9, 1.08, 0.9],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary atmosphere */}
      <motion.div
        className="absolute h-[260px] w-[260px] rounded-full bg-purple-500/[0.035] blur-[100px]"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: [0.1, 0.22, 0.1],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* SoulMirror Orb */}
      <motion.div
        className="relative mb-12 flex h-40 w-40 items-center justify-center"
        initial={{
          opacity: 0,
          scale: 0.72,
          filter: "blur(12px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Outer energy ring */}
        <motion.div
          className="absolute h-40 w-40 rounded-full border border-amber-200/[0.12]"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.7, 0.35],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Inner ring */}
        <motion.div
          className="absolute h-28 w-28 rounded-full border border-amber-300/[0.22]"
          animate={{
            scale: [1, 1.12, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            scale: {
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />

        {/* Core */}
        <motion.div
          className="relative h-20 w-20 rounded-full bg-gradient-to-br from-amber-200 via-amber-400 to-yellow-600 shadow-[0_0_90px_rgba(255,190,60,.4)]"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.85, 1, 0.85],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-white/30 via-transparent to-black/20" />
        </motion.div>
      </motion.div>

      {/* Brand */}
      <motion.div
        initial={{
          opacity: 0,
          y: 18,
          filter: "blur(8px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          ...cinematicTransition,
          delay: 0.65,
        }}
      >
        <h1 className="text-3xl font-light tracking-[0.38em] text-[#F4F1EA] sm:text-4xl">
          {title}
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        className="mt-5 text-[10px] uppercase tracking-[0.32em] text-neutral-500 sm:text-xs"
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
          delay: 1,
        }}
      >
        {subtitle}
      </motion.p>

      {/* Minimal loading indicator */}
      <motion.div
        className="mt-10 h-px w-20 overflow-hidden bg-white/[0.08]"
        initial={{
          opacity: 0,
          scaleX: 0,
        }}
        animate={{
          opacity: 1,
          scaleX: 1,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
          delay: 1.2,
        }}
      >
        <motion.div
          className="h-full w-full origin-left bg-amber-300/50"
          animate={{
            scaleX: [0, 1],
          }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </motion.div>

      {/* EON AI */}
      <motion.div
        className="absolute bottom-10 text-[9px] uppercase tracking-[0.45em] text-neutral-600"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        EON AI
      </motion.div>
    </motion.div>
  );
}