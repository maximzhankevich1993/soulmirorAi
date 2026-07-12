"use client";

import { motion } from "framer-motion";

import { SoulOrb3D } from "./SoulOrb3D";

export function SoulSpaceHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32">

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-4 text-sm uppercase tracking-[0.45em] text-[#D6B25E]/80"
        >
          Welcome back
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-4xl text-center font-[family:var(--font-cormorant)] text5xl font-light leading-tight text-[#F4F1EA] md:text-7xl"
        >
          Your soul has changed
          <br />
          since yesterday.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
          }}
          className="mt-8 max-w-xl text-center text-base leading-7 md:text-lg text-white/60"
        >
          Every reflection shapes who you become.
          Continue your inner journey.
        </motion.p>

        <div className="my-12">
          <SoulOrb3D />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
          }}
          className="rounded-full border border-[#D6B25E]/20 bg-white/5 px-8 py-3 backdrop-blur-xl"
        >
          <span className="text-sm uppercase tracking-[0.35em] text-[#D6B25E]">
            Soul State
          </span>

          <div className="mt-2 text-center">
            <h2 className="text-2xl font-light text-[#F4F1EA]">
              Balanced
            </h2>

            <p className="mt-2 text-white/50">
              Harmony • 76%
            </p>
          </div>
        </motion.div>

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="mt-14 rounded-full bg-[#D6B25E] px-8 py-4 text-base font-semibold text-black shadow-[0_0_50px_rgba(214,178,94,.35)] transition-all"
        >
          Continue Journey
        </motion.button>

      </div>

    </section>
  );
}