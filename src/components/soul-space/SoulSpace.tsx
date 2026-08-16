
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { OnboardingRitual } from "@/components/onboarding/OnboardingRitual";
import { EonEcosystemSection } from "../../../components/sections/eon-ecosystem-section";

import { AmbientBackground } from "./AmbientBackground";
import { SoulSpaceHero } from "./SoulSpaceHero";
import { LatestInsight } from "./LatestInsight";
import { SoulProfile } from "./SoulProfile";
import { PremiumCard } from "./PremiumCard";
import { CursorAtmosphere } from "./CursorAtmosphere";
import { SoulScanConsole } from "./SoulScanConsole";
import { DreamConsole } from "./DreamConsole";
import { TarotConsole } from "./TarotConsole";
import { SoulJourneyTimeline } from "./SoulJourneyTimeline";
import { SoulMemoryLoader } from "./SoulMemoryLoader";
import { SoulDashboard } from "./SoulDashboard";
import { DailyReflection } from "./DailyReflection";
import { GlobalParticles } from "./GlobalParticles";
import { CinematicSection } from "./CinematicSection";

import { AuthScreen } from "../../../components/auth/AuthScreen";

type AuthMode = "login" | "register";

export function SoulSpace() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>("login");

  /*
   * =====================================================
   * ONBOARDING
   * =====================================================
   */

  useEffect(() => {
    const seen = localStorage.getItem("soulmirror-onboarding");

    if (!seen) {
      setShowOnboarding(true);
    }
  }, []);

  const handleOnboardingContinue = () => {
    localStorage.setItem("soulmirror-onboarding", "true");
    setShowOnboarding(false);
  };

  /*
   * =====================================================
   * AUTH
   * =====================================================
   */

  const handleOpenAuth = (mode: AuthMode) => {
    setAuthMode(mode);
    setShowAuth(true);
  };

  const handleCloseAuth = () => {
    setShowAuth(false);
  };

  return (
    <>
      {/* =====================================================
          ONBOARDING
      ====================================================== */}

      <AnimatePresence>
        {showOnboarding && (
          <OnboardingRitual
            onContinue={handleOnboardingContinue}
          />
        )}
      </AnimatePresence>

      {/* =====================================================
          MAIN SOUL SPACE
      ====================================================== */}

      <main
        className={`
          relative
          min-h-screen
          overflow-hidden
          bg-[#050505]
          transition-[filter,transform,opacity]
          duration-1000
          ease-[cubic-bezier(0.16,1,0.3,1)]
          ${
            showAuth
              ? "scale-[0.985] opacity-40 blur-[2px]"
              : "scale-100 opacity-100 blur-0"
          }
        `}
      >
        {/* =================================================
            01 — GLOBAL BACKGROUND
        ================================================== */}

        <AmbientBackground />

        {/* =================================================
            02 — CINEMATIC GOLDEN LINES
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[1]
            overflow-hidden
          "
        >
          {/* TOP GOLDEN FLOW */}

          <motion.div
            animate={{
              x: ["-25%", "10%", "-25%"],
              y: ["8vh", "14vh", "8vh"],
              scaleX: [1, 1.15, 1],
              opacity: [0.18, 0.32, 0.18],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[-20%]
              top-[6%]
              h-[180px]
              w-[140%]
              rounded-[50%]
              border-t-[7px]
              border-[#D6B25E]/40
              blur-[18px]
              rotate-[-3deg]
            "
          />

          {/* MAIN GOLDEN FLOW */}

          <motion.div
            animate={{
              x: ["-35%", "15%", "-35%"],
              y: ["0vh", "10vh", "0vh"],
              scaleX: [1, 1.2, 1],
              opacity: [0.2, 0.38, 0.2],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[-30%]
              top-[22%]
              h-[220px]
              w-[160%]
              rounded-[50%]
              border-t-[9px]
              border-[#D6B25E]/45
              blur-[24px]
              rotate-[2deg]
            "
          />

          {/* CENTER GOLDEN WAVE */}

          <motion.div
            animate={{
              x: ["-20%", "20%", "-20%"],
              y: ["-6vh", "8vh", "-6vh"],
              scaleX: [1.05, 1.25, 1.05],
              opacity: [0.16, 0.3, 0.16],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[-20%]
              top-[42%]
              h-[260px]
              w-[150%]
              rounded-[50%]
              border-t-[10px]
              border-[#D6B25E]/35
              blur-[30px]
              rotate-[-2deg]
            "
          />

          {/* LOWER GOLDEN WAVE */}

          <motion.div
            animate={{
              x: ["-30%", "10%", "-30%"],
              y: ["5vh", "-7vh", "5vh"],
              scaleX: [1, 1.18, 1],
              opacity: [0.14, 0.28, 0.14],
            }}
            transition={{
              duration: 26,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[-25%]
              top-[65%]
              h-[230px]
              w-[155%]
              rounded-[50%]
              border-t-[8px]
              border-[#D6B25E]/35
              blur-[26px]
              rotate-[3deg]
            "
          />

          {/* BOTTOM GOLDEN WAVE */}

          <motion.div
            animate={{
              x: ["-20%", "18%", "-20%"],
              y: ["-4vh", "6vh", "-4vh"],
              scaleX: [1, 1.22, 1],
              opacity: [0.12, 0.25, 0.12],
            }}
            transition={{
              duration: 34,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[-20%]
              top-[84%]
              h-[200px]
              w-[145%]
              rounded-[50%]
              border-t-[8px]
              border-[#D6B25E]/30
              blur-[28px]
              rotate-[-2deg]
            "
          />

          {/* SOFT GOLDEN CORE */}

          <motion.div
            animate={{
              x: ["-15%", "15%", "-15%"],
              opacity: [0.06, 0.12, 0.06],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[-15%]
              top-[31%]
              h-[180px]
              w-[130%]
              rounded-full
              bg-[#D6B25E]/20
              blur-[90px]
            "
          />
        </div>

        {/* =================================================
            03 — GLOBAL PARTICLES
        ================================================== */}

        <div className="relative z-[2]">
          <GlobalParticles />
        </div>

        {/* =================================================
            04 — CURSOR ATMOSPHERE
        ================================================== */}

        <div className="relative z-[3]">
          <CursorAtmosphere />
        </div>

        {/* =================================================
            05 — MEMORY / LOADING ATMOSPHERE
        ================================================== */}

        <div className="relative z-[4]">
          <SoulMemoryLoader />
        </div>

        {/* =================================================
            06 — HERO
        ================================================== */}

        <div className="relative z-[5]">
          <SoulSpaceHero
            onOpenAuth={handleOpenAuth}
          />
        </div>

        {/* =================================================
            07 — EON ECOSYSTEM
        ================================================== */}

        <CinematicSection>
          <section id="ecosystem">
            <EonEcosystemSection />
          </section>
        </CinematicSection>

        {/* =================================================
            08 — SOUL DASHBOARD
        ================================================== */}

        <CinematicSection>
          <SoulDashboard />
        </CinematicSection>

        {/* =================================================
            09 — DAILY REFLECTION
        ================================================== */}

        <CinematicSection>
          <DailyReflection />
        </CinematicSection>

        {/* =================================================
            10 — SOUL SCAN
        ================================================== */}

        <CinematicSection>
          <section id="features">
            <SoulScanConsole />
          </section>
        </CinematicSection>

        {/* =================================================
            11 — DREAMS + TAROT
        ================================================== */}

        <CinematicSection>
          <section id="dreams">
            <DreamConsole />

            <TarotConsole />
          </section>
        </CinematicSection>

        {/* =================================================
            12 — JOURNAL
        ================================================== */}

        <CinematicSection>
          <section id="journal">
            <SoulProfile />

            <SoulJourneyTimeline />

            <LatestInsight />
          </section>
        </CinematicSection>

        {/* =================================================
            13 — PRICING
        ================================================== */}

        <CinematicSection>
          <section id="pricing">
            <PremiumCard />
          </section>
        </CinematicSection>
      </main>

      {/* =====================================================
          AUTH CINEMATIC EXPERIENCE
      ====================================================== */}

      <AnimatePresence mode="wait">
        {showAuth && (
          <motion.div
            key="soulmirror-auth"
            initial={{
              opacity: 0,
              scale: 1.025,
              filter: "blur(14px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 1.015,
              filter: "blur(12px)",
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              fixed
              inset-0
              z-[99999]
              overflow-y-auto
              bg-[#050505]
            "
          >
            {/* AUTH BACKDROP */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              className="
                pointer-events-none
                absolute
                inset-0
                bg-black/[0.82]
              "
            />

            {/* GOLD ATMOSPHERE */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.65,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 1.2,
              }}
              transition={{
                duration: 1.6,
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
                bg-[#D6B25E]/[0.025]
                blur-[180px]
              "
            />

            {/* SECONDARY LIGHT */}

            <motion.div
              initial={{
                opacity: 0,
                x: -150,
                y: 100,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              exit={{
                opacity: 0,
                x: 150,
                y: -100,
              }}
              transition={{
                duration: 1.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                pointer-events-none
                absolute
                left-[-250px]
                top-[20%]
                h-[500px]
                w-[500px]
                rounded-full
                bg-white/[0.012]
                blur-[160px]
              "
            />

            {/* AUTH SCREEN */}

            <motion.div
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.975,
                filter: "blur(16px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: -25,
                scale: 1.015,
                filter: "blur(12px)",
              }}
              transition={{
                duration: 1.15,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative
                z-10
                min-h-screen
              "
            >
              <AuthScreen mode={authMode} />
            </motion.div>

            {/* CLOSE */}

            <motion.button
              type="button"
              onClick={handleCloseAuth}
              initial={{
                opacity: 0,
                x: 25,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                x: 25,
                filter: "blur(8px)",
              }}
              transition={{
                delay: 0.6,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                fixed
                right-5
                top-5
                z-[100000]
                cursor-pointer
                rounded-full
                border
                border-white/[0.08]
                bg-white/[0.025]
                px-5
                py-2.5
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white/45
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-0.5
                hover:border-white/[0.2]
                hover:bg-white/[0.06]
                hover:text-white
                active:scale-95
                sm:right-8
                sm:top-8
              "
            >
              Close
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

