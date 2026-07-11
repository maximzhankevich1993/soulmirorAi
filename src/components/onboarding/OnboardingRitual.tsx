"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface Props {
  onContinue: () => void;
}

export function OnboardingRitual({
  onContinue,
}: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#09090B] px-6">

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="max-w-xl text-center"
      >

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="mx-auto mb-10 flex h-20 w-20 items-center justify-center rounded-full border border-[#D6B25E]/30"
        >
          <Sparkles
            size={34}
            className="text-[#D6B25E]"
          />
        </motion.div>

        <p className="text-xs uppercase tracking-[0.5em] text-[#D6B25E]">
          Welcome
        </p>

        <h1 className="mt-6 text-5xl font-light text-[#F4F1EA]">
          SoulMirror
        </h1>

        <p className="mt-10 text-lg leading-8 text-white/70">
          Close your eyes for a moment.
          <br />
          Take one deep breath.
          <br />
          When you're ready, let your soul speak.
        </p>

        <motion.button
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
          onClick={onContinue}
          className="mt-14 rounded-full bg-[#D6B25E] px-10 py-5 font-semibold text-black"
        >
          Begin Journey
        </motion.button>

      </motion.div>

    </div>
  );
}