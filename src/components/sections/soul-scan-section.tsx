"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";

interface ScanResult {
  archetype: string;
  emotion: string;
  insight: string;
}

export function SoulScanSection() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);

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
        throw new Error(data.error || "Analysis failed");
      }

      setResult(data);
    } catch (error) {
      console.error(error);

      setResult({
        archetype: "System",
        emotion: "Error",
        insight: "SoulMirror could not complete the analysis.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="soul-scan" className="relative py-24 md:py-32">
      {/* content */}
    </section>
  );
}