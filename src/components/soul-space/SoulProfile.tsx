
"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Brain,
  Heart,
  Moon,
} from "lucide-react";

import { useSoulMemoryStore } from "@/store/soul-memory-store";

import { GlassCard } from "@/components/ui/GlassCard";
import { GlowIcon } from "@/components/ui/GlowIcon";


export function SoulProfile() {

  const {
    archetype,
    emotion,
    insight,
    shadow,
  } = useSoulMemoryStore();


  const items = [
    {
      title: "Archetype",
      value: archetype,
      icon: Sparkles,
      color: "text-[#D6B25E]",
    },

    {
      title: "Current State",
      value: emotion,
      icon: Heart,
      color: "text-pink-300",
    },

    {
      title: "Soul Insight",
      value:
        insight ||
        "Complete Soul Scan to reveal your insight.",
      icon: Brain,
      color: "text-purple-300",
    },
  ];


  return (

    <section
      className="
      mx-auto
      mt-16
      w-full
      max-w-5xl
      px-6
      "
    >

      <motion.div

        initial={{
          opacity:0,
          y:25,
        }}

        whileInView={{
          opacity:1,
          y:0,
        }}

        viewport={{
          once:true,
        }}

      >

        <GlassCard
          highlight
          className="p-6 md:p-8"
        >


          <div
            className="
            flex
            items-center
            gap-4
            "
          >

            <GlowIcon size="lg">

              <Moon
                size={24}
                className="text-[#D6B25E]"
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
                Soul Profile
              </p>


              <h2
                className="
                mt-1
                text-2xl
                font-light
                text-[#F4F1EA]
                "
              >
                Your inner identity
              </h2>

            </div>


          </div>



          <div
            className="
            mt-8
            grid
            gap-4
            md:grid-cols-3
            "
          >

            {items.map((item)=>{

              const Icon = item.icon;


              return (

                <div
                  key={item.title}
                  className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-black/20
                  p-5
                  "
                >

                  <Icon
                    size={22}
                    className={item.color}
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
                    {item.title}
                  </p>


                  <p
                    className="
                    mt-3
                    text-lg
                    leading-7
                    text-[#F4F1EA]
                    "
                  >
                    {item.value}
                  </p>


                </div>

              );

            })}


          </div>



          {shadow && (

            <div
              className="
              mt-5
              rounded-3xl
              border
              border-purple-400/20
              bg-purple-500/5
              p-5
              "
            >

              <p
                className="
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-purple-300
                "
              >
                Shadow Aspect
              </p>


              <p
                className="
                mt-3
                leading-7
                text-white/70
                "
              >
                {shadow}
              </p>


            </div>

          )}


        </GlassCard>


      </motion.div>


    </section>

  );
}

