"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

import { SoulOrb3D } from "../../src/components/soul-space/SoulOrb3D";
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
        p-6
        sm:p-8
        lg:p-12
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
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]/[0.055]
          blur-[150px]
          sm:h-[520px]
          sm:w-[520px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[-180px]
          h-[360px]
          w-[360px]
          rounded-full
          bg-white/[0.018]
          blur-[120px]
        "
      />

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          flex
          items-center
          justify-between
        "
      >
        <div>
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.5em]
              text-[#D6B25E]/80
            "
          >
            SoulMirror Intelligence
          </p>

          <h2
            className="
              mt-3
              font-[family:var(--font-cormorant)]
              text-3xl
              font-light
              text-[#F4F1EA]
              sm:text-4xl
            "
          >
            Your inner state
          </h2>
        </div>

        <div
          className="
            hidden
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-white/[0.025]
            px-3
            py-2
            sm:flex
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-[#D6B25E]
              shadow-[0_0_12px_rgba(214,178,94,0.6)]
            "
          />

          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-white/35
            "
          >
            Active
          </span>
        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mt-8
          grid
          gap-10
          lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.85fr)]
          lg:items-center
          lg:gap-14
        "
      >
        {/* =================================================
            SOUL ORB
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.82,
            filter: "blur(12px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative
            flex
            min-h-[320px]
            items-center
            justify-center
            sm:min-h-[380px]
          "
        >
          {/* Orb halo */}

          <motion.div
            animate={{
              scale: [0.92, 1.06, 0.92],
              opacity: [0.25, 0.4, 0.25],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              h-56
              w-56
              rounded-full
              bg-[#D6B25E]/[0.045]
              blur-[80px]
              sm:h-72
              sm:w-72
            "
          />

          <SoulOrb3D />
        </motion.div>

        {/* =================================================
            INTELLIGENCE STATE
        ================================================== */}

        <div className="w-full">
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.45em]
              text-white/35
            "
          >
            Current consciousness
          </p>

          <motion.h3
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.25,
              duration: 0.7,
            }}
            className="
              mt-4
              font-[family:var(--font-cormorant)]
              text-5xl
              font-light
              leading-none
              text-[#F4F1EA]
              sm:text-6xl
            "
          >
            {emotion || "Balanced"}
          </motion.h3>

          <p
            className="
              mt-5
              max-w-lg
              text-sm
              leading-7
              text-white/40
            "
          >
            SoulMirror continuously observes the patterns
            emerging across your reflections, emotions and
            experiences.
          </p>

          {/* =================================================
              STATE METRICS
          ================================================== */}

          <div className="mt-8 space-y-3">
            <OrbInfo
              icon={Sparkles}
              label="Archetype"
              value={archetype || "Explorer"}
            />

            <OrbInfo
              icon={Brain}
              label="Insight system"
              value={
                insight
                  ? "Active"
                  : "Awaiting your first scan"
              }
            />

            <OrbInfo
              icon={Activity}
              label="Evolution"
              value="Continuously learning"
            />
          </div>

          {/* =================================================
              ACTION
          ================================================== */}

          <motion.button
            type="button"
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              group
              mt-6
              flex
              w-full
              items-center
              justify-between
              rounded-2xl
              border
              border-white/10
              bg-white/[0.025]
              px-5
              py-4
              text-left
              transition-all
              duration-500
              hover:border-[#D6B25E]/20
              hover:bg-white/[0.04]
            "
          >
            <span>
              <span
                className="
                  block
                  text-[9px]
                  uppercase
                  tracking-[0.35em]
                  text-white/30
                "
              >
                Explore
              </span>

              <span
                className="
                  mt-1
                  block
                  text-sm
                  text-[#F4F1EA]
                "
              >
                Discover your patterns
              </span>
            </span>

            <ArrowUpRight
              size={17}
              className="
                text-white/25
                transition-all
                duration-500
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:text-[#D6B25E]
              "
            />
          </motion.button>
        </div>
      </div>
    </GlassCard>
  );
}

function OrbInfo({
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
        x: 3,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-white/[0.07]
        bg-white/[0.02]
        px-4
        py-3.5
        transition-colors
        duration-500
        hover:border-white/[0.12]
        hover:bg-white/[0.035]
      "
    >
      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-xl
          border
          border-[#D6B25E]/15
          bg-[#D6B25E]/[0.035]
        "
      >
        <Icon
          size={16}
          className="text-[#D6B25E]"
        />
      </div>

      <div className="min-w-0">
        <p
          className="
            text-[8px]
            uppercase
            tracking-[0.3em]
            text-white/30
          "
        >
          {label}
        </p>

        <p
          className="
            mt-1
            truncate
            text-sm
            text-[#F4F1EA]/80
          "
        >
          {value}
        </p>
      </div>
    </motion.div>
  );
}