
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AuthCardProps {
  children: ReactNode;
}

export function AuthCard({ children }: AuthCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
        scale: 0.97,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        delay: 0.35,
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        w-full
        overflow-hidden
        rounded-[28px]
        border
        border-white/[0.08]
        bg-white/[0.025]
        p-7
        shadow-[0_30px_100px_rgba(0,0,0,0.45)]
        backdrop-blur-2xl
        sm:p-8
      "
    >
      {/* Very subtle ambient light */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1,
          duration: 1.5,
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-px
          w-2/3
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#D6B25E]/30
          to-transparent
        "
      />

      {/* Soft inner highlight */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[28px]
          border
          border-white/[0.025]
        "
      />

      {/* Content */}

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

