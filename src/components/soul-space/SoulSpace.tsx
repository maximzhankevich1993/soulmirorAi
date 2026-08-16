
"use client";

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

  /*
   * AUTH
   */

  const handleOpenAuth = () => {
    setShowAuth(true);
  };

  const handleCloseAuth = () => {
    setShowAuth(false);
  };

  /*
   * START EXPERIENCE
   *
   * Start Experience does NOT open registration.
   * It takes the user directly to Soul Scan.
   */

  const handleStartExperience = () => {
    const soulScan = document.getElementById("features");

    if (!soulScan) {
      return;
    }

    soulScan.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {showOnboarding && (
        <OnboardingRitual
          onContinue={handleOnboardingContinue}
        />
      )}

      {/* =====================================================
          AUTH SCREEN
      ====================================================== */}

      {showAuth && (
        <div className="fixed inset-0 z-[99999]">
          <AuthScreen />

          <button
            type="button"
            onClick={handleCloseAuth}
            className="
              fixed
              right-6
              top-6
              z-[100000]
              cursor-pointer
              rounded-full
              border
              border-white/10
              bg-black/40
              px-5
              py-2.5
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-white/50
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-0.5
              hover:border-white/20
              hover:bg-white/[0.06]
              hover:text-white
              active:scale-95
            "
          >
            Close
          </button>
        </div>
      )}

      <main>
        <CursorAtmosphere />

        <GlobalParticles />

        <AmbientBackground />

        <SoulMemoryLoader />

        {/* =====================================================
            HERO
        ====================================================== */}

        <SoulSpaceHero
          onOpenAuth={handleOpenAuth}
          onStartExperience={handleStartExperience}
        />

        {/* =====================================================
            ECOSYSTEM
        ====================================================== */}

        <CinematicSection>
          <EonEcosystemSection />
        </CinematicSection>

        {/* =====================================================
            DASHBOARD
        ====================================================== */}

        <CinematicSection>
          <SoulDashboard />
        </CinematicSection>

        {/* =====================================================
            DAILY REFLECTION
        ====================================================== */}

        <CinematicSection>
          <DailyReflection />
        </CinematicSection>

        {/* =====================================================
            SOUL SCAN
        ====================================================== */}

        <CinematicSection>
          <section id="features">
            <SoulScanConsole />
          </section>
        </CinematicSection>

        {/* =====================================================
            DREAMS
        ====================================================== */}

        <CinematicSection>
          <section id="dreams">
            <DreamConsole />

            <TarotConsole />
          </section>
        </CinematicSection>

        {/* =====================================================
            JOURNAL
        ====================================================== */}

        <CinematicSection>
          <section id="journal">
            <SoulProfile />

            <SoulJourneyTimeline />

            <LatestInsight />
          </section>
        </CinematicSection>

        {/* =====================================================
            PRICING
        ====================================================== */}

        <CinematicSection>
          <section id="pricing">
            <PremiumCard />
          </section>
        </CinematicSection>
      </main>
    </>
  );
}

