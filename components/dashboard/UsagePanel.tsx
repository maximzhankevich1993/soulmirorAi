"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Moon,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

interface Usage {
  soulScan: number;
  dream: number;
  tarot: number;
}

interface UsageItem {
  key: keyof Usage;
  label: string;
  description: string;
  icon: typeof Brain;
  limit: number;
}

const usageItems: UsageItem[] = [
  {
    key: "soulScan",
    label: "Soul Scan",
    description:
      "Personal psychological and archetypal reflection.",
    icon: Brain,
    limit: 2,
  },
  {
    key: "dream",
    label: "Dream Analysis",
    description:
      "Symbolic interpretation of your dreams.",
    icon: Moon,
    limit: 2,
  },
  {
    key: "tarot",
    label: "Tarot",
    description:
      "Symbolic intelligence and reflection.",
    icon: Sparkles,
    limit: 2,
  },
];

interface UsagePanelProps {
  usage: Usage;
}

export function UsagePanel({
  usage,
}: UsagePanelProps) {
  return (
    <div className="w-full">
      {/* =========================================
          HEADER
      ========================================== */}

      <div className="mb-10 sm:mb-14">
        <p
          className="
            text-[9px]
            uppercase
            tracking-[0.5em]
            text-[#D6B25E]
            sm:text-[10px]
          "
        >
          Your access
        </p>

        <h3
          className="
            mt-3
            font-[family:var(--font-cormorant)]
            text-[1.9rem]
            font-light
            leading-[1.05]
            text-[#F4F1EA]
            sm:mt-4
            sm:text-5xl
          "
        >
          Your remaining intelligence.
        </h3>

        <p
          className="
            mt-4
            max-w-xl
            text-[13px]
            leading-6
            text-white/30
            sm:mt-5
            sm:text-sm
            sm:leading-7
          "
        >
          Your free access is independent for each
          intelligence tool.
        </p>
      </div>

      {/* =========================================
          USAGE LIST
      ========================================== */}

      <div className="border-t border-white/[0.06]">
        {usageItems.map((item, index) => {
          const Icon = item.icon;
          const used = usage[item.key];
          const remaining = Math.max(
            item.limit - used,
            0
          );

          return (
            <motion.div
              key={item.key}
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
                amount: 0.3,
              }}
              transition={{
                delay: index * 0.08,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                group
                border-b
                border-white/[0.06]
                py-5
                sm:py-7
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-4
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
                    border
                    border-white/[0.08]
                    text-white/35
                    transition-colors
                    duration-500
                    group-hover:border-[#D6B25E]/25
                    group-hover:text-[#D6B25E]
                  "
                >
                  <Icon
                    size={16}
                    strokeWidth={1.25}
                  />
                </div>

                {/* TEXT */}

                <div className="min-w-0 flex-1">
                  <p
                    className="
                      text-sm
                      font-light
                      text-white/70
                      sm:text-base
                    "
                  >
                    {item.label}
                  </p>

                  <p
                    className="
                      mt-1
                      max-w-[240px]
                      truncate
                      text-[10px]
                      leading-5
                      text-white/20
                      sm:max-w-none
                      sm:text-xs
                    "
                  >
                    {item.description}
                  </p>
                </div>

                {/* VALUE */}

                <div
                  className="
                    flex
                    shrink-0
                    items-center
                    gap-3
                    sm:gap-5
                  "
                >
                  <div className="text-right">
                    <p
                      className="
                        font-[family:var(--font-cormorant)]
                        text-[1.7rem]
                        font-light
                        leading-none
                        text-[#F4F1EA]
                        sm:text-3xl
                      "
                    >
                      {remaining}
                    </p>

                    <p
                      className="
                        mt-1
                        text-[7px]
                        uppercase
                        tracking-[0.3em]
                        text-white/15
                        sm:text-[8px]
                      "
                    >
                      remaining
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      border
                      border-white/[0.06]
                      text-white/20
                      transition-colors
                      duration-300
                      group-hover:border-[#D6B25E]/20
                      group-hover:text-[#D6B25E]/60
                      sm:h-10
                      sm:w-10
                    "
                  >
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.25}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* =========================================
          FOOTNOTE
      ========================================== */}

      <p
        className="
          mt-6
          max-w-xl
          text-[7px]
          uppercase
          tracking-[0.3em]
          leading-5
          text-white/15
          sm:mt-8
          sm:text-[8px]
          sm:tracking-[0.35em]
        "
      >
        Upgrade whenever you are ready to continue
        without limits.
      </p>
    </div>
  );
}