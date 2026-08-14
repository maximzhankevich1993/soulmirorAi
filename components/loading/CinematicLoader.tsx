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
        z-[99999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#050505]
        text-[#F4F1EA]
      "
    >
      {/* Background */}
      <div className="absolute inset-0">
        <LoaderGlow />
        <LoaderParticles />
      </div>

      {/* Main content */}
      <div
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
            filter: "blur(12px)",
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
          <LoaderOrb />
        </motion.div>

        {/* Brand */}
        <motion.div
          className="mt-12 text-center"
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
            delay: 0.65,
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.65em]
              text-[#D6B25E]
            "
          >
            EON AI
          </p>

          <h1
            className="
              mt-4
              font-[family:var(--font-cormorant)]
              text-5xl
              font-light
              tracking-[0.04em]
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
              tracking-[0.45em]
              text-white/35
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.15,
              duration: 1.2,
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
            delay: 1.25,
            duration: 0.8,
          }}
        >
          <motion.div
            className="
              h-full
              w-full
              origin-left
              bg-[#D6B25E]/60
            "
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: 1.35,
              duration: 1.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </motion.div>
      </div>

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
        animate={{ opacity: 0.45 }}
        transition={{
          delay: 1.3,
          duration: 1.5,
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