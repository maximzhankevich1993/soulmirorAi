"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SoulOrb3D } from "@/components/soul-orb/SoulOrb3D";
import { EonBrandBadge } from "@/components/brand/eon-brand-badge";


export function HeroSection() {

  return (

    <section
      className="
      relative
      overflow-hidden
      pt-32
      pb-24
      "
    >

      {/* Background Glow */}

      <div
        className="
        pointer-events-none
        absolute
        left-1/2
        top-20
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
        pointer-events-none
        absolute
        right-0
        top-1/3
        h-[400px]
        w-[400px]
        rounded-full
        bg-[#8B5CF6]/10
        blur-[160px]
        "
      />



      <div
        className="
        mx-auto
        grid
        w-full
        max-w-7xl
        gap-16
        px-6
        lg:grid-cols-2
        lg:items-center
        "
      >


        {/* LEFT SIDE */}

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
          relative
          z-10
          "
        >


          <EonBrandBadge />


          <div
            className="
            mt-8
            flex
            items-center
            gap-3
            "
          >

            <Sparkles
              size={18}
              className="text-[#D6B25E]"
            />


            <span
              className="
              text-xs
              uppercase
              tracking-[0.4em]
              text-[#D6B25E]/80
              "
            >
              EON AI presents
            </span>


          </div>



          <h1
            className="
            mt-8
            font-[family:var(--font-cormorant)]
            text-7xl
            leading-[0.9]
            tracking-tight
            text-[#F4F1EA]
            md:text-8xl
            "
          >

            SOUL
            <br />

            MIRROR


          </h1>



          <p
            className="
            mt-8
            text-xl
            tracking-wide
            text-[#D6B25E]
            "
          >
            Personal Intelligence Experience
          </p>



          <p
            className="
            mt-6
            max-w-xl
            text-lg
            leading-8
            text-white/60
            "
          >
            Your personal intelligence mirror.
            <br />

            An AI system designed to understand
            identity, patterns and human evolution.
          </p>
          <div
            className="
            mt-10
            flex
            flex-col
            gap-4
            sm:flex-row
            "
          >

            <Button
              variant="primary"
              className="
              h-14
              rounded-2xl
              px-8
              "
            >
              Start Soul Journey

              <ArrowRight
                className="ml-2"
                size={18}
              />

            </Button>


            <Button
              variant="secondary"
              className="
              h-14
              rounded-2xl
              px-8
              "
            >
              Explore EON AI

            </Button>


          </div>



          <div
            className="
            mt-10
            flex
            items-center
            gap-3
            "
          >

            <div
              className="
              h-px
              w-12
              bg-[#D6B25E]/40
              "
            />


            <p
              className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-white/40
              "
            >
              Powered by EON AI
            </p>


          </div>



        </motion.div>





        {/* RIGHT SIDE */}


        <motion.div

          initial={{
            opacity:0,
            scale:0.9,
          }}

          animate={{
            opacity:1,
            scale:1,
          }}

          transition={{
            duration:1,
            delay:0.2,
          }}

          className="
          relative
          flex
          justify-center
          "
        >


          <div
            className="
            absolute
            inset-0
            rounded-full
            bg-[#D6B25E]/10
            blur-[120px]
            "
          />



          <div
            className="
            relative
            z-10
            "
          >

            <SoulOrb3D />


          </div>



        </motion.div>


      </div>


      {/* FEATURES */}

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
          delay:0.2,
        }}

        className="
        mx-auto
        mt-24
        grid
        w-full
        max-w-7xl
        gap-5
        px-6
        md:grid-cols-3
        "
      >


        <div
          className="
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
          p-8
          backdrop-blur-2xl
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-[#D6B25E]/30
          "
        >

          <Sparkles
            className="
            mb-6
            text-[#D6B25E]
            "
            size={28}
          />


          <p
            className="
            text-xs
            uppercase
            tracking-[0.35em]
            text-[#D6B25E]
            "
          >
            Identity
          </p>


          <h3
            className="
            mt-4
            text-2xl
            text-[#F4F1EA]
            "
          >
            Understand yourself
          </h3>


          <p
            className="
            mt-4
            leading-7
            text-white/50
            "
          >
            Discover archetypes,
            emotional patterns and
            hidden aspects of your identity.
          </p>


        </div>





        <div
          className="
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
          p-8
          backdrop-blur-2xl
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-[#8B5CF6]/40
          "
        >

          <Sparkles
            className="
            mb-6
            text-purple-300
            "
            size={28}
          />


          <p
            className="
            text-xs
            uppercase
            tracking-[0.35em]
            text-purple-300
            "
          >
            Dreams
          </p>


          <h3
            className="
            mt-4
            text-2xl
            text-[#F4F1EA]
            "
          >
            Decode your subconscious
          </h3>


          <p
            className="
            mt-4
            leading-7
            text-white/50
            "
          >
            Transform dreams into
            meaningful insights with AI.
          </p>


        </div>





        <div
          className="
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
          p-8
          backdrop-blur-2xl
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-[#D6B25E]/30
          "
        >

          <Sparkles
            className="
            mb-6
            text-[#D6B25E]
            "
            size={28}
          />


          <p
            className="
            text-xs
            uppercase
            tracking-[0.35em]
            text-[#D6B25E]
            "
          >
            Evolution
          </p>


          <h3
            className="
            mt-4
            text-2xl
            text-[#F4F1EA]
            "
          >
            Track your growth
          </h3>


          <p
            className="
            mt-4
            leading-7
            text-white/50
            "
          >
            Build awareness of your
            personal evolution over time.
          </p>


        </div>


      </motion.div>


    </section>

  );

}
