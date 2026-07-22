"use client";

import {
  MoonStar,
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


interface TarotResult {
  card: string;
  meaning: string;
  guidance: string;
}


export function TarotConsole() {


  const [loading,setLoading] =
    useState(false);


  const [result,setResult] =
    useState<TarotResult | null>(null);



  async function drawCard(){

    try {

      setLoading(true);


      const response =
        await fetch(
          "/api/tarot",
          {
            method:"POST",
          }
        );


      if(!response.ok){

        throw new Error(
          "Tarot failed"
        );

      }


      const data =
        await response.json();


      setResult(data);


    } catch(error){


      console.error(
        "TAROT ERROR",
        error
      );


    } finally {


      setLoading(false);


    }

  }



  return (

    <AIConsole


      icon={

        <MoonStar

          size={22}

          className="
          text-[#D6B25E]
          "

        />

      }



      eyebrow="EON Symbolic Intelligence"



      title="Explore archetypal symbols"



      description="
      Discover symbolic patterns
      through AI-powered archetype analysis.
      "



      placeholder="
      Your intuition is waiting...
      "



      value=""


      onChange={()=>{}}



      onSubmit={drawCard}



      loading={loading}



      buttonText="Reveal Symbol"



      loadingText="Analyzing archetype..."



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
            border-[#D6B25E]/20
            bg-gradient-to-br
            from-[#D6B25E]/10
            via-white/[0.03]
            to-[#8B5CF6]/10
            p-7
            text-center
            "

          >


            <div
              className="
              flex
              flex-col
              items-center
              gap-3
              "
            >

              <div
                className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-[#D6B25E]/10
                "
              >

                <Brain
                  size={22}
                  className="
                  text-[#D6B25E]
                  "
                />

              </div>


              <p
                className="
                text-[10px]
                uppercase
                tracking-[0.4em]
                text-[#D6B25E]
                "
              >
                Symbolic Intelligence Result
              </p>


              <p
                className="
                text-xs
                text-white/40
                "
              >
                Powered by EON AI
              </p>


            </div>



            <div>

              <h3
                className="
                font-[family:var(--font-cormorant)]
                text-5xl
                font-light
                text-[#F4F1EA]
                "
              >
                {result.card}
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
                Symbol Meaning
              </p>


              <p
                className="
                mt-4
                leading-8
                text-white/70
                "
              >
                {result.meaning}
              </p>

            </div>



            <div
              className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-5
              "
            >

              <div
                className="
                flex
                items-center
                justify-center
                gap-2
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
                  tracking-[0.35em]
                  text-white/40
                  "
                >
                  Guidance
                </p>

              </div>


              <p
                className="
                mt-3
                text-white/80
                "
              >
                {result.guidance}
              </p>


            </div>



            <div
              className="
              border-t
              border-white/10
              pt-5
              "
            >

              <p
                className="
                text-[10px]
                uppercase
                tracking-[0.4em]
                text-white/30
                "
              >
                EON Intelligence Engine • Symbol Analysis System
              </p>


            </div>


          </motion.div>

        )

      }


    />

  );

}