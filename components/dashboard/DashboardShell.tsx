"use client";

import { motion } from "framer-motion";

import { IdentityHeader } from "./IdentityHeader";
import { SoulOrbPanel } from "./SoulOrbPanel";
import { IntelligenceModules } from "./IntelligenceModules";
import { EvolutionTimeline } from "./EvolutionTimeline";
import { PremiumPanel } from "./PremiumPanel";


export function DashboardShell() {


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


      {/* Background atmosphere */}

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



        <motion.section

          initial={{
            opacity:0,
            y:40,
          }}

          animate={{
            opacity:1,
            y:0,
          }}

          transition={{
            duration:1,
          }}

          className="
          mt-16
          "

        >

          <SoulOrbPanel />

        </motion.section>





        <section

          className="
          mt-20
          "

        >

          <IntelligenceModules />

        </section>





        <section

          className="
          mt-20
          "

        >

          <EvolutionTimeline />

        </section>





        <section

          className="
          mt-20
          "

        >

          <PremiumPanel />

        </section>



      </div>



    </main>

  );

}