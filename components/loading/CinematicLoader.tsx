"use client";

import { motion } from "framer-motion";

import { LoaderGlow } from "./LoaderGlow";
import { LoaderParticles } from "./LoaderParticles";
import { LoaderOrb } from "./LoaderOrb";

export function CinematicLoader() {
  return (
    <main
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#050505]
        text-[#F4F1EA]
      "
    >
      {/* Background atmosphere */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <LoaderGlow />
        <LoaderParticles />
      </motion.div>

      {/* Main composition */}
      <motion.div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
        "
        initial={{
          opacity: 0,
          scale: 0.94,
          filter: "blur(14px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Orb */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.78,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <LoaderOrb />
        </motion.div>

        {/* Brand */}
        <motion.div
          className="mt-14 text-center"
          initial={{
            opacity: 0,
            y: 24,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.8,
            duration: 1.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.p
            className="
              text-[9px]
              uppercase
              tracking-[0.55em]
              text-[#D6B25E]
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              duration: 1,
            }}
          >
            EON AI
          </motion.p>

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

          <motion.p
            className="
              mt-5
              text-[9px]
              uppercase
              tracking-[0.4em]
              text-white/35
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.3,
              duration: 1.2,
              ease: "easeOut",
            }}
          >
            Reflect · Understand · Evolve
          </motion.p>
        </motion.div>

        {/* Progress */}
        <motion.div
          className="
            mt-12
            h-px
            w-24
            overflow-hidden
            bg-white/[0.08]
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.5,
            duration: 0.8,
          }}
        >
          <motion.div
            className="
              h-full
              w-full
              origin-left
              bg-[#D6B25E]/50
            "
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: 1.6,
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.div
        className="
          absolute
          bottom-10
          text-[8px]
          uppercase
          tracking-[0.45em]
          text-white/20
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{
          delay: 1.5,
          duration: 1.2,
        }}
      >
        Personal Intelligence · EON AI
      </motion.div>

      {/* Vignette */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.5)_100%)]
        "
      />
    </main>
  );
}