"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { useRouter } from "next/navigation";

interface Plan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  featured?: boolean;
  badge?: string;
}

const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    description:
      "A first glimpse into your inner world.",
    price: "$0",
    period: "forever",
    features: [
      "2 Soul Scans",
      "2 Dream Analyses",
      "2 Tarot Readings",
    ],
  },
  {
    id: "day",
    name: "Day Pass",
    description:
      "Unlimited access to explore SoulMirror for one day.",
    price: "$2.99",
    period: "one day",
    features: [
      "Unlimited Soul Scans",
      "Unlimited Dream Analysis",
      "Unlimited Tarot",
      "Full intelligence access",
    ],
  },
  {
    id: "monthly",
    name: "Pro",
    description:
      "Continuous intelligence for your inner journey.",
    price: "$12.99",
    period: "per month",
    features: [
      "Unlimited Soul Scans",
      "Unlimited Dream Analysis",
      "Unlimited Tarot",
      "Soul Memory",
      "Journey intelligence",
    ],
    featured: true,
    badge: "Most chosen",
  },
  {
    id: "yearly",
    name: "Pro Annual",
    description:
      "The complete SoulMirror experience, for less.",
    price: "$79",
    period: "per year",
    features: [
      "Everything in Pro",
      "Priority intelligence",
      "Full journey memory",
      "Best annual value",
    ],
  },
];

export function PremiumPanel() {
  const router = useRouter();

  const handlePlan = (planId: string) => {
    if (planId === "free") {
      return;
    }

    router.push(`/checkout?plan=${planId}`);
  };

  return (
    <div className="relative w-full">
      {/* =========================================
          ATMOSPHERE
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          hidden
          h-[320px]
          w-[320px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]/[0.018]
          blur-[150px]
          sm:block
        "
      />

      {/* =========================================
          HEADER
      ========================================== */}

      <div className="relative z-10">
        <p
          className="
            text-[9px]
            uppercase
            tracking-[0.5em]
            text-[#D6B25E]
            sm:text-[10px]
          "
        >
          Choose your depth
        </p>

        <h3
          className="
            mt-3
            max-w-3xl
            font-[family:var(--font-cormorant)]
            text-[2rem]
            font-light
            leading-[1.05]
            tracking-[-0.02em]
            text-[#F4F1EA]
            sm:mt-5
            sm:text-6xl
          "
        >
          Go deeper into yourself.
        </h3>

        <p
          className="
            mt-4
            max-w-xl
            text-[13px]
            leading-6
            text-white/35
            sm:mt-6
            sm:text-sm
            sm:leading-7
          "
        >
          Unlock unlimited access to SoulMirror
          intelligence and let your personal journey
          evolve over time.
        </p>
      </div>

      {/* =========================================
          PLANS
      ========================================== */}

      <div
        className="
          relative
          z-10
          mt-10
          grid
          grid-cols-1
          border-t
          border-white/[0.06]
          md:grid-cols-2
          xl:grid-cols-4
        "
      >
        {plans.map((plan, index) => (
          <motion.article
            key={plan.id}
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
              amount: 0.15,
            }}
            transition={{
              delay: index * 0.06,
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`
              relative
              flex
              flex-col
              border-b
              border-white/[0.06]
              px-0
              py-7
              md:border-r
              md:px-7
              md:py-10
              xl:py-12
              ${
                plan.featured
                  ? "bg-white/[0.018]"
                  : ""
              }
            `}
          >
            {/* FEATURED GLOW */}

            {plan.featured && (
              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  hidden
                  h-[320px]
                  w-[320px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#D6B25E]/[0.025]
                  blur-[100px]
                  sm:block
                "
              />
            )}

            <div className="relative z-10 flex h-full flex-col">
              {/* TOP */}

              <div className="flex items-center justify-between">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    border
                    border-white/[0.08]
                    text-white/35
                  "
                >
                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.2em]
                    "
                  >
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>
                </div>

                {plan.badge && (
                  <span
                    className="
                      text-[7px]
                      uppercase
                      tracking-[0.3em]
                      text-[#D6B25E]/80
                    "
                  >
                    {plan.badge}
                  </span>
                )}
              </div>

              {/* NAME */}

              <h4
                className="
                  mt-6
                  font-[family:var(--font-cormorant)]
                  text-[1.8rem]
                  font-light
                  leading-none
                  text-[#F4F1EA]
                  sm:mt-9
                  sm:text-3xl
                "
              >
                {plan.name}
              </h4>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-2.5
                  max-w-xs
                  text-[12px]
                  leading-5
                  text-white/30
                  sm:mt-3
                  sm:min-h-0
                  sm:text-sm
                  sm:leading-6
                  xl:min-h-[72px]
                "
              >
                {plan.description}
              </p>

              {/* PRICE */}

              <div className="mt-6 sm:mt-8">
                <span
                  className="
                    font-[family:var(--font-cormorant)]
                    text-[2.75rem]
                    font-light
                    leading-none
                    tracking-[-0.02em]
                    text-[#F4F1EA]
                    sm:text-5xl
                  "
                >
                  {plan.price}
                </span>

                <span
                  className="
                    ml-2
                    text-[8px]
                    uppercase
                    tracking-[0.3em]
                    text-white/20
                    sm:text-[9px]
                  "
                >
                  {plan.period}
                </span>
              </div>

              {/* DIVIDER */}

              <div
                className="
                  my-6
                  h-px
                  bg-white/[0.06]
                  sm:my-8
                "
              />

              {/* FEATURES */}

              <ul className="space-y-3 sm:space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="
                      flex
                      items-start
                      gap-3
                    "
                  >
                    <Check
                      size={13}
                      strokeWidth={1.2}
                      className="
                        mt-0.5
                        shrink-0
                        text-[#D6B25E]/55
                      "
                    />

                    <span
                      className="
                        text-[11px]
                        leading-5
                        text-white/35
                        sm:text-xs
                        sm:leading-6
                      "
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* ACTION */}

              <div
                className="
                  mt-7
                  border-t
                  border-white/[0.06]
                  pt-4
                  sm:mt-10
                  sm:pt-5
                "
              >
                <button
                  type="button"
                  disabled={plan.id === "free"}
                  onClick={() =>
                    handlePlan(plan.id)
                  }
                  className={`
                    flex
                    min-h-10
                    w-full
                    items-center
                    justify-between
                    gap-4
                    text-left
                    outline-none
                    ${
                      plan.id === "free"
                        ? "cursor-default text-white/15"
                        : "cursor-pointer text-white/45 active:text-[#D6B25E] md:hover:text-[#D6B25E]"
                    }
                  `}
                >
                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.35em]
                    "
                  >
                    {plan.id === "free"
                      ? "Current plan"
                      : "Continue"}
                  </span>

                  {plan.id !== "free" && (
                    <span
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        border
                        border-white/[0.08]
                        transition-colors
                        duration-300
                        md:group-hover:border-[#D6B25E]/30
                      "
                    >
                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.25}
                      />
                    </span>
                  )}
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}