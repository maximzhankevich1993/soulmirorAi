
"use client";

import {
  Sparkles,
  Brain,
  Heart,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";

import { useSoulMemoryStore } from "@/store/soul-memory-store";

import { GlassCard } from "@/components/ui/GlassCard";
import { GlowIcon } from "@/components/ui/GlowIcon";

const reflections = {
  Calm:
    "Your mind is entering a state of clarity. Today is ideal for observation and conscious decisions.",

  Healing:
    "Your emotional patterns show a period of transformation. Growth requires patience and self-awareness.",

  Fear:
    "Your system detects uncertainty, but also the potential for a new level of confidence.",

  Joy:
    "Your emotional energy is expanding. Positive connections can accelerate your evolution.",

  Focus:
    "Your current pattern supports deep work and meaningful progress.",
};

export function DailyReflection() {
  const { emotion } = useSoulMemoryStore();

  const reflection =
    reflections[emotion as keyof typeof reflections] ??
    "Your intelligence profile continues evolving through every experience.";

  const metrics = [
    {
      label: "Emotional State",
      value: emotion || "Balanced",
      icon: Heart,
    },
    {
      label: "Pattern Growth",
      value: "+8%",
      icon: TrendingUp,
    },
    {
      label: "AI Insight",
      value: "Active",
      icon: Brain,
    },
  ];

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
      {/* =====================================================
          ATMOSPHERE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]/[0.035]
          blur-[150px]
        "
      />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 1,
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
          {/* =================================================
              INNER GLOW
          ================================================== */}

          <motion.div
            animate={{
              opacity: [0.25, 0.45, 0.25],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 8,
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
              bg-[#D6B25E]/[0.07]
              blur-[120px]
            "
          />

          {/* =================================================
              TOP LINE
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

          <div className="relative z-10 flex items-start justify-between">
            <div className="flex items-center gap-4">
              <GlowIcon>
                <Sparkles
                  size={21}
                  className="text-[#D6B25E]"
                />
              </GlowIcon>

              <div>
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.42em]
                    text-[#D6B25E]
                  "
                >
                  Daily Intelligence
                </p>

                <p
                  className="
                    mt-2
                    text-xs
                    text-white/35
                  "
                >
                  Personal reflection • EON AI
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
              <span className="h-1.5 w-1.5 rounded-full bg-[#D6B25E]" />

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-white/35
                "
              >
                Intelligence Active
              </span>
            </div>
          </div>

          {/* =================================================
              MAIN REFLECTION
          ================================================== */}

          <div className="relative z-10 mt-14">
            <p
              className="
                mb-5
                text-[9px]
                uppercase
                tracking-[0.45em]
                text-white/25
              "
            >
              Your reflection
            </p>

            <motion.h2
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.15,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                max-w-4xl
                font-[family:var(--font-cormorant)]
                text-3xl
                font-light
                leading-[1.35]
                tracking-[-0.01em]
                text-[#F4F1EA]
                md:text-5xl
              "
            >
              {reflection}
            </motion.h2>
          </div>

          {/* =================================================
              DIVIDER
          ================================================== */}

          <div
            className="
              relative
              z-10
              my-12
              h-px
              w-full
              bg-gradient-to-r
              from-transparent
              via-white/[0.08]
              to-transparent
            "
          />

          {/* =================================================
              METRICS
          ================================================== */}

          <div
            className="
              relative
              z-10
              grid
              gap-3
              md:grid-cols-3
            "
          >
            {metrics.map((metric, index) => {
              const Icon = metric.icon;

              return (
                <motion.div
                  key={metric.label}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.25 + index * 0.1,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    y: -3,
                  }}
                  className="
                    group/metric
                    relative
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    p-5
                    transition-colors
                    duration-500
                    hover:border-[#D6B25E]/20
                    hover:bg-white/[0.04]
                  "
                >
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-8
                      -top-8
                      h-24
                      w-24
                      rounded-full
                      bg-[#D6B25E]/[0.04]
                      blur-2xl
                      transition-all
                      duration-700
                      group-hover/metric:bg-[#D6B25E]/[0.09]
                    "
                  />

                  <div className="relative z-10 flex items-start justify-between">
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/[0.07]
                        bg-white/[0.035]
                      "
                    >
                      <Icon
                        size={16}
                        className="
                          text-[#D6B25E]
                          transition-transform
                          duration-500
                          group-hover/metric:scale-110
                        "
                      />
                    </div>

                    <ArrowUpRight
                      size={14}
                      className="
                        text-white/15
                        transition-all
                        duration-500
                        group-hover/metric:translate-x-0.5
                        group-hover/metric:-translate-y-0.5
                        group-hover/metric:text-[#D6B25E]/60
                      "
                    />
                  </div>

                  <p
                    className="
                      relative
                      z-10
                      mt-7
                      text-[9px]
                      uppercase
                      tracking-[0.32em]
                      text-white/30
                    "
                  >
                    {metric.label}
                  </p>

                  <p
                    className="
                      relative
                      z-10
                      mt-2
                      text-xl
                      font-light
                      text-[#F4F1EA]
                    "
                  >
                    {metric.value}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* =================================================
              FOOTER
          ================================================== */}

          <div
            className="
              relative
              z-10
              mt-10
              flex
              flex-col
              gap-4
              border-t
              border-white/[0.06]
              pt-7
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.38em]
                text-white/25
              "
            >
              EON Intelligence Engine
            </p>

            <div className="flex items-center gap-2">
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
                  text-white/25
                "
              >
                Personal Evolution System
              </span>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
}

