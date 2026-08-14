"use client";

import { motion } from "framer-motion";

export function CinematicLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        fixed
        inset-0
        z-[99999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#050505]
      "
    >
      {/* Ambient Glow */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#D6B25E]
          blur-[180px]
        "
      />

      {/* Secondary subtle glow */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.02, 0.08, 0.02],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          h-[700px]
          w-[700px]
          rounded-full
          bg-[#8B5CF6]
          blur-[220px]
        "
      />

      {/* Main Content */}

      <div className="relative z-10 text-center">

        {/* EON AI */}

        <motion.p
          initial={{
            opacity: 0,
            y: 12,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-[10px]
            uppercase
            tracking-[0.65em]
            text-[#D6B25E]
          "
        >
          EON AI
        </motion.p>

        {/* SoulMirror */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 25,
            filter: "blur(14px)",
            letterSpacing: "0.35em",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            letterSpacing: "0.08em",
          }}
          transition={{
            delay: 0.35,
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-5
            text-[54px]
            font-light
            text-[#F4F1EA]
            md:text-[76px]
          "
        >
          SoulMirror
        </motion.h1>

        {/* Golden Line */}

        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: 120,
            opacity: 1,
          }}
          transition={{
            delay: 1.25,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mt-8
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#D6B25E]
            to-transparent
          "
        />

        {/* Tagline */}

        <motion.p
          initial={{
            opacity: 0,
            y: 12,
            filter: "blur(6px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 1.55,
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-8
            text-[10px]
            uppercase
            tracking-[0.42em]
            text-white/40
          "
        >
          Reflect · Understand · Evolve
        </motion.p>

      </div>

      {/* Bottom Brand */}

      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.35,
        }}
        transition={{
          delay: 2,
          duration: 1,
        }}
        className="
          absolute
          bottom-10
          text-[8px]
          uppercase
          tracking-[0.5em]
          text-white/25
        "
      >
        Personal Intelligence · EON AI
      </motion.p>

    </motion.div>
  );
}