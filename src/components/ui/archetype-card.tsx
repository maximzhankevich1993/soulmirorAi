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
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        backdrop-blur-2xl
        p-6
        transition-all
        duration-300
        hover:-translate-y-1

        ${
          active
            ? "border-[#D6B25E]/40 bg-white/[0.06]"
            : "border-white/10 bg-white/[0.03] hover:border-[#D6B25E]/30 hover:bg-white/[0.05]"
        }

        ${className}
      `}
    >
      {/* Mystic Aura */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -top-12 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#8B5CF6]/10 blur-3xl" />
        <div className="absolute -bottom-12 right-0 h-40 w-40 rounded-full bg-[#D6B25E]/10 blur-3xl" />
      </div>

      {/* Subtle Gradient Frame */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D6B25E]/10 via-transparent to-[#8B5CF6]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        {/* Symbol */}
        {symbol && (
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#D6B25E]">
            {symbol}
          </div>
        )}

        {/* Name */}
        <h3
          className="
            mb-2
            font-[family:var(--font-cormorant)]
            text-xl
            font-semibold
            text-[#F4F1EA]
            transition-colors
            duration-300
            group-hover:text-white
          "
        >
          {name}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-[#F4F1EA]/60">
          {description}
        </p>

        {/* Active indicator */}
        {active && (
          <div className="mt-5 flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-[#D6B25E]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#D6B25E]/80">
              Active Archetype
            </span>
          </div>
        )}
      </div>
    </div>
  );
}