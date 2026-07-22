"use client";

import { motion } from "framer-motion";

import {
  Sparkles,
  Moon,
  CreditCard,
  Brain,
} from "lucide-react";


import {
  useSoulJourney,
} from "@/hooks/useSoulJourney";


import {
  GlassCard,
} from "@/components/ui/GlassCard";


import {
  GlowIcon,
} from "@/components/ui/GlowIcon";



interface JourneyItem {

  type:
    | "soul"
    | "dream"
    | "tarot";

  title:string;

  description:string;

  date:string;

}



export function SoulJourneyTimeline() {


  const {
    items,
  } =
    useSoulJourney();



  const icons = {

    soul: Sparkles,

    dream: Moon,

    tarot: CreditCard,

  };



  return (


    <section

      className="
      relative
      mx-auto
      mt-24
      w-full
      max-w-5xl
      px-6
      "

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


        {/* Ambient Glow */}

        <div

          className="
          pointer-events-none
          absolute
          -right-20
          top-0
          h-72
          w-72
          rounded-full
          bg-[#D6B25E]/10
          blur-[120px]
          "

        />




        <div

          className="
          relative
          z-10
          flex
          items-center
          gap-4
          "

        >


          <GlowIcon size="lg">


            <Brain

              size={24}

              className="
              text-[#D6B25E]
              "

            />


          </GlowIcon>




          <div>


            <p

              className="
              text-[11px]
              uppercase
              tracking-[0.45em]
              text-[#D6B25E]
              "

            >

              EON Evolution Timeline

            </p>



            <h2

              className="
              mt-2
              font-[family:var(--font-cormorant)]
              text-4xl
              font-light
              text-[#F4F1EA]
              "

            >

              Your intelligence evolution

            </h2>



            <p

              className="
              mt-3
              text-sm
              text-white/40
              "

            >

              A living timeline of your identity,
              emotions and subconscious patterns.

            </p>



          </div>



        </div>





        {items.length === 0 && (


          <div

            className="
            relative
            z-10
            mt-10
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-6
            "

          >


            <p

              className="
              text-sm
              leading-7
              text-white/50
              "

            >

              Your evolution timeline will appear
              after your first interaction with
              EON Intelligence systems.

            </p>


          </div>


        )}





        <div

          className="
          relative
          z-10
          mt-10
          space-y-5
          "

        >



          {items.map(
            (item,index)=>{


              const Icon =
                icons[item.type];



              return (


                <motion.div


                  key={index}



                  initial={{

                    opacity:0,

                    x:-20,

                  }}



                  whileInView={{

                    opacity:1,

                    x:0,

                  }}



                  viewport={{

                    once:true,

                  }}



                  transition={{

                    delay:index * 0.08,

                  }}



                  className="
                  group
                  relative
                  flex
                  gap-5
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-6
                  transition-all
                  duration-500
                  hover:border-[#D6B25E]/20
                  "

                >



                  <GlowIcon>


                    <Icon

                      size={21}

                      className="
                      text-[#D6B25E]
                      "

                    />


                  </GlowIcon>





                  <div>


                    <p

                      className="
                      text-[10px]
                      uppercase
                      tracking-[0.35em]
                      text-white/40
                      "

                    >

                      {item.date}

                    </p>




                    <h3

                      className="
                      mt-2
                      text-xl
                      font-light
                      text-[#F4F1EA]
                      "

                    >

                      {item.title}

                    </h3>




                    <p

                      className="
                      mt-3
                      leading-7
                      text-white/60
                      "

                    >

                      {item.description}

                    </p>



                  </div>



                </motion.div>


              );


            }

          )}



        </div>





        <div

          className="
          relative
          z-10
          mt-8
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

            Powered by EON Intelligence Engine • Evolution Memory System

          </p>


        </div>



      </GlassCard>


    </section>


  );

}