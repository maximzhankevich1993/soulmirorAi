"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";

const mockResults = [
  {
    archetype: "The Seeker",
    emotion: "Curiosity",
    insight:
      "You are entering a period of exploration. Your subconscious is pushing you toward discovery and personal growth.",
  },
  {
    archetype: "The Sage",
    emotion: "Reflection",
    insight:
      "Your current mindset favors understanding over action. Answers emerge through observation and inner clarity.",
  },
  {
    archetype: "The Creator",
    emotion: "Inspiration",
    insight:
      "A strong creative force is active within you. This is a time to build, express, and bring ideas into reality.",
  },
];

export function SoulScanSection() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState<null | {
    archetype: string;
    emotion: string;
    insight: string;
  }>(null);

  async function handleAnalyze() {
    if (!input.trim()) return;

    setLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    const random =
      mockResults[
        Math.floor(Math.random() * mockResults.length)
      ];

    setResult(random);
    setLoading(false);
  }

  return (
    <section
      id="soul-scan"
      className="relative py-24 md:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#8B5CF6]/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#D6B25E]/10 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <SectionTitle
          eyebrow="Soul Scan"
          title="Analyze your inner state"
          description="Describe a thought, dream, emotion, or question and receive an archetypal interpretation."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl">
            <textarea
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              placeholder="I feel lost and uncertain about my future..."
              className="
                min-h-[160px]
                w-full
                resize-none
                rounded-2xl
                border
                border-white/10
                bg-black/20
                p-5
                text-[#F4F1EA]
                outline-none
                placeholder:text-[#F4F1EA]/35
              "
            />

            <div className="mt-5 flex justify-center">
              <Button
                variant="primary"
                onClick={handleAnalyze}
                disabled={loading}
              >
                {loading
                  ? "Analyzing..."
                  : "Analyze Soul"}
              </Button>
            </div>
          </div>

          <AnimatePresence>
            {result && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                }}
                className="
                  mt-8
                  overflow-hidden
                  rounded-3xl
                  border
                  border-[#D6B25E]/20
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-2xl
                "
              >
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#D6B25E]/70">
                    Archetype
                  </p>

                  <h3 className="mt-2 font-[family:var(--font-cormorant)] text-4xl text-[#F4F1EA]">
                    {result.archetype}
                  </h3>
                </div>

                <div className="mb-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#D6B25E]/70">
                    Dominant Emotion
                  </p>

                  <p className="mt-2 text-lg text-[#F4F1EA]">
                    {result.emotion}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#D6B25E]/70">
                    Insight
                  </p>

                  <p className="mt-3 leading-relaxed text-[#F4F1EA]/75">
                    {result.insight}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}