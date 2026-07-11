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


export function SoulSpace() {

  return (

    <>

      <main>

        <CursorGlow />

        <AmbientBackground />

        <SoulMemoryLoader />

        <SoulSpaceHero />

        <SoulScanConsole />

        <DreamConsole />

        <TarotConsole />

        <SoulProfile />

        <SoulJourneyTimeline />

        <LatestInsight />

        <PremiumCard />

      </main>

    </>

  );
}