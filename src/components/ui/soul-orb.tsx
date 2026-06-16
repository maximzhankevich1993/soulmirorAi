"use client";

import * as React from "react";

interface SoulOrbProps {
  size?: number;
  className?: string;
}

export function SoulOrb({ size = 240, className = "" }: SoulOrbProps) {
  return (
    <div
      className={`
        relative
        flex
        items-center
        justify-center
        ${className}
      `}
      style={{ width: size, height: size }}
    >
      {/* Outer Aura (Purple) */}
      <div className="absolute inset-0 rounded-full bg-[#8B5CF6]/10 blur-3xl animate-pulse" />

      {/* Middle Aura (Gold) */}
      <div className="absolute inset-10 rounded-full bg-[#D6B25E]/10 blur-2xl animate-pulse" />

      {/* Inner Glow */}
      <div className="absolute inset-16 rounded-full bg-gradient-to-br from-[#D6B25E]/20 via-transparent to-[#8B5CF6]/20 blur-xl" />

      {/* Core Orb */}
      <div className="relative h-24 w-24 rounded-full border border-[#D6B25E]/30 bg-white/[0.03] backdrop-blur-2xl">
        {/* Reflection highlight */}
        <div className="absolute left-3 top-2 h-6 w-6 rounded-full bg-white/10 blur-sm" />

        {/* Shadow core */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#09090B] via-transparent to-black/40" />
      </div>

      {/* Ring */}
      <div className="absolute inset-0 rounded-full border border-white/5" />

      {/* Subtle rotating halo (static fallback style) */}
      <div className="absolute inset-6 rounded-full border border-[#D6B25E]/10" />
    </div>
  );
}