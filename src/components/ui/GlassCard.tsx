"use client";

import { ReactNode } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  highlight?: boolean;
}

export function GlassCard({
  children,
  className,
  highlight = false,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -2,
      }}
      transition={{
        duration: 0.25,
      }}
      className={clsx(
        `
        group
        relative
        overflow-hidden
        rounded-[34px]
        border
        backdrop-blur-[40px]
        transition-all
        duration-500
        `,
        highlight
          ? `
            border-[#D6B25E]/20
            bg-[linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.025))]
            shadow-[0_30px_120px_rgba(214,178,94,.08)]
          `
          : `
            border-white/8
            bg-[linear-gradient(180deg,rgba(255,255,255,.035),rgba(255,255,255,.015))]
          `,
        className
      )}
    >

      {/* Top Reflection */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-28
          bg-gradient-to-b
          from-white/10
          to-transparent
        "
      />

      {/* Golden Glow */}

      {highlight && (

        <motion.div
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="
            pointer-events-none
            absolute
            right-[-120px]
            top-[-120px]
            h-72
            w-72
            rounded-full
            bg-[#D6B25E]
            blur-[120px]
          "
        />

      )}

      {/* Purple Accent */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-160px]
          left-[-120px]
          h-72
          w-72
          rounded-full
          bg-[#8B5CF6]
          opacity-[0.06]
          blur-[140px]
        "
      />

      {/* Border Glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[34px]
          ring-1
          ring-inset
          ring-white/5
        "
      />

      {/* Noise */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10">
        {children}
      </div>

    </motion.div>
  );
}