"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className={`
        w-full
        ${align === "center" ? "text-center" : "text-left"}
      `}
    >
      {eyebrow && (
        <p
          className="
            mb-4
            text-xs
            uppercase
            tracking-[0.4em]
            text-[#D6B25E]/75
          "
        >
          {eyebrow}
        </p>
      )}

      <h2
        className="
          font-[family:var(--font-cormorant)]
          text-4xl
          font-semibold
          leading-tight
          tracking-tight
          md:text-5xl
          lg:text-6xl
        "
      >
        <span
          className="
            bg-gradient-to-r
            from-[#F4F1EA]
            via-[#D6B25E]
            to-[#8B5CF6]
            bg-clip-text
            text-transparent
          "
        >
          {title}
        </span>
      </h2>

      {description && (
        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-sm
            leading-relaxed
            text-[#F4F1EA]/65
            md:text-base
          "
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}