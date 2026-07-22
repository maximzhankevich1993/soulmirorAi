"use client";

import {
  Crown,
  ArrowRight,
  Sparkles,
  Infinity,
} from "lucide-react";

import { motion } from "framer-motion";


import {
  GlassCard,
} from "@/components/ui/GlassCard";


import {
  GlowIcon,
} from "@/components/ui/GlowIcon";


import {
  GradientButton,
} from "@/components/ui/GradientButton";



export function PremiumCard() {


  return (


    <section

      className="
      relative
      mx-auto
      mt-24
      w-full
      max-w-6xl
      px-6
      "

    >



      <motion.div


        whileHover={{

          scale:1.015,

        }}



        transition={{

          type:"spring",

          stiffness:220,

        }}



      >



        <GlassCard


          highlight


          className="
          relative
          overflow-hidden
          p-8
          md:p-10
          "


        >



          {/* EON Ambient Glow */}

          <div

            className="
            pointer-events-none
            absolute
            right-0
            top-0
            h-96
            w-96
            rounded-full
            bg-[#D6B25E]/10
            blur-[140px]
            "

          />




          <div

            className="
            relative
            z-10
            flex
            flex-col
            gap-10
            lg:flex-row
            lg:items-center
            lg:justify-between
            "

          >





            <div className="max-w-3xl">


              <GlowIcon size="lg">


                <Crown

                  size={26}

                  className="
                  text-[#D6B25E]
                  "

                />


              </GlowIcon>





              <div

                className="
                mt-6
                flex
                items-center
                gap-3
                "

              >



                <p

                  className="
                  text-[11px]
                  uppercase
                  tracking-[0.45em]
                  text-[#D6B25E]
                  "

                >

                  SoulMirror Pro

                </p>




                <span

                  className="
                  rounded-full
                  border
                  border-[#D6B25E]/20
                  bg-[#D6B25E]/5
                  px-3
                  py-1
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-[#D6B25E]
                  "

                >

                  by EON AI

                </span>



              </div>






              <h2


                className="
                mt-4
                font-[family:var(--font-cormorant)]
                text-4xl
                font-light
                leading-tight
                text-[#F4F1EA]
                md:text-6xl
                "

              >

                Unlock your complete
                <br />

                personal intelligence system.

              </h2>






              <p


                className="
                mt-6
                max-w-2xl
                text-base
                leading-8
                text-white/60
                "

              >

                Access advanced AI reflection,
                dream intelligence, identity analysis
                and your evolving personal profile
                powered by EON Intelligence Engine.

              </p>







              <div

                className="
                mt-8
                flex
                flex-wrap
                gap-3
                "

              >



                <span

                  className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-4
                  py-2
                  text-xs
                  text-white/60
                  "

                >

                  <Sparkles size={14}/>

                  Unlimited AI Insights

                </span>





                <span

                  className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-4
                  py-2
                  text-xs
                  text-white/60
                  "

                >

                  <Infinity size={14}/>

                  Evolution Memory

                </span>




              </div>



            </div>








            <div


              className="
              flex
              flex-col
              items-start
              lg:items-end
              "

            >




              <p

                className="
                text-[10px]
                uppercase
                tracking-[0.4em]
                text-white/40
                "

              >

                Personal Intelligence Access

              </p>





              <h3

                className="
                mt-4
                text-6xl
                font-light
                text-[#F4F1EA]
                "

              >

                $19

              </h3>




              <p

                className="
                mt-2
                text-white/50
                "

              >

                per month

              </p>





              <GradientButton


                className="
                mt-8
                w-auto
                px-10
                "


                icon={

                  <ArrowRight size={18}/>

                }


              >

                Enter Pro Experience

              </GradientButton>






              <p

                className="
                mt-5
                text-right
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white/30
                "

              >

                Powered by EON AI

              </p>




            </div>




          </div>





        </GlassCard>




      </motion.div>




    </section>


  );

}