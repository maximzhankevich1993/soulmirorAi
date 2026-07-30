"use client";

import { motion } from "framer-motion";

import {
  Brain,
  Moon,
  Sparkles,
  Eye,
} from "lucide-react";


import {
  GlassCard,
} from "@/components/ui/GlassCard";



const modules = [

  {
    title:"Identity System",

    description:
      "Understanding your personality patterns and evolving archetype.",

    status:
      "Active",

    icon:Brain,

  },


  {
    title:"Dream Intelligence",

    description:
      "Analyzing symbols, emotions and subconscious signals.",

    status:
      "3 Insights",

    icon:Moon,

  },


  {
    title:"Reflection Engine",

    description:
      "Discovering hidden patterns through AI self-analysis.",

    status:
      "Online",

    icon:Sparkles,

  },


  {
    title:"Shadow Analysis",

    description:
      "Exploring deeper emotional layers and personal growth.",

    status:
      "Unlocked",

    icon:Eye,

  },


];





export function IntelligenceModules() {


  return (

    <section>


      <div

        className="
        mb-10
        "

      >

        <p

          className="
          text-[10px]
          uppercase
          tracking-[0.5em]
          text-[#D6B25E]
          "

        >

          EON Systems

        </p>



        <h2

          className="
          mt-4
          font-[family:var(--font-cormorant)]
          text-4xl
          font-light
          text-[#F4F1EA]
          "

        >

          Intelligence Modules

        </h2>



        <p

          className="
          mt-4
          max-w-2xl
          leading-7
          text-white/50
          "

        >

          Your personal AI systems continuously analyze
          identity, memories and emotional patterns.

        </p>


      </div>





      <div

        className="
        grid
        gap-6
        md:grid-cols-2
        "

      >


        {
          modules.map(

            (module,index)=>{


              const Icon =
                module.icon;



              return (

                <motion.div

                  key={
                    module.title
                  }


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

                    delay:index * 0.1,

                    duration:0.6,

                  }}



                >



                  <GlassCard

                    className="
                    group
                    relative
                    overflow-hidden
                    p-7
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-[#D6B25E]/20
                    "

                  >



                    {/* Hover glow */}

                    <div

                      className="
                      pointer-events-none
                      absolute
                      right-0
                      top-0
                      h-40
                      w-40
                      rounded-full
                      bg-[#D6B25E]/5
                      blur-3xl
                      transition-all
                      group-hover:bg-[#D6B25E]/15
                      "

                    />





                    <div

                      className="
                      relative
                      z-10
                      flex
                      items-start
                      justify-between
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
                        border
                        border-[#D6B25E]/20
                        bg-[#D6B25E]/5
                        "

                      >

                        <Icon

                          size={22}

                          className="
                          text-[#D6B25E]
                          "

                        />

                      </div>



                      <span

                        className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-3
                        py-1
                        text-[9px]
                        uppercase
                        tracking-[0.3em]
                        text-white/40
                        "

                      >

                        {module.status}

                      </span>


                    </div>





                    <h3

                      className="
                      relative
                      z-10
                      mt-7
                      text-2xl
                      font-light
                      text-[#F4F1EA]
                      "

                    >

                      {module.title}

                    </h3>





                    <p

                      className="
                      relative
                      z-10
                      mt-4
                      leading-7
                      text-white/50
                      "

                    >

                      {module.description}

                    </p>



                  </GlassCard>


                </motion.div>

              );

            }

          )
        }


      </div>


    </section>

  );

}