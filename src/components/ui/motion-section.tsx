"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { fadeInUp } from "@/lib/motion";

interface MotionSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function MotionSection({
  children,
  className = "",
  delay = 0,
}: MotionSectionProps) {
  return (
    <motion.div
      variants={fadeInUp}
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