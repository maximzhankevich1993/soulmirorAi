"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  ArrowRight,
} from "lucide-react";

import {
  useRef,
} from "react";

import {
  SoulOrb3D,
} from "./SoulOrb3D";





export function SoulSpaceHero() {


  const ref =
    useRef<HTMLDivElement>(null);



  const {
    scrollYProgress,
  } =
  useScroll({

    target: ref,

    offset:[
      "start start",
      "end start",
    ],

  });





  const orbY =
    useTransform(
      scrollYProgress,
      [0,1],
      [0,-180]
    );



  const orbScale =
    useTransform(
      scrollYProgress,
      [0,1],
      [1,0.85]
    );





  const opacity =
    useTransform(
      scrollYProgress,
      [0,0.8],
      [1,0]
    );






  return (

    <section

      ref={ref}

      className="
      relative
      min-h-screen
      overflow-hidden
      px-6
      pt-40
      "

    >





      {/* Cinematic background */}


      <div

        className="
        pointer-events-none
        absolute
        left-1/2
        top-20
        h-[700px]
        w-[700px]
        -translate-x-1/2
        rounded-full
        bg-[#D6B25E]/10
        blur-[180px]
        "

      />




      <div

        className="
        pointer-events-none
        absolute
        right-[-200px]
        top-1/3
        h-[500px]
        w-[500px]
        rounded-full
        bg-[#8B5CF6]/10
        blur-[180px]
        "

      />








      <motion.div

        style={{
          opacity,
        }}

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





        <motion.p

          initial={{
            opacity:0,
            y:30,
          }}

          animate={{
            opacity:1,
            y:0,
          }}

          transition={{
            duration:1,
          }}

          className="
          text-[11px]
          uppercase
          tracking-[0.6em]
          text-[#D6B25E]
          "

        >

          EON AI presents

        </motion.p>









        <motion.h1

          initial={{
            opacity:0,
            scale:0.9,
            y:40,
          }}

          animate={{
            opacity:1,
            scale:1,
            y:0,
          }}

          transition={{
            duration:1.2,
            delay:0.2,
          }}

          className="
          mt-8
          text-center
          font-[family:var(--font-cormorant)]
          text-7xl
          font-light
          leading-[0.85]
          tracking-tight
          text-[#F4F1EA]
          md:text-9xl
          "

        >

          SOUL

          <br />

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
            delay:0.8,
          }}

          className="
          mt-8
          text-xs
          uppercase
          tracking-[0.5em]
          text-[#D6B25E]
          "

        >

          Personal Intelligence Experience

        </motion.p>









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
            delay:1,
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

          Your personal intelligence mirror.

          <br />

          AI designed to understand

          identity, dreams,

          archetypes and evolution.


        </motion.p>









        {/* Orb */}



        <motion.div

          style={{
            y:orbY,
            scale:orbScale,
          }}

          initial={{
            opacity:0,
            scale:0.7,
          }}

          animate={{
            opacity:1,
            scale:1,
          }}

          transition={{
            duration:1.8,
            delay:1.2,
          }}

          className="
          mt-20
          "

        >

          <SoulOrb3D />


        </motion.div>









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
            delay:2,
          }}

          className="
          mt-10
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
            px-8
            py-4
            font-semibold
            text-black
            shadow-[0_0_60px_rgba(214,178,94,.35)]
            "

          >

            Start Experience


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
            px-8
            py-4
            text-xs
            uppercase
            tracking-[0.3em]
            text-white/70
            backdrop-blur-xl
            "

          >

            Explore Ecosystem


          </a>




        </motion.div>







      </motion.div>



    </section>

  );

}