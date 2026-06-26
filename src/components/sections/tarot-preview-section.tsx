"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";

interface TarotResult {
  card: string;
  meaning: string;
  guidance: string;
}

export function TarotPreviewSection() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TarotResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleDrawCard() {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/tarot", {
        method: "POST",
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.error || "Tarot reading failed");
      }

      if (!data || !data.card) {
        throw new Error("Invalid response from server");
      }

      setResult({
        card: data.card,
        meaning: data.meaning ?? "No meaning provided",
        guidance: data.guidance ?? "Trust your intuition",
      });
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="tarot"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D6B25E]/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#8B5CF6]/10 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <SectionTitle
          eyebrow="Tarot Intelligence"
          title="The cards reveal what you already know"
          description="Draw a card and receive an AI-powered symbolic interpretation."
        />

        <div className="mt-20 flex flex-col items-center gap-12">
          {/* CARD */}
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
            <div className="absolute inset-0 -z-10 rounded-[40px] bg-[#D6B25E]/20 blur-3xl" />

            <div className="relative h-[420px] w-[260px] overflow-hidden rounded-[32px] border border-[#D6B25E]/20 bg-gradient-to-br from-[#09090B] via-white/[0.04] to-[#09090B] backdrop-blur-2xl">
              <div className="absolute inset-4 rounded-[24px] border border-[#D6B25E]/20" />

              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl text-[#D6B25E]">☾</div>

                  <p className="mt-8 font-[family:var(--font-cormorant)] text-3xl text-[#F4F1EA]">
                    {result?.card ?? "SoulMirror"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* BUTTON */}
          <Button
            variant="primary"
            onClick={handleDrawCard}
            disabled={loading}
          >
            {loading ? "Drawing Card..." : "Draw Your Card"}
          </Button>

          {/* ERROR */}
          {error && (
            <p className="text-red-400/80 text-sm">{error}</p>
          )}

          {/* RESULT */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="w-full max-w-3xl rounded-3xl border border-[#D6B25E]/20 bg-white/[0.03] p-8 backdrop-blur-2xl"
              >
                <div className="mb-8">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#D6B25E]/70">
                    Card Drawn
                  </p>

                  <h3 className="mt-2 font-[family:var(--font-cormorant)] text-4xl text-[#F4F1EA]">
                    {result.card}
                  </h3>
                </div>

                <div className="mb-8">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#D6B25E]/70">
                    Meaning
                  </p>

                  <div className="mt-4 whitespace-pre-line leading-8 text-[#F4F1EA]/80">
                    {result.meaning}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#D6B25E]/70">
                    Guidance
                  </p>

                  <p className="mt-4 text-lg text-[#F4F1EA]">
                    {result.guidance}
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