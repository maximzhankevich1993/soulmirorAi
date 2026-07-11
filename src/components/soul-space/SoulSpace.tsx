"use client";

import { AmbientBackground } from "./AmbientBackground";
import { SoulSpaceHero } from "./SoulSpaceHero";
import { JourneyCard } from "./JourneyCard";
import { LatestInsight } from "./LatestInsight";
import { SoulProfile } from "./SoulProfile";
import { JourneyTimeline } from "./JourneyTimeline";
import { PremiumCard } from "./PremiumCard";
import { CursorGlow } from "./CursorGlow";
import { SoulScanConsole } from "./SoulScanConsole";
import { DreamConsole } from "./DreamConsole";
import { TarotConsole } from "./TarotConsole";
import { SoulJourneyTimeline } from "./SoulJourneyTimeline";

export function SoulSpace() {
  return (
    <>
      <CursorGlow />

      <AmbientBackground />

      <main className="relative overflow-x-hidden">
        <SoulSpaceHero />

        <SoulScanConsole />

        <DreamConsole />

        <TarotConsole />

        <SoulProfile />

         <SoulJourneyTimeline />

        <JourneyCard />

        <LatestInsight />

        <SoulProfile />

        <JourneyTimeline />

        <PremiumCard />
      </main>
    </>
  );
}