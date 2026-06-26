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

        const response = await fetch("/api/history/soul-scan");

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

    return text.length > max
      ? text.slice(0, max) + "..."
      : text;
  };

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

        {/* Loading */}
        {loading && (
          <p className="mt-10 text-center text-[#F4F1EA]/60">
            Listening to your inner world...
          </p>
        )}

        {/* Error */}
        {error && (
          <p className="mt-10 text-center text-red-400/70">
            {error}
          </p>
        )}

        {/* Empty */}
        {!loading &&
          !error &&
          history.length === 0 && (
            <p className="mt-10 text-center text-[#F4F1EA]/60">
              No reflections yet. Your Soul Journey
              begins with your first insight.
            </p>
          )}

        {/* History */}
        {!loading &&
          !error &&
          history.length > 0 && (
            <div className="mt-14 space-y-8">
              {history.map((item) => (
                <div
                  key={item.id}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-gradient-to-br
                    from-white/[0.05]
                    via-white/[0.03]
                    to-white/[0.02]
                    p-7
                    backdrop-blur-2xl
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#D6B25E]/30
                    hover:bg-white/[0.05]
                    hover:shadow-[0_20px_60px_rgba(214,178,94,0.12)]
                  "
                >
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                      bg-gradient-to-br
                      from-[#D6B25E]/5
                      via-transparent
                      to-[#8B5CF6]/5
                    "
                  />

                  <div className="relative z-10">
                    <div className="mb-5 flex items-center justify-between">
                      <h3 className="font-[family:var(--font-cormorant)] text-3xl tracking-wide text-[#F4F1EA]">
                        {item.archetype}
                      </h3>

                      <span className="text-xs uppercase tracking-wider text-[#D6B25E]/70">
                        {formatDate(item.createdAt)}
                      </span>
                    </div>

                    <p className="mb-5 inline-flex rounded-full border border-[#D6B25E]/20 bg-[#D6B25E]/10 px-3 py-1 text-sm text-[#D6B25E]">
                      {item.emotion}
                    </p>

                    <p className="leading-8 text-[#F4F1EA]/75">
                      {truncate(item.insight)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
      </Container>
    </section>
  );
}