"use client";

import { motion } from "framer-motion";

const signals = [
  {
    top: "18%",
    left: "-5%",
    width: "38%",
    rotate: "-2deg",
  },
  {
    top: "30%",
    left: "8%",
    width: "42%",
    rotate: "1deg",
  },
  {
    top: "43%",
    left: "-8%",
    width: "52%",
    rotate: "-1deg",
  },
  {
    top: "56%",
    left: "4%",
    width: "46%",
    rotate: "2deg",
  },
  {
    top: "69%",
    left: "-4%",
    width: "40%",
    rotate: "-2deg",
  },
  {
    top: "81%",
    left: "10%",
    width: "36%",
    rotate: "1deg",
  },
];

export function SoulMirrorSignal() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        overflow-visible
      "
    >
      {/* Central atmosphere */}

      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          h-40
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]/10
          blur-[100px]
        "
        animate={{
          opacity: [0.25, 0.5, 0.25],
          scaleX: [0.8, 1.1, 0.8],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Left signals */}

      {signals.map((signal, index) => (
        <motion.div
          key={`left-${index}`}
          className="
            absolute
            h-px
            bg-white/20
          "
          style={{
            top: signal.top,
            left: signal.left,
            width: signal.width,
            rotate: signal.rotate,
            boxShadow:
              index === 2
                ? "0 0 12px rgba(214,178,94,.35)"
                : "none",
          }}
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          animate={{
            opacity:
              index === 2 ? [0.15, 0.55, 0.15] : 0.22,
            scaleX: 1,
          }}
          transition={{
            delay: 0.15 + index * 0.1,
            duration: 1.2,
            opacity: {
              duration: 5 + index,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          {/* angular break */}

          <span
            className="
              absolute
              right-[22%]
              top-1/2
              h-3
              w-px
              -translate-y-1/2
              rotate-[35deg]
              bg-current
            "
          />
        </motion.div>
      ))}

      {/* Right signals */}

      {signals.map((signal, index) => (
        <motion.div
          key={`right-${index}`}
          className="
            absolute
            h-px
            bg-white/20
          "
          style={{
            top: signal.top,
            right: signal.left,
            width: signal.width,
            rotate: signal.rotate,
            boxShadow:
              index === 3
                ? "0 0 12px rgba(214,178,94,.35)"
                : "none",
          }}
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          animate={{
            opacity:
              index === 3 ? [0.15, 0.55, 0.15] : 0.22,
            scaleX: 1,
          }}
          transition={{
            delay: 0.25 + index * 0.1,
            duration: 1.2,
            opacity: {
              duration: 5 + index,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <span
            className="
              absolute
              left-[22%]
              top-1/2
              h-3
              w-px
              -translate-y-1/2
              rotate-[35deg]
              bg-current
            "
          />
        </motion.div>
      ))}

      {/* Central horizontal intelligence line */}

      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          h-px
          w-[85%]
          -translate-x-1/2
          -translate-y-1/2
          bg-gradient-to-r
          from-transparent
          via-[#D6B25E]/50
          to-transparent
        "
        animate={{
          opacity: [0.2, 0.65, 0.2],
          scaleX: [0.92, 1, 0.92],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Central signal point */}

      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          h-1
          w-1
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#F4F1EA]
          shadow-[0_0_20px_rgba(214,178,94,.8)]
        "
        animate={{
          scale: [1, 2, 1],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}