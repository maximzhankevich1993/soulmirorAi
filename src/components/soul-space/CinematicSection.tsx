"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { ReactNode, useRef } from "react";

interface CinematicSectionProps {
  children: ReactNode;
  className?: string;
}

export function CinematicSection({
  children,
  className = "",
}: CinematicSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    [120, 0, 0, -80]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    [0.92, 1, 1, 0.96]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.75, 1],
    [0, 1, 1, 0.35]
  );

  const blur = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [12, 0, 0, 4]
  );

  const radius = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    [32, 0, 0, 0]
  );

  return (
    <section
      ref={ref}
      className="
        relative
        min-h-[125vh]
        w-full
      "
    >
      <div className="sticky top-0 flex min-h-screen w-full items-center overflow-hidden">
        <motion.div
          style={{
            y,
            scale,
            opacity,
            filter: blur.to((value) => `blur(${value}px)`),
            borderRadius: radius,
          }}
          className={`
            relative
            min-h-screen
            w-full
            overflow-hidden
            ${className}
          `}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}