"use client";

import { motion } from "framer-motion";

const lines = [
  {
    width: "32%",
    top: "18%",
    left: "8%",
    rotate: -2,
    delay: 0,
    duration: 5.5,
  },
  {
    width: "46%",
    top: "30%",
    left: "2%",
    rotate: 1,
    delay: 0.8,
    duration: 6.5,
  },
  {
    width: "58%",
    top: "43%",
    left: "0%",
    rotate: -1,
    delay: 1.6,
    duration: 7,
    main: true,
  },
  {
    width: "42%",
    top: "56%",
    left: "7%",
    rotate: 2,
    delay: 2.3,
    duration: 6,
  },
  {
    width: "30%",
    top: "70%",
    left: "14%",
    rotate: -1,
    delay: 3,
    duration: 7.5,
  },
  {
    width: "38%",
    top: "82%",
    left: "5%",
    rotate: 1,
    delay: 1.2,
    duration: 6.8,
  },
];

export function SoulMirrorSignal() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        z-0
        overflow-hidden
      "
    >
      {/* Central atmospheric glow */}
      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]/[0.035]
          blur-[120px]
        "
        animate={{
          opacity: [0.35, 0.7, 0.35],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Signal lines */}
      <div className="absolute inset-0">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              top: line.top,
              left: line.left,
              width: line.width,
              rotate: line.rotate,
            }}
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: [0.05, 0.22, 0.08, 0.18, 0.05],
              x: [-10, 0, 8, 0, -10],
            }}
            transition={{
              delay: line.delay,
              duration: line.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Main line */}
            <div
              className="
                relative
                h-px
                w-full
                bg-gradient-to-r
                from-transparent
                via-[#D6B25E]/25
                to-transparent
              "
            >
              {/* Moving golden pulse */}
              <motion.div
                className="
                  absolute
                  left-0
                  top-1/2
                  h-px
                  -translate-y-1/2
                  bg-[#D6B25E]
                "
                animate={{
                  left: ["0%", "35%", "75%", "100%"],
                  width: ["0%", "12%", "18%", "0%"],
                  opacity: [0, 0.15, 0.45, 0],
                  boxShadow: [
                    "0 0 0px rgba(214,178,94,0)",
                    "0 0 5px rgba(214,178,94,.12)",
                    "0 0 12px rgba(214,178,94,.3)",
                    "0 0 0px rgba(214,178,94,0)",
                  ],
                }}
                transition={{
                  delay: line.delay + 0.8,
                  duration: line.duration * 1.4,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Broken / angular segment */}
            <motion.div
              className="
                absolute
                left-[32%]
                top-[-3px]
                h-[7px]
                w-[1px]
                rotate-[28deg]
                bg-[#D6B25E]/20
              "
              animate={{
                opacity: [0.08, 0.35, 0.08],
              }}
              transition={{
                delay: line.delay + 1,
                duration: line.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Second angular segment */}
            <motion.div
              className="
                absolute
                left-[67%]
                top-[-3px]
                h-[7px]
                w-[1px]
                rotate-[-28deg]
                bg-[#D6B25E]/15
              "
              animate={{
                opacity: [0.05, 0.25, 0.05],
              }}
              transition={{
                delay: line.delay + 1.7,
                duration: line.duration + 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Very subtle horizontal scan */}
      <motion.div
        className="
          absolute
          left-0
          top-1/2
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-[#D6B25E]/[0.06]
          to-transparent
        "
        animate={{
          opacity: [0, 0.5, 0],
          scaleX: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}