"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.9,
  y = 40,
  once = true,
  className,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y,
        scale: 0.985,
        filter: "blur(14px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{
        once,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}