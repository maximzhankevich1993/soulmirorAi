"use client";

import {
  Moon,
  Sparkles,
  Brain,
} from "lucide-react";

import {
  motion,
} from "framer-motion";

import {
  useState,
} from "react";


import {
  AIConsole,
} from "@/components/ui/AIConsole";


import {
  useDreamAnalysis,
} from "@/hooks/useDreamAnalysis";



export function DreamConsole() {


  const [dream,setDream] =
    useState("");



  const {
    analyzeDream,
    loading,
    result,
  } =
    useDreamAnalysis();



  async function handleSubmit(){


    if(!dream.trim())
      return;


    await analyzeDream(dream);


    setDream("");


  }



  return (

    <AIConsole


      icon={

        <Moon

          size={22}

          className="
          text-purple-300
          "

        />

      }



      eyebrow="EON Dream Intelligence"



      title="Decode subconscious patterns"



      description="
      AI interpretation of dream symbols,
      emotional signals and hidden patterns.
      "



      placeholder="
      Describe your dream...
      symbols, places, people,
      emotions and experiences
      "



      value={dream}



      onChange={setDream}



      onSubmit={handleSubmit}



      loading={loading}



      buttonText="Analyze Dream"



      loadingText="Reading subconscious patterns..."



      color="purple"


      result={

        result && (

          <motion.div

            initial={{
              opacity:0,
              y:25,
            }}

            animate={{
              opacity:1,
              y:0,
            }}

            transition={{
              duration:0.6,
            }}

            className="
            space-y-7
            rounded-[32px]
            border
            border-purple-400/20
            bg-gradient-to-br
            from-purple-500/10
            via-white/[0.03]
            to-[#D6B25E]/10
            p-7
            "
          >


            <div
              className="
              flex
              items-center
              gap-4
              "
            >

              <div
                className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                bg-purple-500/10
                "
              >

                <Brain
                  size={21}
                  className="
                  text-purple-300
                  "
                />

              </div>


              <div>

                <p
                  className="
                  text-[10px]
                  uppercase
                  tracking-[0.4em]
                  text-purple-300
                  "
                >
                  Dream Intelligence Result
                </p>


                <p
                  className="
                  mt-1
                  text-xs
                  text-white/40
                  "
                >
                  Powered by EON AI
                </p>

              </div>


            </div>



            <div>

              <p
                className="
                text-[11px]
                uppercase
                tracking-[0.35em]
                text-white/40
                "
              >
                Core Meaning
              </p>


              <h3
                className="
                mt-3
                text-3xl
                font-light
                leading-relaxed
                text-[#F4F1EA]
                "
              >
                {result.summary}
              </h3>

            </div>



            <div>

              <p
                className="
                text-[11px]
                uppercase
                tracking-[0.35em]
                text-white/40
                "
              >
                Symbolic Patterns
              </p>



              <div
                className="
                mt-4
                flex
                flex-wrap
                gap-3
                "
              >

                {result.symbols?.map(
                  (symbol,index)=>(
                    
                    <span

                      key={index}

                      className="
                      rounded-full
                      border
                      border-purple-400/20
                      bg-purple-500/10
                      px-4
                      py-2
                      text-xs
                      text-purple-100/80
                      "

                    >
                      {symbol}
                    </span>

                  )
                )}

              </div>

            </div>


            <div>

              <p
                className="
                text-[11px]
                uppercase
                tracking-[0.35em]
                text-white/40
                "
              >
                AI Interpretation
              </p>


              <p
                className="
                mt-4
                text-base
                leading-8
                text-white/70
                "
              >
                {result.interpretation}
              </p>

            </div>



            <div
              className="
              border-t
              border-white/10
              pt-5
              "
            >

              <div
                className="
                flex
                items-center
                gap-3
                "
              >

                <Sparkles
                  size={15}
                  className="
                  text-[#D6B25E]
                  "
                />


                <p
                  className="
                  text-[10px]
                  uppercase
                  tracking-[0.4em]
                  text-white/30
                  "
                >
                  EON Intelligence Engine • Dream Analysis System
                </p>

              </div>

            </div>


          </motion.div>

        )

      }


    />

  );

}