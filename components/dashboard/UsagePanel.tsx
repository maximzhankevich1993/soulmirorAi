"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Moon,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

interface Usage {
  soulScan: number;
  dream: number;
  tarot: number;
}

interface UsagePanelProps {
  usage: Usage;
}

interface ActivityItem {
  key: keyof Usage;
  label: string;
  description: string;
  icon: LucideIcon;
}

const activities: ActivityItem[] = [
  {
    key: "soulScan",
    label: "Soul Scan",
    description:
      "Identity and personality exploration",
    icon: Sparkles,
  },
  {
    key: "dream",
    label: "Dream Analysis",
    description:
      "Symbols and subconscious patterns",
    icon: Moon,
  },
  {
    key: "tarot",
    label: "Tarot",
    description:
      "Reflective guidance and archetypes",
    icon: Brain,
  },
];

export function UsagePanel({
  usage,
}: UsagePanelProps) {
  return (
    <section className="relative">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="mb-14 max-w-2xl">
        <motion.p
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            text-[10px]
            uppercase
            tracking-[0.5em]
            text-[#D6B25E]
          "
        >
          Your activity
        </motion.p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
            filter: "blur(8px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.08,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mt-4
            font-[family:var(--font-cormorant)]
            text-4xl
            font-light
            leading-tight
            text-[#F4F1EA]
            sm:text-5xl
          "
        >
          A reflection of your journey.
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.16,
            duration: 0.7,
          }}
          className="
            mt-5
            max-w-xl
            text-sm
            leading-7
            text-white/40
          "
        >
          Every interaction with SoulMirror becomes
          another layer of understanding.
        </motion.p>
      </div>

      {/* =====================================================
          ACTIVITY LIST
      ====================================================== */}

      <div className="relative">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          const value = usage[activity.key];

          return (
            <motion.div
              key={activity.key}
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-60px",
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                group
                relative
                border-t
                border-white/[0.07]
                py-7
                transition-colors
                duration-500
                last:border-b
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-5
                  sm:gap-7
                "
              >
                {/* ICON */}

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    transition-all
                    duration-500
                    group-hover:border-[#D6B25E]/25
                    group-hover:bg-[#D6B25E]/[0.05]
                  "
                >
                  <Icon
                    size={17}
                    strokeWidth={1.5}
                    className="
                      text-white/40
                      transition-colors
                      duration-500
                      group-hover:text-[#D6B25E]
                    "
                  />
                </div>

                {/* NAME */}

                <div className="min-w-0 flex-1">
                  <div
                    className="
                      flex
                      flex-col
                      gap-1
                      sm:flex-row
                      sm:items-center
                      sm:gap-5
                    "
                  >
                    <h3
                      className="
                        text-base
                        font-light
                        text-[#F4F1EA]
                        transition-colors
                        duration-500
                        group-hover:text-white
                      "
                    >
                      {activity.label}
                    </h3>

                    <span
                      className="
                        hidden
                        h-px
                        w-8
                        bg-white/10
                        sm:block
                      "
                    />

                    <p
                      className="
                        truncate
                        text-xs
                        text-white/30
                      "
                    >
                      {activity.description}
                    </p>
                  </div>
                </div>

                {/* VALUE */}

                <div
                  className="
                    flex
                    shrink-0
                    items-center
                    gap-3
                  "
                >
                  <span
                    className="
                      font-[family:var(--font-cormorant)]
                      text-3xl
                      font-light
                      text-[#F4F1EA]
                    "
                  >
                    {value}
                  </span>

                  <span
                    className="
                      hidden
                      text-[8px]
                      uppercase
                      tracking-[0.3em]
                      text-white/20
                      sm:block
                    "
                  >
                    sessions
                  </span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    className="
                      text-white/15
                      transition-all
                      duration-500
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-[#D6B25E]
                    "
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* =====================================================
          FOOTNOTE
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.35,
          duration: 0.8,
        }}
        className="
          mt-8
          flex
          items-center
          gap-3
        "
      >
        <span
          className="
            h-1
            w-1
            rounded-full
            bg-[#D6B25E]
            shadow-[0_0_8px_rgba(214,178,94,0.7)]
          "
        />

        <p
          className="
            text-[8px]
            uppercase
            tracking-[0.35em]
            text-white/20
          "
        >
          Your intelligence history grows with you
        </p>
      </motion.div>
    </section>
  );
}