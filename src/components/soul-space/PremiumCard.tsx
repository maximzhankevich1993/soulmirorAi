
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Crown,
  Sparkles,
  Zap,
} from "lucide-react";

import { GlassCard } from "@/components/ui/GlassCard";
import { GlowIcon } from "@/components/ui/GlowIcon";
import { GradientButton } from "@/components/ui/GradientButton";

type Plan = {
  id: "free" | "day" | "monthly" | "yearly";
  name: string;
  description: string;
  price: string;
  period: string;
  badge?: string;
  featured?: boolean;
  icon: typeof Sparkles;
  features: string[];
};

const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    description: "Begin your journey",
    price: "$0",
    period: "forever",
    icon: Sparkles,
    features: [
      "1 Soul Scan",
      "1 Dream Analysis",
      "1 Tarot Reading",
      "Personal Soul Profile",
    ],
  },
  {
    id: "day",
    name: "Day Pass",
    description: "Explore without limits",
    price: "$2.99",
    period: "24 hours",
    icon: Zap,
    features: [
      "Unlimited Soul Scans",
      "Unlimited Dream Analysis",
      "Unlimited Tarot Readings",
      "Full AI Intelligence Access",
    ],
  },
  {
    id: "monthly",
    name: "Monthly",
    description: "Your personal AI companion",
    price: "$12.99",
    period: "per month",
    badge: "Most Popular",
    featured: true,
    icon: Crown,
    features: [
      "Unlimited Soul Intelligence",
      "Advanced Dream Analysis",
      "Personal Evolution Memory",
      "Continuous AI Insights",
    ],
  },
  {
    id: "yearly",
    name: "Yearly",
    description: "The complete experience",
    price: "$79",
    period: "per year",
    badge: "Best Value",
    icon: Crown,
    features: [
      "Everything in Monthly",
      "Long-term Soul Memory",
      "Deep Evolution Tracking",
      "Maximum value",
    ],
  },
];

