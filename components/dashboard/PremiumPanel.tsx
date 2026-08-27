"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Moon,
  Brain,
  Infinity,
  ArrowUpRight,
  Check,
  Crown,
} from "lucide-react";

import { useRouter } from "next/navigation";

interface Plan {
  id: "free" | "day" | "monthly" | "yearly";
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  icon: typeof Sparkles;
  featured?: boolean;
  badge?: string;
}

const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    description:
      "A quiet beginning for exploring your inner world.",
    price: "$0",
    period: "forever",
    icon: Sparkles,
    features: [
      "Soul Scan",
      "Dream Analysis",
      "Limited AI insights",
    ],
  },

  {
    id: "day",
    name: "Day Pass",
    description:
      "Go deeper when you need a moment of clarity.",
    price: "$2.99",
    period: "24 hours",
    icon: Moon,
    features: [
      "Extended AI access",
      "Deeper Soul Analysis",
      "Dream Intelligence",
      "Tarot exploration",
    ],
  },

  {
    id: "monthly",
    name: "Monthly",
    description:
      "Your complete personal intelligence system.",
    price: "$12.99",
    period: "per month",
    icon: Brain,
    featured: true,
    badge: "Most popular",
    features: [
      "Unlimited Soul Analysis",
      "Advanced Dream Intelligence",
      "Unlimited insights",
      "Evolution Memory",
      "Full intelligence system",
    ],
  },

  {
    id: "yearly",
    name: "Yearly",
    description:
      "A deeper commitment to your personal evolution.",
    price: "$79",
    period: "per year",
    icon: Crown,
    badge: "Best value",
    features: [
      "Everything in Monthly",
      "Unlimited intelligence",
      "Complete Evolution Memory",
      "Long-term personal insights",
      "Best yearly value",
    ],
  },
];

