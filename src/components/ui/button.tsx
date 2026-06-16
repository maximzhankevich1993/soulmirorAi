"use client";

import * as React from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const variants: Record<ButtonVariant, string> = {
    primary: `
      border border-[#D6B25E]/30
      bg-gradient-to-r
      from-[#D6B25E]/15
      via-[#D6B25E]/5
      to-[#8B5CF6]/15
      text-[#F4F1EA]
      hover:border-[#D6B25E]/60
      hover:shadow-[0_0_30px_rgba(214,178,94,0.15)]
    `,

    secondary: `
      border border-white/10
      bg-white/[0.03]
      text-[#F4F1EA]
      hover:border-white/20
      hover:bg-white/[0.06]
    `,

    ghost: `
      border border-transparent
      bg-transparent
      text-[#F4F1EA]/80
      hover:bg-white/[0.04]
      hover:text-[#F4F1EA]
    `,
  };

  return (
    <button
      className={`
        group
        relative
        inline-flex
        items-center
        justify-center
        overflow-hidden
        rounded-2xl
        px-5
        py-3
        text-sm
        font-medium
        transition-all
        duration-300
        disabled:pointer-events-none
        disabled:opacity-50
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      <span
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
          bg-gradient-to-r
          from-[#D6B25E]/5
          via-transparent
          to-[#8B5CF6]/5
        "
      />

      <span className="relative z-10">
        {children}
      </span>
    </button>
  );
}