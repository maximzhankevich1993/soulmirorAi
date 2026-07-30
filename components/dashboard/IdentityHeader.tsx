"use client";

import { motion } from "framer-motion";

import {
  Brain,
  Sparkles,
  Activity,
} from "lucide-react";


import {
  useSoulMemoryStore,
} from "@/store/soul-memory-store";


import {
  GlassCard,
} from "@/components/ui/GlassCard";



export function IdentityHeader() {


  const {
    archetype,
    emotion,
    insight,
  } =
    useSoulMemoryStore();



  return (

    <motion.section

      initial={{
        opacity:0,
        y:-30,
      }}

      animate={{
        opacity:1,
        y:0,
      }}

      transition={{
        duration:0.8,
      }}

      className="
      pt-10
      "

    >


      <GlassCard

        highlight

        className="
        relative
        overflow-hidden
        p-8
        md:p-10
        "

      >



        {/* Golden atmosphere */}

        <div

          className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-72
          w-72
          rounded-full
          bg-[#D6B25E]/10
          blur-[120px]
          "

        />




        <div

          className="
          relative
          z-10
          flex
          flex-col
          gap-8
          lg:flex-row
          lg:items-center
          lg:justify-between
          "

        >



          <div>


            <p

              className="
              text-[10px]
              uppercase
              tracking-[0.5em]
              text-[#D6B25E]
              "

            >

              EON Identity

            </p>




            <h1

              className="
              mt-4
              font-[family:var(--font-cormorant)]
              text-5xl
              font-light
              text-[#F4F1EA]
              "

            >

              Personal Intelligence Profile

            </h1>




            <p

              className="
              mt-5
              max-w-xl
              leading-8
              text-white/50
              "

            >

              Your evolving identity system powered by
              memories, emotions and AI pattern analysis.

            </p>



          </div>





          <div

            className="
            grid
            grid-cols-2
            gap-4
            "

          >



            <IdentityStat

              icon={Sparkles}

              title="Archetype"

              value={
                archetype ||
                "Explorer"
              }

            />



            <IdentityStat

              icon={Activity}

              title="State"

              value={
                emotion ||
                "Balanced"
              }

            />



            <IdentityStat

              icon={Brain}

              title="Insight"

              value={
                insight
                ?
                "Active"
                :
                "Locked"
              }

            />



            <IdentityStat

              icon={Sparkles}

              title="Score"

              value="92%"

            />



          </div>



        </div>



      </GlassCard>


    </motion.section>

  );

}




function IdentityStat({

  icon:Icon,

  title,

  value,

}:{

  icon:any;

  title:string;

  value:string;

}) {


  return (

    <div

      className="
      min-w-[130px]
      rounded-3xl
      border
      border-white/10
      bg-white/[0.03]
      p-5
      "

    >

      <Icon

        size={18}

        className="
        text-[#D6B25E]
        "

      />



      <p

        className="
        mt-4
        text-[9px]
        uppercase
        tracking-[0.35em]
        text-white/40
        "

      >

        {title}

      </p>



      <p

        className="
        mt-2
        truncate
        text-sm
        text-[#F4F1EA]
        "

      >

        {value}

      </p>



    </div>

  );

}