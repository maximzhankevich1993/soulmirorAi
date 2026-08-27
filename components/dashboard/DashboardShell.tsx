"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
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

export function DashboardShell({
  usage,
}: DashboardShellProps) {
  const router = useRouter();

  const [showWelcome, setShowWelcome] = useState(true);
  const [closingWelcome, setClosingWelcome] = useState(false);

  const [userName, setUserName] = useState("there");
  const [userPlan, setUserPlan] = useState<UserPlan>("free");

  const [showPlans, setShowPlans] = useState(false);

  /*
   * =========================================================
   * CINEMATIC PAGE SCROLL
   * =========================================================
   */

  const { scrollY } = useScroll();

  const backgroundY = useTransform(
    scrollY,
    [0, 1800],
    [0, -140]
  );

  const backgroundScale = useTransform(
    scrollY,
    [0, 1800],
    [1, 1.08]
  );

  /*
   * =========================================================
   * LOAD USER
   * =========================================================
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

        /*
         * Load current plan.
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
   * =========================================================
   * WELCOME SCREEN
   * =========================================================
   */

  useEffect(() => {
    const closeTimer = window.setTimeout(() => {
      setClosingWelcome(true);
    }, 3200);

    const removeTimer = window.setTimeout(() => {
      setShowWelcome(false);
    }, 4200);

    return () => {
      window.clearTimeout(closeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  /*
   * =========================================================
   * LOCK BODY WHEN PLANS MODAL IS OPEN
   * =========================================================
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
   * =========================================================
   * ESCAPE TO CLOSE MODAL
   * =========================================================
   */

  useEffect(() => {
    if (!showPlans) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setShowPlans(false);
      }
    }

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
   * =========================================================
   * PLAN LABEL
   * =========================================================
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
        overflow-x-hidden
        bg-[#050505]
        text-[#F4F1EA]
        selection:bg-[#D6B25E]/20
        selection:text-[#F4F1EA]
      "
    >
      {/* =====================================================
          GLOBAL ATMOSPHERE
      ====================================================== */}

      <motion.div
        style={{
          y: backgroundY,
          scale: backgroundScale,
        }}
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
          overflow-hidden
        "
      >
        {/* Primary light */}

        <div
          className="
            absolute
            left-1/2
            top-[-260px]
            h-[760px]
            w-[760px]
            -translate-x-1/2
            rounded-full
            bg-[#D6B25E]/[0.035]
            blur-[190px]
          "
        />

        {/* Secondary light */}

        <div
          className="
            absolute
            right-[-320px]
            top-[30%]
            h-[680px]
            w-[680px]
            rounded-full
            bg-[#D6B25E]/[0.018]
            blur-[190px]
          "
        />

        {/* Bottom atmosphere */}

        <div
          className="
            absolute
            bottom-[-320px]
            left-[-280px]
            h-[680px]
            w-[680px]
            rounded-full
            bg-[#8B5CF6]/[0.012]
            blur-[200px]
          "
        />
      </motion.div>

      {/* =====================================================
          SUBTLE GRAIN
      ====================================================== */}

      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-[1]
          opacity-[0.025]
        "
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E\")",
        }}
      />

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
            {/* Main glow */}

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
                  max-w-[1100px]
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

      {/* =====================================================
          MAIN SPACE
      ====================================================== */}

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
        {/* ===================================================
            HEADER
        ==================================================== */}

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
                group-hover:text-white/40
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
                  transition-opacity
                  duration-500
                  group-hover:opacity-70
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
                hidden
                cursor-pointer
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-white/30
                outline-none
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

        {/* ===================================================
            INTRO
        ==================================================== */}

        <CinematicSection className="min-h-[70vh]">
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
              margin: "-15%",
            }}
            transition={{
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
              y: 40,
              filter: "blur(12px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              margin: "-15%",
            }}
            transition={{
              delay: 0.1,
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              mt-6
              max-w-6xl
              font-[family:var(--font-cormorant)]
              text-5xl
              font-light
              leading-[1.03]
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            Understand yourself.
            <br />
            <span className="text-white/25">
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
              margin: "-15%",
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

          <motion.div
            initial={{
              opacity: 0,
              width: 0,
            }}
            whileInView={{
              opacity: 1,
              width: 120,
            }}
            viewport={{
              once: true,
              margin: "-15%",
            }}
            transition={{
              delay: 0.45,
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              mt-14
              h-px
              bg-gradient-to-r
              from-[#D6B25E]/50
              to-transparent
            "
          />
        </CinematicSection>

        {/* ===================================================
            CURRENT STATE
        ==================================================== */}

        <CinematicSection>
          <SectionHeading
            eyebrow="Current state"
            title="Your consciousness"
            description="A living reflection of your current inner state."
          />

          <div className="mt-14">
            <SoulOrbPanel />
          </div>
        </CinematicSection>

        {/* ===================================================
            EXPLORE
        ==================================================== */}

        <CinematicSection>
          <SectionHeading
            eyebrow="Explore yourself"
            title="Your intelligence tools"
            description="Explore the different dimensions of your inner world."
          />

          <div className="mt-14">
            <IntelligenceModules />
          </div>
        </CinematicSection>

        {/* ===================================================
            JOURNEY
        ==================================================== */}

        <CinematicSection>
          <SectionHeading
            eyebrow="Your journey"
            title="A memory of becoming"
            description="Your experiences gradually become part of a deeper personal memory."
          />

          <div className="mt-14">
            <EvolutionTimeline />
          </div>
        </CinematicSection>

        {/* ===================================================
            USAGE
        ==================================================== */}

        <CinematicSection>
          <SectionHeading
            eyebrow="Your access"
            title="Available today"
            description="Your current access to SoulMirror intelligence."
          />

          <div className="mt-14">
            <UsagePanel usage={usage} />
          </div>
        </CinematicSection>

        {/* ===================================================
            PRO
        ==================================================== */}

        <CinematicSection>
          <PremiumPanel />
        </CinematicSection>

        {/* ===================================================
            FOOTER
        ==================================================== */}

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
                outline-none
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
                onClick={() => router.push("/settings")}
                className="
                  cursor-pointer
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-white/25
                  outline-none
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
                  outline-none
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

      {/* =====================================================
          PLANS MODAL
      ====================================================== */}

      <PlansModal
        open={showPlans}
        currentPlan={userPlan}
        onClose={() => setShowPlans(false)}
      />
    </main>
  );
}

/*
 * ===========================================================
 * CINEMATIC SECTION
 * ===========================================================
 */

function CinematicSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`
        relative
        border-t
        border-white/[0.06]
        py-24
        sm:py-32
        ${className}
      `}
    >
      {children}
    </section>
  );
}

/*
 * ===========================================================
 * SECTION HEADING
 * ===========================================================
 */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        margin: "-15%",
      }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <p
        className="
          text-[10px]
          uppercase
          tracking-[0.5em]
          text-[#D6B25E]
        "
      >
        {eyebrow}
      </p>

      <h3
        className="
          mt-4
          font-[family:var(--font-cormorant)]
          text-4xl
          font-light
          leading-tight
          sm:text-5xl
          md:text-6xl
        "
      >
        {title}
      </h3>

      {description && (
        <p
          className="
            mt-5
            max-w-xl
            text-sm
            leading-7
            text-white/35
          "
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

/*
 * ===========================================================
 * PLANS MODAL
 * ===========================================================
 */

function PlansModal({
  open,
  currentPlan,
  onClose,
}: {
  open: boolean;
  currentPlan: UserPlan;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
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
          className="
            fixed
            inset-0
            z-[200]
            flex
            items-center
            justify-center
            overflow-y-auto
            bg-[#050505]/80
            px-5
            py-10
            backdrop-blur-2xl
            sm:px-8
          "
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          {/* Atmosphere */}

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
              scale: 0.8,
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
              bg-[#D6B25E]/[0.025]
              blur-[180px]
            "
          />

          {/* Modal */}

          <motion.div
            initial={{
              opacity: 0,
              y: 45,
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
              bg-[#0a0a0a]/95
              shadow-[0_40px_120px_rgba(0,0,0,0.65)]
            "
          >
            {/* Modal top */}

            <div
              className="
                flex
                items-start
                justify-between
                border-b
                border-white/[0.06]
                px-6
                py-7
                sm:px-10
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
                    sm:text-5xl
                  "
                >
                  Choose your depth.
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
                  Go deeper into your personal
                  intelligence and continue exploring
                  yourself.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close plans"
                className="
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
                  outline-none
                  transition-all
                  duration-500
                  hover:border-[#D6B25E]/30
                  hover:bg-[#D6B25E]/[0.06]
                  hover:text-[#D6B25E]
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
                gap-px
                bg-white/[0.05]
                md:grid-cols-3
              "
            >
              <PlanOption
                name="Free"
                eyebrow="Begin"
                price="$0"
                description="A quiet introduction to your inner world."
                features={[
                  "Soul Scan",
                  "Dream Analysis",
                  "Tarot reflections",
                  "Personal memory",
                ]}
                current={currentPlan === "free"}
              />

              <PlanOption
                name="Day Pass"
                eyebrow="Go deeper"
                price="One day"
                description="Full access when you want to explore without commitment."
                features={[
                  "Expanded intelligence",
                  "Deeper reflections",
                  "Dream intelligence",
                  "Full daily access",
                ]}
                current={currentPlan === "day"}
                featured
              />

              <PlanOption
                name="Pro"
                eyebrow="Continuous"
                price="$19"
                description="A continuously evolving intelligence built around you."
                features={[
                  "Unlimited exploration",
                  "Long-term memory",
                  "Advanced reflections",
                  "Full SoulMirror experience",
                ]}
                current={currentPlan === "pro"}
              />
            </div>

            {/* Bottom */}

            <div
              className="
                flex
                flex-col
                gap-4
                border-t
                border-white/[0.06]
                px-6
                py-6
                sm:flex-row
                sm:items-center
                sm:justify-between
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
                Your current plan:{" "}
                <span className="text-[#D6B25E]">
                  {currentPlan === "pro"
                    ? "Pro"
                    : currentPlan === "day"
                      ? "Day Pass"
                      : "Free"}
                </span>
              </p>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  routerSafePush("/settings");
                }}
                className="
                  cursor-pointer
                  text-[9px]
                  uppercase
                  tracking-[0.35em]
                  text-white/35
                  outline-none
                  transition-colors
                  duration-500
                  hover:text-[#D6B25E]
                "
              >
                Manage subscription
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/*
 * ===========================================================
 * PLAN OPTION
 * ===========================================================
 */

function PlanOption({
  name,
  eyebrow,
  price,
  description,
  features,
  current,
  featured = false,
}: {
  name: string;
  eyebrow: string;
  price: string;
  description: string;
  features: string[];
  current: boolean;
  featured?: boolean;
}) {
  return (
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
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`
        relative
        bg-[#090909]
        p-7
        sm:p-9
        ${
          featured
            ? "bg-[#D6B25E]/[0.025]"
            : ""
        }
      `}
    >
      {featured && (
        <div
          className="
            absolute
            right-6
            top-6
            text-[8px]
            uppercase
            tracking-[0.35em]
            text-[#D6B25E]
          "
        >
          Recommended
        </div>
      )}

      <p
        className="
          text-[9px]
          uppercase
          tracking-[0.4em]
          text-white/25
        "
      >
        {eyebrow}
      </p>

      <h3
        className="
          mt-5
          font-[family:var(--font-cormorant)]
          text-4xl
          font-light
          text-[#F4F1EA]
        "
      >
        {name}
      </h3>

      <p
        className="
          mt-3
          text-2xl
          font-light
          text-[#D6B25E]
        "
      >
        {price}
      </p>

      <p
        className="
          mt-5
          min-h-[56px]
          text-sm
          leading-6
          text-white/35
        "
      >
        {description}
      </p>

      <div
        className="
          my-7
          h-px
          bg-white/[0.06]
        "
      />

      <div className="space-y-3">
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

            {feature}
          </div>
        ))}
      </div>

      <div className="mt-8">
        {current ? (
          <div
            className="
              border
              border-[#D6B25E]/20
              bg-[#D6B25E]/[0.05]
              px-5
              py-3
              text-center
              text-[9px]
              uppercase
              tracking-[0.35em]
              text-[#D6B25E]
            "
          >
            Current plan
          </div>
        ) : (
          <button
            type="button"
            className="
              w-full
              cursor-pointer
              border
              border-white/[0.08]
              bg-white/[0.025]
              px-5
              py-3
              text-[9px]
              uppercase
              tracking-[0.35em]
              text-white/45
              outline-none
              transition-all
              duration-500
              hover:border-[#D6B25E]/30
              hover:bg-[#D6B25E]/[0.06]
              hover:text-[#D6B25E]
            "
          >
            Explore plan
          </button>
        )}
      </div>
    </motion.div>
  );
}

/*
 * ===========================================================
 * SMALL HELPER
 * ===========================================================
 *
 * We keep navigation outside the modal's props so the modal
 * stays visually self-contained.
 */

function routerSafePush(path: string) {
  window.location.href = path;
}