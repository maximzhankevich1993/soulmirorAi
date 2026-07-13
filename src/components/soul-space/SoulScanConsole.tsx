
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useSoulAnalysis } from "@/hooks/useSoulAnalysis";

export function SoulScanConsole() {
  const [text, setText] = useState("");

  const {
    analyze,
    loading,
    result,
  } = useSoulAnalysis();

  async function handleSubmit() {
    if (!text.trim()) return;

    await analyze(text);

    setText("");
  }

  return (
    <section className="mx-auto mt-16 w-full max-w-4xl px-6">
      <div
        className="
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.03]
        p-6
        backdrop-blur-3xl
      "
      >
        <div className="mb-6 flex items-center gap-3">
          <div
            className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            bg-[#D6B25E]/10
          "
          >
            <Sparkles
              className="text-[#D6B25E]"
              size={20}
            />
          </div>

          <div>
            <p
              className="
              text-[11px]
              uppercase
              tracking-[0.35em]
              text-[#D6B25E]/70
            "
            >
              AI Soul Scan
            </p>

            <h2 className="text-2xl font-light text-[#F4F1EA]">
              Reveal your inner world
            </h2>
          </div>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Describe your thoughts, emotions or current life situation..."
          className="
          min-h-[130px]
          w-full
          resize-none
          rounded-3xl
          border
          border-white/10
          bg-black/20
          p-5
          text-base
          leading-7
          text-white
          outline-none
          placeholder:text-white/30
          transition-all
          duration-300
          focus:border-[#D6B25E]/40
          "
        />

        <motion.button
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          onClick={handleSubmit}
          disabled={loading}
          className="
          mt-5
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-full
          bg-[#D6B25E]
          py-4
          text-sm
          font-semibold
          text-black
          shadow-[0_0_30px_rgba(214,178,94,.18)]
          transition-all
          disabled:opacity-50
          "
        >
          {loading
            ? "Reading your soul..."
            : "Reveal My Soul"}

          <Sparkles size={18} />
        </motion.button>

        {result && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
            mt-8
            rounded-3xl
            border
            border-[#D6B25E]/20
            bg-[#D6B25E]/5
            p-5
            "
          >
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#D6B25E]">
              Archetype
            </p>

            <h3 className="mt-2 text-3xl font-light text-[#F4F1EA]">
              {result.archetype}
            </h3>

            <p className="mt-5 leading-7 text-white/70">
              {result.insight}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

