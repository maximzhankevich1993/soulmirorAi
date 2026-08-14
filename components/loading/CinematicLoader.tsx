"use client";

import { motion } from "framer-motion";

import { LoaderGlow } from "./LoaderGlow";
import { LoaderParticles } from "./LoaderParticles";
import { LoaderOrb } from "./LoaderOrb";

export function CinematicLoader() {
  return (
    <main
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-[#050505]
        text-[#F4F1EA]
      "
    >
      <LoaderGlow />

      <LoaderParticles />

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.92,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10
          flex
          flex-col
          items-center
        "
      >
        {/* Orb */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.75,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <LoaderOrb />
        </motion.div>

        {/* Brand */}
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.9,
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-14
            text-center
          "
        >
          {/* EON AI */}
          <motion.p
            initial={{
              opacity: 0,
              letterSpacing: "0.3em",
            }}
            animate={{
              opacity: 1,
              letterSpacing: "0.6em",
            }}
            transition={{
              delay: 1.1,
              duration: 1.2,
            }}
            className="
              text-[9px]
              uppercase
              text-[#D6B25E]
            "
          >
            EON AI
          </motion.p>

          {/* SoulMirror */}
          <h1
            className="
              mt-5
              font-[family:var(--font-cormorant)]
              text-5xl
              font-light
              tracking-wide
              text-[#F4F1EA]
              sm:text-6xl
            "
          >
            SoulMirror
          </h1>

          {/* Tagline */}
          <motion.p
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.5,
              duration: 1,
            }}
            className="
              mt-5
              text-[9px]
              uppercase
              tracking-[0.45em]
              text-white/35
            "
          >
            Reflect · Understand · Evolve
          </motion.p>
        </motion.div>

        {/* Loading line */}
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
            delay: 1.7,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-12
            h-px
            w-24
            overflow-hidden
            bg-white/[0.08]
          "
        >
          <motion.div
            className="
              h-full
              w-full
              origin-left
              bg-[#D6B25E]/50
            "
            initial={{
              scaleX: 0,
            }}
            animate={{
              scaleX: 1,
            }}
            transition={{
              delay: 1.8,
              duration: 2,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          delay: 1.5,
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
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
      </motion.div>
    </main>
  );
}