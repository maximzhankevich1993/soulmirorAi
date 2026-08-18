
"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Moon,
  Brain,
  Layers,
  ArrowUpRight,
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

const typeLabels: Record<JourneyItem["type"], string> = {
  soul: "Soul Intelligence",
  dream: "Dream Intelligence",
  tarot: "Symbolic Intelligence",
};

export function SoulJourneyTimeline() {
  const { items } = useSoulJourney();

  const journeyItems = (items ?? []) as JourneyItem[];

  return (
    <section
      className="
        relative
        mx-auto
        mt-32
        w-full
        max-w-6xl
        px-6
      "
    >
      {/* Ambient atmosphere */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]/[0.025]
          blur-[160px]
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: "-80px",
        }}
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <GlassCard
          highlight
          className="
            group
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/[0.08]
            bg-[#080808]/80
            p-7
            backdrop-blur-3xl
            md:p-12
          "
        >
          {/* Top glow */}

          <motion.div
            animate={{
              opacity: [0.2, 0.38, 0.2],
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              -right-32
              -top-32
              h-[420px]
              w-[420px]
              rounded-full
              bg-[#D6B25E]/[0.06]
              blur-[120px]
            "
          />

          {/* Top line */}

          <div
            className="
              pointer-events-none
              absolute
              left-10
              right-10
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#D6B25E]/30
              to-transparent
            "
          />

          {/* Header */}

          <div
            className="
              relative
              z-10
              flex
              items-start
              justify-between
              gap-6
            "
          >
            <div className="flex items-center gap-5">
              <GlowIcon size="lg">
                <Brain
                  size={25}
                  className="text-[#D6B25E]"
                />
              </GlowIcon>

              <div>
                <p
                  className="
                    text-[10px]
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
                    tracking-tight
                    text-[#F4F1EA]
                    md:text-5xl
                  "
                >
                  Your Evolution Journey
                </h2>

                <p
                  className="
                    mt-4
                    max-w-xl
                    text-sm
                    leading-7
                    text-white/40
                  "
                >
                  Every reflection, dream and insight
                  becomes part of your evolving
                  intelligence profile.
                </p>
              </div>
            </div>

            {journeyItems.length > 0 && (
              <div
                className="
                  hidden
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/[0.07]
                  bg-white/[0.025]
                  px-4
                  py-2
                  sm:flex
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    animate-pulse
                    rounded-full
                    bg-[#D6B25E]
                  "
                />

                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.3em]
                    text-white/30
                  "
                >
                  Memory Active
                </span>
              </div>
            )}
          </div>

          {/* Empty state */}

          {journeyItems.length === 0 && (
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative
                z-10
                mt-12
                overflow-hidden
                rounded-[32px]
                border
                border-white/[0.07]
                bg-white/[0.025]
                p-8
                md:p-12
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-48
                  w-48
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#D6B25E]/[0.05]
                  blur-[90px]
                "
              />

              <div className="relative z-10 text-center">
                <div
                  className="
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#D6B25E]/15
                    bg-[#D6B25E]/[0.05]
                  "
                >
                  <Sparkles
                    size={25}
                    className="text-[#D6B25E]"
                  />
                </div>

                <p
                  className="
                    mt-7
                    text-[10px]
                    uppercase
                    tracking-[0.45em]
                    text-[#D6B25E]/80
                  "
                >
                  Your journey begins here
                </p>

                <h3
                  className="
                    mt-4
                    font-[family:var(--font-cormorant)]
                    text-3xl
                    font-light
                    text-[#F4F1EA]
                    md:text-4xl
                  "
                >
                  Nothing has been written yet.
                </h3>

                <p
                  className="
                    mx-auto
                    mt-5
                    max-w-lg
                    text-sm
                    leading-7
                    text-white/40
                  "
                >
                  Complete your first Soul Scan,
                  Dream Analysis or Tarot Reading.
                  Your discoveries will gradually
                  become part of your personal
                  intelligence journey.
                </p>
              </div>
            </motion.div>
          )}

          {/* Timeline */}

          {journeyItems.length > 0 && (
            <div
              className="
                relative
                z-10
                mt-14
              "
            >
              {/* Timeline line */}

              <div
                className="
                  absolute
                  bottom-8
                  left-[23px]
                  top-8
                  w-px
                  bg-gradient-to-b
                  from-[#D6B25E]/40
                  via-white/[0.08]
                  to-transparent
                  md:left-[27px]
                "
              />

              <div className="space-y-5">
                {journeyItems.map(
                  (item: JourneyItem, index: number) => {
                    const Icon =
                      icons[item.type] ?? Sparkles;

                    return (
                      <motion.div
                        key={
                          item.id ??
                          `${item.type}-${index}`
                        }
                        initial={{
                          opacity: 0,
                          y: 25,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                          margin: "-50px",
                        }}
                        transition={{
                          duration: 0.7,
                          delay: index * 0.08,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="
                          group/item
                          relative
                          flex
                          gap-5
                          md:gap-6
                        "
                      >
                        {/* Timeline node */}

                        <div className="relative z-10 shrink-0">
                          <div
                            className="
                              flex
                              h-12
                              w-12
                              items-center
                              justify-center
                              rounded-2xl
                              border
                              border-white/[0.08]
                              bg-[#090909]
                              shadow-[0_0_30px_rgba(214,178,94,0.04)]
                              transition-all
                              duration-500
                              group-hover/item:border-[#D6B25E]/30
                              group-hover/item:bg-[#D6B25E]/[0.06]
                              md:h-14
                              md:w-14
                            "
                          >
                            <Icon
                              size={20}
                              className="
                                text-[#D6B25E]
                                transition-transform
                                duration-500
                                group-hover/item:scale-110
                              "
                            />
                          </div>
                        </div>

                        {/* Content */}

                        <div
                          className="
                            relative
                            min-w-0
                            flex-1
                            overflow-hidden
                            rounded-[28px]
                            border
                            border-white/[0.07]
                            bg-white/[0.025]
                            p-6
                            transition-all
                            duration-500
                            group-hover/item:-translate-y-1
                            group-hover/item:border-[#D6B25E]/20
                            group-hover/item:bg-white/[0.035]
                            group-hover/item:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                            md:p-7
                          "
                        >
                          {/* Hover glow */}

                          <div
                            className="
                              pointer-events-none
                              absolute
                              -right-12
                              -top-12
                              h-32
                              w-32
                              rounded-full
                              bg-[#D6B25E]/[0.035]
                              blur-3xl
                              opacity-0
                              transition-opacity
                              duration-700
                              group-hover/item:opacity-100
                            "
                          />

                          <div
                            className="
                              relative
                              z-10
                              flex
                              items-start
                              justify-between
                              gap-4
                            "
                          >
                            <div>
                              <p
                                className="
                                  text-[9px]
                                  uppercase
                                  tracking-[0.35em]
                                  text-[#D6B25E]/70
                                "
                              >
                                {typeLabels[item.type]}
                              </p>

                              <p
                                className="
                                  mt-2
                                  text-[9px]
                                  uppercase
                                  tracking-[0.3em]
                                  text-white/25
                                "
                              >
                                {item.date}
                              </p>
                            </div>

                            <ArrowUpRight
                              size={15}
                              className="
                                shrink-0
                                text-white/15
                                transition-all
                                duration-500
                                group-hover/item:-translate-y-0.5
                                group-hover/item:translate-x-0.5
                                group-hover/item:text-[#D6B25E]/70
                              "
                            />
                          </div>

                          <h3
                            className="
                              relative
                              z-10
                              mt-5
                              text-xl
                              font-light
                              text-[#F4F1EA]
                              transition-colors
                              duration-500
                              group-hover/item:text-white
                            "
                          >
                            {item.title}
                          </h3>

                          <p
                            className="
                              relative
                              z-10
                              mt-3
                              max-w-3xl
                              text-sm
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
            </div>
          )}

          {/* Footer */}

          <div
            className="
              relative
              z-10
              mt-10
              border-t
              border-white/[0.06]
              pt-6
            "
          >
            <div
              className="
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.4em]
                  text-white/25
                "
              >
                EON Intelligence Engine
              </p>

              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.35em]
                  text-white/20
                "
              >
                Memory Evolution Layer
              </p>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
}

