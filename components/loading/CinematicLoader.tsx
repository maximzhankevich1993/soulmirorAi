"use client";

import { motion } from "framer-motion";

import { LoaderGlow } from "./LoaderGlow";
import { LoaderParticles } from "./LoaderParticles";
import { LoaderOrb } from "./LoaderOrb";



export function CinematicLoader() {


  return (

    <main

      className="
      relative
      flex
      min-h-screen
      items-center
      justify-center
      overflow-hidden
      bg-[#050505]
      text-[#F4F1EA]
      "

    >


      <LoaderGlow />

      <LoaderParticles />



      <motion.div

        initial={{

          opacity:0,

          scale:0.9,

        }}


        animate={{

          opacity:1,

          scale:1,

        }}


        transition={{

          duration:1.5,

          ease:"easeOut",

        }}


        className="
        relative
        z-10
        flex
        flex-col
        items-center
        "

      >



        <LoaderOrb />




        <motion.div

          initial={{

            opacity:0,

            y:30,

          }}


          animate={{

            opacity:1,

            y:0,

          }}


          transition={{

            delay:1,

            duration:1,

          }}


          className="
          mt-14
          text-center
          "

        >


          <p

            className="
            text-[10px]
            uppercase
            tracking-[0.6em]
            text-[#D6B25E]
            "

          >

            Entering

          </p>



          <h1

            className="
            mt-4
            font-[family:var(--font-cormorant)]
            text-5xl
            font-light
            tracking-wide
            text-[#F4F1EA]
            "

          >

            Soul Space

          </h1>



          <motion.div

            animate={{

              opacity:[

                0.3,

                1,

                0.3,

              ],

            }}

            transition={{

              duration:3,

              repeat:Infinity,

            }}

            className="
            mt-6
            text-[10px]
            uppercase
            tracking-[0.5em]
            text-white/30
            "

          >

            EON Intelligence System

          </motion.div>



        </motion.div>


      </motion.div>



    </main>

  );

}