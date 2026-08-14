"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { SoulSpace } from "@/components/soul-space/SoulSpace";

const LOADING_TIME = 4000;

export default function Page() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowLoader(false);
    }, LOADING_TIME);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505]">

      {/* APPLICATION */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: showLoader ? 0 : 1,
        }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <SoulSpace />
      </motion.div>

      {/* EON / SOULMIRROR CINEMATIC SCREEN */}

      <AnimatePresence>
        {showLoader && (
          <motion.div
            key="soulmirror-loader"
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
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* GOLDEN AMBIENT LIGHT */}

            <motion.div
              className="
                pointer-events-none
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
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: [0.05, 0.16, 0.08],
                scale: [0.9, 1.15, 1],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
              }}
            />

            {/* CONTENT */}

            <div className="relative z-10 flex flex-col items-center text-center">

              {/* EON AI */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                  filter: "blur(10px)",
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

              {/* SOULMIRROR */}

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
                  delay: 0.4,
                  duration: 1.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  mt-5
                  text-[52px]
                  font-light
                  text-[#F4F1EA]
                  md:text-[76px]
                "
              >
                SoulMirror
              </motion.h1>

              {/* GOLD LINE */}

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
                  delay: 1.3,
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

              {/* TAGLINE */}

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
                  delay: 1.6,
                  duration: 1,
                }}
                className="
                  mt-8
                  text-[9px]
                  uppercase
                  tracking-[0.45em]
                  text-white/40
                "
              >
                Reflect · Understand · Evolve
              </motion.p>

            </div>

            {/* FOOTER */}

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

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}