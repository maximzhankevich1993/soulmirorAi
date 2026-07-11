"use client";

import { useState } from "react";
import { useSoulOrbStore } from "@/store/soul-orb-store";
import { getSoulState } from "@/components/soul-space/SoulOrbAI";
import { useSoulMemoryStore } from "@/store/soul-memory-store";

interface SoulResult {
  archetype: string;
  emotion: string;
  shadow: string;
  reflection: string;
  insight: string;
}


export function useSoulAnalysis() {

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState<SoulResult | null>(null);


  const setOrbState =
    useSoulOrbStore(
      (state) => state.setState
    );

const setMemory =
  useSoulMemoryStore(
    (state) => state.setMemory
  );


  async function analyze(
    text: string
  ) {

    try {

      setLoading(true);


      const response =
        await fetch(
          "/api/soul-scan",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              text,
            }),
          }
        );


      if (!response.ok) {
        throw new Error(
          "Soul analysis failed"
        );
      }


      const data =
        await response.json();


      setResult(data);

setMemory({
  archetype: data.archetype ?? "Unknown",
  emotion: data.emotion ?? "Calm",
  insight: data.insight ?? "",
  shadow: data.shadow ?? "",
});


      const soulState =
        getSoulState(
          data.emotion,
          data.archetype
        );


      setOrbState(
        soulState
      );


      return data;


    } catch (error) {

      console.error(
        "SOUL ANALYSIS ERROR:",
        error
      );

      throw error;

    } finally {

      setLoading(false);

    }

  }


  return {
    analyze,
    loading,
    result,
  };
}