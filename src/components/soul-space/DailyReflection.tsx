"use client";

import {
  Sparkles,
  Brain,
  Heart,
  TrendingUp,
} from "lucide-react";

import { motion } from "framer-motion";

import { useSoulMemoryStore } from "@/store/soul-memory-store";

import { GlassCard } from "@/components/ui/GlassCard";
import { GlowIcon } from "@/components/ui/GlowIcon";


const reflections = {

  Calm:
    "Your mind is entering a state of clarity. Today is ideal for observation and conscious decisions.",

  Healing:
    "Your emotional patterns show a period of transformation. Growth requires patience and self-awareness.",

  Fear:
    "Your system detects uncertainty, but also the potential for a new level of confidence.",

  Joy:
    "Your emotional energy is expanding. Positive connections can accelerate your evolution.",

  Focus:
    "Your current pattern supports deep work and meaningful progress.",

};


export function DailyReflection() {

  const {
    emotion,
  } =
    useSoulMemoryStore();


  const reflection =
    reflections[
      emotion as keyof typeof reflections
    ] ??
    "Your intelligence profile continues evolving through every experience.";


  const metrics = [

    {
      label:"Emotional State",
      value: emotion || "Balanced",
      icon:Heart,
    },

    {
      label:"Pattern Growth",
      value:"+8%",
      icon:TrendingUp,
    },

    {
      label:"AI Insight",
      value:"Active",
      icon:Brain,
    },

  ];


  return (

    <section
      className="
      relative
      mx-auto
      mt-24
      w-full
      max-w-5xl
      px-6
      "
    >


      <motion.div

        initial={{
          opacity:0,
          y:30,
        }}

        whileInView={{
          opacity:1,
          y:0,
        }}

        viewport={{
          once:true,
        }}

        transition={{
          duration:0.8,
        }}

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

          {/* Ambient Glow */}

          <div
            className="
            pointer-events-none
            absolute
            right-0
            top-0
            h-64
            w-64
            rounded-full
            bg-[#D6B25E]/10
            blur-[100px]
            "
          />


          <div
            className="
            relative
            z-10
            flex
            items-center
            gap-4
            "
          >

            <GlowIcon>

              <Sparkles
                size={22}
                className="
                text-[#D6B25E]
                "
              />

            </GlowIcon>


            <div>

              <p
                className="
                text-[11px]
                uppercase
                tracking-[0.4em]
                text-[#D6B25E]
                "
              >
                Daily Intelligence Reflection
              </p>


              <p
                className="
                mt-2
                text-xs
                text-white/40
                "
              >
                Powered by EON AI
              </p>

            </div>

          </div>



          <h2
            className="
            relative
            z-10
            mt-8
            max-w-3xl
            font-[family:var(--font-cormorant)]
            text-3xl
            font-light
            leading-relaxed
            text-[#F4F1EA]
            md:text-4xl
            "
          >
            {reflection}
          </h2>



          <div
            className="
            relative
            z-10
            mt-10
            grid
            gap-4
            sm:grid-cols-3
            "
          >

            {metrics.map((metric,index)=>{

              const Icon = metric.icon;


              return (

                <motion.div

                  key={metric.label}

                  initial={{
                    opacity:0,
                    y:15,
                  }}

                  whileInView={{
                    opacity:1,
                    y:0,
                  }}

                  viewport={{
                    once:true,
                  }}

                  transition={{
                    delay:index * 0.1,
                  }}

                  className="
                  rounded-2xl
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
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-white/40
                    "
                  >
                    {metric.label}
                  </p>


                  <p
                    className="
                    mt-2
                    text-lg
                    font-light
                    text-[#F4F1EA]
                    "
                  >
                    {metric.value}
                  </p>


                </motion.div>

              );

            })}

          </div>

        </GlassCard>

      </motion.div>


      <motion.div

        initial={{
          opacity:0,
        }}

        whileInView={{
          opacity:1,
        }}

        viewport={{
          once:true,
        }}

        transition={{
          delay:0.4,
        }}

        className="
        mt-8
        flex
        justify-center
        "
      >

        <div
          className="
          rounded-full
          border
          border-[#D6B25E]/10
          bg-white/[0.02]
          px-6
          py-3
          backdrop-blur-xl
          "
        >

          <p
            className="
            text-[10px]
            uppercase
            tracking-[0.45em]
            text-white/40
            "
          >
            EON Intelligence Engine • Personal Evolution System
          </p>

        </div>

      </motion.div>


    </section>

  );

}