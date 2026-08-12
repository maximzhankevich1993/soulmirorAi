"use client";

import { motion } from "framer-motion";
import { Brain, Moon, Sparkles } from "lucide-react";

interface Usage {
  soulScan: number;
  dream: number;
  tarot: number;
}

interface UsagePanelProps {
  usage: Usage;
}

const modules = [
  {
    key: "soulScan" as const,
    label: "Soul Scan",
    icon: Sparkles,
  },
  {
    key: "dream" as const,
    label: "Dream Analysis",
    icon: Moon,
  },
  {
    key: "tarot" as const,
    label: "Tarot",
    icon: Brain,
  },
];

export function UsagePanel({
  usage,
}: UsagePanelProps) {
  return (
    <section>
      <div className="mb-6">
        <p className="text-[11px] uppercase tracking-[0.4em] text-[#D6B25E]/70">
          Intelligence Usage
        </p>

        <h2 className="mt-3 font-[family:var(--font-cormorant)] text-4xl font-light text-[#F4F1EA]">
          Your recent activity
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {modules.map((module, index) => {
          const Icon = module.icon;

          return (
            <motion.div
              key={module.key}
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
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
                backdrop-blur-2xl
              "
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#D6B25E]/20 bg-[#D6B25E]/5">
                  <Icon
                    size={19}
                    className="text-[#D6B25E]"
                  />
                </div>

                <span className="text-2xl font-light text-[#F4F1EA]">
                  {usage[module.key]}
                </span>
              </div>

              <p className="mt-5 text-sm text-white/50">
                {module.label}
              </p>

              <div className="mt-4 h-px w-full bg-white/10" />

              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/30">
                Analyses
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}