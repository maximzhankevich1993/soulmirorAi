
"use client";

import {
  Brain,
  Heart,
  Moon,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

import { GlassCard } from "@/components/ui/GlassCard";
import { GlowIcon } from "@/components/ui/GlowIcon";
import { useSoulMemoryStore } from "@/store/soul-memory-store";

export function SoulDashboard() {
  const archetype = useSoulMemoryStore(
    (state) => state.archetype
  );

  const emotion = useSoulMemoryStore(
    (state) => state.emotion
  );

  const insight = useSoulMemoryStore(
    (state) => state.insight
  );

  const shadow = useSoulMemoryStore(
    (state) => state.shadow
  );

  /*
   * =====================================================
   * FIRST-TIME STATE
   * =====================================================
   *
   * Если пользователь ещё не проходил Soul Scan,
   * вместо пустых значений показываем аккуратное
   * состояние профиля.
   */

  const hasSoulProfile =
    Boolean(
      archetype ||
      emotion ||
      insight ||
      shadow
    );

  /*
   * =====================================================
   * CARDS
   * =====================================================
   */

  const cards = [
    {
      title: "Core Archetype",

      value:
        archetype ||
        "Not yet discovered",

      subtitle:
        archetype
          ? "Soul Identity"
          : "Complete your first Soul Scan",

      icon: Brain,

      discovered: Boolean(archetype),
    },

    {
      title: "Current Emotion",

      value:
        emotion ||
        "Awaiting reflection",

      subtitle:
        emotion
          ? "Live Analysis"
          : "Your emotional state will appear here",

      icon: Heart,

      discovered: Boolean(emotion),
    },

    {
      title: "Shadow Pattern",

      value:
        shadow ||
        "Not yet explored",

      subtitle:
        shadow
          ? "Inner Reflection"
          : "Discover deeper patterns through analysis",

      icon: Moon,

      discovered: Boolean(shadow),
    },

    {
      title: "Soul Evolution",

      value:
        insight
          ? "Growing"
          : "Beginning",

      subtitle:
        insight
          ? "AI Memory"
          : "Your journey starts here",

      icon: Sparkles,

      discovered: Boolean(insight),
    },
  ];

  return (
    <section
      className="
        relative
        mx-auto
        mt-24
        w-full
        max-w-6xl
        px-6
      "
    >
      {/* =================================================
          AMBIENT GLOW
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[420px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#D6B25E]/[0.025]
          blur-[160px]
        "
      />

      {/* =================================================
          HEADER
      ================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative
          mb-14
          text-center
        "
      >
        <p
          className="
            text-[11px]
            uppercase
            tracking-[0.45em]
            text-[#D6B25E]
          "
        >
          Soul Intelligence
        </p>

        <h2
          className="
            mt-5
            font-[family:var(--font-cormorant)]
            text-5xl
            font-light
            leading-tight
            text-[#F4F1EA]
            md:text-6xl
          "
        >
          Your Inner Profile
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-white/50
          "
        >
          SoulMirror continuously learns your
          patterns, emotions and personal evolution.
        </p>
      </motion.div>

      {/* =================================================
          PROFILE CARDS
      ================================================== */}

      <div
        className="
          relative
          grid
          gap-6
          md:grid-cols-2
          xl:grid-cols-4
        "
      >
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.title}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -7,
              }}
              className="
                h-full
              "
            >
              <GlassCard
                className="
                  group
                  relative
                  h-full
                  min-h-[270px]
                  overflow-hidden
                  p-7
                  transition-all
                  duration-500
                  hover:border-[#D6B25E]/20
                  hover:bg-white/[0.045]
                "
              >
                {/* Card glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-[#D6B25E]/5
                    blur-3xl
                    transition-all
                    duration-700
                    group-hover:bg-[#D6B25E]/10
                    group-hover:scale-125
                  "
                />

                {/* Bottom glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-20
                    left-1/2
                    h-32
                    w-32
                    -translate-x-1/2
                    rounded-full
                    bg-[#D6B25E]/[0.025]
                    blur-3xl
                    transition-all
                    duration-700
                    group-hover:bg-[#D6B25E]/[0.06]
                  "
                />

                <div className="relative z-10">
                  {/* Icon */}

                  <GlowIcon>
                    <Icon
                      size={22}
                      className="
                        text-[#D6B25E]
                        transition-transform
                        duration-500
                        group-hover:scale-110
                      "
                    />
                  </GlowIcon>

                  {/* Title */}

                  <p
                    className="
                      mt-6
                      text-[11px]
                      uppercase
                      tracking-[0.35em]
                      text-white/40
                    "
                  >
                    {card.title}
                  </p>

                  {/* Value */}

                  <h3
                    className={`
                      mt-3
                      line-clamp-2
                      min-h-[64px]
                      text-2xl
                      font-light
                      leading-tight
                      ${
                        card.discovered
                          ? "text-[#F4F1EA]"
                          : "text-white/45"
                      }
                    `}
                  >
                    {card.value}
                  </h3>

                  {/* Subtitle */}

                  <p
                    className="
                      mt-3
                      min-h-[40px]
                      text-sm
                      leading-5
                      text-white/40
                    "
                  >
                    {card.subtitle}
                  </p>

                  {/* First-time indicator */}

                  {!card.discovered && (
                    <div
                      className="
                        mt-5
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/[0.07]
                        bg-white/[0.025]
                        px-3
                        py-1.5
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#D6B25E]/50
                        "
                      />

                      <span
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.25em]
                          text-white/30
                        "
                      >
                        Awaiting discovery
                      </span>
                    </div>
                  )}

                  {/* Discovered indicator */}

                  {card.discovered && (
                    <div
                      className="
                        mt-5
                        flex
                        items-center
                        gap-2
                        text-[9px]
                        uppercase
                        tracking-[0.25em]
                        text-[#D6B25E]/60
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#D6B25E]
                        "
                      />

                      Active
                    </div>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>

      {/* =================================================
          FIRST TIME MESSAGE
      ================================================== */}

      {!hasSoulProfile && (
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.6,
            duration: 0.8,
          }}
          className="
            relative
            mt-10
            flex
            justify-center
          "
        >
          <div
            className="
              flex
              max-w-xl
              flex-col
              items-center
              rounded-[28px]
              border
              border-[#D6B25E]/10
              bg-white/[0.02]
              px-7
              py-6
              text-center
              backdrop-blur-xl
              sm:flex-row
              sm:text-left
            "
          >
            <div className="flex-1">
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.35em]
                  text-[#D6B25E]/70
                "
              >
                Your journey begins here
              </p>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-white/45
                "
              >
                Complete your first Soul Scan to
                begin building your personal profile.
              </p>
            </div>

            <ArrowRight
              size={18}
              className="
                mt-4
                shrink-0
                text-[#D6B25E]/50
                sm:ml-6
                sm:mt-0
              "
            />
          </div>
        </motion.div>
      )}

      {/* =================================================
          ENGINE LABEL
      ================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.8,
          duration: 0.8,
        }}
        className="
          mt-12
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
              tracking-[0.4em]
              text-white/40
            "
          >
            Powered by EON Intelligence Engine
          </p>
        </div>
      </motion.div>
    </section>
  );
}

