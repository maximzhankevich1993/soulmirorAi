"use client";

import {
  Sparkles,
} from "lucide-react";

import {
  motion,
} from "framer-motion";


import {
  AIConsole,
} from "@/components/ui/AIConsole";


import {
  useSoulAnalysis,
} from "@/hooks/useSoulAnalysis";




export function SoulScanSection(){


  const {
    analyze,
    loading,
    result,
  } =
  useSoulAnalysis();




  const [text,setText] =
    require("react")
    .useState("");






  async function handleSubmit(){

    if(!text.trim())
      return;


    await analyze(text);

  }







  return (

    <section

      id="soul-scan"

      className="
      relative
      mx-auto
      mt-32
      w-full
      max-w-6xl
      px-6
      "

    >





      <motion.div

        initial={{
          opacity:0,
          y:40,
        }}

        whileInView={{
          opacity:1,
          y:0,
        }}

        viewport={{
          once:true,
        }}

        transition={{
          duration:1,
        }}

        className="
        text-center
        "

      >


        <p

          className="
          text-[11px]
          uppercase
          tracking-[0.5em]
          text-[#D6B25E]
          "

        >

          Soul Intelligence


        </p>





        <h2

          className="
          mt-6
          font-[family:var(--font-cormorant)]
          text-5xl
          font-light
          text-[#F4F1EA]
          md:text-7xl
          "

        >

          Discover your
          <br/>
          inner architecture


        </h2>






        <p

          className="
          mx-auto
          mt-6
          max-w-2xl
          text-lg
          leading-8
          text-white/50
          "

        >

          Describe your thoughts,
          emotions or current life phase.
          Your personal AI mirror will reveal
          hidden patterns and archetypes.

        </p>


      </motion.div>









      <AIConsole

        icon={
          <Sparkles size={24}/>
        }


        eyebrow="Soul Scan"


        title="Reflect your inner world"


        placeholder="
        Tell us what you feel,
        what you are searching for,
        or what you want to understand...
        "


        value={text}


        onChange={
          setText
        }


        onSubmit={
          handleSubmit
        }


        loading={
          loading
        }


        buttonText="
        Analyze Soul
        "


        loadingText="
        Reading your energy...
        "



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
              bg-black/20
              p-6
              "

            >

              <p

                className="
                text-xs
                uppercase
                tracking-[0.35em]
                text-[#D6B25E]
                "

              >

                Soul Reflection


              </p>




              <h3

                className="
                mt-4
                text-3xl
                font-light
                text-[#F4F1EA]
                "

              >

                {
                  result.archetype
                }


              </h3>




              <p

                className="
                mt-4
                leading-7
                text-white/60
                "

              >

                {
                  result.reflection
                }


              </p>






              <div

                className="
                mt-6
                grid
                gap-4
                md:grid-cols-2
                "

              >


                <div>

                  <p className="
                  text-xs
                  uppercase
                  tracking-widest
                  text-white/30
                  ">
                    Emotion
                  </p>


                  <p className="
                  mt-2
                  text-[#F4F1EA]
                  ">
                    {
                      result.emotion
                    }
                  </p>

                </div>





                <div>

                  <p className="
                  text-xs
                  uppercase
                  tracking-widest
                  text-white/30
                  ">
                    Shadow
                  </p>


                  <p className="
                  mt-2
                  text-[#F4F1EA]
                  ">
                    {
                      result.shadow
                    }
                  </p>

                </div>


              </div>



            </motion.div>

          )

        }


      />



    </section>

  );

}