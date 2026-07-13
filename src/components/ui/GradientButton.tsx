
"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: ReactNode;
}

export function GradientButton({
  children,
  onClick,
  disabled = false,
  className = "",
  icon,
}: GradientButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.97,
      }}
      onClick={onClick}
      disabled={disabled}
      className={`
        relative
        flex
        w-full
        items-center
        justify-center
        gap-2
        overflow-hidden
        rounded-full
        bg-gradient-to-r
        from-[#D6B25E]
        via-[#E7CA7A]
        to-[#8B5CF6]
        px-8
        py-4
        text-sm
        font-semibold
        text-black
        shadow-[0_0_40px_rgba(214,178,94,.25)]
        transition-all
        duration-300
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className}
      `}
    >
      <span
        className="
        pointer-events-none
        absolute
        inset-0
        bg-white/20
        opacity-0
        transition-opacity
        duration-300
        hover:opacity-100
        "
      />

      <span className="relative z-10 flex items-center gap-2">
        {children}

        {icon}
      </span>
    </motion.button>
  );
}
