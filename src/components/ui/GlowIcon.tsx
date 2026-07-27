"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

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
    sm: "h-10 w-10 rounded-xl",
    md: "h-12 w-12 rounded-2xl",
    lg: "h-16 w-16 rounded-[22px]",
  };

  return (

    <motion.div

      whileHover={{
        scale: 1.08,
      }}

      transition={{
        type: "spring",
        stiffness: 220,
      }}

      className={clsx(
        `
        group
        relative
        flex
        items-center
        justify-center
        overflow-hidden
        border
        backdrop-blur-3xl
        `,
        sizes[size],
        color === "gold"
          ? "border-[#D6B25E]/20"
          : "border-[#8B5CF6]/20"
      )}

    >

      {/* Animated Glow */}

      <motion.div

        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.45, 0.2],
        }}

        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className={clsx(
          `
          absolute
          inset-0
          rounded-full
          blur-xl
          `,
          color === "gold"
            ? "bg-[#D6B25E]/30"
            : "bg-[#8B5CF6]/30"
        )}

      />

      {/* Glass */}

      <div
        className="
        absolute
        inset-0
        bg-white/[0.04]
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
        from-white/15
        to-transparent
        "
      />

      {/* Inner Border */}

      <div
        className="
        absolute
        inset-0
        rounded-inherit
        ring-1
        ring-inset
        ring-white/5
        "
      />

      {/* Icon */}

      <div
        className="
        relative
        z-10
        flex
        items-center
        justify-center
        text-[#F4F1EA]
        transition-transform
        duration-300
        group-hover:scale-110
        "
      >
        {children}
      </div>

    </motion.div>

  );

}