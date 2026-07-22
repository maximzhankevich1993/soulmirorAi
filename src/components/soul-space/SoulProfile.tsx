"use client";

import { motion } from "framer-motion";

import {
  Sparkles,
  Brain,
  Heart,
  Moon,
  Eye,
} from "lucide-react";


import {
  useSoulMemoryStore,
} from "@/store/soul-memory-store";


import {
  GlassCard,
} from "@/components/ui/GlassCard";


import {
  GlowIcon,
} from "@/components/ui/GlowIcon";



export function SoulProfile() {


  const {
    archetype,
    emotion,
    insight,
    shadow,
  } =
    useSoulMemoryStore();



  const items = [

    {
      title:"Core Archetype",
      value:
        archetype ||
        "Unknown",
      subtitle:"Identity Pattern",
      icon:Sparkles,
      color:"text-[#D6B25E]",
    },


    {
      title:"Current State",
      value:
        emotion ||
        "Balanced",
      subtitle:"Emotional Intelligence",
      icon:Heart,
      color:"text-pink-300",
    },


    {
      title:"AI Insight",
      value:
        insight ||
        "Complete Soul Scan to unlock your personal intelligence profile.",
      subtitle:"Personal Analysis",
      icon:Brain,
      color:"text-purple-300",
    },

  ];



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


        initial={{
          opacity:0,
          y:30,
        }}


        whileInView={{
          opacity:1,
          y:0,
        }}


        viewport={{
          once:true,
        }}


        transition={{
          duration:0.8,
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


          {/* Ambient Glow */}

          <div

            className="
            pointer-events-none
            absolute
            right-0
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
            gap-5
            "

          >


            <GlowIcon size="lg">


              <Moon

                size={26}

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

                EON Identity Profile

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

                Your Personal Intelligence

              </h2>



              <p

                className="
                mt-3
                text-sm
                text-white/40
                "

              >

                A living profile created through your memories,
                emotions and patterns.

              </p>


            </div>


          </div>





          <div

            className="
            relative
            z-10
            mt-10
            grid
            gap-5
            md:grid-cols-3
            "

          >


            {items.map((item,index)=>{


              const Icon =
                item.icon;



              return (


                <motion.div


                  key={item.title}


                  initial={{
                    opacity:0,
                    y:20,
                  }}


                  whileInView={{
                    opacity:1,
                    y:0,
                  }}


                  viewport={{
                    once:true,
                  }}


                  transition={{
                    delay:index * 0.1,
                  }}


                  className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#D6B25E]/20
                  "


                >


                  <Icon

                    size={24}

                    className={item.color}

                  />



                  <p

                    className="
                    mt-5
                    text-[10px]
                    uppercase
                    tracking-[0.35em]
                    text-white/40
                    "

                  >

                    {item.title}

                  </p>




                  <p

                    className="
                    mt-3
                    text-lg
                    leading-7
                    text-[#F4F1EA]
                    "

                  >

                    {item.value}

                  </p>



                  <p

                    className="
                    mt-3
                    text-xs
                    uppercase
                    tracking-[0.25em]
                    text-white/30
                    "

                  >

                    {item.subtitle}

                  </p>


                </motion.div>


              );


            })}


          </div>





          {shadow && (


            <motion.div


              initial={{
                opacity:0,
              }}


              whileInView={{
                opacity:1,
              }}


              viewport={{
                once:true,
              }}


              className="
              relative
              z-10
              mt-6
              rounded-3xl
              border
              border-purple-400/20
              bg-purple-500/5
              p-6
              "


            >


              <div

                className="
                flex
                items-center
                gap-3
                "

              >


                <Eye

                  size={18}

                  className="
                  text-purple-300
                  "

                />


                <p

                  className="
                  text-[10px]
                  uppercase
                  tracking-[0.4em]
                  text-purple-300
                  "

                >

                  Shadow Intelligence

                </p>


              </div>



              <p

                className="
                mt-4
                leading-8
                text-white/70
                "

              >

                {shadow}

              </p>


            </motion.div>


          )}





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

              Powered by EON Intelligence Engine • Identity System

            </p>


          </div>



        </GlassCard>


      </motion.div>


    </section>


  );

}