"use client";

import { useState } from "react";

import { useSoulOrbStore } from "@/store/soul-orb-store";
import { getSoulState } from "@/components/soul-space/SoulOrbAI";
import { useSoulMemoryStore } from "@/store/soul-memory-store";

interface DreamResult {
  summary: string;
  symbols: string[];
  emotion: string;
  interpretation: string;
}

export function useDreamAnalysis() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DreamResult | null>(null);

  const setOrbState = useSoulOrbStore((state) => state.setState);

  const setOrbData = useSoulOrbStore((state) => state.setSoulData);

  const setMemory = useSoulMemoryStore((state) => state.setMemory);

  async function analyzeDream(dream: string) {
    if (!dream.trim()) return null;

    try {
      setLoading(true);

      const response = await fetch("/api/dream-analysis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dream,
        }),
      });

      if (!response.ok) {
        throw new Error("Dream analysis failed");
      }

      const data = await response.json();

      const dreamResult: DreamResult = {
        summary: data.summary ?? "",
        symbols: data.symbols ?? [],
        emotion: data.emotion ?? "Calm",
        interpretation: data.interpretation ?? "",
      };

      setResult(dreamResult);

      // Memory
      setMemory({
        emotion: dreamResult.emotion,
        insight: dreamResult.interpretation,
      });

      // Soul Orb Intelligence
      setOrbData({
        archetype: "Dream Walker",
        emotion: dreamResult.emotion,
        insight: dreamResult.interpretation,
      });

      // Orb visual state
      const newState = getSoulState(
        dreamResult.emotion,
        dreamResult.summary
      );

      setOrbState(newState);

      return dreamResult;
    } catch (error) {
      console.error("DREAM ANALYSIS ERROR:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  return {
    analyzeDream,
    loading,
    result,
  };
}