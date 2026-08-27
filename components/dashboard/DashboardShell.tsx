"use client";

import {
  useEffect,
  useState,
  type MouseEvent,
} from "react";

import {
  AnimatePresence,
  motion,
  useInView,
} from "framer-motion";

import { useRouter } from "next/navigation";

import { supabase } from "../../src/lib/supabaseClient";

import { SoulOrbPanel } from "./SoulOrbPanel";
import { IntelligenceModules } from "./IntelligenceModules";
import { EvolutionTimeline } from "./EvolutionTimeline";
import { PremiumPanel } from "./PremiumPanel";
import { UsagePanel } from "./UsagePanel";

interface Usage {
  soulScan: number;
  dream: number;
  tarot: number;
}

interface DashboardShellProps {
  usage: Usage;
}

type UserPlan = "free" | "day" | "pro";

type RevealSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

function RevealSection({
  children,
  className = "",
  delay = 0,
}: RevealSectionProps) {
  const ref = useState<HTMLDivElement | null>(null);
  const [element, setElement] =
    useState<HTMLDivElement | null>(null);

  const isInView = useInView(element, {
    once: true,
    amount: 0.12,
  });

  return (
    <motion.div
      ref={setElement}
      initial={{
        opacity: 0,
        y: 70,
        filter: "blur(10px)",
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }
          : undefined
      }
      transition={{
        duration: 1.1,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function DashboardShell({
  usage,
}: DashboardShellProps) {
  const router = useRouter();

  const [showWelcome, setShowWelcome] =
    useState(true);

  const [userName, setUserName] =
    useState("there");

  const [userPlan, setUserPlan] =
    useState<UserPlan>("free");

  const [closingWelcome, setClosingWelcome] =
    useState(false);

  const [showPlans, setShowPlans] =
    useState(false);

  /*
   * =========================================
   * LOAD USER
   * =========================================
   */

  useEffect(() => {
    async function loadUser() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          router.replace("/login");
          return;
        }

        const metadataName =
          user.user_metadata?.name ||
          user.user_metadata?.full_name ||
          "";

        const firstName =
          metadataName.trim().split(" ")[0] ||
          user.email?.split("@")[0] ||
          "there";

        setUserName(firstName);

        try {
          const response = await fetch(
            "/api/profile",
            {
              method: "GET",
              cache: "no-store",
            }
          );

          if (response.ok) {
            const data = await response.json();

            if (
              data.plan === "free" ||
              data.plan === "day" ||
              data.plan === "pro"
            ) {
              setUserPlan(data.plan);
            }
          }
        } catch (error) {
          console.error(
            "Failed to load user plan:",
            error
          );
        }
      } catch (error) {
        console.error(
          "Failed to load dashboard user:",
          error
        );
      }
    }

    loadUser();
  }, [router]);

  /*
   * =========================================
   * WELCOME SCREEN
   * =========================================
   */

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setClosingWelcome(true);

      window.setTimeout(() => {
        setShowWelcome(false);
      }, 1000);
    }, 3200);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  /*
   * =========================================
   * LOCK BODY SCROLL WHEN PLANS OPEN
   * =========================================
   */

  useEffect(() => {
    if (!showPlans) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showPlans]);

  /*
   * =========================================
   * ESC CLOSE
   * =========================================
   */

  useEffect(() => {
    if (!showPlans) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowPlans(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [showPlans]);

  /*
   * =========================================
   * PLAN LABEL
   * =========================================
   */

  const planLabel =
    userPlan === "pro"
      ? "Pro"
      : userPlan === "day"
        ? "Day Pass"
        : "Free";

  /*
   * =========================================
   * MODAL BACKDROP CLICK
   * =========================================
   */

  function handleBackdropClick(
    event: MouseEvent<HTMLDivElement>
  ) {
    if (event.target === event.currentTarget) {
      setShowPlans(false);
    }
  }

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        scroll-smooth
        bg-[#050505]
        text-[#F4F1EA]
      "
    >
      {/* =========================================
          GLOBAL ATMOSPHERE
      ========================================== */}

      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-[-180px]
            h-[700px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-[#D6B25E]/[0.035]
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            right-[-300px]
            top-[35%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#D6B25E]/[0.018]
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            bottom-[-300px]
            left-[-250px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#8B5CF6]/[0.012]
            blur-[180px]
          "
        />
      </div>

      {/* =========================================
          CINEMATIC WELCOME
      ========================================== */}

      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: closingWelcome ? 0 : 1,
              scale: closingWelcome ? 1.025 : 1,
              filter: closingWelcome
                ? "blur(16px)"
                : "blur(0px)",
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              overflow-hidden
              bg-[#050505]
            "
          >
            {/* Atmosphere */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 2.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[650px]
                w-[900px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#D6B25E]/[0.035]
                blur-[180px]
              "
            />

            {/* Content */}

            <div
              className="
                relative
                z-10
                flex
                flex-col
                items-center
                px-6
                text-center
              "
            >
              <motion.p
                initial={{
                  opacity: 0,
                  y: 18,
                  filter: "blur(12px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 1.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.7em]
                  text-[#D6B25E]
                  sm:text-[11px]
                "
              >
                SOULMIRROR
              </motion.p>

              <motion.div
                initial={{
                  opacity: 0,
                  scaleX: 0,
                }}
                animate={{
                  opacity: 1,
                  scaleX: 1,
                }}
                transition={{
                  delay: 0.4,
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  mt-7
                  h-px
                  w-20
                  origin-center
                  bg-gradient-to-r
                  from-transparent
                  via-[#D6B25E]/50
                  to-transparent
                "
              />

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 35,
                  filter: "blur(18px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  delay: 0.65,
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  mt-8
                  max-w-[1000px]
                  font-[family:var(--font-cormorant)]
                  text-5xl
                  font-light
                  leading-[1.05]
                  text-[#F4F1EA]
                  sm:text-6xl
                  md:text-7xl
                  lg:text-8xl
                "
              >
                Welcome back,{" "}
                <span className="text-[#D6B25E]">
                  {userName}.
                </span>
              </motion.h1>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1,
                  duration: 1,
                }}
                className="
                  mt-6
                  text-sm
                  tracking-wide
                  text-white/35
                "
              >
                Your personal intelligence space
              </motion.p>

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 1.5,
                  duration: 1,
                }}
                className="
                  mt-12
                  flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    h-1
                    w-1
                    rounded-full
                    bg-[#D6B25E]
                    shadow-[0_0_12px_rgba(214,178,94,0.9)]
                  "
                />

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.45em]
                    text-white/20
                  "
                >
                  Intelligence online
                </span>

                <span
                  className="
                    h-1
                    w-1
                    rounded-full
                    bg-[#D6B25E]
                    shadow-[0_0_12px_rgba(214,178,94,0.9)]
                  "
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================
          PLANS MODAL
      ========================================== */}

      <AnimatePresence>
        {showPlans && (
          <motion.div
            initial={{
              opacity: 0,
              backdropFilter: "blur(0px)",
            }}
            animate={{
              opacity: 1,
              backdropFilter: "blur(18px)",
            }}
            exit={{
              opacity: 0,
              backdropFilter: "blur(0px)",
            }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            onMouseDown={handleBackdropClick}
            className="
              fixed
              inset-0
              z-[200]
              flex
              items-center
              justify-center
              overflow-y-auto
              bg-black/75
              p-4
              sm:p-6
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 35,
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
                y: 20,
                scale: 0.97,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              onMouseDown={(event) =>
                event.stopPropagation()
              }
              className="
                relative
                w-full
                max-w-5xl
                overflow-hidden
                rounded-[2rem]
                border
                border-white/[0.09]
                bg-[#090909]/95
                shadow-[0_40px_120px_rgba(0,0,0,0.65)]
              "
            >
              {/* Modal atmosphere */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-[-250px]
                  h-[500px]
                  w-[700px]
                  -translate-x-1/2
                  rounded-full
                  bg-[#D6B25E]/[0.045]
                  blur-[140px]
                "
              />

              <div
                className="
                  relative
                  z-10
                  max-h-[90vh]
                  overflow-y-auto
                  overscroll-contain
                "
              >
                {/* Modal header */}

                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-6
                    px-6
                    pb-8
                    pt-7
                    sm:px-10
                    sm:pt-9
                  "
                >
                  <div>
                    <p
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.5em]
                        text-[#D6B25E]
                      "
                    >
                      SoulMirror
                    </p>

                    <h2
                      className="
                        mt-3
                        font-[family:var(--font-cormorant)]
                        text-4xl
                        font-light
                        text-[#F4F1EA]
                        sm:text-5xl
                      "
                    >
                      Choose your path.
                    </h2>

                    <p
                      className="
                        mt-3
                        max-w-xl
                        text-sm
                        leading-6
                        text-white/35
                      "
                    >
                      Choose the level of intelligence
                      that fits your journey.
                    </p>
                  </div>

                  {/* Close */}

                  <button
                    type="button"
                    onClick={() =>
                      setShowPlans(false)
                    }
                    aria-label="Close plans"
                    className="
                      group
                      flex
                      h-10
                      w-10
                      shrink-0
                      cursor-pointer
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-white/[0.025]
                      text-white/40
                      transition-all
                      duration-300
                      hover:border-white/[0.16]
                      hover:bg-white/[0.05]
                      hover:text-[#F4F1EA]
                    "
                  >
                    <span className="text-lg leading-none">
                      ×
                    </span>
                  </button>
                </div>

                {/* Plans */}

                <div
                  className="
                    grid
                    gap-3
                    px-6
                    pb-7
                    sm:px-10
                    sm:pb-10
                    lg:grid-cols-3
                  "
                >
                  {/* FREE */}

                  <PlanCard
                    name="Free"
                    eyebrow="Begin"
                    price="$0"
                    period="/ forever"
                    description="A quiet beginning for exploring your inner world."
                    features={[
                      "Soul Scan",
                      "Dream reflection",
                      "Tarot experience",
                    ]}
                    current={
                      userPlan === "free"
                    }
                    onSelect={() => {
                      setShowPlans(false);
                    }}
                  />

                  {/* DAY PASS */}

                  <PlanCard
                    name="Day Pass"
                    eyebrow="One day"
                    price="$4.99"
                    period="/ day"
                    description="Full access when you want to go deeper for a single day."
                    features={[
                      "Extended intelligence",
                      "Full daily access",
                      "Deeper reflections",
                    ]}
                    current={
                      userPlan === "day"
                    }
                    onSelect={() => {
                      setShowPlans(false);
                    }}
                  />

                  {/* PRO */}

                  <PlanCard
                    name="Pro"
                    eyebrow="Continuous"
                    price="$19"
                    period="/ month"
                    description="The complete SoulMirror experience for an evolving intelligence."
                    features={[
                      "Unlimited core experiences",
                      "Long-term memory",
                      "Evolution insights",
                      "Priority intelligence",
                    ]}
                    current={
                      userPlan === "pro"
                    }
                    featured
                    onSelect={() => {
                      setShowPlans(false);
                    }}
                  />
                </div>

                {/* Bottom */}

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
                      tracking-[0.32em]
                      text-white/20
                    "
                  >
                    Your journey remains yours.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================
          MAIN CONTENT
      ========================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: showWelcome ? 0 : 1,
        }}
        transition={{
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1400px]
          px-5
          pb-32
          pt-8
          sm:px-8
          lg:px-12
        "
      >
        {/* =========================================
            HEADER
        ========================================== */}

        <header
          className="
            flex
            items-center
            justify-between
            border-b
            border-white/[0.06]
            pb-6
          "
        >
          {/* BRAND */}

          <button
            type="button"
            onClick={() => router.push("/")}
            className="
              group
              cursor-pointer
              text-left
              outline-none
            "
          >
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.5em]
                text-[#D6B25E]
                transition-opacity
                duration-500
                group-hover:opacity-75
              "
            >
              SoulMirror
            </p>

            <p
              className="
                mt-2
                text-[9px]
                uppercase
                tracking-[0.28em]
                text-white/25
                transition-colors
                duration-500
                group-hover:text-white/40
              "
            >
              Personal Intelligence
            </p>
          </button>

          {/* USER AREA */}

          <div
            className="
              flex
              items-center
              gap-4
              sm:gap-7
            "
          >
            {/* USER */}

            <div className="text-right">
              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.25em]
                  text-white/70
                "
              >
                {userName}
              </p>

              <p
                className="
                  mt-1
                  text-[8px]
                  uppercase
                  tracking-[0.3em]
                  text-white/25
                "
              >
                Personal space
              </p>
            </div>

            <div
              className="
                hidden
                h-8
                w-px
                bg-white/[0.08]
                sm:block
              "
            />

            {/* PLAN */}

            <button
              type="button"
              onClick={() => setShowPlans(true)}
              className="
                group
                cursor-pointer
                text-right
                outline-none
              "
            >
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.35em]
                  text-white/25
                "
              >
                Plan
              </p>

              <p
                className="
                  mt-1
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-[#D6B25E]
                  transition-all
                  duration-500
                  group-hover:text-[#F4F1EA]
                "
              >
                {planLabel}
              </p>
            </button>

            {/* SETTINGS */}

            <button
              type="button"
              onClick={() =>
                router.push("/settings")
              }
              className="
                hidden
                cursor-pointer
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-white/30
                transition-colors
                duration-500
                hover:text-[#D6B25E]
                sm:block
              "
            >
              Settings
            </button>
          </div>
        </header>

        {/* =========================================
            INTRO
        ========================================== */}

        <section
          className="
            relative
            flex
            min-h-[55vh]
            flex-col
            justify-center
            py-20
            sm:py-28
          "
        >
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="
              text-[10px]
              uppercase
              tracking-[0.5em]
              text-[#D6B25E]
            "
          >
            Your inner world
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              delay: 0.3,
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              mt-6
              max-w-5xl
              font-[family:var(--font-cormorant)]
              text-5xl
              font-light
              leading-[1.05]
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            Understand yourself.
            <br />
            <span className="text-white/30">
              Evolve consciously.
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.7,
              duration: 0.8,
            }}
            className="
              mt-8
              max-w-lg
              text-sm
              leading-7
              text-white/40
            "
          >
            SoulMirror remembers your journey and
            helps you see patterns that are difficult
            to notice alone.
          </motion.p>
        </section>

        {/* =========================================
            CURRENT STATE
        ========================================== */}

        <RevealSection
          className="
            border-t
            border-white/[0.06]
            py-24
            sm:py-32
          "
        >
          <div className="mb-12">
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.5em]
                text-[#D6B25E]
              "
            >
              Current state
            </p>

            <h3
              className="
                mt-4
                font-[family:var(--font-cormorant)]
                text-4xl
                font-light
                sm:text-5xl
              "
            >
              Your consciousness
            </h3>
          </div>

          <SoulOrbPanel />
        </RevealSection>

        {/* =========================================
            EXPLORE
        ========================================== */}

        <RevealSection
          className="
            border-t
            border-white/[0.06]
            py-24
            sm:py-32
          "
          delay={0.05}
        >
          <div className="mb-14">
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.5em]
                text-[#D6B25E]
              "
            >
              Explore yourself
            </p>

            <h3
              className="
                mt-4
                font-[family:var(--font-cormorant)]
                text-4xl
                font-light
                sm:text-5xl
              "
            >
              Your intelligence tools
            </h3>
          </div>

          <IntelligenceModules />
        </RevealSection>

        {/* =========================================
            JOURNEY
        ========================================== */}

        <RevealSection
          className="
            border-t
            border-white/[0.06]
            py-24
            sm:py-32
          "
          delay={0.05}
        >
          <div className="mb-14">
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.5em]
                text-[#D6B25E]
              "
            >
              Your journey
            </p>

            <h3
              className="
                mt-4
                font-[family:var(--font-cormorant)]
                text-4xl
                font-light
                sm:text-5xl
              "
            >
              A memory of becoming
            </h3>
          </div>

          <EvolutionTimeline />
        </RevealSection>

        {/* =========================================
            USAGE
        ========================================== */}

        <RevealSection
          className="
            border-t
            border-white/[0.06]
            py-20
            sm:py-24
          "
          delay={0.05}
        >
          <UsagePanel usage={usage} />
        </RevealSection>

        {/* =========================================
            PRO
        ========================================== */}

        <RevealSection
          className="
            border-t
            border-white/[0.06]
            py-24
            sm:py-32
          "
          delay={0.05}
        >
          <PremiumPanel />
        </RevealSection>

        {/* =========================================
            FOOTER
        ========================================== */}

        <footer
          className="
            border-t
            border-white/[0.06]
            pt-8
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <button
              type="button"
              onClick={() => router.push("/")}
              className="
                w-fit
                cursor-pointer
                text-[9px]
                uppercase
                tracking-[0.4em]
                text-white/20
                transition-colors
                duration-500
                hover:text-[#D6B25E]
              "
            >
              SOULMIRROR — PERSONAL INTELLIGENCE
            </button>

            <div
              className="
                flex
                items-center
                gap-6
              "
            >
              <button
                type="button"
                onClick={() =>
                  router.push("/settings")
                }
                className="
                  cursor-pointer
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-white/25
                  transition-colors
                  duration-500
                  hover:text-[#D6B25E]
                "
              >
                Settings
              </button>

              <button
                type="button"
                onClick={async () => {
                  await supabase.auth.signOut();

                  router.push("/");
                  router.refresh();
                }}
                className="
                  cursor-pointer
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-white/25
                  transition-colors
                  duration-500
                  hover:text-[#D6B25E]
                "
              >
                Logout
              </button>
            </div>
          </div>
        </footer>
      </motion.div>
    </main>
  );
}

/* =========================================================
   PLAN CARD
========================================================= */

interface PlanCardProps {
  name: string;
  eyebrow: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  current?: boolean;
  featured?: boolean;
  onSelect: () => void;
}

function PlanCard({
  name,
  eyebrow,
  price,
  period,
  description,
  features,
  current = false,
  featured = false,
  onSelect,
}: PlanCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[1.65rem]
        border
        p-6
        sm:p-7
        ${
          featured
            ? "border-[#D6B25E]/25 bg-[#D6B25E]/[0.055]"
            : "border-white/[0.08] bg-white/[0.025]"
        }
      `}
    >
      {/* Glow */}

      {featured && (
        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-56
            w-56
            rounded-full
            bg-[#D6B25E]/[0.09]
            blur-[90px]
          "
        />
      )}

      <div className="relative z-10">
        {/* Top */}

        <div className="flex items-center justify-between">
          <p
            className={`
              text-[9px]
              uppercase
              tracking-[0.4em]
              ${
                featured
                  ? "text-[#D6B25E]"
                  : "text-white/30"
              }
            `}
          >
            {eyebrow}
          </p>

          {current && (
            <span
              className="
                rounded-full
                border
                border-[#D6B25E]/20
                bg-[#D6B25E]/[0.07]
                px-3
                py-1
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-[#D6B25E]
              "
            >
              Current
            </span>
          )}

          {!current && featured && (
            <span
              className="
                rounded-full
                border
                border-[#D6B25E]/20
                bg-[#D6B25E]/[0.07]
                px-3
                py-1
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-[#D6B25E]
              "
            >
              Recommended
            </span>
          )}
        </div>

        {/* Name */}

        <h3
          className="
            mt-7
            font-[family:var(--font-cormorant)]
            text-4xl
            font-light
            text-[#F4F1EA]
          "
        >
          {name}
        </h3>

        {/* Price */}

        <div className="mt-5 flex items-baseline">
          <span
            className="
              text-3xl
              font-light
              tracking-tight
              text-[#F4F1EA]
            "
          >
            {price}
          </span>

          <span
            className="
              ml-2
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-white/25
            "
          >
            {period}
          </span>
        </div>

        {/* Description */}

        <p
          className="
            mt-5
            min-h-[48px]
            text-sm
            leading-6
            text-white/40
          "
        >
          {description}
        </p>

        {/* Divider */}

        <div
          className="
            my-6
            h-px
            bg-white/[0.06]
          "
        />

        {/* Features */}

        <div className="space-y-3">
          {features.map((feature) => (
            <div
              key={feature}
              className="
                flex
                items-center
                gap-3
                text-xs
                text-white/55
              "
            >
              <span
                className="
                  h-1
                  w-1
                  shrink-0
                  rounded-full
                  bg-[#D6B25E]/70
                "
              />

              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Button */}

        <button
          type="button"
          disabled={current}
          onClick={onSelect}
          className={`
            mt-7
            flex
            h-12
            w-full
            cursor-pointer
            items-center
            justify-center
            rounded-xl
            border
            text-[10px]
            uppercase
            tracking-[0.28em]
            transition-all
            duration-500
            disabled:cursor-default
            ${
              current
                ? "border-white/[0.06] bg-white/[0.02] text-white/20"
                : featured
                  ? "border-[#D6B25E]/25 bg-[#D6B25E]/[0.09] text-[#D6B25E] hover:border-[#D6B25E]/45 hover:bg-[#D6B25E]/[0.14]"
                  : "border-white/[0.08] bg-white/[0.025] text-white/45 hover:border-white/[0.16] hover:bg-white/[0.05] hover:text-[#F4F1EA]"
            }
          `}
        >
          {current
            ? "Current plan"
            : featured
              ? "Enter Pro"
              : `Choose ${name}`}
        </button>
      </div>
    </motion.div>
  );
}