"use client";

import { Brain, MoonStar, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Soul Scan",
    subtitle: "Understand your current state",
    icon: Brain,
    color: "from-[#D6B25E]/30 to-transparent",
  },
  {
    title: "Dream Analysis",
    subtitle: "Decode tonight's dream",
    icon: MoonStar,
    color: "from-[#8B5CF6]/30 to-transparent",
  },
  {
    title: "Tarot Reading",
    subtitle: "Receive symbolic guidance",
    icon: Sparkles,
    color: "from-cyan-400/30 to-transparent",
  },
];

export function JourneyCard() {
  return (
    <section className="mx-auto mt-24 w-full max-w-7xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-[36px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-3xl"
      >
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.4em] text-[#D6B25E]/80">
            Today's Journey
          </p>

          <h2 className="mt-3 text-4xl font-light text-[#F4F1EA]">
            Continue exploring yourself
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 18,
                }}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#09090B]/70 p-8"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-60`}
                />

                <div className="relative z-10">
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 backdrop-blur-xl">
                    <Icon
                      size={30}
                      className="text-[#D6B25E]"
                    />
                  </div>

                  <h3 className="text-2xl text-[#F4F1EA]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-white/60">
                    {item.subtitle}
                  </p>

                  <motion.button
                    whileHover={{
                      x: 5,
                    }}
                    className="mt-10 text-sm font-medium text-[#D6B25E]"
                  >
                    Begin →
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}