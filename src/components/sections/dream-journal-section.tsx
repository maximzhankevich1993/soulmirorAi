"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";

interface DreamJournalItem {
  id: string;
  title: string;
  content: string;
  emotion: string;
  createdAt: string;
}

export function DreamJournalSection() {
  const [dream, setDream] = useState("");
  const [emotion, setEmotion] = useState("");
  const [entries, setEntries] = useState<DreamJournalItem[]>([]);

  function addEntry() {
    if (!dream.trim()) return;

    const newEntry: DreamJournalItem = {
      id: crypto.randomUUID(),
      title: "Dream Entry",
      content: dream,
      emotion: emotion || "Unknown",
      createdAt: new Date().toISOString(),
    };

    setEntries((prev) => [newEntry, ...prev]);
    setDream("");
    setEmotion("");
  }

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <section id="dream-journal" className="relative py-24 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="Dream Journal"
          title="Record your inner world"
          description="Write your dreams and track emotional patterns over time."
        />

        {/* INPUT */}
        <div className="mt-12 mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
          <textarea
            value={dream}
            onChange={(e) => setDream(e.target.value)}
            placeholder="Describe your dream..."
            className="min-h-[140px] w-full rounded-2xl border border-white/10 bg-black/20 p-4 text-[#F4F1EA] outline-none"
          />

          <input
            value={emotion}
            onChange={(e) => setEmotion(e.target.value)}
            placeholder="Emotion (optional)"
            className="mt-4 w-full rounded-2xl border border-white/10 bg-black/20 p-3 text-[#F4F1EA] outline-none"
          />

          <div className="mt-4 flex justify-center">
            <Button onClick={addEntry} variant="primary">
              Save Dream
            </Button>
          </div>
        </div>

        {/* LIST */}
        <div className="mt-12 space-y-6">
          <AnimatePresence>
            {entries.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
              >
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg text-[#F4F1EA]">{item.title}</h3>
                  <span className="text-xs text-[#D6B25E]/70">
                    {formatDate(item.createdAt)}
                  </span>
                </div>

                <p className="mb-2 text-[#D6B25E]">{item.emotion}</p>

                <p className="text-[#F4F1EA]/70 leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}