
"use client";

import { ReactNode } from "react";

interface GlowIconProps {
  children: ReactNode;
  color?: "gold" | "purple";
  size?: "sm" | "md" | "lg";
}

export function GlowIcon({
  children,
  color = "gold",
  size = "md",
}: GlowIconProps) {
  const sizes = {
    sm: "h-9 w-9 rounded-xl",
    md: "h-11 w-11 rounded-2xl",
    lg: "h-14 w-14 rounded-2xl",
  };

  const colors = {
    gold: `
      bg-[#D6B25E]/10
      border-[#D6B25E]/20
      shadow-[0_0_35px_rgba(214,178,94,.15)]
    `,
    purple: `
      bg-[#8B5CF6]/10
      border-[#8B5CF6]/20
      shadow-[0_0_35px_rgba(139,92,246,.15)]
    `,
  };

  return (
    <div
      className={`
        flex
        items-center
        justify-center
        border
        backdrop-blur-xl
        ${sizes[size]}
        ${colors[color]}
      `}
    >
      {children}
    </div>
  );
}

