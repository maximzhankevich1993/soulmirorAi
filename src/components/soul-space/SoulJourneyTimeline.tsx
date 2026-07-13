```tsx
"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Moon,
  CreditCard,
} from "lucide-react";

import { useSoulJourney } from "@/hooks/useSoulJourney";

import { GlassCard } from "@/components/ui/GlassCard";
import { GlowIcon } from "@/components/ui/GlowIcon";


interface JourneyItem {
  type: "soul" | "dream" | "tarot";
  title: string;
  description: string;
  date: string;
}


export function SoulJourneyTimeline() {

  const {
    items,
  } = useSoulJourney();


  const icons = {
    soul: Sparkles,
    dream: Moon,
    tarot: CreditCard,
  };


  return (

    <section
      className="
      mx-auto
      mt-16
      w-full
      max-w-4xl
      px-6
      "
    >

      <GlassCard
        highlight
        className="p-6 md:p-8"
      >

        <p
          className="
          text-[11px]
          uppercase
          tracking-[0.4em]
          text-[#D6B25E]
          "
        >
          Soul Journey
        </p>


        <h2
          className="
          mt-2
          text-2xl
          font-light
          text-[#F4F1EA]
          "
        >
          Your evolution timeline
        </h2>



        {items.length === 0 && (

          <div
            className="
            mt-8
            rounded-2xl
            border
            border-white/10
            bg-black/20
            p-5
            text-sm
            text-white/50
            "
          >

            Your journey will appear here after your
            first analysis.

          </div>

        )}



        <div
          className="
          relative
          mt-8
          space-y-5
          "
        >

          {items.map(
            (item,index)=>{

              const Icon =
                icons[item.type];


              return (

                <motion.div

                  key={index}

                  initial={{
                    opacity:0,
                    x:-15,
                  }}

                  whileInView={{
                    opacity:1,
                    x:0,
                  }}

                  viewport={{
                    once:true,
                  }}

                  transition={{
                    delay:index * 0.05,
                  }}

                  className="
                  relative
                  flex
                  gap-4
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5
                  "

                >


                  <GlowIcon>

                    <Icon
                      size={20}
                      className="text-[#D6B25E]"
                    />

                  </GlowIcon>



                  <div>

                    <p
                      className="
                      text-[10px]
                      uppercase
                      tracking-widest
                      text-white/40
                      "
                    >
                      {item.date}
                    </p>


                    <h3
                      className="
                      mt-1
                      text-lg
                      text-[#F4F1EA]
                      "
                    >
                      {item.title}
                    </h3>


                    <p
                      className="
                      mt-2
                      text-sm
                      leading-6
                      text-white/60
                      "
                    >
                      {item.description}
                    </p>


                  </div>


                </motion.div>

              );

            }
          )}


        </div>


      </GlassCard>


    </section>

  );
}
```
