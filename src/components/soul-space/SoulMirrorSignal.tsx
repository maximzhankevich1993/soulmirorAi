"use client";

import { motion } from "framer-motion";

const lines = [
  {
    top: "18%",
    left: "-5%",
    width: "42%",
    rotate: "-2deg",
    delay: 0,
  },
  {
    top: "31%",
    left: "3%",
    width: "48%",
    rotate: "1deg",
    delay: 0.8,
  },
  {
    top: "44%",
    left: "-8%",
    width: "56%",
    rotate: "-1deg",
    delay: 1.6,
  },
  {
    top: "57%",
    left: "4%",
    width: "45%",
    rotate: "2deg",
    delay: 2.4,
  },
  {
    top: "70%",
    left: "-4%",
    width: "40%",
    rotate: "-2deg",
    delay: 3.2,
  },
  {
    top: "82%",
    left: "8%",
    width: "36%",
    rotate: "1deg",
    delay: 1.2,
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
      {/* LEFT SIGNALS */}

      {lines.map((line, index) => (
        <motion.div
          key={`left-${index}`}
          className="
            absolute
            h-px
          "
          style={{
            top: line.top,
            left: line.left,
            width: line.width,
            rotate: line.rotate,
          }}
          initial={{
            opacity: 0,
            scaleX: 0.8,
          }}
          animate={{
            opacity: [0.25, 0.65, 0.3, 0.55, 0.25],
            scaleX: [0.95, 1, 0.97, 1, 0.95],
          }}
          transition={{
            delay: line.delay,
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Main golden line */}

          <div
            className="
              h-px
              w-full
              bg-gradient-to-r
              from-transparent
              via-[#D6B25E]
              to-transparent
            "
            style={{
              boxShadow:
                "0 0 8px rgba(214,178,94,0.35)",
            }}
          />

          {/* Angular break */}

          <div
            className="
              absolute
              left-[30%]
              top-[-3px]
              h-[7px]
              w-px
              rotate-[35deg]
              bg-[#D6B25E]
            "
            style={{
              boxShadow:
                "0 0 7px rgba(214,178,94,0.35)",
            }}
          />

          <div
            className="
              absolute
              left-[68%]
              top-[-3px]
              h-[7px]
              w-px
              rotate-[-35deg]
              bg-[#D6B25E]/70
            "
          />
        </motion.div>
      ))}

      {/* RIGHT SIGNALS */}

      {lines.map((line, index) => (
        <motion.div
          key={`right-${index}`}
          className="
            absolute
            h-px
          "
          style={{
            top: line.top,
            right: line.left,
            width: line.width,
            rotate: line.rotate,
          }}
          initial={{
            opacity: 0,
            scaleX: 0.8,
          }}
          animate={{
            opacity: [0.2, 0.55, 0.25, 0.5, 0.2],
            scaleX: [0.95, 1, 0.97, 1, 0.95],
          }}
          transition={{
            delay: line.delay + 0.6,
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Main line */}

          <div
            className="
              h-px
              w-full
              bg-gradient-to-r
              from-transparent
              via-[#D6B25E]
              to-transparent
            "
            style={{
              boxShadow:
                "0 0 8px rgba(214,178,94,0.3)",
            }}
          />

          {/* Angular breaks */}

          <div
            className="
              absolute
              left-[30%]
              top-[-3px]
              h-[7px]
              w-px
              rotate-[-35deg]
              bg-[#D6B25E]
            "
          />

          <div
            className="
              absolute
              left-[68%]
              top-[-3px]
              h-[7px]
              w-px
              rotate-[35deg]
              bg-[#D6B25E]/70
            "
          />
        </motion.div>
      ))}

      {/* CENTRAL GOLDEN PULSE */}

      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          h-px
          w-[70%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#D6B25E]/70
          to-transparent
        "
        animate={{
          opacity: [0.2, 0.6, 0.2],
          scaleX: [0.9, 1, 0.9],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          boxShadow:
            "0 0 12px rgba(214,178,94,0.3)",
        }}
      />
    </div>
  );
}