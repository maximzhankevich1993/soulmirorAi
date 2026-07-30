"use client";

import { motion } from "framer-motion";


export function AuthLogo() {


  return (

    <motion.div

      initial={{

        opacity:0,

        y:-20,

      }}


      animate={{

        opacity:1,

        y:0,

      }}


      transition={{

        duration:0.8,

      }}


      className="
      flex
      flex-col
      items-center
      "

    >




      {/* EON Symbol */}

      <div

        className="
        relative
        flex
        h-24
        w-24
        items-center
        justify-center
        "

      >



        <motion.div

          animate={{

            rotate:360,

          }}

          transition={{

            duration:40,

            repeat:Infinity,

            ease:"linear",

          }}


          className="
          absolute
          h-20
          w-20
          rounded-full
          border
          border-[#D6B25E]/40
          "

        />





        <motion.div

          animate={{

            rotate:-360,

          }}

          transition={{

            duration:30,

            repeat:Infinity,

            ease:"linear",

          }}


          className="
          absolute
          h-14
          w-14
          rounded-full
          border
          border-[#F4F1EA]/20
          "

        />






        <div

          className="
          h-5
          w-5
          rounded-full
          bg-[#D6B25E]
          shadow-[0_0_40px_#D6B25E]
          "

        />



      </div>







      <h1

        className="
        mt-8
        font-[family:var(--font-cormorant)]
        text-5xl
        font-light
        tracking-wide
        text-[#F4F1EA]
        "

      >

        EON AI

      </h1>





      <p

        className="
        mt-3
        text-[10px]
        uppercase
        tracking-[0.55em]
        text-[#D6B25E]
        "

      >

        SoulMirror Intelligence

      </p>







      <p

        className="
        mt-6
        max-w-sm
        text-center
        text-sm
        leading-7
        text-white/50
        "

      >

        Enter your personal intelligence space.
        Discover patterns, memories and your evolving self.

      </p>



    </motion.div>

  );

}