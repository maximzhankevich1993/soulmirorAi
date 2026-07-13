
"use client";

import { ReactNode } from "react";
import clsx from "clsx";

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
    <div
      className={clsx(
        `
        relative
        overflow-hidden
        rounded-[32px]
        border
        backdrop-blur-3xl
        transition-all
        duration-300
        `,
        highlight
          ? `
            border-[#D6B25E]/20
            bg-gradient-to-br
            from-[#D6B25E]/10
            via-white/[0.04]
            to-[#8B5CF6]/5
            shadow-[0_0_60px_rgba(214,178,94,.08)]
          `
          : `
            border-white/10
            bg-white/[0.03]
          `,
        className
      )}
    >
      <div
        className="
        pointer-events-none
        absolute
        inset-0
        opacity-40
        bg-[radial-gradient(circle_at_top,rgba(255,255,255,.08),transparent_70%)]
      "
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

