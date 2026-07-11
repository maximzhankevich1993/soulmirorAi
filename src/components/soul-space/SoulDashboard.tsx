"use client";

import { Brain, Heart, Moon, Sparkles } from "lucide-react";
import { useSoulMemoryStore } from "@/store/soul-memory-store";

export function SoulDashboard() {

  const {
    archetype,
    emotion,
  } = useSoulMemoryStore();

  const cards = [

    {
      title: "Archetype",
      value: archetype,
      icon: Brain,
    },

    {
      title: "Emotion",
      value: emotion,
      icon: Heart,
    },

    {
      title: "Soul Sessions",
      value: "∞",
      icon: Sparkles,
    },

    {
      title: "Dream Energy",
      value: "Active",
      icon: Moon,
    },

  ];

  return (

    <section className="mx-auto mt-16 w-full max-w-6xl px-6">

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => {

          const Icon = card.icon;

          return (

            <div
              key={card.title}
              className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-6
              backdrop-blur-2xl
              "
            >

              <Icon
                size={28}
                className="mb-5 text-[#D6B25E]"
              />

              <p className="text-xs uppercase tracking-widest text-white/40">
                {card.title}
              </p>

              <h3 className="mt-3 text-2xl text-[#F4F1EA]">
                {card.value}
              </h3>

            </div>

          );

        })}

      </div>

    </section>

  );

}