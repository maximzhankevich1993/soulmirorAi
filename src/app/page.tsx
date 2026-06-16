import { Navbar } from "@/components/layout/navbar";

import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { SoulScanSection } from "@/components/sections/soul-scan-section";
import { TarotPreviewSection } from "@/components/sections/tarot-preview-section";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <FeaturesSection />
        <SoulScanSection />
        <TarotPreviewSection />
      </main>
    </>
  );
}