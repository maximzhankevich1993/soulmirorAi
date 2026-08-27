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
  const [closingWelcome, setClosingWelcome] = useState(false);

  const [userName, setUserName] = useState("there");
  const [userPlan, setUserPlan] =
    useState<UserPlan>("free");

  const [showPlans, setShowPlans] = useState(false);

  /*
   * =====================================================
   * LOAD USER
   * =====================================================
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
   * =====================================================
   * CINEMATIC WELCOME
   * =====================================================
   */

  useEffect(() => {
    const closeTimer = window.setTimeout(() => {
      setClosingWelcome(true);
    }, 3200);

    const hideTimer = window.setTimeout(() => {
      setShowWelcome(false);
    }, 4200);

    return () => {
      window.clearTimeout(closeTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  /*
   * =====================================================
   * ESCAPE — CLOSE PLANS
   * =====================================================
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
   * =====================================================
   * LOCK BODY SCROLL WHEN MODAL IS OPEN
   * =====================================================
   */

  useEffect(() => {
    if (!showPlans) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [showPlans]);

  /*
   * =====================================================
   * PLAN LABEL
   * =====================================================
   */

  const planLabel =
    userPlan === "pro"
      ? "Pro"
      : userPlan === "day"
        ? "Day Pass"
        : "Free";

  /*
   * =====================================================
   * LOGOUT
   * =====================================================
   */

  async function handleLogout() {
    await supabase.auth.signOut();

    router.push("/");
    router.refresh();
  }

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-x-hidden
        bg-[#050505]
        text-[#F4F1EA]
        [scroll-behavior:smooth]
      "
    >
      {/* =====================================================
          GLOBAL ATMOSPHERE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
          overflow-hidden
        "
      >
        {/* Top light */}

        <div
          className="
            absolute
            left-1/2
            top-[-220px]
            h-[720px]
            w-[720px]
            -translate-x-1/2
            rounded-full
            bg-[#D6B25E]/[0.035]
            blur-[180px]
          "
        />

        {/* Right light */}

        <div
          className="
            absolute
            right-[-320px]
            top-[30%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#D6B25E]/[0.018]
            blur-[180px]
          "
        />

        {/* Bottom violet atmosphere */}

        <div
          className="
            absolute
            bottom-[-300px]
            left-[-300px]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#8B5CF6]/[0.012]
            blur-[180px]
          "
        />

        {/* Very subtle vertical light */}

        <div
          className="
            absolute
            left-1/2
            top-[55%]
            h-[500px]
            w-px
            -translate-x-1/2
            bg-[#D6B25E]/[0.025]
            blur-[20px]
          "
        />
      </div>

      {/* =====================================================
          CINEMATIC WELCOME
      ====================================================== */}

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
            {/* Main cinematic glow */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.45,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 2.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[650px]
                w-[950px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#D6B25E]/[0.035]
                blur-[180px]
              "
            />

            {/* Secondary glow */}

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
                delay: 0.35,
                duration: 2.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[42%]
                h-[350px]
                w-[600px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-white/[0.012]
                blur-[130px]
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

      {/* =====================================================
          DASHBOARD
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: showWelcome ? 0 : 1,
        }}
        transition={{
          duration: 1.15,
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
        {/* =================================================
            HEADER
        ================================================== */}

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
          {/* SOULMIRROR */}

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
                group-hover:opacity-70
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
                group-hover:text-white/45
              "
            >
              Personal Intelligence
            </p>
          </button>

          {/* USER */}

          <div
            className="
              flex
              items-center
              gap-4
              sm:gap-7
            "
          >
            {/* NAME */}

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
                  group-hover:tracking-[0.36em]
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
                transition-all
                duration-500
                hover:text-[#D6B25E]
                hover:tracking-[0.36em]
              "
            >
              Settings
            </button>
          </div>
        </header>

        {/* =================================================
            INTRO
        ================================================== */}

        <section
          className="
            relative
            flex
            min-h-[60vh]
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
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
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
              y: 45,
              filter: "blur(14px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              delay: 0.1,
              duration: 1.15,
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
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              delay: 0.25,
              duration: 0.9,
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

          {/* subtle scroll indicator */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: showWelcome ? 0 : 1,
            }}
            transition={{
              delay: 1.4,
              duration: 1,
            }}
            className="
              absolute
              bottom-8
              left-0
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-px
                w-10
                bg-gradient-to-r
                from-[#D6B25E]/60
                to-transparent
              "
            />

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.4em]
                text-white/20
              "
            >
              Explore
            </span>
          </motion.div>
        </section>

        {/* =================================================
            CURRENT STATE
        ================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 70,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
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
        </motion.section>

        {/* =================================================
            EXPLORE
        ================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 70,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
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
        </motion.section>

        {/* =================================================
            JOURNEY
        ================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 70,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
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
        </motion.section>

        {/* =================================================
            USAGE
        ================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 60,
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
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            border-t
            border-white/[0.06]
            py-20
            sm:py-24
          "
        >
          <UsagePanel usage={usage} />
        </motion.section>

        {/* =================================================
            PRO
        ================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 70,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            border-t
            border-white/[0.06]
            py-24
            sm:py-32
          "
        >
          <PremiumPanel />
        </motion.section>

        {/* =================================================
            FOOTER
        ================================================== */}

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
                transition-all
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
                  transition-all
                  duration-500
                  hover:text-[#D6B25E]
                  hover:tracking-[0.36em]
                "
              >
                Settings
              </button>

              <button
                type="button"
                onClick={handleLogout}
                className="
                  cursor-pointer
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-white/25
                  transition-all
                  duration-500
                  hover:text-[#D6B25E]
                  hover:tracking-[0.36em]
                "
              >
                Logout
              </button>
            </div>
          </div>
        </footer>
      </motion.div>

      {/* =====================================================
          PLANS MODAL
      ====================================================== */}

      <AnimatePresence>
        {showPlans && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              fixed
              inset-0
              z-[200]
              flex
              items-center
              justify-center
              overflow-y-auto
              bg-black/70
              px-5
              py-10
              backdrop-blur-xl
            "
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setShowPlans(false);
              }
            }}
          >
            {/* Modal */}

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
                y: 25,
                scale: 0.97,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative
                w-full
                max-w-5xl
                overflow-hidden
                rounded-[32px]
                border
                border-white/[0.09]
                bg-[#0A0A0A]/95
                p-7
                shadow-[0_30px_120px_rgba(0,0,0,0.7)]
                backdrop-blur-2xl
                sm:p-10
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
                  blur-[150px]
                "
              />

              {/* Close */}

              <button
                type="button"
                onClick={() => setShowPlans(false)}
                aria-label="Close plans"
                className="
                  absolute
                  right-6
                  top-6
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
                  text-lg
                  text-white/35
                  transition-all
                  duration-500
                  hover:border-[#D6B25E]/30
                  hover:bg-[#D6B25E]/[0.06]
                  hover:text-[#D6B25E]
                "
              >
                ×
              </button>

              {/* Heading */}

              <div
                className="
                  relative
                  z-10
                  max-w-2xl
                "
              >
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
                    mt-4
                    font-[family:var(--font-cormorant)]
                    text-4xl
                    font-light
                    text-[#F4F1EA]
                    sm:text-5xl
                  "
                >
                  Choose your experience.
                </h2>

                <p
                  className="
                    mt-4
                    max-w-xl
                    text-sm
                    leading-7
                    text-white/40
                  "
                >
                  Go deeper into your inner world with
                  more intelligence, memory and
                  reflection.
                </p>
              </div>

              {/* Plans */}

              <div
                className="
                  relative
                  z-10
                  mt-10
                  grid
                  gap-4
                  md:grid-cols-3
                "
              >
                {/* FREE */}

                <PlanCard
                  name="Free"
                  eyebrow="Begin"
                  price="$0"
                  description="A quiet introduction to SoulMirror."
                  features={[
                    "Soul Scan",
                    "Dream Analysis",
                    "Tarot reflection",
                    "Personal memory",
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
                  price="$4"
                  description="A deeper experience when you need it."
                  features={[
                    "Extended intelligence",
                    "Deeper reflections",
                    "Dream analysis",
                    "Tarot sessions",
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
                  description="Your complete personal intelligence space."
                  features={[
                    "Unlimited intelligence",
                    "Long-term memory",
                    "Advanced reflections",
                    "Full SoulMirror experience",
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
                  relative
                  z-10
                  mt-8
                  flex
                  items-center
                  justify-center
                "
              >
                <p
                  className="
                    text-center
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    text-white/20
                  "
                >
                  Your journey remains yours.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

/*
 * =========================================================
 * PLAN CARD
 * =========================================================
 */

function PlanCard({
  name,
  eyebrow,
  price,
  description,
  features,
  current,
  featured = false,
  onSelect,
}: {
  name: string;
  eyebrow: string;
  price: string;
  description: string;
  features: string[];
  current: boolean;
  featured?: boolean;
  onSelect: () => void;
}) {
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
        rounded-[26px]
        border
        p-6
        transition-all
        duration-500
        ${
          featured
            ? "border-[#D6B25E]/25 bg-[#D6B25E]/[0.055]"
            : "border-white/[0.08] bg-white/[0.018]"
        }
      `}
    >
      {/* Hover glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-40
          w-40
          rounded-full
          bg-[#D6B25E]/[0.045]
          opacity-0
          blur-[70px]
          transition-opacity
          duration-700
          group-hover:opacity-100
        "
      />

      {/* Featured */}

      {featured && (
        <div
          className="
            absolute
            right-5
            top-5
            rounded-full
            border
            border-[#D6B25E]/20
            bg-[#D6B25E]/[0.06]
            px-3
            py-1
          "
        >
          <span
            className="
              text-[7px]
              uppercase
              tracking-[0.3em]
              text-[#D6B25E]
            "
          >
            Recommended
          </span>
        </div>
      )}

      {/* Content */}

      <div className="relative z-10">
        <p
          className="
            text-[8px]
            uppercase
            tracking-[0.4em]
            text-white/25
          "
        >
          {eyebrow}
        </p>

        <h3
          className="
            mt-3
            font-[family:var(--font-cormorant)]
            text-3xl
            font-light
            text-[#F4F1EA]
          "
        >
          {name}
        </h3>

        <div className="mt-5 flex items-baseline gap-2">
          <span
            className="
              font-[family:var(--font-cormorant)]
              text-4xl
              font-light
              text-[#D6B25E]
            "
          >
            {price}
          </span>

          {price !== "$0" && (
            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-white/25
              "
            >
              USD
            </span>
          )}
        </div>

        <p
          className="
            mt-4
            min-h-[48px]
            text-xs
            leading-6
            text-white/35
          "
        >
          {description}
        </p>

        {/* Features */}

        <div className="mt-7 space-y-3">
          {features.map((feature) => (
            <div
              key={feature}
              className="
                flex
                items-center
                gap-3
                text-xs
                text-white/45
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
          onClick={onSelect}
          className={`
            mt-8
            flex
            h-12
            w-full
            cursor-pointer
            items-center
            justify-center
            rounded-2xl
            border
            text-[9px]
            uppercase
            tracking-[0.3em]
            transition-all
            duration-500
            ${
              current
                ? "border-[#D6B25E]/20 bg-[#D6B25E]/[0.06] text-[#D6B25E]"
                : "border-white/[0.08] bg-white/[0.025] text-white/40 hover:border-[#D6B25E]/25 hover:bg-[#D6B25E]/[0.05] hover:text-[#D6B25E]"
            }
          `}
        >
          {current
            ? "Current plan"
            : name === "Free"
              ? "Continue"
              : "Choose plan"}
        </button>
      </div>
    </motion.div>
  );
}