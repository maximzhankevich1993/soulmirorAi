"use client";

import { motion } from "framer-motion";

import { IdentityHeader } from "./IdentityHeader";
import { SoulOrbPanel } from "./SoulOrbPanel";
import { IntelligenceModules } from "./IntelligenceModules";
import { EvolutionTimeline } from "./EvolutionTimeline";
import { PremiumPanel } from "./PremiumPanel";
import { UsagePanel } from "./UsagePanel";


interface Usage {

  soulScan:number;

  dream:number;

  tarot:number;

}



export function DashboardShell({

  usage,

}:{

  usage:Usage;

}) {


  return (

    <main

      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#050505]
      px-6
      pb-20
      text-[#F4F1EA]
      "

    >



      <div

        className="
        pointer-events-none
        absolute
        left-1/2
        top-0
        h-[600px]
        w-[600px]
        -translate-x-1/2
        rounded-full
        bg-[#D6B25E]/10
        blur-[180px]
        "

      />





      <div

        className="
        relative
        z-10
        mx-auto
        max-w-7xl
        "

      >



        <IdentityHeader />




        <motion.div

          initial={{
            opacity:0,
            y:30,
          }}

          animate={{
            opacity:1,
            y:0,
          }}

          transition={{
            duration:0.8,
          }}

          className="
          mt-16
          "

        >

          <SoulOrbPanel />

        </motion.div>





        <div className="mt-20">

          <UsagePanel

            usage={usage}

          />

        </div>





        <div className="mt-20">

          <IntelligenceModules />

        </div>





        <div className="mt-20">

          <EvolutionTimeline />

        </div>





        <div className="mt-20">

          <PremiumPanel />

        </div>



      </div>


    </main>

  );

}