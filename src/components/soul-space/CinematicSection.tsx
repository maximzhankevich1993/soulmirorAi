"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

import { SoulSectionAtmosphere } from "./SoulSectionAtmosphere";

interface CinematicSectionProps {
  children: ReactNode;
  className?: string;
}

export function CinematicSection({
  children,
  className = "",
}: CinematicSectionProps) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 40,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`
        relative
        isolate
        overflow-hidden
        ${className}
      `}
    >
      <SoulSectionAtmosphere />

      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  );
}