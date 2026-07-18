"use client";

import { motion } from "framer-motion";

export function EonBrandBadge() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        border-[#D6B25E]/20
        bg-white/[0.03]
        px-4
        py-2
        backdrop-blur-xl
      "
    >

      <div
        className="
          h-2
          w-2
          rounded-full
          bg-[#D6B25E]
          shadow-[0_0_12px_#D6B25E]
        "
      />

      <span
        className="
          text-[10px]
          uppercase
          tracking-[0.35em]
          text-[#D6B25E]
        "
      >
        A product by EON AI
      </span>

    </motion.div>
  );
}