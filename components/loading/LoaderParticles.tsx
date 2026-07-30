"use client";

import { motion } from "framer-motion";


const particles = Array.from(
  { length: 45 },
  (_, i) => ({
    id: i,

    x:
      Math.random() * 100,

    y:
      Math.random() * 100,

    size:
      Math.random() * 3 + 1,

    delay:
      Math.random() * 5,

    duration:
      Math.random() * 6 + 6,
  })
);



export function LoaderParticles() {


  return (

    <div

      className="
      pointer-events-none
      absolute
      inset-0
      overflow-hidden
      "

    >

      {
        particles.map(
          (particle) => (

            <motion.div

              key={
                particle.id
              }


              initial={{

                opacity:0,

                scale:0,

              }}


              animate={{

                opacity:[
                  0,
                  0.8,
                  0,
                ],


                scale:[

                  0.5,

                  1.5,

                  0.5,

                ],


                x:[

                  0,

                  Math.sin(
                    particle.id
                  ) * 40,

                  0,

                ],


                y:[

                  0,

                  -80,

                  0,

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
              "

              style={{

                left:
                  `${particle.x}%`,


                top:
                  `${particle.y}%`,


                width:
                  particle.size,


                height:
                  particle.size,


                boxShadow:
                  "0 0 12px rgba(214,178,94,.8)",

              }}

            />

          )
        )
      }


    </div>

  );

}