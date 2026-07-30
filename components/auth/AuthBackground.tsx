"use client";

import { motion } from "framer-motion";


export function AuthBackground() {


  return (

    <div

      className="
      pointer-events-none
      absolute
      inset-0
      overflow-hidden
      "

    >



      {/* Deep cinematic atmosphere */}

      <div

        className="
        absolute
        inset-0
        bg-[#050505]
        "

      />





      {/* Golden EON light */}

      <motion.div

        animate={{

          scale:[
            1,
            1.15,
            1,
          ],


          opacity:[
            0.12,
            0.25,
            0.12,
          ],

        }}


        transition={{

          duration:12,

          repeat:Infinity,

          ease:"easeInOut",

        }}


        className="
        absolute
        left-1/2
        top-1/2
        h-[700px]
        w-[700px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-[#D6B25E]
        blur-[180px]
        "

      />





      {/* Purple intelligence glow */}

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
            0.08,
            0.18,
            0.08,
          ],

        }}


        transition={{

          duration:18,

          repeat:Infinity,

          ease:"easeInOut",

        }}


        className="
        absolute
        bottom-0
        right-0
        h-[500px]
        w-[500px]
        rounded-full
        bg-[#8B5CF6]
        blur-[160px]
        "

      />







      {/* Cinematic light threads */}

      <svg

        className="
        absolute
        inset-0
        h-full
        w-full
        opacity-20
        "

        viewBox="0 0 1200 800"

        fill="none"

      >


        <motion.path

          d="
          M-100 500
          C250 300
          500 650
          900 350
          C1100 200
          1300 300
          1400 100
          "


          stroke="#D6B25E"

          strokeWidth="1"

          animate={{

            pathLength:[

              0.2,
              1,
              0.2,

            ],

          }}


          transition={{

            duration:14,

            repeat:Infinity,

            ease:"easeInOut",

          }}

        />



        <motion.path

          d="
          M0 200
          C300 450
          650 100
          1200 500
          "


          stroke="#F4F1EA"

          strokeWidth="0.5"


          animate={{

            opacity:[

              0.1,
              0.5,
              0.1,

            ],

          }}


          transition={{

            duration:10,

            repeat:Infinity,

          }}

        />


      </svg>






      {/* Floating particles */}

      <div

        className="
        absolute
        inset-0
        "

      >

        {

          Array.from({

            length:25

          }).map((_,i)=>(


            <motion.span

              key={i}


              animate={{

                y:[
                  0,
                  -80,
                  0,
                ],


                opacity:[

                  0.1,
                  0.5,
                  0.1,

                ],

              }}


              transition={{

                duration:
                  5 + i % 5,

                repeat:Infinity,

                delay:
                  i * 0.3,

              }}


              className="
              absolute
              h-1
              w-1
              rounded-full
              bg-[#D6B25E]
              "

              style={{

                left:
                  `${(i * 37) % 100}%`,

                top:
                  `${(i * 53) % 100}%`,

              }}

            />


          ))

        }


      </div>



      {/* Dark cinematic overlay */}

      <div

        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-black/20
        via-transparent
        to-black/60
        "

      />



    </div>


  );

}