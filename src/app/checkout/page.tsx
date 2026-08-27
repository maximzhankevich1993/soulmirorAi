
"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  Sparkles,
  Moon,
  Brain,
  Crown,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

type PlanId = "day" | "monthly" | "yearly";

interface Plan {
  id: PlanId;
  name: string;
  price: string;
  period: string;
  description: string;
  icon: typeof Sparkles;
  features: string[];
}

const plans: Plan[] = [
  {
    id: "day",
    name: "Day Pass",
    price: "$2.99",
    period: "24 hours",
    description:
      "Go deeper when you need a moment of clarity.",
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
    price: "$12.99",
    period: "per month",
    description:
      "Your complete personal intelligence system.",
    icon: Brain,
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
    price: "$79",
    period: "per year",
    description:
      "A deeper commitment to your personal evolution.",
    icon: Crown,
    features: [
      "Everything in Monthly",
      "Unlimited intelligence",
      "Complete Evolution Memory",
      "Long-term personal insights",
      "Best yearly value",
    ],
  },
];

export default function CheckoutPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const planId = searchParams.get("plan") as PlanId | null;

  const plan = plans.find(
    (item) => item.id === planId
  );

  if (!plan) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-[#F4F1EA]">
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#D6B25E]">
            SoulMirror
          </p>

          <h1 className="mt-6 font-[family:var(--font-cormorant)] text-5xl font-light">
            Experience not found
          </h1>

          <button
            type="button"
            onClick={() => router.push("/dashboard#plans")}
            className="mt-8 text-[9px] uppercase tracking-[0.35em] text-white/40 transition-colors hover:text-[#D6B25E]"
          >
            Return to plans
          </button>
        </div>
      </main>
    );
  }

  const Icon = plan.icon;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-[#F4F1EA]">
      {/* ATMOSPHERE */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-300px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#D6B25E]/[0.035] blur-[180px]" />

        <div className="absolute right-[-300px] top-[40%] h-[600px] w-[600px] rounded-full bg-[#8B5CF6]/[0.012] blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 pb-24 sm:px-8 lg:px-12">
        {/* HEADER */}

        <motion.header
          initial={{
            opacity: 0,
            y: -15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="flex items-center justify-between border-b border-white/[0.07] py-7"
        >
          <button
            type="button"
            onClick={() => router.back()}
            className="group flex cursor-pointer items-center gap-3"
          >
            <ArrowLeft
              size={15}
              strokeWidth={1.4}
              className="text-white/30 transition-all duration-500 group-hover:-translate-x-1 group-hover:text-[#D6B25E]"
            />

            <span className="text-[9px] uppercase tracking-[0.4em] text-white/35 transition-colors duration-500 group-hover:text-[#D6B25E]">
              Back
            </span>
          </button>

          <div className="text-right">
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#D6B25E]">
              SoulMirror
            </p>

            <p className="mt-1 text-[8px] uppercase tracking-[0.3em] text-white/20">
              Checkout
            </p>
          </div>
        </motion.header>

        {/* CONTENT */}

        <div className="grid min-h-[75vh] items-center gap-16 py-20 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#D6B25E]">
              Your experience
            </p>

            <h1 className="mt-6 font-[family:var(--font-cormorant)] text-6xl font-light leading-[0.95] sm:text-7xl">
              Go deeper
              <br />
              <span className="text-white/25">
                with SoulMirror.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-7 text-white/40">
              You are choosing a deeper level of your
              personal intelligence journey.
            </p>

            <div className="mt-12 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D6B25E]/25 bg-[#D6B25E]/[0.05]">
                <Icon
                  size={20}
                  strokeWidth={1.4}
                  className="text-[#D6B25E]"
                />
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.35em] text-white/25">
                  Selected experience
                </p>

                <p className="mt-2 font-[family:var(--font-cormorant)] text-3xl font-light">
                  {plan.name}
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — ORDER */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.15,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025] p-7 backdrop-blur-2xl sm:p-9">
              <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[280px] w-[280px] rounded-full bg-[#D6B25E]/[0.04] blur-[100px]" />

              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.4em] text-white/25">
                      Membership
                    </p>

                    <h2 className="mt-4 font-[family:var(--font-cormorant)] text-4xl font-light">
                      {plan.name}
                    </h2>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D6B25E]/25 bg-[#D6B25E]/[0.05]">
                    <Icon
                      size={16}
                      className="text-[#D6B25E]"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <span className="font-[family:var(--font-cormorant)] text-6xl font-light">
                    {plan.price}
                  </span>

                  <span className="ml-2 text-[9px] uppercase tracking-[0.25em] text-white/25">
                    {plan.period}
                  </span>
                </div>

                <div className="my-8 h-px bg-white/[0.08]" />

                <p className="text-sm leading-7 text-white/40">
                  {plan.description}
                </p>

                <div className="mt-7 space-y-4">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <Check
                        size={14}
                        strokeWidth={1.5}
                        className="text-[#D6B25E]"
                      />

                      <span className="text-xs text-white/50">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    // Следующим шагом подключим
                    // реальную оплату CryptoCloud.
                    console.log(
                      "Selected plan:",
                      plan.id
                    );
                  }}
                  className="mt-10 flex w-full cursor-pointer items-center justify-center rounded-full border border-[#D6B25E]/30 bg-[#D6B25E]/10 px-6 py-4 text-[9px] uppercase tracking-[0.35em] text-[#D6B25E] transition-all duration-500 hover:border-[#D6B25E]/60 hover:bg-[#D6B25E]/15"
                >
                  Continue to payment
                </button>

                <p className="mt-5 text-center text-[8px] uppercase tracking-[0.25em] text-white/15">
                  Secure SoulMirror membership
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

