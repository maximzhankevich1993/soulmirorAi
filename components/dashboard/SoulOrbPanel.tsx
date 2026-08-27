"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  Sparkles,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

import { useSoulMemoryStore } from "../../src/store/soul-memory-store";

export function SoulOrbPanel() {
  const {
    archetype,
    emotion,
    insight,
  } = useSoulMemoryStore();

  const currentEmotion = emotion || "Balanced";
  const currentArchetype = archetype || "Explorer";

  return (
    <div className="relative overflow-hidden">
      {/* =========================================
          CINEMATIC ATMOSPHERE
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/2
          h-[500px]
          w-[500px]
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]/[0.018]
          blur-[160px]
        "
      />

      {/* =========================================
          CONTENT
      ========================================== */}

      <div
        className="
          relative
          grid
          grid-cols-1
          gap-16
          lg:grid-cols-[1.15fr_0.85fr]
          lg:gap-24
        "
      >
        {/* =======================================
            MAIN STATE
        ======================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
            filter: "blur(12px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {/* Label */}

          <div className="flex items-center gap-4">
            <span
              className="
                h-px
                w-10
                bg-[#D6B25E]/60
              "
            />

            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.5em]
                text-[#D6B25E]
              "
            >
              Current state
            </p>
          </div>

          {/* State */}

          <h4
            className="
              mt-8
              max-w-3xl
              font-[family:var(--font-cormorant)]
              text-6xl
              font-light
              leading-[0.95]
              tracking-[-0.02em]
              text-[#F4F1EA]
              sm:text-7xl
              md:text-8xl
            "
          >
            {currentEmotion}
          </h4>

          {/* Description */}

          <p
            className="
              mt-8
              max-w-xl
              text-sm
              leading-8
              text-white/40
              sm:text-[15px]
            "
          >
            SoulMirror observes the patterns emerging
            across your reflections, emotions and
            memories — helping you understand what is
            happening beneath the surface.
          </p>

          {/* Small status */}

          <div
            className="
              mt-10
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#D6B25E]
                shadow-[0_0_12px_rgba(214,178,94,0.7)]
              "
            />

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.4em]
                text-white/25
              "
            >
              Intelligence active
            </span>
          </div>
        </motion.div>

        {/* =======================================
            SIGNALS
        ======================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 30,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            flex
            flex-col
            justify-center
          "
        >
          <p
            className="
              mb-7
              text-[8px]
              uppercase
              tracking-[0.45em]
              text-white/25
            "
          >
            Emerging signals
          </p>

          <div
            className="
              border-t
              border-white/[0.08]
            "
          >
            <StateRow
              icon={Sparkles}
              label="Archetype"
              value={currentArchetype}
            />

            <StateRow
              icon={Brain}
              label="Insight system"
              value={
                insight
                  ? "Active"
                  : "Awaiting your first scan"
              }
            />

            <StateRow
              icon={Activity}
              label="Evolution"
              value="Continuously learning"
            />
          </div>
        </motion.div>
      </div>

      {/* =========================================
          BOTTOM STATEMENT
      ========================================== */}

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
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
          delay: 0.35,
        }}
        className="
          mt-20
          border-t
          border-white/[0.06]
          pt-7
        "
      >
        <p
          className="
            max-w-2xl
            text-[10px]
            uppercase
            leading-6
            tracking-[0.25em]
            text-white/20
          "
        >
          Your inner world is not static.
          <span className="text-[#D6B25E]/50">
            {" "}
            It evolves with every reflection.
          </span>
        </p>
      </motion.div>
    </div>
  );
}

/* =============================================
   STATE ROW
============================================= */

function StateRow({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <motion.div
      whileHover={{
        x: 5,
      }}
      transition={{
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        group
        flex
        min-h-[92px]
        items-center
        justify-between
        gap-6
        border-b
        border-white/[0.08]
      "
    >
      {/* Left */}

      <div className="flex items-center gap-4">
        <Icon
          size={15}
          strokeWidth={1.4}
          className="
            text-white/25
            transition-colors
            duration-500
            group-hover:text-[#D6B25E]
          "
        />

        <p
          className="
            text-[9px]
            uppercase
            tracking-[0.32em]
            text-white/30
          "
        >
          {label}
        </p>
      </div>

      {/* Right */}

      <p
        className="
          max-w-[180px]
          truncate
          text-right
          text-sm
          text-[#F4F1EA]/75
        "
      >
        {value}
      </p>
    </motion.div>
  );
}