"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

export function DashboardShell({
  usage,
}: DashboardShellProps) {
  const router = useRouter();

  const [showWelcome, setShowWelcome] = useState(true);
  const [userName, setUserName] = useState("there");
  const [userPlan, setUserPlan] = useState<UserPlan>("free");
  const [closingWelcome, setClosingWelcome] = useState(false);

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

        /*
         * USER NAME
         */

        const metadataName =
          user.user_metadata?.name ||
          user.user_metadata?.full_name ||
          "";

        const firstName =
          metadataName.trim().split(" ")[0] ||
          user.email?.split("@")[0] ||
          "there";

        setUserName(firstName);

        /*
         * USER PLAN
         */

        try {
          const response = await fetch("/api/profile", {
            method: "GET",
            cache: "no-store",
          });

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
   * SCROLL TO PLANS
   * =========================================
   */

  function scrollToPlans() {
    const plansSection =
      document.getElementById("plans");

    if (!plansSection) return;

    plansSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

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

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
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
        {/* Main golden atmosphere */}

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

        {/* Right atmosphere */}

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

        {/* Bottom atmosphere */}

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
            {/* Cinematic light */}

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

            {/* Secondary light */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.6,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.35,
                duration: 2.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[42%]
                h-[350px]
                w-[550px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-white/[0.012]
                blur-[120px]
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
              {/* Brand */}

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

              {/* Line */}

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

              {/* Greeting */}

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

              {/* Subtitle */}

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

              {/* Online */}

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
          MAIN SPACE
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
          {/* SOULMIRROR BRAND */}

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

            {/* DIVIDER */}

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
              onClick={scrollToPlans}
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
                  transition-colors
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
              onClick={() => router.push("/settings")}
              className="
                cursor-pointer
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-white/30
                transition-colors
                duration-500
                hover:text-[#D6B25E]
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

        <section
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
        </section>

        {/* =========================================
            EXPLORE
        ========================================== */}

        <section
          className="
            border-t
            border-white/[0.06]
            py-24
            sm:py-32
          "
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
        </section>

        {/* =========================================
            JOURNEY
        ========================================== */}

        <section
          className="
            border-t
            border-white/[0.06]
            py-24
            sm:py-32
          "
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
        </section>

        {/* =========================================
            USAGE
        ========================================== */}

        <section
          className="
            border-t
            border-white/[0.06]
            py-20
            sm:py-24
          "
        >
          <UsagePanel usage={usage} />
        </section>

        {/* =========================================
            PLANS
        ========================================== */}

        <section
          id="plans"
          className="
            scroll-mt-8
            border-t
            border-white/[0.06]
            py-24
            sm:py-32
          "
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
              Your plan
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
              Choose your depth
            </h3>

            <p
              className="
                mt-5
                max-w-xl
                text-sm
                leading-7
                text-white/35
              "
            >
              Continue exploring your inner world with
              the level of intelligence that feels right
              for you.
            </p>
          </div>

          <PremiumPanel />
        </section>

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
            {/* BRAND */}

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

            {/* FOOTER ACTIONS */}

            <div
              className="
                flex
                items-center
                gap-6
              "
            >
              <button
                type="button"
                onClick={scrollToPlans}
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
                Plans
              </button>

              <button
                type="button"
                onClick={() => router.push("/settings")}
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