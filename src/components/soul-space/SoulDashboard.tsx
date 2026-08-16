```tsx
"use client";

import {
  Brain,
  Heart,
  Moon,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

import { GlassCard } from "@/components/ui/GlassCard";
import { GlowIcon } from "@/components/ui/GlowIcon";
import { useSoulMemoryStore } from "@/store/soul-memory-store";

export function SoulDashboard() {
  const archetype = useSoulMemoryStore(
    (state) => state.archetype
  );

  const emotion = useSoulMemoryStore(
    (state) => state.emotion
  );

  const insight = useSoulMemoryStore(
    (state) => state.insight
  );

  const shadow = useSoulMemoryStore(
    (state) => state.shadow
  );

  const hasArchetype =
    Boolean(archetype && archetype.trim());

  const hasEmotion =
    Boolean(emotion && emotion.trim());

  const hasInsight =
    Boolean(insight && insight.trim());

  const hasShadow =
    Boolean(shadow && shadow.trim());

  const cards = [
    {
      title: "Core Archetype",
      value: hasArchetype
        ? archetype
        : "Not discovered yet",
      subtitle: hasArchetype
        ? "Soul Identity"
        : "Complete your first Soul Scan",
      icon: Brain,
      active: hasArchetype,
    },

    {
      title: "Current Emotion",
      value: hasEmotion
        ? emotion
        : "Awaiting reflection",
      subtitle: hasEmotion
        ? "Live Analysis"
        : "Your emotional state will appear here",
      icon: Heart,
      active: hasEmotion,
    },

    {
      title: "Shadow Pattern",
      value: hasShadow
        ? shadow
        : "Not revealed yet",
      subtitle: hasShadow
        ? "Inner Reflection"
        : "Discovered through deeper analysis",
      icon: Moon,
      active: hasShadow,
    },

    {
      title: "Soul Evolution",
      value: hasInsight
        ? "Growing"
        : "Beginning",
      subtitle: hasInsight
        ? "AI Memory"
        : "Your journey starts with the first insight",
      icon: Sparkles,
      active: hasInsight,
    },
  ];

  return (
    <section
      className="
        relative
        mx-auto
        mt-24
        w-full
        max-w-6xl
        px-6
      "
    >
      {/* =====================================================
          SECTION ATMOSPHERE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#D6B25E]/[0.035]
          blur-[180px]
        "
      />

      {/* =====================================================
          HEADER
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative
          z-10
          mb-14
          text-center
        "
      >
        <p
          className="
            text-[11px]
            uppercase
            tracking-[0.45em]
            text-[#D6B25E]
          "
        >
          Soul Intelligence
        </p>

        <h2
          className="
            mt-5
            font-[family:var(--font-cormorant)]
            text-5xl
            font-light
            leading-tight
            text-[#F4F1EA]
            md:text-6xl
          "
        >
          Your Inner Profile
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-white/50
          "
        >
          SoulMirror continuously learns your
          patterns, emotions and personal evolution.
        </p>
      </motion.div>

      {/* =====================================================
          CARDS
      ====================================================== */}

      <div
        className="
          relative
          z-10
          grid
          gap-6
          md:grid-cols-2
          xl:grid-cols-4
        "
      >
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.title}
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
                amount: 0.15,
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <GlassCard
                className="
                  group
                  relative
                  min-h-[250px]
                  overflow-hidden
                  p-7
                  transition-all
                  duration-700
                  ease-[cubic-bezier(0.16,1,0.3,1)]
                  hover:-translate-y-2
                  hover:border-[#D6B25E]/25
                  hover:bg-white/[0.055]
                  hover:shadow-[0_20px_80px_rgba(214,178,94,0.08)]
                "
              >
                {/* CARD GLOW */}

                <motion.div
                  initial={{
                    opacity: 0.25,
                    scale: 0.8,
                  }}
                  whileHover={{
                    opacity: 0.7,
                    scale: 1.15,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-[#D6B25E]/10
                    blur-[60px]
                  "
                />

                {/* TOP LINE */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-8
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-[#D6B25E]/20
                    to-transparent
                  "
                />

                <div className="relative z-10">
                  {/* ICON */}

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 2,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
                    }}
                    className="inline-flex"
                  >
                    <GlowIcon>
                      <Icon
                        size={22}
                        className="
                          text-[#D6B25E]
                          transition-all
                          duration-500
                          group-hover:drop-shadow-[0_0_12px_rgba(214,178,94,0.45)]
                        "
                      />
                    </GlowIcon>
                  </motion.div>

                  {/* TITLE */}

                  <p
                    className="
                      mt-6
                      text-[11px]
                      uppercase
                      tracking-[0.35em]
                      text-white/40
                    "
                  >
                    {card.title}
                  </p>

                  {/* VALUE */}

                  <motion.h3
                    layout
                    className={`
                      mt-3
                      line-clamp-2
                      text-2xl
                      font-light
                      leading-tight
                      ${
                        card.active
                          ? "text-[#F4F1EA]"
                          : "text-white/55"
                      }
                    `}
                  >
                    {card.value}
                  </motion.h3>

                  {/* SUBTITLE */}

                  <p
                    className="
                      mt-4
                      text-sm
                      leading-6
                      text-white/35
                    "
                  >
                    {card.subtitle}
                  </p>

                  {/* STATUS */}

                  {!card.active && (
                    <div
                      className="
                        mt-6
                        flex
                        items-center
                        gap-2
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#D6B25E]/40
                        "
                      />

                      <span
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.3em]
                          text-white/25
                        "
                      >
                        Awaiting data
                      </span>
                    </div>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>

      {/* =====================================================
          FOOTER STATUS
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.5,
          duration: 0.8,
        }}
        className="
          relative
          z-10
          mt-12
          flex
          justify-center
        "
      >
        <div
          className="
            flex
            items-center
            gap-3
            rounded-full
            border
            border-[#D6B25E]/10
            bg-white/[0.02]
            px-6
            py-3
            backdrop-blur-xl
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              animate-pulse
              rounded-full
              bg-[#D6B25E]/60
            "
          />

          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.4em]
              text-white/35
            "
          >
            Powered by EON Intelligence Engine
          </p>
        </div>
      </motion.div>
    </section>
  );
}
```
