"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Moon,
  Sparkles,
  Shield,
} from "lucide-react";

const stats = [
  {
    title: "Primary Archetype",
    value: "Sage",
    icon: Brain,
  },
  {
    title: "Dominant Emotion",
    value: "Hope",
    icon: Sparkles,
  },
  {
    title: "Shadow",
    value: "Explorer",
    icon: Moon,
  },
  {
    title: "Soul Balance",
    value: "76%",
    icon: Shield,
  },
];

export function SoulProfile() {
  return (
    <section className="mx-auto mt-24 w-full max-w-7xl px-6">

      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.4em] text-[#D6B25E]/70">
          Soul Profile
        </p>

        <h2 className="mt-3 text-5xl font-light text-[#F4F1EA]">
          Your Inner Identity
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((item) => {
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
                stiffness: 220,
              }}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-3xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D6B25E]/10 via-transparent to-transparent" />

              <div className="relative z-10">

                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5">
                  <Icon
                    size={28}
                    className="text-[#D6B25E]"
                  />
                </div>

                <p className="text-sm text-white/50">
                  {item.title}
                </p>

                <h3 className="mt-3 font-[family:var(--font-cormorant)] text-4xl text-[#F4F1EA]">
                  {item.value}
                </h3>

              </div>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}