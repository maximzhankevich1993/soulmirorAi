"use client";

import { useSoulMemoryStore } from "@/store/soul-memory-store";
import { Sparkles } from "lucide-react";

const reflections = {

  Calm:
    "Today is a good day to listen more than speak.",

  Healing:
    "Old wounds don't disappear overnight. Be patient with yourself.",

  Fear:
    "Courage is not the absence of fear, but moving despite it.",

  Joy:
    "Share your energy. Someone needs your light today.",

  Focus:
    "One meaningful action today is worth more than ten unfinished ones.",

};

export function DailyReflection() {

  const { emotion } =
    useSoulMemoryStore();

  const reflection =
    reflections[
      emotion as keyof typeof reflections
    ] ??
    "Every day your soul writes a new chapter.";

  return (

    <section className="mx-auto mt-20 w-full max-w-5xl px-6">

      <div
        className="
        rounded-[36px]
        border
        border-[#D6B25E]/20
        bg-gradient-to-br
        from-[#D6B25E]/10
        to-transparent
        p-8
        backdrop-blur-2xl
        "
      >

        <div className="flex items-center gap-3">

          <Sparkles
            className="text-[#D6B25E]"
            size={24}
          />

          <p className="uppercase tracking-[0.35em] text-xs text-[#D6B25E]">
            Daily Reflection
          </p>

        </div>

        <h2 className="mt-6 text-3xl text-[#F4F1EA]">
          {reflection}
        </h2>

      </div>

    </section>

  );

}