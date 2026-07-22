"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { SoulOrb3D } from "./SoulOrb3D";


export function SoulSpaceHero() {

  return (

    <section

      className="
      relative
      flex
      min-h-[960px]
      items-center
      justify-center
      overflow-hidden
      px-6
      pt-32
      "

    >


      {/* Ambient System Glow */}


      <div

        className="
        pointer-events-none
        absolute
        left-1/2
        top-10
        h-[800px]
        w-[800px]
        -translate-x-1/2
        rounded-full
        bg-[#D6B25E]/10
        blur-[200px]
        "

      />



      <div

        className="
        pointer-events-none
        absolute
        right-[-150px]
        top-40
        h-[500px]
        w-[500px]
        rounded-full
        bg-[#8B5CF6]/10
        blur-[180px]
        "

      />




      <div

        className="
        relative
        z-10
        mx-auto
        flex
        max-w-6xl
        flex-col
        items-center
        "

      >




        {/* Brand */}


        <motion.p

          initial={{
            opacity:0,
            y:20,
          }}

          animate={{
            opacity:1,
            y:0,
          }}

          transition={{
            duration:0.8,
          }}

          className="
          text-[10px]
          uppercase
          tracking-[0.6em]
          text-[#D6B25E]
          "

        >

          EON AI presents

        </motion.p>






        {/* Main Title */}



        <motion.h1

          initial={{
            opacity:0,
            y:40,
          }}

          animate={{
            opacity:1,
            y:0,
          }}

          transition={{
            delay:0.2,
            duration:1,
          }}

          className="
          mt-10
          text-center
          font-[family:var(--font-cormorant)]
          text-7xl
          font-light
          leading-[0.85]
          tracking-tight
          text-[#F4F1EA]
          md:text-[120px]
          "

        >

          SOUL
          <br/>
          MIRROR


        </motion.h1>







        <motion.p

          initial={{
            opacity:0,
          }}

          animate={{
            opacity:1,
          }}

          transition={{
            delay:0.5,
          }}

          className="
          mt-8
          text-xs
          uppercase
          tracking-[0.55em]
          text-[#D6B25E]
          "

        >

          Personal Intelligence Experience

        </motion.p>






        <motion.p

          initial={{
            opacity:0,
          }}

          animate={{
            opacity:1,
          }}

          transition={{
            delay:0.7,
          }}

          className="
          mt-8
          max-w-2xl
          text-center
          text-lg
          leading-8
          text-white/60
          "

        >

          A personal intelligence mirror
          designed to understand your identity,
          patterns, emotions and evolution.

          <br/>

          Powered by EON AI intelligence systems.

        </motion.p>








        {/* Orb */}



        <motion.div

          initial={{
            opacity:0,
            scale:0.85,
          }}

          animate={{
            opacity:1,
            scale:1,
          }}

          transition={{
            delay:0.9,
            duration:1,
          }}

          className="my-14"

        >

          <SoulOrb3D />

        </motion.div>







        {/* Product Badge */}



        <motion.div

          initial={{
            opacity:0,
          }}

          animate={{
            opacity:1,
          }}

          transition={{
            delay:1.2,
          }}

          className="
          rounded-full
          border
          border-[#D6B25E]/20
          bg-white/[0.03]
          px-6
          py-3
          backdrop-blur-2xl
          "

        >

          <span

            className="
            text-[10px]
            uppercase
            tracking-[0.45em]
            text-[#D6B25E]
            "

          >

            A product by EON AI

          </span>


        </motion.div>








        {/* Intelligence Card */}




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
            delay:1.4,
          }}



          className="
          mt-10
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
          px-12
          py-8
          backdrop-blur-3xl
          "

        >



          <p

            className="
            text-center
            text-[10px]
            uppercase
            tracking-[0.45em]
            text-[#D6B25E]
            "

          >

            EON Intelligence

          </p>





          <h2

            className="
            mt-4
            text-center
            text-3xl
            font-light
            text-[#F4F1EA]
            "

          >

            Personal Intelligence System

          </h2>




          <p

            className="
            mt-3
            text-center
            text-white/50
            "

          >

            Understand yourself. Evolve consciously.

          </p>



        </motion.div>








        {/* Actions */}





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
            delay:1.6,
          }}


          className="
          mt-12
          flex
          flex-col
          items-center
          gap-5
          sm:flex-row
          "

        >



          <button


            className="
            group
            flex
            items-center
            gap-3
            rounded-full
            bg-[#D6B25E]
            px-9
            py-4
            font-medium
            text-black
            shadow-[0_0_60px_rgba(214,178,94,.35)]
            transition-all
            hover:scale-105
            "

          >

            Begin Experience


            <ArrowRight

              size={18}

              className="
              transition-transform
              group-hover:translate-x-1
              "

            />



          </button>





          <a


            href="#ecosystem"


            className="
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-9
            py-4
            text-xs
            uppercase
            tracking-[0.3em]
            text-white/60
            transition-all
            hover:border-[#D6B25E]/40
            hover:text-white
            "

          >

            Explore EON Ecosystem


          </a>





        </motion.div>







        {/* Keywords */}




        <motion.div


          initial={{
            opacity:0,
          }}


          animate={{
            opacity:1,
          }}


          transition={{
            delay:1.9,
          }}



          className="
          mt-20
          flex
          flex-wrap
          justify-center
          gap-8
          text-[10px]
          uppercase
          tracking-[0.4em]
          text-white/30
          "

        >

          <span>Identity</span>
          <span>Memory</span>
          <span>Dreams</span>
          <span>Patterns</span>
          <span>Evolution</span>


        </motion.div>




      </div>



    </section>

  );

}