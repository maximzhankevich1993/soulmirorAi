"use client";

import { motion } from "framer-motion";
import { Sparkles, Brain, Heart } from "lucide-react";
import { useSoulMemoryStore } from "@/store/soul-memory-store";


export function SoulProfile() {

  const {
    archetype,
    emotion,
    insight,
    shadow,
  } = useSoulMemoryStore();


  return (

    <section
      className="
      mx-auto
      mt-24
      w-full
      max-w-5xl
      px-6
      "
    >

      <motion.div

        initial={{
          opacity: 0,
          y: 30,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        viewport={{
          once: true,
        }}

        className="
        rounded-[40px]
        border
        border-white/10
        bg-white/[0.03]
        p-8
        backdrop-blur-3xl
        "

      >

        <div className="
        mb-10
        flex
        items-center
        gap-4
        ">

          <div className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-purple-500/10
          ">

            <Brain
              size={28}
              className="text-purple-300"
            />

          </div>


          <div>

            <p className="
            text-xs
            uppercase
            tracking-[0.4em]
            text-purple-300
            ">
              Soul Profile
            </p>


            <h2 className="
            text-3xl
            text-[#F4F1EA]
            ">
              Your inner identity
            </h2>

          </div>

        </div>



        <div className="
        grid
        gap-6
        md:grid-cols-3
        ">


          <div className="
          rounded-3xl
          border
          border-white/10
          bg-black/20
          p-6
          ">

            <Sparkles
              className="mb-4 text-[#D6B25E]"
            />

            <p className="
            text-xs
            uppercase
            text-white/40
            ">
              Archetype
            </p>


            <h3 className="
            mt-3
            text-2xl
            text-white
            ">
              {archetype}
            </h3>

          </div>



          <div className="
          rounded-3xl
          border
          border-white/10
          bg-black/20
          p-6
          ">

            <Heart
              className="mb-4 text-pink-300"
            />


            <p className="
            text-xs
            uppercase
            text-white/40
            ">
              Current state
            </p>


            <h3 className="
            mt-3
            text-2xl
            text-white
            ">
              {emotion}
            </h3>

          </div>



          <div className="
          rounded-3xl
          border
          border-white/10
          bg-black/20
          p-6
          ">

            <Brain
              className="mb-4 text-blue-300"
            />


            <p className="
            text-xs
            uppercase
            text-white/40
            ">
              Inner insight
            </p>


            <p className="
            mt-3
            text-white/70
            ">
              {insight ||
              "Complete Soul Scan to reveal your insight."}
            </p>

          </div>


        </div>



        {shadow && (

          <div className="
          mt-6
          rounded-3xl
          border
          border-purple-500/20
          bg-purple-500/5
          p-6
          ">

            <p className="
            text-xs
            uppercase
            tracking-widest
            text-purple-300
            ">
              Shadow Aspect
            </p>


            <p className="
            mt-3
            text-white/70
            ">
              {shadow}
            </p>

          </div>

        )}


      </motion.div>


    </section>

  );
}