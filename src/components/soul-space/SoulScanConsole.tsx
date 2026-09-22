"use client";

import {
  Sparkles,
  Brain,
  Heart,
  Moon,
  Eye,
  ArrowRight,
} from "lucide-react";

import { AIConsole } from "@/components/ui/AIConsole";

import {
  useSoulAnalysis,
} from "@/hooks/useSoulAnalysis";

import {
  useState,
} from "react";

import {
  motion,
} from "framer-motion";

export function SoulScanConsole() {

  const [text, setText] =
    useState("");

  const [limitReached, setLimitReached] =
    useState(false);

  const {
    analyze,
    loading,
    result,
  } =
    useSoulAnalysis();

  async function handleSubmit() {

    if (!text.trim())
      return;

    setLimitReached(false);

    try {

      await analyze(text);

      setText("");

    } catch (error) {

      if (
        error instanceof Error &&
        error.message ===
          "FREE_LIMIT_REACHED"
      ) {
        setLimitReached(true);
        return;
      }

      throw error;
    }
  }

  function handleUpgrade() {

    const pricingSection =
      document.getElementById("pricing");

    if (pricingSection) {

      pricingSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    }
  }

  return (

    <AIConsole

      icon={

        <Sparkles
          size={22}
          className="
          text-[#D6B25E]
          "
        />

      }

      eyebrow="
      EON Intelligence Scan
      "

      title="
      Decode your inner world
      "

      placeholder="
      Describe your thoughts,
      emotions or current life situation...
      "

      value={text}

      onChange={setText}

      onSubmit={handleSubmit}

      loading={loading}

      buttonText="
      Start Soul Analysis
      "

      loadingText="
      Reading your patterns...
      "

      result={

        limitReached ? (

          <motion.div

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.5,
            }}

            className="
            rounded-[32px]
            border
            border-[#D6B25E]/20
            bg-gradient-to-br
            from-[#D6B25E]/10
            via-white/[0.03]
            to-[#8B5CF6]/10
            p-8
            text-center
            "

          >

            <div
              className="
              mx-auto
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-[#D6B25E]/20
              bg-[#D6B25E]/10
              "
            >

              <Sparkles
                size={24}
                className="
                text-[#D6B25E]
                "
              />

            </div>

            <p
              className="
              mt-6
              text-[10px]
              uppercase
              tracking-[0.4em]
              text-[#D6B25E]
              "
            >
              Free Limit Reached
            </p>

            <h3
              className="
              mt-3
              text-2xl
              font-light
              text-[#F4F1EA]
              "
            >
              Your free Soul Scans are complete.
            </h3>

            <p
              className="
              mx-auto
              mt-4
              max-w-md
              text-sm
              leading-7
              text-white/50
              "
            >
              You’ve used your 2 free Soul Scans.
              Unlock unlimited Soul Analysis with Pro.
            </p>

            <button
              type="button"
              onClick={handleUpgrade}
              className="
              mx-auto
              mt-7
              flex
              cursor-pointer
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-[#D6B25E]/30
              bg-[#D6B25E]/10
              px-6
              py-3
              text-xs
              uppercase
              tracking-[0.2em]
              text-[#F4F1EA]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-[#D6B25E]/60
              hover:bg-[#D6B25E]/20
              hover:text-white
              active:translate-y-0
              focus:outline-none
              focus:ring-2
              focus:ring-[#D6B25E]/30
              "
            >

              Upgrade to Pro

              <ArrowRight
                size={15}
              />

            </button>

          </motion.div>

        ) : (

          result && (

            <motion.div

              initial={{
                opacity: 0,
                y: 30,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.6,
              }}

              className="
              space-y-8
              rounded-[32px]
              border
              border-[#D6B25E]/20
              bg-gradient-to-br
              from-[#D6B25E]/10
              via-white/[0.03]
              to-[#8B5CF6]/10
              p-8
              "

            >

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
                  bg-[#D6B25E]/10
                  "
                >

                  <Brain
                    size={24}
                    className="
                    text-[#D6B25E]
                    "
                  />

                </div>

                <div>

                  <p
                    className="
                    text-[10px]
                    uppercase
                    tracking-[0.4em]
                    text-[#D6B25E]
                    "
                  >
                    Soul Reflection
                  </p>

                  <p
                    className="
                    text-xs
                    text-white/40
                    "
                  >
                    Generated by EON AI
                  </p>

                </div>

              </div>

              <div>

                <p
                  className="
                  text-[11px]
                  uppercase
                  tracking-[0.35em]
                  text-white/40
                  "
                >
                  Core Archetype
                </p>

                <h3
                  className="
                  mt-3
                  text-5xl
                  font-light
                  text-[#F4F1EA]
                  "
                >
                  {result.archetype}
                </h3>

              </div>

              <div
                className="
                grid
                gap-5
                md:grid-cols-2
                "
              >

                <div
                  className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5
                  "
                >

                  <div
                    className="
                    flex
                    items-center
                    gap-3
                    "
                  >

                    <Heart
                      size={18}
                      className="
                      text-[#D6B25E]
                      "
                    />

                    <p
                      className="
                      text-xs
                      uppercase
                      tracking-[0.3em]
                      text-white/40
                      "
                    >
                      Emotion
                    </p>

                  </div>

                  <p
                    className="
                    mt-4
                    text-xl
                    text-[#F4F1EA]
                    "
                  >
                    {result.emotion}
                  </p>

                </div>

                <div
                  className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5
                  "
                >

                  <div
                    className="
                    flex
                    items-center
                    gap-3
                    "
                  >

                    <Moon
                      size={18}
                      className="
                      text-purple-400
                      "
                    />

                    <p
                      className="
                      text-xs
                      uppercase
                      tracking-[0.3em]
                      text-white/40
                      "
                    >
                      Shadow
                    </p>

                  </div>

                  <p
                    className="
                    mt-4
                    leading-7
                    text-white/70
                    "
                  >
                    {result.shadow}
                  </p>

                </div>

              </div>

              <div>

                <div
                  className="
                  flex
                  items-center
                  gap-3
                  "
                >

                  <Eye
                    size={18}
                    className="
                    text-[#D6B25E]
                    "
                  />

                  <p
                    className="
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-white/40
                    "
                  >
                    Reflection
                  </p>

                </div>

                <p
                  className="
                  mt-4
                  italic
                  leading-8
                  text-white/70
                  "
                >
                  {result.reflection}
                </p>

              </div>

              <div
                className="
                border-t
                border-white/10
                pt-6
                "
              >

                <p
                  className="
                  text-xs
                  uppercase
                  tracking-[0.35em]
                  text-[#D6B25E]
                  "
                >
                  Personal Insight
                </p>

                <p
                  className="
                  mt-4
                  leading-8
                  text-white/80
                  "
                >
                  {result.insight}
                </p>

              </div>

              <div
                className="
                flex
                flex-wrap
                gap-3
                "
              >

                <span
                  className="
                  rounded-full
                  border
                  border-[#D6B25E]/20
                  bg-[#D6B25E]/5
                  px-4
                  py-2
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-[#D6B25E]
                  "
                >
                  Identity
                </span>

                <span
                  className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-4
                  py-2
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-white/50
                  "
                >
                  Archetype
                </span>

                <span
                  className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-4
                  py-2
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-white/50
                  "
                >
                  Evolution
                </span>

              </div>

              <p
                className="
                text-center
                text-[10px]
                uppercase
                tracking-[0.4em]
                text-white/30
                "
              >
                Powered by EON Intelligence Engine
              </p>

            </motion.div>

          )

        )

      }

    />

  );
}