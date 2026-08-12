"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Moon,
  Brain,
  Layers,
} from "lucide-react";

import { useSoulJourney } from "@/hooks/useSoulJourney";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowIcon } from "@/components/ui/GlowIcon";

type JourneyItem = {
  id?: string;
  type: "soul" | "dream" | "tarot";
  title: string;
  description: string;
  date: string;
};

const icons: Record<
  JourneyItem["type"],
  typeof Sparkles
> = {
  soul: Sparkles,
  dream: Moon,
  tarot: Layers,
};

export function SoulJourneyTimeline() {
  const { items } = useSoulJourney();

  const journeyItems = (items ?? []) as JourneyItem[];

  return (
    <section
      className="
        relative
        mx-auto
        mt-24
        w-full
        max-w-5xl
        px-6
      "
    >
      <GlassCard
        highlight
        className="
          relative
          overflow-hidden
          p-8
          md:p-10
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-80
            w-80
            rounded-full
            bg-[#D6B25E]/10
            blur-[130px]
          "
        />

        <div
          className="
            relative
            z-10
            flex
            items-center
            gap-5
          "
        >
          <GlowIcon size="lg">
            <Brain
              size={26}
              className="text-[#D6B25E]"
            />
          </GlowIcon>

          <div>
            <p
              className="
                text-[11px]
                uppercase
                tracking-[0.45em]
                text-[#D6B25E]
              "
            >
              EON Memory System
            </p>

            <h2
              className="
                mt-2
                font-[family:var(--font-cormorant)]
                text-4xl
                font-light
                text-[#F4F1EA]
              "
            >
              Your Evolution Journey
            </h2>

            <p
              className="
                mt-3
                text-sm
                leading-7
                text-white/40
              "
            >
              Every interaction becomes part of your
              personal intelligence timeline.
            </p>
          </div>
        </div>

        {journeyItems.length === 0 && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              relative
              z-10
              mt-10
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-7
            "
          >
            <p
              className="
                text-center
                text-sm
                leading-8
                text-white/50
              "
            >
              Your journey has not started yet.

              <br />

              Complete your first Soul Scan,
              Dream Analysis or Tarot Reading
              to begin building your personal
              AI memory.
            </p>
          </motion.div>
        )}

        {journeyItems.length > 0 && (
          <div
            className="
              relative
              z-10
              mt-12
              space-y-6
            "
          >
            <div
              className="
                absolute
                bottom-0
                left-[34px]
                top-0
                w-px
                bg-gradient-to-b
                from-[#D6B25E]/40
                via-white/10
                to-transparent
              "
            />

            {journeyItems.map(
              (item: JourneyItem, index: number) => {
                const Icon =
                  icons[item.type] ?? Sparkles;

                return (
                  <motion.div
                    key={item.id ?? `${item.type}-${index}`}
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
                      duration: 0.6,
                      delay: index * 0.08,
                    }}
                    className="
                      relative
                      flex
                      gap-5
                    "
                  >
                    <div
                      className="
                        relative
                        z-10
                      "
                    >
                      <GlowIcon>
                        <Icon
                          size={20}
                          className="text-[#D6B25E]"
                        />
                      </GlowIcon>
                    </div>

                    <div
                      className="
                        flex-1
                        rounded-3xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        p-6
                        transition-all
                        duration-500
                        hover:border-[#D6B25E]/20
                      "
                    >
                      <p
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.35em]
                          text-white/40
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
                          leading-8
                          text-white/60
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

        <div
          className="
            relative
            z-10
            mt-8
            border-t
            border-white/10
            pt-5
          "
        >
          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.4em]
              text-white/30
            "
          >
            Powered by EON Intelligence Engine •
            Memory Evolution Layer
          </p>
        </div>
      </GlassCard>
    </section>
  );
}