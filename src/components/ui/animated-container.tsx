"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { fadeInUp, staggerContainer } from "@/lib/motion";

interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
  delay?: number;
}

export function AnimatedContainer({
  children,
  className = "",
  stagger = false,
  delay = 0,
}: AnimatedContainerProps) {
  return (
    <motion.div
      variants={stagger ? staggerContainer : fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}