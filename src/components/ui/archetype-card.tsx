"use client";

import { motion } from "framer-motion";
import * as React from "react";

interface ArchetypeCardProps {
  name: string;
  description: string;
  symbol?: React.ReactNode;
  active?: boolean;
  className?: string;
}

export function ArchetypeCard({
  name,
  description,
  symbol,
  active = false,
  className = "",
}: ArchetypeCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.015,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        backdrop-blur-2xl
        p-6

        ${
          active
            ? "border-[#D6B25E]/40 bg-white/[0.06] shadow-[0_0_40px_rgba(214,178,94,0.12)]"
            : "border-white/10 bg-white/[0.03] hover:border-[#D6B25E]/30"
        }

        ${className}
      `}
    >
      {/* Animated Glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute left-1/2 top-0 h-52 w-52 -translate-x-1/2 rounded-full bg-[#8B5CF6]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-44 w-44 rounded-full bg-[#D6B25E]/10 blur-3xl" />
      </div>

      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#D6B25E]/5 via-transparent to-[#8B5CF6]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        {/* Symbol */}
        {symbol && (
          <motion.div
            whileHover={{
              rotate: 8,
              scale: 1.08,
            }}
            className="
              mb-5
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              text-[#D6B25E]
              shadow-[0_0_20px_rgba(214,178,94,0.08)]
            "
          >
            {symbol}
          </motion.div>
        )}

        {/* Name */}
        <h3
          className="
            mb-3
            font-[family:var(--font-cormorant)]
            text-2xl
            font-semibold
            text-[#F4F1EA]
          "
        >
          {name}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-[#F4F1EA]/65">
          {description}
        </p>

        {/* Active Badge */}
        {active && (
          <div className="mt-6 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#D6B25E] shadow-[0_0_12px_rgba(214,178,94,0.8)]" />

            <span className="text-xs uppercase tracking-[0.25em] text-[#D6B25E]/90">
              Active Archetype
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}