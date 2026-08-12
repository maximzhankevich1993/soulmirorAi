"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Sparkles,
  Moon,
} from "lucide-react";

import { GlassCard } from "@/components/ui/GlassCard";
import { GlowIcon } from "@/components/ui/GlowIcon";
import { useSoulMemoryStore } from "@/store/soul-memory-store";

export function SoulMemorySection() {
  const memory = useSoulMemoryStore((state) => ({
    archetype: state.archetype,
    emotion: state.emotion,
    insight: state.insight,
    shadow: state.shadow,
  }));

  return (
    <section
      className="
        mx-auto
        mt-32
        max-w-6xl
        px-6
      "
    >
      {/* Header */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
        className="text-center"
      >
        <p
          className="
            text-[11px]
            uppercase
            tracking-[0.5em]
            text-[#D6B25E]
          "
        >
          Soul Memory
        </p>

        <h2
          className="
            mt-6
            font-[family:var(--font-cormorant)]
            text-5xl
            text-[#F4F1EA]
            md:text-7xl
          "
        >
          Your AI remembers
          <br />
          your inner world
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-white/50
          "
        >
          Every reflection becomes part
          of your personal intelligence profile.
        </p>
      </motion.div>

      {/* Memory Cards */}

      <div
        className="
          mt-14
          grid
          gap-6
          md:grid-cols-3
        "
      >
        {/* Archetype */}

        <GlassCard>
          <div className="p-6">
            <GlowIcon>
              <Brain size={22} />
            </GlowIcon>

            <p
              className="
                mt-6
                text-xs
                uppercase
                tracking-[0.3em]
                text-white/40
              "
            >
              Archetype
            </p>

            <h3
              className="
                mt-3
                text-2xl
                text-[#F4F1EA]
              "
            >
              {memory.archetype || "Unknown"}
            </h3>
          </div>
        </GlassCard>

        {/* Emotional State */}

        <GlassCard>
          <div className="p-6">
            <GlowIcon color="purple">
              <Sparkles size={22} />
            </GlowIcon>

            <p
              className="
                mt-6
                text-xs
                uppercase
                tracking-[0.3em]
                text-white/40
              "
            >
              Emotional State
            </p>

            <h3
              className="
                mt-3
                text-2xl
                text-[#F4F1EA]
              "
            >
              {memory.emotion || "Calm"}
            </h3>
          </div>
        </GlassCard>

        {/* Shadow Pattern */}

        <GlassCard>
          <div className="p-6">
            <GlowIcon>
              <Moon size={22} />
            </GlowIcon>

            <p
              className="
                mt-6
                text-xs
                uppercase
                tracking-[0.3em]
                text-white/40
              "
            >
              Shadow Pattern
            </p>

            <h3
              className="
                mt-3
                text-lg
                leading-7
                text-[#F4F1EA]
              "
            >
              {memory.shadow ||
                "Hidden patterns will appear here"}
            </h3>
          </div>
        </GlassCard>
      </div>

      {/* Personal Insight */}

      {memory.insight && (
        <GlassCard className="mt-6">
          <div className="p-8">
            <p
              className="
                text-xs
                uppercase
                tracking-[0.35em]
                text-[#D6B25E]
              "
            >
              Personal Insight
            </p>

            <p
              className="
                mt-4
                leading-8
                text-white/70
              "
            >
              {memory.insight}
            </p>
          </div>
        </GlassCard>
      )}
    </section>
  );
}