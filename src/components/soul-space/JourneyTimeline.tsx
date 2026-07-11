"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Moon,
  Sparkles,
} from "lucide-react";

const timeline = [
  {
    title: "Soul Scan",
    date: "Today",
    icon: Brain,
    color: "text-[#D6B25E]",
  },
  {
    title: "Dream Analysis",
    date: "Yesterday",
    icon: Moon,
    color: "text-[#8B5CF6]",
  },
  {
    title: "Tarot Reading",
    date: "2 days ago",
    icon: Sparkles,
    color: "text-cyan-400",
  },
  {
    title: "Soul Scan",
    date: "3 days ago",
    icon: Brain,
    color: "text-[#D6B25E]",
  },
  {
    title: "Dream Analysis",
    date: "5 days ago",
    icon: Moon,
    color: "text-[#8B5CF6]",
  },
];

export function JourneyTimeline() {
  return (
    <section className="mx-auto mt-28 w-full max-w-7xl px-6">

      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.4em] text-[#D6B25E]/70">
          Journey Timeline
        </p>

        <h2 className="mt-3 text-5xl font-light text-[#F4F1EA]">
          Your Evolution
        </h2>
      </div>

      <div className="relative">

        <div className="absolute left-7 top-0 h-full w-px bg-gradient-to-b from-[#D6B25E]/60 via-white/10 to-transparent" />

        <div className="space-y-8">

          {timeline.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                className="relative flex items-start gap-6"
              >

                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#09090B]">
                  <Icon
                    size={24}
                    className={item.color}
                  />
                </div>

                <div className="flex-1 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl">

                  <div className="flex items-center justify-between">

                    <h3 className="text-2xl text-[#F4F1EA]">
                      {item.title}
                    </h3>

                    <span className="text-sm text-white/40">
                      {item.date}
                    </span>

                  </div>

                  <p className="mt-4 leading-7 text-white/55">
                    Your journey continues.
                    Every reflection leaves a trace
                    and helps SoulMirror understand
                    you more deeply.
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}