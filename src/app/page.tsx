"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { SoulSpace } from "@/components/soul-space/SoulSpace";

const LOADING_TIME = 4000;

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, LOADING_TIME);

    return () => window.clearTimeout(timer);
  }, []);

  // LOADING SCREEN
  if (loading) {
    return (
      <div
        className="
          fixed
          inset-0
          z-[999999]
          flex
          items-center
          justify-center
          overflow-hidden
          bg-[#050505]
        "
      >
        {/* Golden atmosphere */}

        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#D6B25E]
            blur-[180px]
          "
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.06, 0.16, 0.06],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Content */}

        <div className="relative z-10 flex flex-col items-center text-center">

          {/* EON AI */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
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
              tracking-[0.7em]
              text-[#D6B25E]
            "
          >
            EON AI
          </motion.div>

          {/* SoulMirror */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
              filter: "blur(12px)",
              letterSpacing: "0.3em",
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
              text-5xl
              font-light
              text-[#F4F1EA]
              sm:text-6xl
            "
          >
            SoulMirror
          </motion.h1>

          {/* Golden line */}

          <motion.div
            initial={{
              scaleX: 0,
              opacity: 0,
            }}
            animate={{
              scaleX: 1,
              opacity: 1,
            }}
            transition={{
              delay: 1.2,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-8
              h-px
              w-32
              origin-center
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
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.6,
              duration: 1,
            }}
            className="
              mt-7
              text-[9px]
              uppercase
              tracking-[0.45em]
              text-white/40
            "
          >
            Reflect · Understand · Evolve
          </motion.p>

        </div>

        {/* Footer */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
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
        </motion.div>
      </div>
    );
  }

  // APPLICATION
  return (
    <motion.main
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <SoulSpace />
    </motion.main>
  );
}