
"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Brain,
  Heart,
  Moon,
  Eye,
  Quote,
  ArrowUpRight,
} from "lucide-react";

import { useSoulMemoryStore } from "@/store/soul-memory-store";

import { GlassCard } from "@/components/ui/GlassCard";
import { GlowIcon } from "@/components/ui/GlowIcon";

export function SoulProfile() {
  const {
    archetype,
    emotion,
    insight,
    shadow,
    reflection,
  } = useSoulMemoryStore();

  const items = [
    {
      title: "Core Archetype",
      value: archetype || "Awaiting Discovery",
      subtitle: "Identity Pattern",
      icon: Sparkles,
      color: "text-[#D6B25E]",
      glow: "bg-[#D6B25E]/[0.055]",
    },
    {
      title: "Current State",
      value: emotion || "Balanced",
      subtitle: "Emotional Intelligence",
      icon: Heart,
      color: "text-pink-300",
      glow: "bg-pink-400/[0.04]",
    },
    {
      title: "AI Insight",
      value:
        insight ||
        "Complete your first Soul Scan to reveal your personal intelligence.",
      subtitle: "Deep Analysis",
      icon: Brain,
      color: "text-purple-300",
      glow: "bg-purple-400/[0.045]",
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
          ATMOSPHERE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[520px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]/[0.025]
          blur-[150px]
        "
      />

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
          margin: "-80px",
        }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <GlassCard
          highlight
          className="
            group/profile
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/[0.08]
            bg-[#080808]/80
            p-7
            backdrop-blur-3xl
            md:p-10
          "
        >
          {/* =================================================
              MAIN GLOW
          ================================================== */}

          <motion.div
            animate={{
              opacity: [0.22, 0.38, 0.22],
              scale: [1, 1.08, 1],
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
              h-[430px]
              w-[430px]
              rounded-full
              bg-[#D6B25E]/[0.055]
              blur-[130px]
            "
          />

          {/* =================================================
              TOP LIGHT
          ================================================== */}

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

          {/* =================================================
              HEADER
          ================================================== */}

          <div
            className="
              relative
              z-10
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div className="flex items-center gap-5">
              <GlowIcon size="lg">
                <Moon
                  size={27}
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
                  EON Identity System
                </p>

                <h2
                  className="
                    mt-2
                    font-[family:var(--font-cormorant)]
                    text-4xl
                    font-light
                    tracking-[-0.02em]
                    text-[#F4F1EA]
                    md:text-[42px]
                  "
                >
                  Your Living Profile
                </h2>

                <p
                  className="
                    mt-3
                    max-w-xl
                    text-sm
                    leading-7
                    text-white/40
                  "
                >
                  A constantly evolving intelligence profile
                  built from your emotions, memories and patterns.
                </p>
              </div>
            </div>

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
                Profile Active
              </span>
            </div>
          </div>

          {/* =================================================
              PROFILE CARDS
          ================================================== */}

          <div
            className="
              relative
              z-10
              mt-10
              grid
              gap-4
              md:grid-cols-3
            "
          >
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 24,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.15 + index * 0.1,
                    duration: 0.75,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    group/card
                    relative
                    cursor-pointer
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    p-6
                    transition-all
                    duration-700
                    hover:border-[#D6B25E]/20
                    hover:bg-white/[0.04]
                  "
                >
                  {/* Card glow */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      -right-12
                      -top-12
                      h-32
                      w-32
                      rounded-full
                      blur-[55px]
                      opacity-0
                      transition-all
                      duration-700
                      group-hover/card:opacity-100
                      ${item.glow}
                    `}
                  />

                  {/* Card light */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-x-8
                      top-0
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-white/[0.08]
                      to-transparent
                      opacity-0
                      transition-opacity
                      duration-700
                      group-hover/card:opacity-100
                    "
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-2xl
                          border
                          border-white/[0.07]
                          bg-white/[0.035]
                          transition-all
                          duration-700
                          group-hover/card:border-[#D6B25E]/20
                          group-hover/card:bg-[#D6B25E]/[0.06]
                        "
                      >
                        <Icon
                          size={21}
                          className={`
                            transition-transform
                            duration-700
                            group-hover/card:scale-110
                            ${item.color}
                          `}
                        />
                      </div>

                      <ArrowUpRight
                        size={15}
                        className="
                          text-white/10
                          transition-all
                          duration-700
                          group-hover/card:-translate-y-0.5
                          group-hover/card:translate-x-0.5
                          group-hover/card:text-[#D6B25E]/60
                        "
                      />
                    </div>

                    <p
                      className="
                        mt-7
                        text-[9px]
                        uppercase
                        tracking-[0.35em]
                        text-white/30
                      "
                    >
                      {item.title}
                    </p>

                    <p
                      className="
                        mt-3
                        line-clamp-4
                        min-h-[112px]
                        text-lg
                        font-light
                        leading-7
                        text-[#F4F1EA]
                      "
                    >
                      {item.value}
                    </p>

                    <div
                      className="
                        mt-5
                        h-px
                        w-8
                        bg-white/10
                        transition-all
                        duration-700
                        group-hover/card:w-14
                        group-hover/card:bg-[#D6B25E]/40
                      "
                    />

                    <p
                      className="
                        mt-4
                        text-[9px]
                        uppercase
                        tracking-[0.25em]
                        text-white/25
                      "
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* =================================================
              REFLECTION
          ================================================== */}

          {reflection && (
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
              transition={{
                delay: 0.45,
                duration: 0.8,
              }}
              className="
                group/reflection
                relative
                z-10
                mt-5
                overflow-hidden
                rounded-[28px]
                border
                border-[#D6B25E]/15
                bg-[#D6B25E]/[0.035]
                p-6
                transition-all
                duration-700
                hover:border-[#D6B25E]/25
                hover:bg-[#D6B25E]/[0.05]
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  top-1/2
                  h-40
                  w-40
                  -translate-y-1/2
                  rounded-full
                  bg-[#D6B25E]/[0.06]
                  blur-[70px]
                  opacity-0
                  transition-opacity
                  duration-700
                  group-hover/reflection:opacity-100
                "
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <Quote
                    size={18}
                    className="text-[#D6B25E]"
                  />

                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.4em]
                      text-[#D6B25E]
                    "
                  >
                    Soul Reflection
                  </p>
                </div>

                <p
                  className="
                    mt-4
                    max-w-4xl
                    font-[family:var(--font-cormorant)]
                    text-xl
                    font-light
                    leading-8
                    text-white/65
                    md:text-2xl
                  "
                >
                  {reflection}
                </p>
              </div>
            </motion.div>
          )}

          {/* =================================================
              SHADOW
          ================================================== */}

          {shadow && (
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
              transition={{
                delay: 0.55,
                duration: 0.8,
              }}
              className="
                group/shadow
                relative
                z-10
                mt-5
                overflow-hidden
                rounded-[28px]
                border
                border-purple-400/15
                bg-purple-500/[0.035]
                p-6
                transition-all
                duration-700
                hover:border-purple-400/25
                hover:bg-purple-500/[0.05]
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  top-1/2
                  h-40
                  w-40
                  -translate-y-1/2
                  rounded-full
                  bg-purple-400/[0.06]
                  blur-[70px]
                  opacity-0
                  transition-opacity
                  duration-700
                  group-hover/shadow:opacity-100
                "
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <Eye
                    size={18}
                    className="text-purple-300"
                  />

                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.4em]
                      text-purple-300
                    "
                  >
                    Shadow Intelligence
                  </p>
                </div>

                <p
                  className="
                    mt-4
                    max-w-4xl
                    leading-8
                    text-white/65
                  "
                >
                  {shadow}
                </p>
              </div>
            </motion.div>
          )}

          {/* =================================================
              FOOTER
          ================================================== */}

          <div
            className="
              relative
              z-10
              mt-8
              flex
              flex-col
              gap-3
              border-t
              border-white/[0.06]
              pt-5
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
              Powered by EON Intelligence Engine
            </p>

            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-white/20
              "
            >
              Personal Identity Layer
            </p>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
}

