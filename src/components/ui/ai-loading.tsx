"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AILoadingProps {
  title: string;
}

const messages = [
  "Reading symbolic patterns...",
  "Exploring unconscious connections...",
  "Interpreting emotional signals...",
  "Analyzing hidden archetypes...",
  "Building your personal insights...",
  "Almost ready...",
];


export function AILoading({
  title,
}: AILoadingProps) {

  const [messageIndex, setMessageIndex] = useState(0);


  useEffect(() => {

    const interval = setInterval(() => {

      setMessageIndex((prev) =>
        (prev + 1) % messages.length
      );

    }, 2200);


    return () => clearInterval(interval);

  }, []);



  return (

    <div
      className="
      fixed
      inset-0
      z-[9999]
      flex
      flex-col
      items-center
      justify-center
      overflow-hidden
      bg-[#050505]
      "
    >


      {/* Ambient Light */}

      <motion.div

        className="
        absolute
        h-[800px]
        w-[800px]
        rounded-full
        bg-[#D6B25E]/10
        blur-[200px]
        "

        animate={{
          scale:[
            1,
            1.25,
            1
          ],

          opacity:[
            0.15,
            0.35,
            0.15
          ],
        }}

        transition={{
          duration:6,
          repeat:Infinity,
          ease:"easeInOut",
        }}

      />



      {/* Particles */}

      {[...Array(12)].map((_,i)=>(

        <motion.div

          key={i}

          className="
          absolute
          h-1
          w-1
          rounded-full
          bg-[#D6B25E]
          "

          initial={{
            opacity:0,
            x:0,
            y:0,
          }}

          animate={{

            opacity:[
              0,
              1,
              0
            ],

            x:[
              0,
              Math.cos(i) * 180,
              0
            ],

            y:[
              0,
              Math.sin(i) * 180,
              0
            ],

          }}

          transition={{

            duration:
              4 + i * 0.2,

            repeat:Infinity,

            delay:
              i * 0.2,

          }}

        />

      ))}




      {/* Outer Ring */}

      <motion.div

        className="
        absolute
        h-56
        w-56
        rounded-full
        border
        border-[#D6B25E]/20
        "

        animate={{
          rotate:360,
        }}

        transition={{

          duration:25,

          repeat:Infinity,

          ease:"linear",

        }}

      />



      {/* Second Ring */}

      <motion.div

        className="
        absolute
        h-40
        w-40
        rounded-full
        border
        border-[#F4F1EA]/20
        "

        animate={{
          rotate:-360,
        }}

        transition={{

          duration:14,

          repeat:Infinity,

          ease:"linear",

        }}

      />




      {/* Soul Core */}

      <motion.div

        className="
        relative
        h-16
        w-16
        rounded-full
        bg-gradient-to-br
        from-[#F4D77B]
        via-[#D6B25E]
        to-[#8B5CF6]
        shadow-[0_0_100px_rgba(214,178,94,0.7)]
        "

        animate={{

          scale:[
            1,
            1.18,
            1
          ],

          boxShadow:[
            "0 0 40px rgba(214,178,94,.4)",
            "0 0 120px rgba(214,178,94,.8)",
            "0 0 40px rgba(214,178,94,.4)",
          ]

        }}

        transition={{

          duration:3,

          repeat:Infinity,

          ease:"easeInOut",

        }}

      />




      {/* Title */}

      <motion.h2

        className="
        mt-16
        text-3xl
        font-light
        tracking-[0.3em]
        text-[#F4F1EA]
        "

        initial={{
          opacity:0,
          y:20,
        }}

        animate={{
          opacity:1,
          y:0,
        }}

      >

        {title}

      </motion.h2>





      {/* Dynamic Message */}

      <div
        className="
        mt-6
        h-6
        "
      >

        <AnimatePresence mode="wait">

          <motion.p

            key={messageIndex}

            className="
            text-sm
            tracking-[0.25em]
            text-white/50
            "

            initial={{
              opacity:0,
              y:10,
              filter:"blur(8px)",
            }}

            animate={{
              opacity:1,
              y:0,
              filter:"blur(0px)",
            }}

            exit={{
              opacity:0,
              y:-10,
              filter:"blur(8px)",
            }}

            transition={{
              duration:0.6,
            }}

          >

            {messages[messageIndex]}

          </motion.p>

        </AnimatePresence>

      </div>





      {/* Brand */}

      <motion.div

        className="
        absolute
        bottom-10
        text-xs
        uppercase
        tracking-[0.45em]
        text-white/30
        "

        animate={{
          opacity:[
            0.3,
            0.7,
            0.3
          ],
        }}

        transition={{
          duration:3,
          repeat:Infinity,
        }}

      >

        Developed by EON AI

      </motion.div>


    </div>

  );

}