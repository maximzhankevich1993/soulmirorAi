
"use client";

import { motion } from "framer-motion";

const letters = "SoulMirror".split("");

export function AuthLogo() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        flex
        flex-col
        items-center
        text-center
      "
    >
      {/* EON AI */}

      <motion.p
        initial={{
          opacity: 0,
          y: -18,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          text-[10px]
          uppercase
          tracking-[0.65em]
          text-[#D6B25E]/80
        "
      >
        EON AI
      </motion.p>

      {/* SoulMirror */}

      <h1
        className="
          mt-7
          flex
          whitespace-nowrap
          font-[family:var(--font-cormorant)]
          text-[52px]
          font-light
          leading-none
          tracking-[0.025em]
          text-[#F4F1EA]
          sm:text-[68px]
          md:text-[82px]
        "
      >
        {letters.map((letter, index) => (
          <motion.span
            key={`${letter}-${index}`}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
              y: index % 3 === 0 ? -45 : 45,
              scale: 0.7,
              rotate: index % 2 === 0 ? -6 : 6,
              filter: "blur(14px)",
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              rotate: 0,
              filter: "blur(0px)",
            }}
            transition={{
              delay: 0.2 + index * 0.09,
              duration: 1.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </h1>

      {/* Golden line */}

      <motion.div
        initial={{
          opacity: 0,
          scaleX: 0,
        }}
        animate={{
          opacity: 1,
          scaleX: 1,
        }}
        transition={{
          delay: 1.35,
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          mt-7
          h-px
          w-[110px]
          origin-center
          bg-gradient-to-r
          from-transparent
          via-[#D6B25E]/70
          to-transparent
        "
      />

      {/* Subtitle */}

      <motion.p
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.55,
          duration: 0.8,
        }}
        className="
          mt-6
          text-[10px]
          uppercase
          tracking-[0.45em]
          text-white/35
        "
      >
        Personal Intelligence
      </motion.p>
    </motion.div>
  );
}

