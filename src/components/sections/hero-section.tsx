"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D6B25E]/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-[#8B5CF6]/10 blur-3xl" />
      </div>

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#D6B25E]/70">
            SoulMirror AI
          </p>

          {/* Title */}
          <h1 className="font-[family:var(--font-cormorant)] text-5xl leading-tight text-[#F4F1EA] md:text-7xl">
            Discover your
            <span className="block text-[#D6B25E]">inner archetype</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#F4F1EA]/70">
            AI-powered self-reflection, dream analysis, tarot insight and
            shadow work — all in one mystical interface.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button variant="primary">Start Reflection</Button>
            <Button variant="secondary">Explore Features</Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}