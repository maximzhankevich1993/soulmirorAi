
"use client";

import { Crown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { GlassCard } from "@/components/ui/GlassCard";
import { GlowIcon } from "@/components/ui/GlowIcon";
import { GradientButton } from "@/components/ui/GradientButton";

export function PremiumCard() {
  return (
    <section className="mx-auto mt-20 w-full max-w-5xl px-6">

      <motion.div
        whileHover={{
          scale: 1.01,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
        }}
      >

        <GlassCard
          highlight
          className="
          p-6
          md:p-8
          "
        >

          <div
            className="
            flex
            flex-col
            gap-8
            lg:flex-row
            lg:items-center
            lg:justify-between
            "
          >

            <div>

              <GlowIcon size="lg">

                <Crown
                  size={24}
                  className="text-[#D6B25E]"
                />

              </GlowIcon>


              <p
                className="
                mt-5
                text-[11px]
                uppercase
                tracking-[0.4em]
                text-[#D6B25E]/80
                "
              >
                SoulMirror Pro
              </p>


              <h2
                className="
                mt-3
                max-w-xl
                font-[family:var(--font-cormorant)]
                text-4xl
                font-light
                leading-tight
                text-[#F4F1EA]
                md:text-5xl
                "
              >
                Unlock your complete
                <br />
                inner universe.
              </h2>


              <p
                className="
                mt-5
                max-w-xl
                text-base
                leading-7
                text-white/60
                "
              >
                Unlimited Soul Scans, Dream Analysis,
                Tarot Readings, AI Memory and your
                evolving Soul Profile.
              </p>


            </div>


            <div
              className="
              flex
              flex-col
              items-start
              lg:items-end
              "
            >

              <h3
                className="
                text-5xl
                font-light
                text-[#F4F1EA]
                "
              >
                $19
              </h3>


              <p className="mt-1 text-white/50">
                per month
              </p>


              <GradientButton
                className="
                mt-6
                w-auto
                px-8
                "
                icon={
                  <ArrowRight size={18}/>
                }
              >
                Upgrade
              </GradientButton>


            </div>


          </div>

        </GlassCard>

      </motion.div>

    </section>
  );
}

