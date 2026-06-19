"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";

interface ScanResult {
  archetype: string;
  emotion: string;
  shadow: string;
  reflection: string;
  insight: string;
}

export function SoulScanSection() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [result, setResult] =
    useState<ScanResult | null>(null);

  async function handleAnalyze() {
    if (!input.trim()) return;

    try {
      setLoading(true);

      const response = await fetch("/api/soul-scan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: input,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Analysis failed"
        );
      }

      setResult(data);
    } catch (error) {
      console.error(error);

      setResult({
        archetype: "System",
        emotion: "Error",
        shadow: "",
        reflection: "",
        insight:
          "SoulMirror could not complete the analysis.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="soul-scan"
      className="relative py-24 md:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#8B5CF6]/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#D6B25E]/10 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <SectionTitle
          eyebrow="Soul Scan"
          title="Analyze your inner state"
          description="Describe a dream, emotion, thought, or life situation and receive a deep archetypal interpretation."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          {/* Input Card */}
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-6
              backdrop-blur-2xl
            "
          >
            <textarea
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              placeholder="Describe what is happening inside you..."
              className="
                min-h-[180px]
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

            <div className="mt-6 flex justify-center">
              <Button
                variant="primary"
                onClick={handleAnalyze}
                disabled={loading}
              >
                {loading
                  ? "Analyzing Soul..."
                  : "Analyze Soul"}
              </Button>
            </div>
          </div>

          {/* Result */}
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
                transition={{
                  duration: 0.4,
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
                {/* Archetype */}
                <div className="mb-8">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#D6B25E]/70">
                    Archetype
                  </p>

                  <h3 className="mt-3 font-[family:var(--font-cormorant)] text-5xl text-[#F4F1EA]">
                    {result.archetype}
                  </h3>
                </div>

                {/* Emotion */}
                <div className="mb-8">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#D6B25E]/70">
                    Dominant Emotion
                  </p>

                  <p className="mt-3 text-xl text-[#F4F1EA]">
                    {result.emotion}
                  </p>
                </div>

                {/* Shadow */}
                {result.shadow && (
                  <div className="mb-8">
                    <p className="text-xs uppercase tracking-[0.35em] text-[#D6B25E]/70">
                      Shadow Pattern
                    </p>

                    <p className="mt-3 leading-relaxed text-[#F4F1EA]/75">
                      {result.shadow}
                    </p>
                  </div>
                )}

                {/* Reflection */}
                {result.reflection && (
                  <div className="mb-8">
                    <p className="text-xs uppercase tracking-[0.35em] text-[#D6B25E]/70">
                      Reflection Question
                    </p>

                    <p className="mt-3 text-lg italic text-[#F4F1EA]">
                      {result.reflection}
                    </p>
                  </div>
                )}

                {/* Insight */}
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#D6B25E]/70">
                    SoulMirror Insight
                  </p>

                  <div className="mt-4 whitespace-pre-line leading-8 text-[#F4F1EA]/80">
                    {result.insight}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}