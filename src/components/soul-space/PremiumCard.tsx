"use client";

import { motion } from "framer-motion";
import { Crown, ArrowRight } from "lucide-react";

export function PremiumCard() {
  return (
    <section className="mx-auto mt-28 w-full max-w-7xl px-6">

      <motion.div
        whileHover={{
          scale: 1.01,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
        }}
        className="relative overflow-hidden rounded-[40px] border border-[#D6B25E]/20 bg-gradient-to-br from-[#121214] via-[#09090B] to-[#09090B] p-10 backdrop-blur-3xl"
      >

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#D6B25E]/10 blur-[160px]" />
        <div className="absolute -left-24 bottom-[-150px] h-80 w-80 rounded-full bg-[#8B5CF6]/10 blur-[140px]" />

        <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#D6B25E]/10">
              <Crown
                size={34}
                className="text-[#D6B25E]"
              />
            </div>

            <p className="text-xs uppercase tracking-[0.4em] text-[#D6B25E]/80">
              SoulMirror Pro
            </p>

            <h2 className="mt-4 font-[family:var(--font-cormorant)] text-6xl leading-tight text-[#F4F1EA]">
              Unlock your complete
              <br />
              inner universe.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
              Unlimited Soul Scans, Dream Analysis,
              Tarot Readings, AI Memory, long-term
              insights and your evolving Soul Profile.
            </p>

          </div>

          <div className="flex flex-col items-start lg:items-end">

            <h3 className="text-6xl font-light text-[#F4F1EA]">
              $19
            </h3>

            <p className="mt-2 text-white/50">
              per month
            </p>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="mt-10 flex items-center gap-3 rounded-full bg-[#D6B25E] px-8 py-5 font-semibold text-[#09090B] shadow-[0_0_60px_rgba(214,178,94,.45)]"
            >
              Upgrade

              <ArrowRight size={20} />
            </motion.button>

          </div>

        </div>

      </motion.div>

    </section>
  );
}