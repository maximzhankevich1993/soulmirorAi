"use client";

import { motion } from "framer-motion";

import {
  Sparkles,
  Moon,
  CreditCard,
} from "lucide-react";

import { useSoulJourney } from "@/hooks/useSoulJourney";

import { GlassCard } from "@/components/ui/GlassCard";

type JourneyType = "soul" | "dream" | "tarot";

interface JourneyItem {
  id: string;
  type: JourneyType;
  title: string;
  description: string;
  date: string;
}

const icons: Record<JourneyType, typeof Sparkles> = {
  soul: Sparkles,
  dream: Moon,
  tarot: CreditCard,
};

export function EvolutionTimeline() {
  const {
    items,
    loading,
  } = useSoulJourney();

  const journeyItems =
    items as JourneyItem[];

  return (
    <section>
      <div className="mb-10">
        <p
          className="
            text-[10px]
            uppercase
            tracking-[0.5em]
            text-[#D6B25E]
          "
        >
          Evolution Memory
        </p>

        <h2
          className="
            mt-4
            font-[family:var(--font-cormorant)]
            text-4xl
            font-light
            text-[#F4F1EA]
          "
        >
          Your Intelligence Journey
        </h2>

        <p
          className="
            mt-4
            max-w-2xl
            leading-7
            text-white/50
          "
        >
          Every interaction becomes part of your
          evolving personal intelligence system.
        </p>
      </div>

      <GlassCard
        highlight
        className="
          relative
          overflow-hidden
          p-8
          md:p-10
        "
      >
        {/* Timeline glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-10
            top-0
            h-full
            w-px
            bg-gradient-to-b
            from-[#D6B25E]/40
            via-[#D6B25E]/10
            to-transparent
          "
        />

        {/* Loading */}

        {loading && (
          <p
            className="
              text-sm
              text-white/40
            "
          >
            Synchronizing memory system...
          </p>
        )}

        {/* Empty state */}

        {!loading &&
          journeyItems.length === 0 && (
            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
              "
            >
              <p className="text-white/50">
                Your evolution journey will appear
                after your first Soul interaction.
              </p>
            </div>
          )}

        {/* Timeline */}

        {!loading &&
          journeyItems.length > 0 && (
            <div className="space-y-8">
              {journeyItems.map(
                (
                  item: JourneyItem,
                  index: number
                ) => {
                  const Icon =
                    icons[item.type];

                  return (
                    <motion.div
                      key={item.id}
                      initial={{
                        opacity: 0,
                        x: -30,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.1,
                      }}
                      className="
                        relative
                        flex
                        gap-6
                      "
                    >
                      {/* Icon */}

                      <div
                        className="
                          relative
                          z-10
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#D6B25E]/30
                          bg-[#050505]
                        "
                      >
                        <Icon
                          size={20}
                          className="text-[#D6B25E]"
                        />
                      </div>

                      {/* Content */}

                      <div
                        className="
                          flex-1
                          rounded-3xl
                          border
                          border-white/10
                          bg-white/[0.03]
                          p-6
                        "
                      >
                        <p
                          className="
                            text-[9px]
                            uppercase
                            tracking-[0.35em]
                            text-white/30
                          "
                        >
                          {item.date}
                        </p>

                        <h3
                          className="
                            mt-3
                            text-xl
                            font-light
                            text-[#F4F1EA]
                          "
                        >
                          {item.title}
                        </h3>

                        <p
                          className="
                            mt-3
                            leading-7
                            text-white/50
                          "
                        >
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                }
              )}
            </div>
          )}
      </GlassCard>
    </section>
  );
}