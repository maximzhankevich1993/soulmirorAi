
"use client";

import { Sparkles } from "lucide-react";

import { useSoulMemoryStore } from "@/store/soul-memory-store";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowIcon } from "@/components/ui/GlowIcon";


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

    <section
      className="
      mx-auto
      mt-16
      w-full
      max-w-4xl
      px-6
      "
    >

      <GlassCard
        highlight
        className="p-6 md:p-7"
      >

        <div
          className="
          flex
          items-center
          gap-4
          "
        >

          <GlowIcon>

            <Sparkles
              size={20}
              className="text-[#D6B25E]"
            />

          </GlowIcon>


          <div>

            <p
              className="
              text-[11px]
              uppercase
              tracking-[0.35em]
              text-[#D6B25E]
              "
            >
              Daily Reflection
            </p>

            <p
              className="
              mt-1
              text-xs
              text-white/40
              "
            >
              AI Soul Guidance
            </p>

          </div>


        </div>


        <h2
          className="
          mt-6
          max-w-3xl
          text-2xl
          font-light
          leading-relaxed
          text-[#F4F1EA]
          md:text-3xl
          "
        >
          {reflection}
        </h2>


      </GlassCard>

    </section>

  );
}

