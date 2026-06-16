"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SoulOrb } from "@/components/ui/soul-orb";

import { fadeInUp, glowPulse } from "@/lib/motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#8B5CF6]/10 blur-3xl" />
        <div className="absolute top-40 right-0 h-[400px] w-[400px] rounded-full bg-[#D6B25E]/10 blur-3xl" />
      </div>

      <Container className="relative z-10 py-24 md:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="mb-6 text-xs uppercase tracking-[0.35em] text-[#D6B25E]/70"
          >
            AI • Psychology • Archetypes • Dreams
          </motion.p>

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.1 }}
            className="font-[family:var(--font-cormorant)] text-4xl font-semibold leading-tight tracking-tight text-[#F4F1EA] md:text-6xl lg:text-7xl"
          >
            Discover your{" "}
            <span className="bg-gradient-to-r from-[#D6B25E] via-[#F4F1EA] to-[#8B5CF6] bg-clip-text text-transparent">
              inner self
            </span>{" "}
            through AI
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-sm leading-relaxed text-[#F4F1EA]/60 md:text-base"
          >
            SoulMirror AI helps you decode dreams, explore archetypes,
            and uncover hidden patterns of your subconscious through
            symbolic intelligence and advanced AI analysis.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button variant="primary">Start Soul Scan</Button>
            <Button variant="ghost">Explore Features</Button>
          </motion.div>

          {/* Soul Orb */}
          <motion.div
            variants={glowPulse}
            initial="rest"
            animate="animate"
            className="mt-20"
          >
            <SoulOrb size={260} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}