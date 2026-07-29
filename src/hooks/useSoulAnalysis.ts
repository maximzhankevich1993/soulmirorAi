"use client";

import { useState } from "react";

import {
  useSoulOrbStore,
} from "@/store/soul-orb-store";

import {
  getSoulState,
} from "@/components/soul-space/SoulOrbAI";

import {
  useSoulMemoryStore,
} from "@/store/soul-memory-store";

import {
  useJourneyStore,
} from "@/store/journey-store";

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
    useState<SoulResult | null>(
      null
    );

  const setOrbState =
    useSoulOrbStore(
      (state) => state.setState
    );

  const setOrbData =
    useSoulOrbStore(
      (state) => state.setSoulData
    );

  const setMemory =
    useSoulMemoryStore(
      (state) => state.setMemory
    );

  async function analyze(
    text: string
  ) {

    if (!text.trim())
      return null;

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

      const soulResult: SoulResult = {

        archetype:
          data.archetype ??
          "Explorer",

        emotion:
          data.emotion ??
          "Calm",

        shadow:
          data.shadow ??
          "",

        reflection:
          data.reflection ??
          "",

        insight:
          data.insight ??
          "",

      };

      setResult(
        soulResult
      );

      /*
        Memory
      */

      setMemory({

        archetype:
          soulResult.archetype,

        emotion:
          soulResult.emotion,

        insight:
          soulResult.insight,

        shadow:
          soulResult.shadow,

      });

      /*
        Timeline
      */

      useJourneyStore
        .getState()
        .addItem({

          id:
            crypto.randomUUID(),

          type:
            "soul",

          title:
            soulResult.archetype,

          description:
            soulResult.insight,

          date:
            new Intl.DateTimeFormat(
              "en-US",
              {

                month: "short",

                day: "numeric",

                year: "numeric",

              }
            ).format(
              new Date()
            ),

        });

      /*
        Orb Data
      */

      setOrbData({

        archetype:
          soulResult.archetype,

        emotion:
          soulResult.emotion,

        insight:
          soulResult.insight,

      });

      /*
        Orb State
      */

      const newState =
        getSoulState(

          soulResult.emotion,

          soulResult.archetype

        );

      setOrbState(
        newState
      );

      return soulResult;

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