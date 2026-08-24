"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { IdentityHeader } from "./IdentityHeader";
import { SoulOrbPanel } from "./SoulOrbPanel";
import { IntelligenceModules } from "./IntelligenceModules";
import { EvolutionTimeline } from "./EvolutionTimeline";
import { PremiumPanel } from "./PremiumPanel";
import { UsagePanel } from "./UsagePanel";

interface Usage {
  soulScan: number;
  dream: number;
  tarot: number;
}

interface DashboardShellProps {
  usage: Usage;
}

export function DashboardShell({
  usage,
}: DashboardShellProps) {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050505]
        text-[#F4F1EA]
      "
    >
      {/* =====================================================
          GLOBAL ATMOSPHERE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
          overflow-hidden
        "
      >
        {/* Main golden atmosphere */}

        <div
          className="
            absolute
            left-1/2
            top-0
            h-[700px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-[#D6B25E]/[0.055]
            blur-[180px]
          "
        />

        {/* Secondary subtle light */}

        <div
          className="
            absolute
            -right-[300px]
            top-[35%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#D6B25E]/[0.025]
            blur-[180px]
          "
        />

        {/* Bottom atmosphere */}

        <div
          className="
            absolute
            -left-[300px]
            bottom-0
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#8B5CF6]/[0.015]
            blur-[180px]
          "
        />
      </div>

      {/* =====================================================
          CINEMATIC WELCOME
      ====================================================== */}

      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.015,
              filter: "blur(12px)",
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            onAnimationComplete={() => {
              setTimeout(() => {
                setShowWelcome(false);
              }, 1500);
            }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              overflow-hidden
              bg-[#050505]
            "
          >
            {/* Welcome atmosphere */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[600px]
                w-[800px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#D6B25E]/[0.035]
                blur-[180px]
              "
            />

            {/* Content */}

            <div
              className="
                relative
                z-10
                flex
                flex-col
                items-center
                text-center
              "
            >
              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                  filter: "blur(12px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.65em]
                  text-[#D6B25E]
                "
              >
                SOULMIRROR
              </motion.p>

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
                  delay: 0.45,
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  mt-7
                  h-px
                  w-20
                  origin-center
                  bg-gradient-to-r
                  from-transparent
                  via-[#D6B25E]/50
                  to-transparent
                "
              />

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 30,
                  filter: "blur(16px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  delay: 0.65,
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  mt-8
                  px-6
                  font-[family:var(--font-cormorant)]
                  text-5xl
                  font-light
                  leading-tight
                  text-[#F4F1EA]
                  sm:text-6xl
                "
              >
                Welcome back.
              </motion.h1>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  delay: 0.9,
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  mt-5
                  text-sm
                  tracking-wide
                  text-white/35
                "
              >
                Your personal intelligence space
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          DASHBOARD CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-5
          pb-24
          pt-6
          sm:px-6
          lg:px-8
        "
      >
        {/* =================================================
            IDENTITY
        ================================================== */}

        <IdentityHeader />

        {/* =================================================
            SOUL ORB
        ================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.15,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-14 sm:mt-16"
        >
          <SoulOrbPanel />
        </motion.section>

        {/* =================================================
            USAGE
        ================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.25,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-20 sm:mt-24"
        >
          <UsagePanel usage={usage} />
        </motion.section>

        {/* =================================================
            INTELLIGENCE MODULES
        ================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.35,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-20 sm:mt-24"
        >
          <IntelligenceModules />
        </motion.section>

        {/* =================================================
            EVOLUTION MEMORY
        ================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.45,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-20 sm:mt-24"
        >
          <EvolutionTimeline />
        </motion.section>

        {/* =================================================
            EON PRO
        ================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.55,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-20 sm:mt-24"
        >
          <PremiumPanel />
        </motion.section>
      </div>
    </main>
  );
}