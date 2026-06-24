"use client";

import { useEffect, useState } from "react";

import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";

import type { DreamHistoryItem } from "@/types/history";

export function DreamHistorySection() {
  const [history, setHistory] = useState<DreamHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadHistory() {
      try {
        setError(null);

        const response = await fetch("/api/history/dream-analysis");

        if (!response.ok) {
          throw new Error("Failed to load dream history");
        }

        const data = await response.json();

        setHistory(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load your Dream Journal right now");
      } finally {
        setLoading(false);
      }
    }

    loadHistory();
  }, []);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const truncate = (text: string, max: number = 200) => {
    if (!text) return "";
    return text.length > max ? text.slice(0, max) + "..." : text;
  };

  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="Dream Archive"
          title="Your Dream Reflections"
          description="A collection of symbolic interpretations from your subconscious mind."
        />

        {/* LOADING */}
        {loading && (
          <p className="mt-10 text-center text-[#F4F1EA]/60">
            Decoding your subconscious...
          </p>
        )}

        {/* ERROR */}
        {error && (
          <p className="mt-10 text-center text-red-400/70">
            {error}
          </p>
        )}

        {/* EMPTY */}
        {!loading && !error && history.length === 0 && (
          <p className="mt-10 text-center text-[#F4F1EA]/60">
            No dreams recorded yet. Your subconscious is waiting to speak.
          </p>
        )}

        {/* LIST */}
        {!loading && !error && history.length > 0 && (
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
                  transition
                  hover:bg-white/[0.05]
                "
              >
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-[family:var(--font-cormorant)] text-2xl text-[#F4F1EA]">
                    Dream Reflection
                  </h3>

                  <span className="text-xs text-[#D6B25E]/70">
                    {formatDate(item.createdAt)}
                  </span>
                </div>

                <p className="mb-3 text-[#D6B25E]">
                  {item.emotion}
                </p>

                <p className="mb-3 text-[#F4F1EA]/70">
                  <span className="text-[#D6B25E]">Dream:</span>{" "}
                  {truncate(item.dream)}
                </p>

                <p className="leading-relaxed text-[#F4F1EA]/70">
                  {truncate(item.interpretation)}
                </p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}