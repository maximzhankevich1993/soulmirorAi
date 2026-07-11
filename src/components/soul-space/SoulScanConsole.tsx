"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useSoulAnalysis } from "@/hooks/useSoulAnalysis";


export function SoulScanConsole() {

  const [text, setText] =
    useState("");

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
    <section className="mx-auto mt-24 w-full max-w-5xl px-6">


      <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-3xl">


        <div className="mb-8 flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D6B25E]/10">

            <Sparkles
              className="text-[#D6B25E]"
              size={28}
            />

          </div>


          <div>

            <p className="text-xs uppercase tracking-[0.4em] text-[#D6B25E]/70">
              AI Soul Scan
            </p>


            <h2 className="text-3xl text-[#F4F1EA]">
              Reveal your inner world
            </h2>

          </div>

        </div>



        <textarea

          value={text}

          onChange={(e) =>
            setText(e.target.value)
          }

          placeholder="Describe your thoughts, emotions or current life situation..."

          className="
          min-h-[180px]
          w-full
          resize-none
          rounded-3xl
          border
          border-white/10
          bg-black/20
          p-6
          text-lg
          text-white
          outline-none
          placeholder:text-white/30
          focus:border-[#D6B25E]/50
          "

        />



        <motion.button

          whileHover={{
            scale:1.03,
          }}

          whileTap={{
            scale:0.98,
          }}

          onClick={handleSubmit}

          disabled={loading}

          className="
          mt-6
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-full
          bg-[#D6B25E]
          py-5
          font-semibold
          text-black
          disabled:opacity-50
          "

        >

          {loading
            ? "Reading your soul..."
            : "Reveal My Soul"
          }


          <Sparkles size={20}/>


        </motion.button>


        {result && (

          <motion.div

            initial={{
              opacity:0,
              y:20,
            }}

            animate={{
              opacity:1,
              y:0,
            }}

            className="
            mt-10
            rounded-3xl
            border
            border-[#D6B25E]/20
            bg-[#D6B25E]/5
            p-6
            "

          >

            <p className="text-sm uppercase tracking-widest text-[#D6B25E]">
              Archetype
            </p>


            <h3 className="mt-2 text-4xl text-[#F4F1EA]">
              {result.archetype}
            </h3>


            <p className="mt-6 text-white/70">
              {result.insight}
            </p>


          </motion.div>

        )}


      </div>


    </section>
  );
}