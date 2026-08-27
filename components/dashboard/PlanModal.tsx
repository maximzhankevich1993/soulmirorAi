"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, X, Sparkles, Crown, Zap } from "lucide-react";

interface PlanModalProps {
  open: boolean;
  onClose: () => void;
  currentPlan?: "free" | "day" | "pro";
}

const plans = [
  {
    id: "free" as const,
    name: "Free",
    label: "Begin your journey",
    price: "$0",
    period: "",
    icon: Sparkles,
    description:
      "A quiet introduction to your personal intelligence system.",
    features: [
      "1 Soul Scan",
      "1 Dream Analysis",
      "1 Tarot Reading",
      "Personal intelligence profile",
    ],
  },
  {
    id: "day" as const,
    name: "Day",
    label: "One day of deeper insight",
    price: "$4.99",
    period: "/ day",
    icon: Zap,
    description:
      "Full access to SoulMirror intelligence for one day.",
    features: [
      "Unlimited Soul Scans",
      "Unlimited Dream Analysis",
      "Unlimited Tarot",
      "Full intelligence experience",
    ],
  },
  {
    id: "pro" as const,
    name: "Pro",
    label: "Your evolving intelligence",
    price: "$19",
    period: "/ month",
    icon: Crown,
    description:
      "The complete SoulMirror experience for continuous self-discovery.",
    features: [
      "Unlimited Soul Scans",
      "Unlimited Dream Analysis",
      "Unlimited Tarot",
      "Long-term personal intelligence",
      "Evolution memory",
      "Priority access to new experiences",
    ],
  },
];

