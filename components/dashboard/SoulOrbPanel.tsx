"use client";

import { motion } from "framer-motion";

import {
  Sparkles,
  Brain,
  Activity,
} from "lucide-react";


import {
  SoulOrb3D,
} from "@/components/soul-space/SoulOrb3D";


import {
  useSoulMemoryStore,
} from "@/store/soul-memory-store";


import {
  GlassCard,
} from "@/components/ui/GlassCard";



export function SoulOrbPanel() {


  const {
    archetype,
    emotion,
    insight,
  } =
    useSoulMemoryStore();



  return (

    <GlassCard

      highlight

      className="
      relative
      overflow-hidden
      p-8
      md:p-12
      "

    >



      {/* Cinematic glow */}

      <div

        className="
        pointer-events-none
        absolute
        left-1/2
        top-1/2
        h-[500px]
        w-[500px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-[#D6B25E]/10
        blur-[180px]
        "

      />




      <div

        className="
        relative
        z-10
        flex
        flex-col
        items-center
        gap-12
        lg:flex-row
        lg:justify-center
        "

      >




        {/* Orb */}

        <motion.div

          initial={{
            opacity:0,
            scale:0.8,
          }}

          animate={{
            opacity:1,
            scale:1,
          }}

          transition={{
            duration:1,
          }}

          className="
          flex
          items-center
          justify-center
          "

        >

          <SoulOrb3D />

        </motion.div>





        {/* Intelligence state */}

        <div

          className="
          max-w-md
          "

        >



          <p

            className="
            text-[10px]
            uppercase
            tracking-[0.5em]
            text-[#D6B25E]
            "

          >

            Current Consciousness

          </p>




          <h2

            className="
            mt-5
            font-[family:var(--font-cormorant)]
            text-5xl
            font-light
            text-[#F4F1EA]
            "

          >

            {emotion || "Balanced"}

          </h2>




          <p

            className="
            mt-5
            leading-8
            text-white/50
            "

          >

            Your Soul Orb reflects your current
            emotional frequency and intelligence state.

          </p>




          <div

            className="
            mt-8
            space-y-4
            "

          >


            <OrbInfo

              icon={Sparkles}

              label="Archetype"

              value={
                archetype ||
                "Explorer"
              }

            />



            <OrbInfo

              icon={Brain}

              label="Insight System"

              value={
                insight
                ?
                "Active"
                :
                "Awaiting scan"
              }

            />



            <OrbInfo

              icon={Activity}

              label="Evolution"

              value="Continuous"

            />



          </div>


        </div>



      </div>



    </GlassCard>

  );

}




function OrbInfo({

  icon:Icon,

  label,

  value,

}:{

  icon:any;

  label:string;

  value:string;

}) {


  return (

    <div

      className="
      flex
      items-center
      gap-4
      rounded-2xl
      border
      border-white/10
      bg-white/[0.03]
      p-4
      "

    >

      <Icon

        size={18}

        className="
        text-[#D6B25E]
        "

      />


      <div>

        <p

          className="
          text-[9px]
          uppercase
          tracking-[0.3em]
          text-white/40
          "

        >

          {label}

        </p>


        <p

          className="
          mt-1
          text-sm
          text-[#F4F1EA]
          "

        >

          {value}

        </p>


      </div>


    </div>

  );

}