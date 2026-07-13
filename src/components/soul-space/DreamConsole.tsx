
"use client";

import { Moon, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import { AIConsole } from "@/components/ui/AIConsole";
import { useDreamAnalysis } from "@/hooks/useDreamAnalysis";


export function DreamConsole() {
  const [dream, setDream] = useState("");

  const {
    analyzeDream,
    loading,
    result,
  } = useDreamAnalysis();


  async function handleSubmit() {
    if (!dream.trim()) return;

    await analyzeDream(dream);

    setDream("");
  }


  return (
    <AIConsole

      icon={
        <Moon
          size={20}
          className="text-purple-300"
        />
      }


      eyebrow="Dream Analysis"


      title="Decode your dreams"


      placeholder="
Describe your dream...
symbols, places, people, feelings
"


      value={dream}


      onChange={setDream}


      onSubmit={handleSubmit}


      loading={loading}


      buttonText="Reveal Dream Meaning"


      loadingText="Interpreting dream..."


      color="purple"


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
            border-purple-400/20
            bg-purple-500/5
            p-5
            "
          >

            <p
              className="
              text-[11px]
              uppercase
              tracking-[0.35em]
              text-purple-300
              "
            >
              Dream Insight
            </p>


            <h3
              className="
              mt-3
              text-2xl
              font-light
              text-[#F4F1EA]
              "
            >
              {result.summary}
            </h3>


            <div className="mt-5 flex flex-wrap gap-2">

              {result.symbols?.map(
                (symbol, index) => (
                  <span
                    key={index}
                    className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-3
                    py-1.5
                    text-xs
                    text-white/70
                    "
                  >
                    {symbol}
                  </span>
                )
              )}

            </div>


            <p
              className="
              mt-5
              leading-7
              text-white/70
              "
            >
              {result.interpretation}
            </p>


          </motion.div>

        )
      }

    />
  );
}