export function PlanModal({
  open,
  onClose,
  currentPlan = "free",
}: PlanModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="
            fixed
            inset-0
            z-[200]
            flex
            items-center
            justify-center
            overflow-y-auto
            px-5
            py-8
            sm:px-8
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* BACKDROP */}

          <motion.div
            className="
              absolute
              inset-0
              bg-[#050505]/90
              backdrop-blur-2xl
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* ATMOSPHERE */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.85,
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[600px]
              w-[900px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#D6B25E]/[0.035]
              blur-[180px]
            "
          />

          {/* MODAL */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.96,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              y: 25,
              scale: 0.97,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              z-10
              w-full
              max-w-6xl
              overflow-hidden
              rounded-[32px]
              border
              border-white/[0.09]
              bg-[#090909]/90
              shadow-[0_30px_120px_rgba(0,0,0,0.7)]
            "
          >
            {/* TOP LINE */}

            <div
              className="
                absolute
                left-1/2
                top-0
                h-px
                w-1/2
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-[#D6B25E]/50
                to-transparent
              "
            />

            {/* CLOSE */}

            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="
                absolute
                right-5
                top-5
                z-20
                flex
                h-10
                w-10
                cursor-pointer
                items-center
                justify-center
                rounded-full
                border
                border-white/[0.08]
                bg-white/[0.025]
                text-white/35
                transition-all
                duration-300
                hover:border-white/15
                hover:bg-white/[0.06]
                hover:text-white/80
              "
            >
              <X size={17} strokeWidth={1.5} />
            </button>

            {/* HEADER */}

            <div className="px-6 pb-8 pt-12 text-center sm:px-10 sm:pt-14">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.55em]
                  text-[#D6B25E]
                "
              >
                SOULMIRROR
              </motion.p>

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 20,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  delay: 0.25,
                  duration: 0.7,
                }}
                className="
                  mt-5
                  font-[family:var(--font-cormorant)]
                  text-4xl
                  font-light
                  text-[#F4F1EA]
                  sm:text-5xl
                "
              >
                Choose your depth.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="
                  mx-auto
                  mt-4
                  max-w-lg
                  text-sm
                  leading-7
                  text-white/35
                "
              >
                Continue exploring your inner world with
                the level of intelligence that feels right
                for you.
              </motion.p>
            </div>

            {/* PLANS */}

            <div
              className="
                grid
                gap-4
                px-5
                pb-6
                sm:px-8
                lg:grid-cols-3
              "
            >
              {plans.map((plan, index) => {
                const Icon = plan.icon;

                const isCurrent =
                  currentPlan === plan.id;

                const isPro =
                  plan.id === "pro";

                return (
                  <motion.div
                    key={plan.id}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.2 + index * 0.1,
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`
                      group
                      relative
                      flex
                      flex-col
                      overflow-hidden
                      rounded-[28px]
                      border
                      p-6
                      transition-all
                      duration-500
                      ${
                        isPro
                          ? "border-[#D6B25E]/25 bg-[#D6B25E]/[0.045] hover:border-[#D6B25E]/40 hover:bg-[#D6B25E]/[0.065]"
                          : "border-white/[0.07] bg-white/[0.018] hover:border-white/[0.14] hover:bg-white/[0.035]"
                      }
                    `}
                  >
                    {/* PRO GLOW */}

                    {isPro && (
                      <div
                        className="
                          pointer-events-none
                          absolute
                          -right-20
                          -top-20
                          h-48
                          w-48
                          rounded-full
                          bg-[#D6B25E]/10
                          blur-[80px]
                        "
                      />
                    )}

                    {/* PLAN ICON */}

                    <div
                      className={`
                        relative
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        ${
                          isPro
                            ? "border-[#D6B25E]/20 bg-[#D6B25E]/10 text-[#D6B25E]"
                            : "border-white/[0.08] bg-white/[0.03] text-white/50"
                        }
                      `}
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* PLAN NAME */}

                    <div className="relative mt-7">
                      <p
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.35em]
                          text-white/30
                        "
                      >
                        {plan.label}
                      </p>

                      <h3
                        className="
                          mt-2
                          font-[family:var(--font-cormorant)]
                          text-3xl
                          font-light
                          text-[#F4F1EA]
                        "
                      >
                        {plan.name}
                      </h3>
                    </div>

                    {/* PRICE */}

                    <div className="relative mt-6 flex items-end">
                      <span
                        className="
                          font-[family:var(--font-cormorant)]
                          text-4xl
                          font-light
                          text-[#F4F1EA]
                        "
                      >
                        {plan.price}
                      </span>

                      {plan.period && (
                        <span className="mb-1 ml-2 text-xs text-white/25">
                          {plan.period}
                        </span>
                      )}
                    </div>

                    {/* DESCRIPTION */}

                    <p
                      className="
                        relative
                        mt-5
                        min-h-[72px]
                        text-xs
                        leading-6
                        text-white/35
                      "
                    >
                      {plan.description}
                    </p>

                    {/* DIVIDER */}

                    <div
                      className="
                        my-6
                        h-px
                        bg-white/[0.06]
                      "
                    />

                    {/* FEATURES */}

                    <div className="relative space-y-3">
                      {plan.features.map(
                        (feature) => (
                          <div
                            key={feature}
                            className="
                              flex
                              items-start
                              gap-3
                              text-xs
                              leading-5
                              text-white/45
                            "
                          >
                            <Check
                              size={14}
                              strokeWidth={1.5}
                              className="
                                mt-0.5
                                shrink-0
                                text-[#D6B25E]
                              "
                            />

                            <span>
                              {feature}
                            </span>
                          </div>
                        )
                      )}
                    </div>

                    {/* ACTION */}

                    <button
                      type="button"
                      disabled={isCurrent}
                      className={`
                        relative
                        mt-8
                        flex
                        h-12
                        w-full
                        cursor-pointer
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        text-[10px]
                        uppercase
                        tracking-[0.25em]
                        transition-all
                        duration-500
                        ${
                          isCurrent
                            ? "cursor-default border-white/[0.06] bg-white/[0.025] text-white/20"
                            : isPro
                              ? "border-[#D6B25E]/25 bg-[#D6B25E]/10 text-[#F4F1EA] hover:border-[#D6B25E]/40 hover:bg-[#D6B25E]/15"
                              : "border-white/[0.08] bg-white/[0.025] text-white/40 hover:border-white/[0.16] hover:bg-white/[0.05] hover:text-white/70"
                        }
                      `}
                    >
                      {isCurrent
                        ? "Current plan"
                        : plan.id === "free"
                          ? "Stay with Free"
                          : `Choose ${plan.name}`}
                    </button>
                  </motion.div>
                );
              })}
            </div>

            {/* FOOTER */}

            <div
              className="
                border-t
                border-white/[0.06]
                px-6
                py-5
                text-center
                sm:px-10
              "
            >
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-white/20
                "
              >
                Your journey. Your pace. Your intelligence.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}