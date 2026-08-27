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
   * =====================================================
   * LOAD USER
   * =====================================================
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
   * =====================================================
   * CINEMATIC INTRO
   * =====================================================
   */

  useEffect(() => {
    const closeTimer = window.setTimeout(() => {
      setClosingWelcome(true);

      window.setTimeout(() => {
        setShowWelcome(false);
      }, 1000);
    }, 3200);

    return () => {
      window.clearTimeout(closeTimer);
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
          GLOBAL BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
          overflow-hidden
        "
      >
        {/* Top cinematic glow */}

        <div
          className="
            absolute
            left-1/2
            top-[-280px]
            h-[700px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-[#D6B25E]/[0.035]
            blur-[180px]
          "
        />

        {/* Right glow */}

        <div
          className="
            absolute
            right-[-350px]
            top-[30%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#D6B25E]/[0.018]
            blur-[180px]
          "
        />

        {/* Bottom glow */}

        <div
          className="
            absolute
            bottom-[-300px]
            left-[-300px]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#8B5CF6]/[0.012]
            blur-[180px]
          "
        />

        {/* Very subtle center light */}

        <div
          className="
            absolute
            left-1/2
            top-[55%]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/[0.006]
            blur-[150px]
          "
        />
      </div>

      {/* =====================================================
          CINEMATIC WELCOME
      ===================================================== */}

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
                ? "blur(16px)"
                : "blur(0px)",
            }}
            transition={{
              duration: 1,
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
            {/* Intro glow */}

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
                duration: 2.2,
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
                delay: 0.25,
                duration: 2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[43%]
                h-[350px]
                w-[550px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-white/[0.012]
                blur-[120px]
              "
            />

            {/* Intro content */}

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
                  y: 18,
                  filter: "blur(12px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 1.1,
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

              {/* Greeting */}

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
                  duration: 1.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  mt-8
                  max-w-[1000px]
                  font-[family:var(--font-cormorant)]
                  text-5xl
                  font-light
                  leading-[1.05]
                  text-[#F4F1EA]
                  sm:text-6xl
                  md:text-7xl
                  lg:text-8xl
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
                  y: 18,
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
                  mt-6
                  text-sm
                  tracking-wide
                  text-white/35
                "
              >
                Your personal intelligence space
              </motion.p>

              {/* Online indicator */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1.5,
                  duration: 0.8,
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
                    shadow-[0_0_12px_rgba(214,178,94,0.8)]
                  "
                />

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.45em]
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
                    shadow-[0_0_12px_rgba(214,178,94,0.8)]
                  "
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          DASHBOARD
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: showWelcome ? 0 : 1,
        }}
        transition={{
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          pb-32
          pt-6
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* =================================================
            TOP SPACE
        ================================================== */}

        <div className="h-4 sm:h-8" />

        {/* =================================================
            IDENTITY
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.1,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <IdentityHeader />
        </motion.div>

        {/* =================================================
            SOUL STATE
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.18,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-20 sm:mt-28"
        >
          <SoulOrbPanel />
        </motion.div>

        {/* =================================================
            DIVIDER
        ================================================== */}

        <DashboardDivider />

        {/* =================================================
            USAGE
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.25,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <UsagePanel usage={usage} />
        </motion.div>

        {/* =================================================
            DIVIDER
        ================================================== */}

        <DashboardDivider />

        {/* =================================================
            INTELLIGENCE
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.32,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <IntelligenceModules />
        </motion.div>

        {/* =================================================
            DIVIDER
        ================================================== */}

        <DashboardDivider />

        {/* =================================================
            EVOLUTION
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.39,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <EvolutionTimeline />
        </motion.div>

        {/* =================================================
            DIVIDER
        ================================================== */}

        <DashboardDivider />

        {/* =================================================
            PREMIUM
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.46,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <PremiumPanel />
        </motion.div>

        {/* =================================================
            FOOT SPACE
        ================================================== */}

        <div className="h-10" />
      </motion.div>
    </main>
  );
}

/*
 * =========================================================
 * DASHBOARD DIVIDER
 * =========================================================
 */

function DashboardDivider() {
  return (
    <div
      className="
        relative
        my-20
        flex
        items-center
        justify-center
        sm:my-28
      "
    >
      <div
        className="
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-white/[0.08]
          to-transparent
        "
      />

      <div
        className="
          absolute
          h-1
          w-1
          rounded-full
          bg-[#D6B25E]/50
          shadow-[0_0_12px_rgba(214,178,94,0.35)]
        "
      />
    </div>
  );
}