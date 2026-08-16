"use client";

import { motion } from "framer-motion";

const lines = [
  "M0 48 L18 48 L27 38 L42 38 L52 48 L72 48 L82 32 L100 32",
  "M0 58 L14 58 L23 68 L39 68 L51 58 L67 58 L78 72 L100 72",
  "M0 44 L22 44 L31 52 L47 52 L58 40 L74 40 L84 48 L100 48",
  "M0 66 L19 66 L29 57 L44 57 L55 67 L70 67 L81 55 L100 55",
  "M0 35 L17 35 L28 43 L43 43 L53 34 L69 34 L80 43 L100 43",
  "M0 72 L16 72 L26 62 L41 62 L52 73 L67 73 L79 61 L100 61",
  "M0 52 L20 52 L30 42 L45 42 L55 52 L70 52 L81 40 L100 40",
  "M0 61 L18 61 L28 70 L43 70 L54 60 L69 60 L80 69 L100 69",
  "M0 40 L21 40 L30 49 L45 49 L56 39 L71 39 L82 49 L100 49",
  "M0 69 L17 69 L27 59 L42 59 L53 69 L68 69 L79 58 L100 58",
  "M0 47 L19 47 L29 36 L44 36 L55 47 L70 47 L81 35 L100 35",
  "M0 57 L16 57 L26 67 L41 67 L52 57 L67 57 L78 68 L100 68",
];

export function SoulMirrorSignal() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        left-1/2
        top-1/2
        z-0
        h-[360px]
        w-[1100px]
        -translate-x-1/2
        -translate-y-1/2
        overflow-visible
        opacity-70
        md:h-[420px]
      "
    >
      {/* Soft atmospheric light */}
      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          h-[180px]
          w-[520px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]/[0.035]
          blur-[100px]
        "
        animate={{
          opacity: [0.35, 0.7, 0.35],
          scaleX: [0.9, 1.08, 0.9],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        {lines.map((path, index) => {
          const isAccent =
            index === 4 ||
            index === 7;

          return (
            <motion.path
              key={index}
              d={path}
              fill="none"
              stroke={
                isAccent
                  ? "#D6B25E"
                  : "#F4F1EA"
              }
              strokeWidth={
                isAccent ? 0.16 : 0.1
              }
              vectorEffect="non-scaling-stroke"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              animate={{
                pathLength: 1,
                opacity: isAccent
                  ? [0.12, 0.32, 0.12]
                  : [0.05, 0.16, 0.05],
                x: [0, index % 2 ? 8 : -8, 0],
              }}
              transition={{
                pathLength: {
                  duration: 2.2,
                  delay: index * 0.08,
                  ease: "easeOut",
                },
                opacity: {
                  duration:
                    5 + index * 0.25,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                x: {
                  duration:
                    10 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />
          );
        })}
      </svg>

      {/* Central signal */}
      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          h-px
          w-20
          -translate-x-1/2
          -translate-y-1/2
          bg-[#D6B25E]/40
          blur-[1px]
        "
        animate={{
          scaleX: [0.5, 1, 0.5],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}