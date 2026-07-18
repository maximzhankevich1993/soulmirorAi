"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles, Clock, Globe2 } from "lucide-react";


const products = [
  {
    name: "SoulMirror",
    category: "Personal Intelligence",
    description:
      "AI reflection system for identity, archetypes, dreams and personal evolution.",
    icon: Brain,
    active: true,
  },

  {
    name: "Memora",
    category: "AI Memory System",
    description:
      "A personal AI memory layer that remembers your experiences and knowledge.",
    icon: Clock,
    active: false,
  },

  {
    name: "Future Self",
    category: "Identity Simulation",
    description:
      "Explore possible versions of yourself through AI-powered scenarios.",
    icon: Sparkles,
    active: false,
  },

  {
    name: "Parallel",
    category: "AI Universe",
    description:
      "A new generation of interactive AI worlds and experiences.",
    icon: Globe2,
    active: false,
  },
];


export function EonEcosystemSection() {


  return (

    <section
      id="ecosystem"
      className="
      relative
      mx-auto
      mt-32
      w-full
      max-w-7xl
      px-6
      "
    >


      {/* Glow */}

      <div
        className="
        pointer-events-none
        absolute
        left-1/2
        top-0
        h-[500px]
        w-[500px]
        -translate-x-1/2
        rounded-full
        bg-[#D6B25E]/5
        blur-[160px]
        "
      />



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
          duration:0.8,
        }}

        className="
        relative
        text-center
        "
      >


        <p
          className="
          text-xs
          uppercase
          tracking-[0.45em]
          text-[#D6B25E]
          "
        >
          EON AI Ecosystem
        </p>



        <h2
          className="
          mt-6
          font-[family:var(--font-cormorant)]
          text-5xl
          leading-tight
          text-[#F4F1EA]
          md:text-6xl
          "
        >
          Intelligence beyond
          <br />
          a single experience.
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
          SoulMirror is the first product
          created by EON AI.

          <br />

          A growing ecosystem of AI systems
          designed to understand identity,
          memory and human evolution.
        </p>


      </motion.div>





      <div
        className="
        relative
        mt-16
        grid
        gap-5
        md:grid-cols-2
        xl:grid-cols-4
        "
      >


        {
          products.map((product,index)=>{


            const Icon =
              product.icon;


            return (

              <motion.div

                key={product.name}

                initial={{
                  opacity:0,
                  y:30,
                }}

                whileInView={{
                  opacity:1,
                  y:0,
                }}

                transition={{
                  delay:index*0.1,
                }}

                viewport={{
                  once:true,
                }}

                className={`
                  rounded-[32px]
                  border
                  p-7
                  backdrop-blur-2xl
                  transition-all
                  duration-300

                  ${
                    product.active

                    ?

                    "
                    border-[#D6B25E]/30
                    bg-gradient-to-br
                    from-[#D6B25E]/10
                    to-white/[0.03]
                    "

                    :

                    "
                    border-white/10
                    bg-white/[0.03]
                    opacity-70
                    "

                  }

                  hover:-translate-y-2
                `}

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

                  <Icon
                    size={24}
                    className="text-[#D6B25E]"
                  />

                </div>



                <p
                  className="
                  mt-6
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-[#D6B25E]
                  "
                >
                  {
                    product.category
                  }
                </p>



                <h3
                  className="
                  mt-3
                  text-2xl
                  text-[#F4F1EA]
                  "
                >
                  {
                    product.name
                  }
                </h3>



                <p
                  className="
                  mt-4
                  text-sm
                  leading-6
                  text-white/50
                  "
                >
                  {
                    product.description
                  }
                </p>



                {
                  !product.active && (

                    <span
                      className="
                      mt-5
                      inline-block
                      rounded-full
                      border
                      border-white/10
                      px-3
                      py-1
                      text-[10px]
                      uppercase
                      tracking-widest
                      text-white/40
                      "
                    >
                      Coming Soon
                    </span>

                  )
                }


              </motion.div>

            );


          })
        }


      </div>


    </section>

  );

}