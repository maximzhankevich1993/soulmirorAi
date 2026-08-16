"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

import { SoulSectionAtmosphere } from "./SoulSectionAtmosphere";

interface CinematicSectionProps {
  children: ReactNode;
}

export function CinematicSection({
  children,
}: CinematicSectionProps) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        relative
        isolate
        overflow-hidden
      "
    >
      <SoulSectionAtmosphere />

      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  );
}