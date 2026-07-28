"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";


export function GlobalParticles() {


  const particles = useMemo(() => {

    return Array.from(
      { length: 45 },
      (_, index) => ({
        id: index,

        x:
          Math.random() * 100,

        y:
          Math.random() * 100,

        size:
          Math.random() * 3 + 1,

        duration:
          Math.random() * 20 + 15,

        delay:
          Math.random() * 10,

      })
    );

  }, []);



  return (

    <div
      className="
      pointer-events-none
      fixed
      inset-0
      -z-20
      overflow-hidden
      "
    >

      {
        particles.map((particle)=>(

          <motion.div

            key={particle.id}


            initial={{
              opacity:0,
              x:`${particle.x}vw`,
              y:`${particle.y}vh`,
            }}


            animate={{

              opacity:[
                0,
                0.7,
                0,
              ],


              y:[
                `${particle.y}vh`,
                `${particle.y - 8}vh`,
                `${particle.y}vh`,
              ],


            }}


            transition={{

              duration:
                particle.duration,

              delay:
                particle.delay,

              repeat:
                Infinity,

              ease:
                "easeInOut",

            }}


            className="
            absolute
            rounded-full
            bg-[#D6B25E]

            shadow-[0_0_15px_rgba(214,178,94,.8)]
            "

            style={{

              width:
                particle.size,

              height:
                particle.size,

            }}

          />

        ))

      }


    </div>

  );
}