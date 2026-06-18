"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";

export function TarotPreviewSection() {
  return (
    <section
      id="tarot"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D6B25E]/10 blur-3xl" />

        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#8B5CF6]/10 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <SectionTitle
          eyebrow="Tarot Intelligence"
          title="The cards reveal what you already know"
          description="AI-powered symbolic readings designed to uncover subconscious patterns, archetypal forces, and hidden emotional dynamics."
        />

        <div className="mt-20 flex flex-col items-center gap-12">
          {/* Card */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [-1, 1, -1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* Outer Glow */}
            <div className="absolute inset-0 -z-10 rounded-[40px] bg-[#D6B25E]/20 blur-3xl" />

            {/* Main Card */}
            <div
              className="
                relative
                h-[420px]
                w-[260px]
                overflow-hidden
                rounded-[32px]
                border
                border-[#D6B25E]/20
                bg-gradient-to-br
                from-[#09090B]
                via-white/[0.04]
                to-[#09090B]
                backdrop-blur-2xl
                shadow-[0_0_80px_rgba(214,178,94,0.15)]
              "
            >
              {/* Gradient Layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D6B25E]/5 via-transparent to-[#8B5CF6]/10" />

              {/* Frame */}
              <div className="absolute inset-4 rounded-[24px] border border-[#D6B25E]/20" />

              {/* Top Symbol */}
              <div className="absolute left-1/2 top-10 -translate-x-1/2 text-[#D6B25E]/70">
                ✦
              </div>

              {/* Center Symbol */}
              <div className="flex h-full items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[#D6B25E]/20 blur-2xl" />

                  <div className="relative text-7xl text-[#D6B25E]">
                    ☾
                  </div>
                </div>
              </div>

              {/* Bottom Label */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
                <p className="font-[family:var(--font-cormorant)] text-2xl text-[#F4F1EA]">
                  The Seeker
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.35em] text-[#D6B25E]/70">
                  Major Arcana
                </p>
              </div>

              {/* Corner Ornaments */}
              <div className="absolute left-4 top-4 h-2 w-2 rounded-full bg-[#D6B25E]" />
              <div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-[#8B5CF6]" />
              <div className="absolute bottom-4 left-4 h-2 w-2 rounded-full bg-[#8B5CF6]" />
              <div className="absolute bottom-4 right-4 h-2 w-2 rounded-full bg-[#D6B25E]" />
            </div>
          </motion.div>

          {/* Description */}
          <p className="max-w-2xl text-center text-sm leading-relaxed text-[#F4F1EA]/65 md:text-base">
            Every card is a mirror of your current inner landscape.
            SoulMirror combines symbolic tarot wisdom, archetypal
            psychology, and AI reasoning to reveal deeper meaning
            behind the questions you carry.
          </p>

          {/* CTA */}
          <Button variant="primary">
            Draw Your First Card
          </Button>
        </div>
      </Container>
    </section>
  );
}