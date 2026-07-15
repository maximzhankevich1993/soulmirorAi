"use client";

import Link from "next/link";
import { motion } from "framer-motion";


export function Logo() {

  return (

    <Link
      href="/"
      aria-label="SoulMirror AI home"
      className="
      group
      inline-flex
      items-center
      gap-3
      "
    >


      <div className="
      relative
      flex
      h-11
      w-11
      items-center
      justify-center
      ">


        {/* Aura */}

        <motion.div

          animate={{
            scale:[1,1.15,1],
            opacity:[0.35,0.6,0.35],
          }}

          transition={{
            duration:4,
            repeat:Infinity,
          }}

          className="
          absolute
          inset-0
          rounded-full
          bg-[#D6B25E]/20
          blur-xl
          "

        />



        {/* Symbol */}

        <motion.div

          whileHover={{
            rotate:25,
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


          {/* Outer orbit */}

          <div className="
          absolute
          inset-1
          rounded-full
          border
          border-[#D6B25E]/20
          " />


          {/* Mirror Core */}

          <div className="
          relative
          h-4
          w-4
          rounded-full
          border
          border-[#D6B25E]
          bg-[#D6B25E]/10
          shadow-[0_0_15px_rgba(214,178,94,.8)]
          " />


        </motion.div>


      </div>



      <div className="
      flex
      flex-col
      leading-none
      ">


        <span

          className="
          font-[family:var(--font-cormorant)]
          text-2xl
          font-semibold
          tracking-[0.04em]
          text-[#F4F1EA]
          transition-colors
          duration-300
          group-hover:text-white
          "

        >
          SoulMirror
        </span>


        <span

          className="
          text-[10px]
          uppercase
          tracking-[0.45em]
          text-[#D6B25E]
          "

        >
          AI
        </span>


      </div>


    </Link>

  );
}