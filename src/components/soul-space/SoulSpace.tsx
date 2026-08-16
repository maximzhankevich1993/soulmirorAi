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

export function SoulSpace() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

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

  const handleOpenAuth = () => {
    setShowAuth(true);
  };

  const handleCloseAuth = () => {
    setShowAuth(false);
  };

  return (
    <>
      {/* =========================
          ONBOARDING
      ========================== */}

      {showOnboarding && (
        <OnboardingRitual
          onContinue={handleOnboardingContinue}
        />
      )}

      {/* =========================
          MAIN APPLICATION
      ========================== */}

      <main>
        <CursorAtmosphere />

        <GlobalParticles />

        <AmbientBackground />

        <SoulMemoryLoader />

        {/* HERO */}

        <SoulSpaceHero
          onOpenAuth={handleOpenAuth}
        />

        {/* ECOSYSTEM */}

        <CinematicSection>
          <EonEcosystemSection />
        </CinematicSection>

        {/* DASHBOARD */}

        <CinematicSection>
          <SoulDashboard />
        </CinematicSection>

        {/* DAILY REFLECTION */}

        <CinematicSection>
          <DailyReflection />
        </CinematicSection>

        {/* SOUL SCAN */}

        <CinematicSection>
          <section id="features">
            <SoulScanConsole />
          </section>
        </CinematicSection>

        {/* DREAMS */}

        <CinematicSection>
          <section id="dreams">
            <DreamConsole />
            <TarotConsole />
          </section>
        </CinematicSection>

        {/* JOURNAL */}

        <CinematicSection>
          <section id="journal">
            <SoulProfile />

            <SoulJourneyTimeline />

            <LatestInsight />
          </section>
        </CinematicSection>

        {/* PRICING */}

        <CinematicSection>
          <section id="pricing">
            <PremiumCard />
          </section>
        </CinematicSection>
      </main>

      {/* =========================
          AUTH TRANSITION
      ========================== */}

      <AnimatePresence mode="wait">
        {showAuth && (
          <motion.div
            key="auth-screen"
            initial={{
              opacity: 0,
              scale: 1.04,
              y: 30,
              filter: "blur(18px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 1.02,
              y: -25,
              filter: "blur(14px)",
            }}
            transition={{
              duration: 1.15,
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
            {/* Atmospheric transition glow */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
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
                duration: 1.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[600px]
                w-[900px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#D6B25E]/[0.035]
                blur-[180px]
              "
            />

            {/* Auth */}

            <AuthScreen />

            {/* Close */}

            <motion.button
              type="button"
              onClick={handleCloseAuth}
              initial={{
                opacity: 0,
                x: 30,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                x: 30,
                filter: "blur(8px)",
              }}
              transition={{
                delay: 0.55,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
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