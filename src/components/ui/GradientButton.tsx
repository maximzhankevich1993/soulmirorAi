"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

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
  className,
  icon,
}: GradientButtonProps) {
  return (

    <motion.button

      whileHover={{
        scale: 1.03,
        y: -2,
      }}

      whileTap={{
        scale: 0.98,
      }}

      transition={{
        type: "spring",
        stiffness: 260,
      }}

      onClick={onClick}

      disabled={disabled}

      className={clsx(
        `
        group
        relative
        inline-flex
        items-center
        justify-center
        gap-3
        overflow-hidden

        rounded-full

        px-8
        py-4

        font-medium
        text-[#050505]

        transition-all
        duration-500

        disabled:pointer-events-none
        disabled:opacity-50
        `,
        className
      )}

    >

      {/* Glow */}

      <motion.div

        animate={{
          opacity: [0.45, 0.8, 0.45],
          scale: [1, 1.08, 1],
        }}

        transition={{
          duration: 5,
          repeat: Infinity,
        }}

        className="
        absolute
        inset-0
        rounded-full
        bg-[#D6B25E]
        blur-xl
        "

      />

      {/* Main Gradient */}

      <div
        className="
        absolute
        inset-0

        bg-gradient-to-r
        from-[#D6B25E]
        via-[#E8CF88]
        to-[#C79A42]
        "
      />

      {/* Reflection */}

      <div
        className="
        absolute
        inset-x-0
        top-0
        h-1/2

        bg-gradient-to-b
        from-white/35
        to-transparent
        "
      />

      {/* Hover */}

      <motion.div

        initial={{
          x: "-120%",
        }}

        whileHover={{
          x: "120%",
        }}

        transition={{
          duration: 0.9,
        }}

        className="
        absolute
        inset-y-0
        w-24

        bg-gradient-to-r
        from-transparent
        via-white/35
        to-transparent

        rotate-12
        "

      />

      {/* Border */}

      <div
        className="
        absolute
        inset-0

        rounded-full

        ring-1
        ring-inset
        ring-white/30
        "
      />

      {/* Content */}

      <span
        className="
        relative
        z-10

        flex
        items-center
        gap-3

        text-sm
        uppercase
        tracking-[0.15em]

        transition-transform
        duration-300

        group-hover:tracking-[0.2em]
        "
      >

        {children}

        {icon && (

          <motion.span

            whileHover={{
              x: 3,
            }}

          >

            {icon}

          </motion.span>

        )}

      </span>

    </motion.button>

  );
}