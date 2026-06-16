import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { SoulScanSection } from "@/components/sections/soul-scan-section";
import { TarotPreviewSection } from "@/components/sections/tarot-preview-section";
import { PricingSection } from "@/components/sections/pricing-section";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <HeroSection />

      <FeaturesSection />

      <SoulScanSection />

      <TarotPreviewSection />

      <PricingSection />
    </main>
  );
}