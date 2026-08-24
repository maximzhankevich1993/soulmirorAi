"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

import { supabase } from "../../src/lib/supabaseClient";

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
  const router = useRouter();

  const [showWelcome, setShowWelcome] = useState(true);
  const [userName, setUserName] = useState("there");
  const [closingWelcome, setClosingWelcome] = useState(false);

  /*
   * =========================================
   * LOAD USER NAME
   * =========================================
   */

  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/login");
        return;
      }

      const metadataName =
        user.user_metadata?.name ||
        user.user_metadata?.full_name ||
        "";

      const firstName =
        metadataName.trim().split(" ")[0] ||
        user.email?.split("@")[0] ||
        "there";

      setUserName(firstName);
    }

    loadUser();
  }, [router]);

  /*
   * =========================================
   * WELCOME SCREEN TIMING
   * =========================================
   */

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setClosingWelcome(true);

      window.setTimeout(() => {
        setShowWelcome(false);
      }, 900);
    }, 3000);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

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

        {/* Right atmosphere */}

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
              opacity: closingWelcome ? 0 : 1,
              scale: closingWelcome ? 1.025 : 1,
              filter: closingWelcome
                ? "blur(14px)"
                : "blur(0px)",
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
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
            {/* =================================================
                CINEMATIC LIGHT
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.55,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[650px]
                w-[900px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#D6B25E]/[0.035]
                blur-[180px]
              "
            />

            {/* Secondary light */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.6,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.35,
                duration: 2.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[42%]
                h-[350px]
                w-[550px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-white/[0.012]
                blur-[120px]
              "
            />

            {/* =================================================
                CONTENT
            ================================================== */}

            <div
              className="
                relative
                z-10
                flex
                flex-col
                items-center
                px-6
                text-center
              "
            >
              {/* Brand */}

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
                  text-[10px]
                  uppercase
                  tracking-[0.7em]
                  text-[#D6B25E]
                  sm:text-[11px]
                "
              >
                SOULMIRROR
              </motion.p>

              {/* Line */}

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
                  delay: 0.4,
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

              {/* Welcome */}

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 35,
                  filter: "blur(18px)",
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
                  font-[family:var(--font-cormorant)]
                  text-5xl
                  font-light
                  leading-tight
                  text-[#F4F1EA]
                  sm:text-6xl
                  md:text-7xl
                "
              >
                Welcome back,{" "}
                <span className="text-[#D6B25E]">
                  {userName}.
                </span>
              </motion.h1>

              {/* Subtitle */}

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
                  delay: 1,
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

              {/* Bottom indicator */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 1.5,
                  duration: 1,
                }}
                className="
                  mt-12
                  flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    h-1
                    w-1
                    rounded-full
                    bg-[#D6B25E]
                    shadow-[0_0_10px_rgba(214,178,94,0.8)]
                  "
                />

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.4em]
                    text-white/20
                  "
                >
                  Intelligence online
                </span>

                <span
                  className="
                    h-1
                    w-1
                    rounded-full
                    bg-[#D6B25E]
                    shadow-[0_0_10px_rgba(214,178,94,0.8)]
                  "
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          DASHBOARD CONTENT
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: showWelcome ? 0 : 1,
        }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
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
            delay: 0.1,
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
            delay: 0.2,
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
            delay: 0.3,
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
            delay: 0.4,
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
            delay: 0.5,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-20 sm:mt-24"
        >
          <PremiumPanel />
        </motion.section>
      </motion.div>
    </main>
  );
}