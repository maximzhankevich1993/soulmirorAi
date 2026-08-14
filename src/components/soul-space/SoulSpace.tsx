
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

export function SoulSpace() {
  const [showOnboarding, setShowOnboarding] = useState(false);

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

  return (
    <>
      {showOnboarding && (
        <OnboardingRitual onContinue={handleOnboardingContinue} />
      )}

      <main>
        <CursorAtmosphere />

        <GlobalParticles />

        <AmbientBackground />

        <SoulMemoryLoader />

        <SoulSpaceHero />

        <EonEcosystemSection />

        <SoulDashboard />

        <DailyReflection />

        <section id="features">
          <SoulScanConsole />
        </section>

        <section id="dreams">
          <DreamConsole />

          <TarotConsole />
        </section>

        <section id="journal">
          <SoulProfile />

          <SoulJourneyTimeline />

          <LatestInsight />
        </section>

        <section id="pricing">
          <PremiumCard />
        </section>
      </main>
    </>
  );
}

