
"use client";

import { Sparkles } from "lucide-react";
import { AIConsole } from "@/components/ui/AIConsole";
import { useSoulAnalysis } from "@/hooks/useSoulAnalysis";
import { useState } from "react";
import { motion } from "framer-motion";


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
    <AIConsole

      icon={
        <Sparkles
          size={20}
          className="text-[#D6B25E]"
        />
      }


      eyebrow="AI Soul Scan"


      title="Reveal your inner world"


      placeholder="
Describe your thoughts, emotions or current life situation...
"


      value={text}


      onChange={setText}


      onSubmit={handleSubmit}


      loading={loading}


      buttonText="Reveal My Soul"


      loadingText="Reading your soul..."


      result={
        result && (

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
            rounded-3xl
            border
            border-[#D6B25E]/20
            bg-[#D6B25E]/5
            p-5
            "
          >

            <p
              className="
              text-[11px]
              uppercase
              tracking-[0.35em]
              text-[#D6B25E]
              "
            >
              Archetype
            </p>


            <h3
              className="
              mt-2
              text-3xl
              font-light
              text-[#F4F1EA]
              "
            >
              {result.archetype}
            </h3>


            <p
              className="
              mt-5
              leading-7
              text-white/70
              "
            >
              {result.insight}
            </p>


          </motion.div>

        )
      }

    />
  );
}

