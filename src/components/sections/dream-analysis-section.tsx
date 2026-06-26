"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";

interface DreamResult {
summary: string;
symbols: string[];
emotion: string;
interpretation: string;
}

export function DreamAnalysisSection() {
const [dream, setDream] = useState("");
const [loading, setLoading] = useState(false);

const [result, setResult] =
useState<DreamResult | null>(null);

async function handleAnalyze() {
if (!dream.trim()) return;


try {
  setLoading(true);

  const response = await fetch(
    "/api/dream-analysis",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dream,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.error ||
        "Dream analysis failed"
    );
  }

  setResult(data);
} catch (error) {
  console.error(error);

  setResult({
    summary:
      "Unable to analyze dream.",
    symbols: [],
    emotion: "Unknown",
    interpretation:
      "SoulMirror could not interpret this dream.",
  });
} finally {
  setLoading(false);
}


}

return ( <section
   id="dreams"
   className="relative py-24 md:py-32"
 > <div className="pointer-events-none absolute inset-0"> <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-[#8B5CF6]/10 blur-3xl" />


    <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[#D6B25E]/10 blur-3xl" />
  </div>

  <Container className="relative z-10">
    <SectionTitle
      eyebrow="Dream Analysis"
      title="Decode the language of your dreams"
      description="Describe a dream and discover the symbols, emotions and unconscious patterns hidden beneath the surface."
    />

    <div className="mx-auto mt-14 max-w-3xl">
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
          value={dream}
          onChange={(e) =>
            setDream(e.target.value)
          }
          placeholder="I was walking through a dark forest and found a glowing door..."
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
              ? "Interpreting Dream..."
              : "Analyze Dream"}
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
            transition={{
              duration: 0.4,
            }}
            className="
              mt-8
              rounded-3xl
              border
              border-[#D6B25E]/20
              bg-white/[0.03]
              p-8
              backdrop-blur-2xl
            "
          >
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#D6B25E]/70">
                Dream Summary
              </p>

              <p className="mt-3 text-[#F4F1EA]/80">
                {result.summary}
              </p>
            </div>

            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#D6B25E]/70">
                Symbols Detected
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {result.symbols.map(
                  (symbol) => (
                    <span
                      key={symbol}
                      className="
                        rounded-full
                        border
                        border-[#D6B25E]/20
                        px-4
                        py-2
                        text-sm
                        text-[#F4F1EA]
                      "
                    >
                      {symbol}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#D6B25E]/70">
                Emotional Tone
              </p>

              <p className="mt-3 text-lg text-[#F4F1EA]">
                {result.emotion}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#D6B25E]/70">
                Interpretation
              </p>

              <div className="mt-4 whitespace-pre-line leading-8 text-[#F4F1EA]/80">
                {result.interpretation}
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
