"use client";

import { useEffect, useState } from "react";

import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";

import type { SoulScanHistoryItem } from "@/types/history";

export function HistorySection() {
  const [history, setHistory] = useState<SoulScanHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadHistory() {
      try {
        setError(null);

        // ✅ FIX: правильный endpoint
        const response = await fetch("/api/soul-scan");

        if (!response.ok) {
          throw new Error("Failed to load history");
        }

        const data = await response.json();

        setHistory(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load your Soul Journey right now");
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

  const truncate = (text: string, max: number = 220) => {
    if (!text) return "";
    return text.length > max ? text.slice(0, max) + "..." : text;
  };

  return (
    <section id="history" className="relative py-24 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="Soul Journey"
          title="Your Previous Insights"
          description="A timeline of your personal reflections and archetypal discoveries."
        />

        {/* LOADING */}
        {loading && (
          <p className="mt-10 text-center text-[#F4F1EA]/60">
            Listening to your inner world...
          </p>
        )}

        {/* ERROR */}
        {error && (
          <p className="mt-10 text-center text-red-400/70">
            {error}
          </p>
        )}

        {/* EMPTY STATE */}
        {!loading && !error && history.length === 0 && (
          <p className="mt-10 text-center text-[#F4F1EA]/60">
            No reflections yet. Your Soul Journey begins with your first insight.
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
                    {item.archetype}
                  </h3>

                  <span className="text-xs text-[#D6B25E]/70">
                    {formatDate(item.createdAt)}
                  </span>
                </div>

                <p className="mb-3 text-[#D6B25E]">
                  {item.emotion}
                </p>

                <p className="leading-relaxed text-[#F4F1EA]/70">
                  {truncate(item.insight)}
                </p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}