export function PremiumCard() {
  function handleSelectPlan(planId: Plan["id"]) {
    if (planId === "free") {
      return;
    }

    // TODO:
    // Connect CryptoCloud after production domain is configured.
    // Create checkout session and redirect to CryptoCloud.
    console.log("SELECT PLAN:", planId);
  }

  return (
    <section
      id="pricing"
      className="
        relative
        mx-auto
        mt-32
        w-full
        max-w-7xl
        px-6
      "
    >
      {/* Ambient atmosphere */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[1000px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]/[0.035]
          blur-[160px]
        "
      />

      <motion.div
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
          margin: "-80px",
        }}
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative"
      >
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <GlowIcon size="lg">
              <Crown
                size={24}
                className="text-[#D6B25E]"
              />
            </GlowIcon>
          </div>

          <p
            className="
              mt-7
              text-[10px]
              uppercase
              tracking-[0.48em]
              text-[#D6B25E]
            "
          >
            SoulMirror Pro
          </p>

          <h2
            className="
              mt-4
              font-[family:var(--font-cormorant)]
              text-4xl
              font-light
              leading-tight
              text-[#F4F1EA]
              md:text-6xl
            "
          >
            Choose your level of
            <br />
            <span className="text-white/45">
              self-discovery.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-white/45
              md:text-base
            "
          >
            Start freely, explore for a day, or unlock
            the complete SoulMirror intelligence system.
          </p>
        </div>

        {/* Pricing */}

        <div
          className="
            mt-14
            grid
            gap-4
            lg:grid-cols-4
          "
        >
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.div
                key={plan.id}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -7,
                }}
                className="relative"
              >
                {/* Badge */}

                {plan.badge && (
                  <div
                    className="
                      absolute
                      -top-3
                      left-1/2
                      z-20
                      -translate-x-1/2
                      whitespace-nowrap
                      rounded-full
                      border
                      border-[#D6B25E]/25
                      bg-[#0A0A0A]
                      px-4
                      py-1.5
                      text-[9px]
                      uppercase
                      tracking-[0.3em]
                      text-[#D6B25E]
                      shadow-[0_0_30px_rgba(214,178,94,0.08)]
                    "
                  >
                    {plan.badge}
                  </div>
                )}

                <GlassCard
                  highlight={plan.featured}
                  className={`
                    group
                    relative
                    h-full
                    overflow-hidden
                    rounded-[32px]
                    p-6
                    transition-all
                    duration-500
                    ${
                      plan.featured
                        ? "border-[#D6B25E]/25 bg-[#0A0A0A]/90"
                        : "border-white/[0.07] bg-white/[0.025]"
                    }
                    hover:border-[#D6B25E]/25
                    hover:bg-white/[0.04]
                  `}
                >
                  {/* Card glow */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-44
                      w-44
                      rounded-full
                      blur-[80px]
                      transition-opacity
                      duration-700
                      ${
                        plan.featured
                          ? "bg-[#D6B25E]/10 opacity-100"
                          : "bg-[#D6B25E]/[0.05] opacity-60 group-hover:opacity-100"
                      }
                    `}
                  />

                  <div className="relative z-10">
                    {/* Icon */}

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-white/[0.07]
                        bg-white/[0.035]
                      "
                    >
                      <Icon
                        size={19}
                        className={
                          plan.featured
                            ? "text-[#D6B25E]"
                            : "text-white/60"
                        }
                      />
                    </div>

                    {/* Name */}

                    <p
                      className="
                        mt-7
                        text-[10px]
                        uppercase
                        tracking-[0.35em]
                        text-white/35
                      "
                    >
                      {plan.name}
                    </p>

                    <p
                      className="
                        mt-2
                        text-sm
                        text-white/45
                      "
                    >
                      {plan.description}
                    </p>

                    {/* Price */}

                    <div className="mt-7">
                      <span
                        className="
                          text-4xl
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
                          text-xs
                          text-white/30
                        "
                      >
                        {plan.period}
                      </span>
                    </div>

                    {/* Divider */}

                    <div
                      className="
                        my-7
                        h-px
                        bg-gradient-to-r
                        from-white/[0.08]
                        via-white/[0.04]
                        to-transparent
                      "
                    />

                    {/* Features */}

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
                            size={14}
                            className="
                              mt-0.5
                              shrink-0
                              text-[#D6B25E]
                            "
                          />

                          <span
                            className="
                              text-xs
                              leading-5
                              text-white/55
                            "
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Button */}

                    <button
                      type="button"
                      onClick={() =>
                        handleSelectPlan(plan.id)
                      }
                      disabled={plan.id === "free"}
                      className={`
                        group/button
                        mt-8
                        flex
                        w-full
                        cursor-pointer
                        items-center
                        justify-center
                        gap-3
                        rounded-2xl
                        border
                        px-5
                        py-3.5
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.3em]
                        transition-all
                        duration-500
                        ${
                          plan.featured
                            ? "border-[#D6B25E]/30 bg-[#D6B25E]/10 text-[#D6B25E] hover:border-[#D6B25E]/50 hover:bg-[#D6B25E]/15 hover:shadow-[0_0_35px_rgba(214,178,94,0.08)]"
                            : plan.id === "free"
                              ? "cursor-default border-white/[0.06] bg-white/[0.02] text-white/25"
                              : "border-white/[0.08] bg-white/[0.025] text-white/55 hover:border-[#D6B25E]/30 hover:bg-[#D6B25E]/[0.06] hover:text-[#D6B25E] hover:shadow-[0_0_30px_rgba(214,178,94,0.06)]"
                        }
                      `}
                    >
                      {plan.id === "free"
                        ? "Current Plan"
                        : "Choose Plan"}

                      {plan.id !== "free" && (
                        <ArrowRight
                          size={14}
                          className="
                            transition-transform
                            duration-500
                            group-hover/button:translate-x-1
                          "
                        />
                      )}
                    </button>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}

        <div
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-center
            gap-3
            text-center
            sm:flex-row
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
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

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.35em]
                text-white/25
              "
            >
              Secure crypto payments
            </span>
          </div>

          <span className="hidden text-white/10 sm:block">
            •
          </span>

          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.35em]
              text-white/25
            "
          >
            Powered by EON Intelligence Engine
          </span>
        </div>
      </motion.div>
    </section>
  );
}

