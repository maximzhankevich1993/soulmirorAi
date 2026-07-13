"use client";

import { AmbientBackground } from "./AmbientBackground";
import { SoulSpaceHero } from "./SoulSpaceHero";
import { LatestInsight } from "./LatestInsight";
import { SoulProfile } from "./SoulProfile";
import { PremiumCard } from "./PremiumCard";
import { CursorGlow } from "./CursorGlow";
import { SoulScanConsole } from "./SoulScanConsole";
import { DreamConsole } from "./DreamConsole";
import { TarotConsole } from "./TarotConsole";
import { SoulJourneyTimeline } from "./SoulJourneyTimeline";
import { SoulMemoryLoader } from "./SoulMemoryLoader";
import { useState, useEffect } from "react";
import { OnboardingRitual } from "@/components/onboarding/OnboardingRitual";
import { SoulDashboard } from "./SoulDashboard";
import { DailyReflection } from "./DailyReflection";
import { GlobalParticles } from "./GlobalParticles";


export function SoulSpace() {

const [showOnboarding, setShowOnboarding] =
  useState(false);

useEffect(() => {

  const seen =
    localStorage.getItem(
      "soulmirror-onboarding"
    );

  if (!seen) {
    setShowOnboarding(true);
  }

}, []);

  return (

    <>

{showOnboarding && (

  <OnboardingRitual

    onContinue={() => {

      localStorage.setItem(
        "soulmirror-onboarding",
        "true"
      );

      setShowOnboarding(false);

    }}

  />

)}

     <main>

 <CursorGlow />

<GlobalParticles />

<AmbientBackground />

  <SoulMemoryLoader />

  <SoulSpaceHero />

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