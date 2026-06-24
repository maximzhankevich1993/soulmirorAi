"use client";

import { useEffect, useState } from "react";

import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";

interface SoulScanHistory {
  id: string;
  archetype: string;
  emotion: string;
  insight: string;
  createdAt: string;
}

export function HistorySection() {
  const [history, setHistory] = useState<SoulScanHistory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadHistory() {
      try {
        const response = await fetch(
  "/api/soul-scan"
);
        );

        const data = await response.json();

        setHistory(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadHistory();
  }, []);

  return (
    <section
      id="history"
      className="relative py-24 md:py-32"
    >
      <Container>
        <SectionTitle
          eyebrow="Soul Journey"
          title="Your Previous Insights"
          description="A timeline of your personal reflections and archetypal discoveries."
        />

        {loading ? (
          <p className="mt-10 text-center text-[#F4F1EA]/60">
            Loading...
          </p>
        ) : (
          <div className="mt-14 space-y-6">
            {history.map((item) => (
              <div
                key={item.id}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-6
                  backdrop-blur-xl
                "
              >
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-[family:var(--font-cormorant)] text-2xl text-[#F4F1EA]">
                    {item.archetype}
                  </h3>

                  <span className="text-xs text-[#D6B25E]/70">
                    {new Date(
                      item.createdAt
                    ).toLocaleDateString()}
                  </span>
                </div>

                <p className="mb-3 text-[#D6B25E]">
                  {item.emotion}
                </p>

                <p className="leading-relaxed text-[#F4F1EA]/70">
                  {item.insight}
                </p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}