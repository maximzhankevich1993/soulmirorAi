"use client";

import { motion } from "framer-motion";

import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { SoulScanSection } from "@/components/sections/soul-scan-section";
import { HistorySection } from "@/components/sections/history-section";
import { DreamAnalysisSection } from "@/components/sections/dream-analysis-section";
import { TarotPreviewSection } from "@/components/sections/tarot-preview-section";
import { PricingSection } from "@/components/sections/pricing-section";

import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function Page() {
  return (
    <motion.main
      initial="hidden"
      animate="show"
      variants={staggerContainer}
      className="relative"
    >
      {/* Hero */}
      <motion.div variants={fadeInUp}>
        <HeroSection />
      </motion.div>

      {/* Features */}
      <motion.div variants={fadeInUp}>
        <FeaturesSection />
      </motion.div>

      {/* Soul Scan */}
      <motion.div variants={fadeInUp}>
        <SoulScanSection />
      </motion.div>

      {/* History */}
      <motion.div variants={fadeInUp}>
        <HistorySection />
      </motion.div>

      {/* Dream Analysis */}
      <motion.div variants={fadeInUp}>
        <DreamAnalysisSection />
      </motion.div>

      {/* Tarot */}
      <motion.div variants={fadeInUp}>
        <TarotPreviewSection />
      </motion.div>

      {/* Pricing */}
      <motion.div variants={fadeInUp}>
        <PricingSection />
      </motion.div>
    </motion.main>
  );
}