export function PremiumPanel() {
  const router = useRouter();

  return (
    <section
      id="plans"
      className="
        scroll-mt-24
      "
    >
      {/* =====================================================
          INTRO
      ====================================================== */}

      <div className="max-w-3xl">
        <motion.p
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            text-[10px]
            uppercase
            tracking-[0.5em]
            text-[#D6B25E]
          "
        >
          Choose your depth
        </motion.p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 25,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.08,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mt-5
            font-[family:var(--font-cormorant)]
            text-5xl
            font-light
            leading-[1.05]
            text-[#F4F1EA]
            sm:text-6xl
          "
        >
          Go deeper into
          <br />
          <span className="text-white/30">
            yourself.
          </span>
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.16,
            duration: 0.7,
          }}
          className="
            mt-6
            max-w-xl
            text-sm
            leading-7
            text-white/40
          "
        >
          Choose the experience that fits where you
          are in your journey. You can change your
          path whenever you want.
        </motion.p>
      </div>

      {/* =====================================================
          PLANS
      ====================================================== */}

      <div
        className="
          mt-16
          grid
          gap-0
          border-t
          border-white/[0.07]
          md:grid-cols-2
          xl:grid-cols-4
        "
      >
        {plans.map((plan, index) => {
          const Icon = plan.icon;

          return (
            <motion.article
              key={plan.id}
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
                margin: "-60px",
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`
                group
                relative
                py-10
                md:px-7
                xl:px-7
                xl:py-12

                ${
                  index !== 0
                    ? "border-t border-white/[0.07] md:border-l md:border-t-0"
                    : ""
                }

                ${
                  plan.featured
                    ? "bg-white/[0.018]"
                    : ""
                }
              `}
            >
              {/* =================================================
                  FEATURED GLOW
              ================================================== */}

              {plan.featured && (
                <div
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-[320px]
                    w-[320px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#D6B25E]/[0.025]
                    blur-[110px]
                  "
                />
              )}

              <div className="relative z-10">
                {/* =================================================
                    TOP
                ================================================== */}

                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-4
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-white/[0.025]
                      transition-all
                      duration-500
                      group-hover:border-[#D6B25E]/30
                    "
                  >
                    <Icon
                      size={16}
                      strokeWidth={1.5}
                      className="
                        text-white/40
                        transition-colors
                        duration-500
                        group-hover:text-[#D6B25E]
                      "
                    />
                  </div>

                  {plan.badge && (
                    <span
                      className={`
                        text-right
                        text-[8px]
                        uppercase
                        tracking-[0.25em]

                        ${
                          plan.featured
                            ? "text-[#D6B25E]"
                            : "text-white/25"
                        }
                      `}
                    >
                      {plan.badge}
                    </span>
                  )}
                </div>

                {/* =================================================
                    NAME
                ================================================== */}

                <h3
                  className="
                    mt-9
                    font-[family:var(--font-cormorant)]
                    text-3xl
                    font-light
                    text-[#F4F1EA]
                  "
                >
                  {plan.name}
                </h3>

                {/* =================================================
                    DESCRIPTION
                ================================================== */}

                <p
                  className="
                    mt-3
                    min-h-[72px]
                    max-w-xs
                    text-sm
                    leading-6
                    text-white/35
                  "
                >
                  {plan.description}
                </p>

                {/* =================================================
                    PRICE
                ================================================== */}

                <div className="mt-8">
                  <span
                    className="
                      font-[family:var(--font-cormorant)]
                      text-5xl
                      font-light
                      tracking-tight
                      text-[#F4F1EA]
                    "
                  >
                    {plan.price}
                  </span>

                  <span
                    className="
                      ml-2
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-white/25
                    "
                  >
                    {plan.period}
                  </span>
                </div>

                {/* =================================================
                    DIVIDER
                ================================================== */}

                <div
                  className="
                    my-8
                    h-px
                    w-full
                    bg-white/[0.07]
                  "
                />

                {/* =================================================
                    FEATURES
                ================================================== */}

                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="
                        flex
                        items-start
                        gap-3
                      "
                    >
                      <Check
                        size={13}
                        strokeWidth={1.5}
                        className={`
                          mt-0.5
                          shrink-0

                          ${
                            plan.featured
                              ? "text-[#D6B25E]"
                              : "text-white/25"
                          }
                        `}
                      />

                      <span
                        className="
                          text-xs
                          leading-5
                          text-white/45
                        "
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* =================================================
                    ACTION
                ================================================== */}

                <button
                  type="button"
                  onClick={() => {
                    if (plan.id === "free") {
                      router.push("/");
                      return;
                    }

                    router.push(
                      `/checkout?plan=${plan.id}`
                    );
                  }}
                  className="
                    group/button
                    mt-10
                    flex
                    w-full
                    cursor-pointer
                    items-center
                    justify-between
                    border-t
                    border-white/[0.08]
                    pt-5
                    text-left
                    outline-none
                  "
                >
                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.3em]
                      text-white/35
                      transition-colors
                      duration-500
                      group-hover/button:text-[#D6B25E]
                    "
                  >
                    {plan.id === "free"
                      ? "Continue exploring"
                      : "Choose experience"}
                  </span>

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/[0.08]
                      text-white/25
                      transition-all
                      duration-500
                      group-hover/button:border-[#D6B25E]/30
                      group-hover/button:text-[#D6B25E]
                    "
                  >
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.5}
                    />
                  </span>
                </button>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* =====================================================
          FOOTNOTE
      ====================================================== */}

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
          delay: 0.35,
          duration: 0.8,
        }}
        className="
          mt-10
          flex
          items-center
          gap-3
        "
      >
        <span
          className="
            h-1
            w-1
            shrink-0
            rounded-full
            bg-[#D6B25E]
            shadow-[0_0_8px_rgba(214,178,94,0.7)]
          "
        />

        <p
          className="
            text-[8px]
            uppercase
            tracking-[0.35em]
            text-white/20
          "
        >
          Your path remains yours
        </p>
      </motion.div>
    </section>
  );
}