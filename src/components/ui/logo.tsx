"use client";

import Link from "next/link";
import { motion } from "framer-motion";


export function Logo() {

  return (

    <Link

      href="/"

      aria-label="EON AI home"

      className="
      group
      inline-flex
      items-center
      gap-3
      "

    >


      {/* EON Core Symbol */}

      <div

        className="
        relative
        flex
        h-11
        w-11
        items-center
        justify-center
        "

      >


        <motion.div

          animate={{
            scale:[1,1.15,1],
            opacity:[0.35,0.65,0.35],
          }}

          transition={{
            duration:5,
            repeat:Infinity,
            ease:"easeInOut",
          }}

          className="
          absolute
          inset-0
          rounded-full
          bg-[#D6B25E]/20
          blur-xl
          "

        />



        <motion.div

          whileHover={{
            rotate:20,
            scale:1.08,
          }}

          transition={{
            type:"spring",
            stiffness:200,
          }}

          className="
          relative
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-[#D6B25E]/40
          bg-gradient-to-br
          from-[#D6B25E]/20
          via-transparent
          to-[#8B5CF6]/20
          backdrop-blur-xl
          "

        >


          {/* EON Orbit */}

          <motion.div

            animate={{
              rotate:360,
            }}

            transition={{
              duration:30,
              repeat:Infinity,
              ease:"linear",
            }}

            className="
            absolute
            inset-1
            rounded-full
            border
            border-[#D6B25E]/20
            "

          />



          {/* Core */}

          <div

            className="
            h-4
            w-4
            rounded-full
            border
            border-[#D6B25E]
            bg-[#D6B25E]/10
            shadow-[0_0_20px_rgba(214,178,94,.8)]
            "

          />



        </motion.div>


      </div>





      {/* Brand */}


      <div

        className="
        flex
        flex-col
        leading-none
        "

      >


        <span

          className="
          font-[family:var(--font-cormorant)]
          text-2xl
          font-semibold
          tracking-[0.08em]
          text-[#F4F1EA]
          "

        >

          EON AI

        </span>




        <span

          className="
          mt-1
          text-[9px]
          uppercase
          tracking-[0.45em]
          text-[#D6B25E]
          "

        >

          SoulMirror

        </span>



      </div>



    </Link>

  );

}