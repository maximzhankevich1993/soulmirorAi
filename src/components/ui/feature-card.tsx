import * as React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-6
        backdrop-blur-2xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#D6B25E]/30
        hover:bg-white/[0.05]
        ${className}
      `}
    >
      {/* Glow Layer */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -top-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-[#D6B25E]/10 blur-2xl" />
        <div className="absolute -bottom-10 right-0 h-32 w-32 rounded-full bg-[#8B5CF6]/10 blur-2xl" />
      </div>

      {/* Border Gradient */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D6B25E]/10 via-transparent to-[#8B5CF6]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        {/* Icon */}
        {icon && (
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#D6B25E]">
            {icon}
          </div>
        )}

        {/* Title */}
        <h3 className="mb-2 text-lg font-medium text-[#F4F1EA] transition-colors duration-300 group-hover:text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-[#F4F1EA]/60">
          {description}
        </p>
      </div>
    </div>
  );
}