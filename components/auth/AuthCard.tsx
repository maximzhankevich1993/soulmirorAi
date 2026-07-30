"use client";

import { motion } from "framer-motion";



export function AuthCard({

  children,

}:{

  children:React.ReactNode;

}) {


  return (

    <motion.div


      initial={{

        opacity:0,

        scale:0.96,

        y:30,

      }}



      animate={{

        opacity:1,

        scale:1,

        y:0,

      }}



      transition={{

        duration:0.8,

        ease:"easeOut",

      }}




      className="
      relative
      w-full
      max-w-md
      overflow-hidden
      rounded-[32px]
      border
      border-white/10
      bg-white/[0.04]
      p-8
      shadow-2xl
      backdrop-blur-2xl
      "

    >




      {/* Gold reflection */}

      <div

        className="
        pointer-events-none
        absolute
        -right-24
        -top-24
        h-64
        w-64
        rounded-full
        bg-[#D6B25E]/10
        blur-[100px]
        "

      />






      {/* Inner border */}

      <div

        className="
        pointer-events-none
        absolute
        inset-0
        rounded-[32px]
        border
        border-white/[0.03]
        "

      />






      <div

        className="
        relative
        z-10
        "

      >

        {children}

      </div>



    </motion.div>


  );

}