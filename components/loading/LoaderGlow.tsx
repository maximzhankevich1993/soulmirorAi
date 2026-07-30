"use client";

import { motion } from "framer-motion";


export function LoaderGlow() {

  return (

    <>

      {/* Main golden cinematic aura */}

      <motion.div

        animate={{

          scale:[
            1,
            1.25,
            1,
          ],

          opacity:[
            0.15,
            0.35,
            0.15,
          ],

        }}

        transition={{

          duration:8,

          repeat:Infinity,

          ease:"easeInOut",

        }}

        className="
        pointer-events-none
        absolute
        left-1/2
        top-1/2
        h-[420px]
        w-[420px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-[#D6B25E]
        blur-[160px]
        "

      />



      {/* Purple secondary atmosphere */}

      <motion.div

        animate={{

          x:[
            -40,
            40,
            -40,
          ],

          y:[
            20,
            -20,
            20,
          ],

          opacity:[
            0.05,
            0.18,
            0.05,
          ],

        }}

        transition={{

          duration:12,

          repeat:Infinity,

          ease:"easeInOut",

        }}

        className="
        pointer-events-none
        absolute
        left-1/2
        top-1/2
        h-[300px]
        w-[300px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-[#8B5CF6]
        blur-[140px]
        "

      />


    </>

  );

}