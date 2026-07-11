"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sparkles } from "lucide-react";
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
    <section className="mx-auto mt-24 w-full max-w-5xl px-6">


      <div className="
      rounded-[40px]
      border
      border-white/10
      bg-white/[0.03]
      p-8
      backdrop-blur-3xl
      ">


        <div className="mb-8 flex items-center gap-4">


          <div className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-purple-500/10
          ">

            <Moon
              className="text-purple-300"
              size={28}
            />

          </div>


          <div>

            <p className="
            text-xs
            uppercase
            tracking-[0.4em]
            text-purple-300
            ">

              Dream Analysis

            </p>


            <h2 className="
            text-3xl
            text-[#F4F1EA]
            ">

              Decode your dreams

            </h2>

          </div>


        </div>



        <textarea

          value={dream}

          onChange={(e)=>
            setDream(e.target.value)
          }

          placeholder="
Describe your dream...
symbols, places, people, feelings
"

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
          focus:border-purple-400/50
          "

        />



        <motion.button

          whileHover={{
            scale:1.03
          }}

          whileTap={{
            scale:0.98
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
          bg-gradient-to-r
          from-purple-500
          to-[#D6B25E]
          py-5
          font-semibold
          text-black
          disabled:opacity-50
          "

        >

          {loading
            ? "Interpreting dream..."
            : "Reveal Dream Meaning"
          }

          <Sparkles size={20}/>

        </motion.button>



        {result && (

          <motion.div

            initial={{
              opacity:0,
              y:20
            }}

            animate={{
              opacity:1,
              y:0
            }}

            className="
            mt-10
            rounded-3xl
            border
            border-purple-400/20
            bg-purple-500/5
            p-6
            "

          >

            <p className="
            text-xs
            uppercase
            tracking-widest
            text-purple-300
            ">

              Dream Insight

            </p>


            <h3 className="
            mt-3
            text-2xl
            text-white
            ">

              {result.summary}

            </h3>


            <div className="mt-5 flex flex-wrap gap-2">

              {result.symbols?.map(
                (symbol,index)=>(
                  <span
                    key={index}
                    className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-2
                    text-sm
                    text-white/70
                    "
                  >
                    {symbol}
                  </span>
                )
              )}

            </div>


            <p className="
            mt-6
            text-white/70
            ">

              {result.interpretation}

            </p>


          </motion.div>

        )}

      </div>


    </section>
  );
}