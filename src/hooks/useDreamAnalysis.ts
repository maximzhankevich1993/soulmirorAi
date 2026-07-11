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

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState<DreamResult | null>(null);


  const setOrbState =
    useSoulOrbStore(
      (state) => state.setState
    );
  
  const setMemory =
  useSoulMemoryStore(
    (state) => state.setMemory
  );


  async function analyzeDream(
    dream: string
  ) {

    try {

      setLoading(true);


      const response =
        await fetch(
          "/api/dream-analysis",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              dream,
            }),
          }
        );


      if (!response.ok) {
        throw new Error(
          "Dream analysis failed"
        );
      }


      const data =
        await response.json();


      setResult(data);

      setMemory({

  emotion:
    data.emotion,

  insight:
    data.interpretation,

});


      const soulState =
        getSoulState(
          data.emotion,
          data.summary
        );


      setOrbState(
        soulState
      );


      return data;


    } catch (error) {

      console.error(
        "DREAM ANALYSIS ERROR:",
        error
      );

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