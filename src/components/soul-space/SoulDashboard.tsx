
"use client";

import {
  Brain,
  Heart,
  Moon,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

import { useSoulMemoryStore } from "@/store/soul-memory-store";

import { GlassCard } from "@/components/ui/GlassCard";
import { GlowIcon } from "@/components/ui/GlowIcon";


export function SoulDashboard() {

  const {
    archetype,
    emotion,
  } = useSoulMemoryStore();


  const cards = [

    {
      title: "Archetype",
      value: archetype || "Unknown",
      icon: Brain,
    },

    {
      title: "Emotion",
      value: emotion || "Balanced",
      icon: Heart,
    },

    {
      title: "Soul Sessions",
      value: "∞",
      icon: Sparkles,
    },

    {
      title: "Dream Energy",
      value: "Active",
      icon: Moon,
    },

  ];


  return (

    <section
      className="
      mx-auto
      mt-8
      w-full
      max-w-5xl
      px-6
      "
    >

      <div
        className="
        grid
        gap-3
        md:grid-cols-2
        xl:grid-cols-4
        "
      >

        {cards.map((card,index)=>{

          const Icon = card.icon;


          return (

            <motion.div

              key={card.title}

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
                delay:index * 0.08,
              }}

            >

              <GlassCard
                className="
                p-5
                "
              >

                <GlowIcon>

                  <Icon
                    size={19}
                    className="text-[#D6B25E]"
                  />

                </GlowIcon>


                <p
                  className="
                  mt-4
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-white/40
                  "
                >
                  {card.title}
                </p>


                <h3
                  className="
                  mt-2
                  truncate
                  text-lg
                  font-light
                  text-[#F4F1EA]
                  "
                >
                  {card.value}
                </h3>


              </GlassCard>


            </motion.div>

          );

        })}


      </div>


    </section>

  );
}

