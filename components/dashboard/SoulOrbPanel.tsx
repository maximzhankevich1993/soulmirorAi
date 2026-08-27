"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Brain,
  Activity,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

import { useSoulMemoryStore } from "../../src/store/soul-memory-store";
import { GlassCard } from "../../src/components/ui/GlassCard";

export function SoulOrbPanel() {
  const {
    archetype,
    emotion,
    insight,
  } = useSoulMemoryStore();

  return (
    <GlassCard
      highlight
      className="
        relative
        overflow-hidden
        p-7
        sm:p-9
        md:p-11
      "
    >
      {/* =========================================
          CINEMATIC ATMOSPHERE
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]/[0.025]
          blur-[180px]
        "
      />

      {/* =========================================
          CONTENT
      ========================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-4xl
        "
      >
        {/* LABEL */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            text-[10px]
            uppercase
            tracking-[0.5em]
            text-[#D6B25E]
          "
        >
          Current consciousness
        </motion.p>

        {/* MAIN TITLE */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.1,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mt-5
            max-w-3xl
            font-[family:var(--font-cormorant)]
            text-5xl
            font-light
            leading-[1.05]
            text-[#F4F1EA]
            sm:text-6xl
          "
        >
          {emotion || "Balanced"}
        </motion.h2>

        {/* DESCRIPTION */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          className="
            mt-5
            max-w-2xl
            text-sm
            leading-7
            text-white/40
          "
        >
          Your current emotional state and inner patterns,
          interpreted through the intelligence of SoulMirror.
        </motion.p>

        {/* =========================================
            DIVIDER
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          animate={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mt-10
            h-px
            w-full
            origin-left
            bg-gradient-to-r
            from-[#D6B25E]/20
            via-white/[0.06]
            to-transparent
          "
        />

        {/* =========================================
            INTELLIGENCE STATE
        ========================================== */}

        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-3
            sm:grid-cols-3
          "
        >
          <OrbInfo
            icon={Sparkles}
            label="Archetype"
            value={archetype || "Unknown"}
            delay={0.35}
          />

          <OrbInfo
            icon={Brain}
            label="Insight system"
            value={insight ? "Active" : "Awaiting scan"}
            delay={0.45}
          />

          <OrbInfo
            icon={Activity}
            label="Evolution"
            value="Continuous"
            delay={0.55}
          />
        </div>
      </div>
    </GlassCard>
  );
}

/* =====================================================
   INFO ITEM
===================================================== */

function OrbInfo({
  icon: Icon,
  label,
  value,
  delay,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 18,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        group
        min-w-0
        rounded-2xl
        border
        border-white/[0.07]
        bg-white/[0.025]
        px-5
        py-4
        transition-all
        duration-500
        hover:border-[#D6B25E]/20
        hover:bg-white/[0.04]
      "
    >
      <div
        className="
          flex
          items-start
          gap-3
        "
      >
        <Icon
          size={17}
          strokeWidth={1.5}
          className="
            mt-0.5
            shrink-0
            text-[#D6B25E]
          "
        />

        <div
          className="
            min-w-0
            flex-1
            pr-2
          "
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-white/30
            "
          >
            {label}
          </p>

          <p
            className="
              mt-2
              break-words
              pr-1
              text-sm
              leading-5
              text-[#F4F1EA]
            "
          >
            {value}
          </p>
        </div>
      </div>
    </motion.div>
  );
}