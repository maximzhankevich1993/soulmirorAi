"use client";

import { motion } from "framer-motion";
import { cinematicTransition } from "@/lib/motion";

interface LoadingScreenProps {
  title?: string;
  subtitle?: string;
}

export function LoadingScreen({
  title = "SoulMirror AI",
  subtitle = "Preparing Your Experience...",
}: LoadingScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#050505]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Ambient Glow */}
      <motion.div
        className="absolute h-[500px] w-[500px] rounded-full bg-amber-400/10 blur-[120px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Soul Orb */}
      <motion.div
        className="relative mb-10 flex h-36 w-36 items-center justify-center"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.div
          className="absolute h-32 w-32 rounded-full border border-amber-300/30"
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute h-20 w-20 rounded-full bg-gradient-to-br from-amber-300 to-yellow-500 shadow-[0_0_80px_rgba(255,190,60,.45)]"
          animate={{
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
          }}
        />
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-3xl font-light tracking-[0.35em] text-[#F4F1EA]"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={cinematicTransition}
      >
        {title}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-5 text-sm tracking-[0.25em] text-neutral-400"
        animate={{
          opacity: [0.45, 1, 0.45],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        {subtitle}
      </motion.p>

      {/* Bottom */}
      <motion.div
        className="absolute bottom-10 text-xs tracking-[0.4em] uppercase text-neutral-500"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        Developed by EON AI
      </motion.div>
    </motion.div>
  );
}