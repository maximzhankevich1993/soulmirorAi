"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  ArrowUpRight,
  LogOut,
  Settings,
  Sparkles,
} from "lucide-react";

import { supabase } from "../../src/lib/supabaseClient";

import { IdentityHeader } from "./IdentityHeader";
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

export function DashboardShell({
  usage,
}: DashboardShellProps) {
  const router = useRouter();

  const [showWelcome, setShowWelcome] = useState(true);
  const [userName, setUserName] = useState("there");
  const [closingWelcome, setClosingWelcome] = useState(false);

  /*
   * =====================================================
   * LOAD USER
   * =====================================================
   */

  useEffect(() => {
    async function loadUser() {
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
    }

    loadUser();
  }, [router]);

  /*
   * =====================================================
   * CINEMATIC INTRO
   * =====================================================
   */

  useEffect(() => {
    const closeTimer = window.setTimeout(() => {
      setClosingWelcome(true);
    }, 3000);

    const removeTimer = window.setTimeout(() => {
      setShowWelcome(false);
    }, 3900);

    return () => {
      window.clearTimeout(closeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  /*
   * =====================================================
   * LOGOUT
   * =====================================================
   */

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/login");
    router.refresh();
  }

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
        <div
          className="
            absolute
            left-[15%]
            top-[-250px]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#D6B25E]/[0.025]
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            right-[-300px]
            top-[25%]
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
            left-[30%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#8B5CF6]/[0.012]
            blur-[180px]
          "
        />

        {/* subtle vertical light */}

        <div
          className="
            absolute
            left-1/2
            top-0
            h-full
            w-px
            -translate-x-1/2
            bg-gradient-to-b
            from-[#D6B25E]/[0.025]
            via-transparent
            to-transparent
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
              scale: closingWelcome ? 1.02 : 1,
              filter: closingWelcome
                ? "blur(16px)"
                : "blur(0px)",
            }}
            transition={{
              duration: 0.9,
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
            {/* Intro glow */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.65,
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
                bg-[#D6B25E]/[0.03]
                blur-[190px]
              "
            />

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

              <motion.div
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
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
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
                    shadow-[0_0_12px_rgba(214,178,94,0.8)]
                  "
                />

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.7em]
                    text-[#D6B25E]
                  "
                >
                  SoulMirror
                </span>

                <span
                  className="
                    h-1
                    w-1
                    rounded-full
                    bg-[#D6B25E]
                    shadow-[0_0_12px_rgba(214,178,94,0.8)]
                  "
                />
              </motion.div>

              {/* Divider */}

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
                  delay: 0.45,
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  mt-8
                  h-px
                  w-16
                  origin-center
                  bg-gradient-to-r
                  from-transparent
                  via-[#D6B25E]/50
                  to-transparent
                "
              />

              {/* Welcome */}

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 32,
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
                  max-w-4xl
                  font-[family:var(--font-cormorant)]
                  text-5xl
                  font-light
                  leading-[0.95]
                  tracking-[-0.02em]
                  text-[#F4F1EA]
                  sm:text-6xl
                  md:text-7xl
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
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  delay: 1,
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  mt-6
                  text-xs
                  uppercase
                  tracking-[0.35em]
                  text-white/25
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
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#D6B25E]
                    shadow-[0_0_12px_rgba(214,178,94,0.7)]
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
                  Intelligence online
                </span>
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
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          pb-28
          sm:px-8
          lg:px-12
        "
      >
        {/* =================================================
            TOP NAVIGATION
        ================================================== */}

        <header
          className="
            flex
            h-20
            items-center
            justify-between
            border-b
            border-white/[0.06]
          "
        >
          {/* Logo */}

          <button
            type="button"
            onClick={() => window.scrollTo({
              top: 0,
              behavior: "smooth",
            })}
            className="
              group
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                relative
                flex
                h-7
                w-7
                items-center
                justify-center
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-[#D6B25E]/40
                  transition-transform
                  duration-700
                  group-hover:scale-125
                "
              />

              <span
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-[#D6B25E]
                  shadow-[0_0_10px_rgba(214,178,94,0.8)]
                "
              />
            </span>

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.5em]
                text-[#F4F1EA]
              "
            >
              SoulMirror
            </span>
          </button>

          {/* Navigation */}

          <nav
            className="
              hidden
              items-center
              gap-8
              md:flex
            "
          >
            <DashboardNavItem
              label="Overview"
              active
            />

            <DashboardNavItem label="Journey" />

            <DashboardNavItem label="Intelligence" />

            <DashboardNavItem label="Profile" />
          </nav>

          {/* Actions */}

          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <button
              type="button"
              onClick={() => router.push("/settings")}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/[0.07]
                bg-white/[0.02]
                text-white/40
                transition-all
                duration-500
                hover:border-[#D6B25E]/25
                hover:bg-[#D6B25E]/[0.05]
                hover:text-[#D6B25E]
              "
              aria-label="Settings"
            >
              <Settings size={15} />
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="
                hidden
                h-10
                items-center
                gap-2
                rounded-full
                border
                border-white/[0.07]
                bg-white/[0.02]
                px-4
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-white/35
                transition-all
                duration-500
                hover:border-white/[0.14]
                hover:text-white/70
                sm:flex
              "
            >
              <LogOut size={13} />
              Logout
            </button>
          </div>
        </header>

        {/* =================================================
            PAGE INTRO
        ================================================== */}

        <section
          className="
            grid
            gap-10
            pb-10
            pt-14
            lg:grid-cols-[1fr_auto]
            lg:items-end
            lg:pt-20
          "
        >
          <div>
            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.1,
                duration: 0.7,
              }}
              className="
                flex
                items-center
                gap-3
                text-[9px]
                uppercase
                tracking-[0.45em]
                text-[#D6B25E]
              "
            >
              <Sparkles size={12} />
              Personal intelligence
            </motion.p>

            <motion.h2
              initial={{
                opacity: 0,
                y: 25,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                delay: 0.2,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mt-5
                max-w-3xl
                font-[family:var(--font-cormorant)]
                text-5xl
                font-light
                leading-[0.95]
                tracking-[-0.025em]
                text-[#F4F1EA]
                sm:text-6xl
              "
            >
              Your inner world,
              <br />
              <span className="text-white/35">
                continuously evolving.
              </span>
            </motion.h2>
          </div>

          <motion.button
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.35,
              duration: 0.7,
            }}
            type="button"
            onClick={() => router.push("/soul-scan")}
            className="
              group
              flex
              w-fit
              items-center
              gap-3
              rounded-full
              border
              border-[#D6B25E]/20
              bg-[#D6B25E]/[0.06]
              px-5
              py-3
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-[#D6B25E]
              transition-all
              duration-500
              hover:border-[#D6B25E]/40
              hover:bg-[#D6B25E]/[0.1]
            "
          >
            New Soul Scan

            <ArrowUpRight
              size={14}
              className="
                transition-transform
                duration-500
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </motion.button>
        </section>

        {/* =================================================
            IDENTITY
        ================================================== */}

        <DashboardSection delay={0.15}>
          <IdentityHeader />
        </DashboardSection>

        {/* =================================================
            SOUL ORB / CURRENT STATE
        ================================================== */}

        <DashboardSection delay={0.22}>
          <SoulOrbPanel />
        </DashboardSection>

        {/* =================================================
            USAGE
        ================================================== */}

        <DashboardSection delay={0.29}>
          <UsagePanel usage={usage} />
        </DashboardSection>

        {/* =================================================
            INTELLIGENCE
        ================================================== */}

        <DashboardSection delay={0.36}>
          <IntelligenceModules />
        </DashboardSection>

        {/* =================================================
            JOURNEY
        ================================================== */}

        <DashboardSection delay={0.43}>
          <EvolutionTimeline />
        </DashboardSection>

        {/* =================================================
            PREMIUM
        ================================================== */}

        <DashboardSection delay={0.5}>
          <PremiumPanel />
        </DashboardSection>

        {/* =================================================
            FOOTER
        ================================================== */}

        <footer
          className="
            mt-24
            flex
            flex-col
            gap-4
            border-t
            border-white/[0.06]
            pt-8
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.35em]
              text-white/20
            "
          >
            SoulMirror · EON AI
          </p>

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
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-white/20
                transition-colors
                hover:text-[#D6B25E]
              "
            >
              Settings
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-white/20
                transition-colors
                hover:text-white/60
              "
            >
              Sign out
            </button>
          </div>
        </footer>
      </motion.div>
    </main>
  );
}

/*
 * =========================================================
 * DASHBOARD SECTION
 * =========================================================
 */

function DashboardSection({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay,
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="mt-14 sm:mt-20"
    >
      {children}
    </motion.section>
  );
}

/*
 * =========================================================
 * NAV ITEM
 * =========================================================
 */

function DashboardNavItem({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={`
        relative
        py-2
        text-[9px]
        uppercase
        tracking-[0.3em]
        transition-colors
        duration-500
        ${
          active
            ? "text-[#F4F1EA]"
            : "text-white/30 hover:text-white/65"
        }
      `}
    >
      {label}

      {active && (
        <span
          className="
            absolute
            -bottom-1
            left-1/2
            h-px
            w-5
            -translate-x-1/2
            bg-[#D6B25E]
          "
        />
      )}
    </button>
  );
}