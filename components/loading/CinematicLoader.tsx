"use client";

import { motion } from "framer-motion";

import { LoaderGlow } from "./LoaderGlow";
import { LoaderParticles } from "./LoaderParticles";
import { LoaderOrb } from "./LoaderOrb";

export function CinematicLoader() {
  return (
    <motion.main
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
      initial={{
        opacity: 1,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Background atmosphere */}
      <motion.div
        className="absolute inset-0"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.8,
          ease: "easeOut",
        }}
      >
        <LoaderGlow />
        <LoaderParticles />
      </motion.div>

      {/* Main cinematic composition */}
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
          scale: 0.96,
          filter: "blur(12px)",
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
      >
        {/* Orb */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.82,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.25,
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
            y: 20,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.85,
            duration: 1.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* EON AI */}
          <motion.p
            className="
              text-[9px]
              uppercase
              tracking-[0.55em]
              text-[#D6B25E]
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
              duration: 1,
            }}
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
            className="
              mt-5
              text-[9px]
              uppercase
              tracking-[0.4em]
              text-white/35
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.35,
              duration: 1.1,
              ease: "easeOut",
            }}
          >
            Reflect · Understand · Evolve
          </motion.p>
        </motion.div>

        {/* Progress line */}
        <motion.div
          className="
            mt-12
            h-px
            w-24
            overflow-hidden
            bg-white/[0.08]
          "
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.55,
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
            initial={{
              scaleX: 0,
            }}
            animate={{
              scaleX: 1,
            }}
            transition={{
              delay: 1.65,
              duration: 1.4,
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
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: [0, 0.4, 0.4],
        }}
        transition={{
          delay: 1.4,
          duration: 1.4,
          ease: "easeOut",
        }}
      >
        Personal Intelligence · EON AI
      </motion.div>

      {/* Soft vignette */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.45)_100%)]
        "
      />
    </motion.main>
  );
}