"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { SoulSpace } from "@/components/soul-space/SoulSpace";

const LOADING_DURATION = 4000;

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, LOADING_DURATION);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#050505]">
      {/* APPLICATION */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <SoulSpace />
      </motion.div>

      {/* SOULMIRROR SPLASH */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="soulmirror-splash"
            className="fixed inset-0 z-[999999] flex items-center justify-center bg-[#050505]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex flex-col items-center text-center">

              {/* EON AI */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                  duration: 1,
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

              {/* SOULMIRROR */}
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 25,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  delay: 0.8,
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  mt-5
                  text-5xl
                  font-light
                  tracking-[0.08em]
                  text-[#F4F1EA]
                  sm:text-6xl
                "
              >
                SoulMirror
              </motion.h1>

              {/* LINE */}
              <motion.div
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                animate={{
                  width: 90,
                  opacity: 1,
                }}
                transition={{
                  delay: 1.7,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  mt-8
                  h-px
                  bg-[#D6B25E]/60
                "
              />

              {/* TAGLINE */}
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 2,
                  duration: 1,
                }}
                className="
                  mt-6
                  text-[9px]
                  uppercase
                  tracking-[0.45em]
                  text-white/30
                "
              >
                Reflect · Understand · Evolve
              </motion.p>

            </div>

            {/* FOOTER */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{
                delay: 2.2,
                duration: 1,
              }}
              className="
                absolute
                bottom-10
                text-[8px]
                uppercase
                tracking-[0.5em]
                text-white/20
              "
            >
              Personal Intelligence · EON AI
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}