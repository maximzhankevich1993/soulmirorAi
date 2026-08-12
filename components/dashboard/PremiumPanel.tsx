"use client";

import { motion } from "framer-motion";

import {
  Crown,
  Sparkles,
  ArrowRight,
  Infinity,
} from "lucide-react";

import { GlassCard } from "../../src/components/ui/GlassCard";

import { GradientButton } from "../../src/components/ui/GradientButton";



export function PremiumPanel() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
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

        {/* Cinematic glow */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            h-96
            w-96
            rounded-full
            bg-[#D6B25E]/10
            blur-[140px]
          "
        />



        <div
          className="
            relative
            z-10
            flex
            flex-col
            gap-10
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >

          <div className="max-w-2xl">

            <div
              className="
                flex
                items-center
                gap-4
              "
            >

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-[#D6B25E]/30
                  bg-[#D6B25E]/10
                "
              >
                <Crown
                  size={22}
                  className="text-[#D6B25E]"
                />
              </div>



              <div>

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.5em]
                    text-[#D6B25E]
                  "
                >
                  EON Pro
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    text-white/40
                  "
                >
                  Unlimited intelligence access
                </p>

              </div>

            </div>



            <h2
              className="
                mt-8
                font-[family:var(--font-cormorant)]
                text-5xl
                font-light
                leading-tight
                text-[#F4F1EA]
              "
            >
              Expand your personal
              intelligence system.
            </h2>



            <p
              className="
                mt-5
                leading-8
                text-white/50
              "
            >
              Unlock deeper Soul Analysis,
              advanced dream interpretation,
              unlimited insights and your complete
              evolution memory.
            </p>



            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-3
              "
            >

              <span
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-4
                  py-2
                  text-xs
                  text-white/60
                "
              >
                <Sparkles size={14} />
                AI Insights
              </span>



              <span
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-4
                  py-2
                  text-xs
                  text-white/60
                "
              >
                <Infinity size={14} />
                Evolution Memory
              </span>

            </div>

          </div>



          <div
            className="
              flex
              flex-col
              items-start
              lg:items-end
            "
          >

            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.4em]
                text-white/40
              "
            >
              Membership
            </p>



            <h3
              className="
                mt-3
                text-6xl
                font-light
                text-[#F4F1EA]
              "
            >
              $19
            </h3>



            <p className="text-white/40">
              per month
            </p>



            <GradientButton
              className="mt-8 px-10"
              icon={<ArrowRight size={18} />}
            >
              Upgrade Experience
            </GradientButton>

          </div>

        </div>

      </GlassCard>

    </motion.section>
  );
}