"use client";

import { motion } from "framer-motion";

interface AILoadingProps {
  title: string;
}

const messages = [
  "Reading symbolic patterns...",
  "Exploring unconscious connections...",
  "Interpreting emotional signals...",
  "Building your personal insights...",
  "Almost ready...",
];

export function AILoading({ title }: AILoadingProps) {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] overflow-hidden">

      {/* Background Glow */}

      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full bg-amber-400/10 blur-[180px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Outer Ring */}

      <motion.div
        className="absolute w-44 h-44 rounded-full border border-amber-300/20"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Inner Ring */}

      <motion.div
        className="absolute w-28 h-28 rounded-full border border-amber-200/40"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Core */}

      <motion.div
        className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-300 to-amber-500 shadow-[0_0_80px_rgba(255,200,70,.5)]"
        animate={{
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      <motion.h2
        className="mt-14 text-3xl font-light tracking-[0.25em] text-[#F4F1EA]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {title}
      </motion.h2>

      <motion.p
        key={title}
        className="mt-6 text-neutral-400 tracking-[0.18em]"
        animate={{
          opacity: [0.35, 1, 0.35],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        {messages[0]}
      </motion.p>

      <motion.div
        className="absolute bottom-10 text-xs uppercase tracking-[0.4em] text-neutral-500"
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
    </div>
  );
}