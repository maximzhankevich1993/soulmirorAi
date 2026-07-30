"use client";

import { motion } from "framer-motion";


export function LoaderOrb() {


  return (

    <div

      className="
      relative
      flex
      h-40
      w-40
      items-center
      justify-center
      "

    >


      {/* Outer energy rings */}

      <motion.div

        animate={{

          rotate:360,

          scale:[

            1,

            1.08,

            1,

          ],

        }}

        transition={{

          rotate:{

            duration:18,

            repeat:Infinity,

            ease:"linear",

          },

          scale:{

            duration:5,

            repeat:Infinity,

            ease:"easeInOut",

          },

        }}

        className="
        absolute
        h-36
        w-36
        rounded-full
        border
        border-[#D6B25E]/30
        "

      />



      <motion.div

        animate={{

          rotate:-360,

        }}

        transition={{

          duration:25,

          repeat:Infinity,

          ease:"linear",

        }}

        className="
        absolute
        h-28
        w-28
        rounded-full
        border
        border-[#8B5CF6]/30
        "

      />




      {/* Core */}

      <motion.div

        initial={{

          opacity:0,

          scale:0.2,

        }}


        animate={{

          opacity:1,

          scale:[

            1,

            1.08,

            1,

          ],

        }}


        transition={{

          opacity:{

            duration:1.5,

          },

          scale:{

            duration:4,

            repeat:Infinity,

            ease:"easeInOut",

          },

        }}


        className="
        relative
        h-20
        w-20
        rounded-full
        bg-gradient-to-br
        from-[#F4F1EA]
        via-[#D6B25E]
        to-[#8B5CF6]
        shadow-[0_0_80px_rgba(214,178,94,.65)]
        "

      />



      {/* Inner light */}

      <motion.div

        animate={{

          opacity:[

            0.3,

            0.8,

            0.3,

          ],

          scale:[

            0.8,

            1.2,

            0.8,

          ],

        }}

        transition={{

          duration:3,

          repeat:Infinity,

        }}

        className="
        absolute
        h-12
        w-12
        rounded-full
        bg-white
        blur-xl
        "

      />



    </div>

  );

}