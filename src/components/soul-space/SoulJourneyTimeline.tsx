"use client";

import { motion } from "framer-motion";
import { Sparkles, Moon, CreditCard } from "lucide-react";
import { useSoulJourney } from "@/hooks/useSoulJourney";

interface JourneyItem {
  type: "soul" | "dream" | "tarot";
  title: string;
  description: string;
  date: string;
}



export function SoulJourneyTimeline() {

  const {
    items,
    loading,
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
      mt-24
      w-full
      max-w-5xl
      px-6
      "
    >

      <div className="
      rounded-[40px]
      border
      border-white/10
      bg-white/[0.03]
      p-8
      backdrop-blur-3xl
      ">


        <p className="
        text-xs
        uppercase
        tracking-[0.4em]
        text-[#D6B25E]
        ">
          Soul Journey
        </p>


        <h2 className="
        mt-3
        text-3xl
        text-[#F4F1EA]
        ">
          Your evolution timeline
        </h2>



        {items.length === 0 && (

          <div className="
          mt-10
          rounded-3xl
          border
          border-white/10
          bg-black/20
          p-6
          text-white/50
          ">

            Your journey will appear here after your first analysis.

          </div>

        )}



        <div className="
        mt-10
        space-y-6
        ">


          {items.map(
            (item,index)=>{

              const Icon =
                icons[item.type];


              return (

                <motion.div

                  key={index}

                  initial={{
                    opacity:0,
                    x:-20,
                  }}

                  whileInView={{
                    opacity:1,
                    x:0,
                  }}

                  viewport={{
                    once:true,
                  }}

                  className="
                  flex
                  gap-5
                  rounded-3xl
                  border
                  border-white/10
                  bg-black/20
                  p-6
                  "

                >

                  <div className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#D6B25E]/10
                  ">

                    <Icon
                      className="text-[#D6B25E]"
                      size={24}
                    />

                  </div>


                  <div>

                    <p className="
                    text-xs
                    text-white/40
                    ">
                      {item.date}
                    </p>


                    <h3 className="
                    mt-1
                    text-xl
                    text-white
                    ">
                      {item.title}
                    </h3>


                    <p className="
                    mt-2
                    text-white/60
                    ">
                      {item.description}
                    </p>

                  </div>


                </motion.div>

              );

            }
          )}


        </div>


      </div>

    </section>

  );
}