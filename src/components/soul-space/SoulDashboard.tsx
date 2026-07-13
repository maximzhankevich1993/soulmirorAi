"use client";

import { Brain, Heart, Moon, Sparkles } from "lucide-react";
import { useSoulMemoryStore } from "@/store/soul-memory-store";

export function SoulDashboard() {
  const { archetype, emotion } = useSoulMemoryStore();

  const cards = [
    {
      title: "Archetype",
      value: archetype,
      icon: Brain,
      highlight: true,
    },
    {
      title: "Emotion",
      value: emotion,
      icon: Heart,
      highlight: false,
    },
    {
      title: "Soul Sessions",
      value: "∞",
      icon: Sparkles,
      highlight: false,
    },
    {
      title: "Dream Energy",
      value: "Active",
      icon: Moon,
      highlight: false,
    },
  ];

  return (
    <section className="mx-auto mt-10 w-full max-w-5xl px-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className={`
                rounded-3xl
                border
                p-5
                backdrop-blur-2xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#D6B25E]/30
                hover:bg-white/[0.05]
                ${
                  card.highlight
                    ? "border-[#D6B25E]/20 bg-gradient-to-br from-[#D6B25E]/10 to-white/[0.03] shadow-[0_0_35px_rgba(214,178,94,0.08)]"
                    : "border-white/10 bg-white/[0.03]"
                }
              `}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#D6B25E]/10">
                <Icon
                  size={20}
                  className="text-[#D6B25E]"
                />
              </div>

              <p className="text-[11px] uppercase tracking-[0.3em] text-white/40">
                {card.title}
              </p>

              <h3 className="mt-3 text-xl font-light text-[#F4F1EA]">
                {card.value}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}