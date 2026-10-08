"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

import { supabase } from "@/lib/supabase/client";

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

  const [showWelcome, setShowWelcome] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    return (
      sessionStorage.getItem(
        "soulmirror_welcome_seen"
      ) !== "true"
    );
  });

  const [userName, setUserName] = useState("there");
  const [userPlan] = useState<UserPlan>("free");
  const [closingWelcome, setClosingWelcome] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /*
   * =========================================
   * LOAD USER
   * =========================================
   */

  useEffect(() => {
    let mounted = true;

    async function loadUser() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          router.replace("/login");
          return;
        }

        if (!mounted) return;

        const metadataName =
          user.user_metadata?.name ||
          user.user_metadata?.full_name ||
          "";

        const firstName =
          metadataName.trim().split(" ")[0] ||
          user.email?.split("@")[0] ||
          "there";

        setUserName(firstName);
      } catch (error) {
        console.error(
          "Failed to load dashboard user:",
          error
        );
      }
    }

    loadUser();

    return () => {
      mounted = false;
    };
  }, [router]);

  /*
   * =========================================
   * WELCOME SCREEN
   * =========================================
   *
   * Welcome is shown only once per browser session.
   *
   * No animated blur/filter here.
   * Blur animations are expensive on mobile GPUs.
   */

  useEffect(() => {
    if (!showWelcome) {
      return;
    }

    sessionStorage.setItem(
      "soulmirror_welcome_seen",
      "true"
    );

    const closeTimer = window.setTimeout(() => {
      setClosingWelcome(true);

      const removeTimer = window.setTimeout(() => {
        setShowWelcome(false);
      }, 700);

      return () => {
        window.clearTimeout(removeTimer);
      };
    }, 3000);

    return () => {
      window.clearTimeout(closeTimer);
    };
  }, [showWelcome]);

  /*
   * =========================================
   * CLOSE MOBILE MENU
   * =========================================
   */

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [mobileMenuOpen]);

  /*
   * =========================================
   * NAVIGATION HELPERS
   * =========================================
   */

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    closeMobileMenu();

    window.setTimeout(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  };

  const navigate = (path: string) => {
    closeMobileMenu();
    router.push(path);
  };

  const handleLogout = async () => {
    closeMobileMenu();

    await supabase.auth.signOut();

    router.push("/");
    router.refresh();
  };

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
        <div
          className="
            absolute
            left-1/2
            top-[-140px]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-[#D6B25E]/[0.035]
            blur-[120px]
            sm:top-[-180px]
            sm:h-[700px]
            sm:w-[700px]
            sm:blur-[150px]
          "
        />

        <div
          className="
            absolute
            right-[-260px]
            top-[35%]
            hidden
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#D6B25E]/[0.018]
            blur-[150px]
            sm:block
          "
        />

        <div
          className="
            absolute
            bottom-[-250px]
            left-[-220px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#8B5CF6]/[0.012]
            blur-[140px]
            sm:bottom-[-300px]
            sm:left-[-250px]
            sm:h-[600px]
            sm:w-[600px]
            sm:blur-[150px]
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
            }}
            transition={{
              duration: 0.7,
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
            {/* Static glow — no animated blur */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[500px]
                w-[700px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#D6B25E]/[0.035]
                blur-[120px]
                sm:h-[650px]
                sm:w-[900px]
                sm:blur-[150px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[42%]
                h-[280px]
                w-[430px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-white/[0.012]
                blur-[80px]
                sm:h-[350px]
                sm:w-[550px]
                sm:blur-[100px]
              "
            />

            <div
              className="
                relative
                z-10
                flex
                flex-col
                items-center
                px-5
                text-center
                sm:px-6
              "
            >
              <motion.p
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.6em]
                  text-[#D6B25E]
                  sm:text-[11px]
                  sm:tracking-[0.7em]
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
                  delay: 0.25,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  mt-6
                  h-px
                  w-16
                  origin-center
                  bg-gradient-to-r
                  from-transparent
                  via-[#D6B25E]/50
                  to-transparent
                  sm:mt-7
                  sm:w-20
                "
              />

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  mt-6
                  max-w-[900px]
                  font-[family:var(--font-cormorant)]
                  text-[2.65rem]
                  font-light
                  leading-[1.05]
                  text-[#F4F1EA]
                  sm:mt-8
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
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.65,
                  duration: 0.8,
                }}
                className="
                  mt-5
                  text-xs
                  tracking-wide
                  text-white/35
                  sm:mt-6
                  sm:text-sm
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
                  delay: 0.9,
                  duration: 0.8,
                }}
                className="
                  mt-8
                  flex
                  items-center
                  gap-3
                  sm:mt-12
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
                    text-[7px]
                    uppercase
                    tracking-[0.4em]
                    text-white/20
                    sm:text-[8px]
                    sm:tracking-[0.45em]
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

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1400px]
          px-4
          pb-20
          pt-5
          sm:px-8
          sm:pb-32
          sm:pt-8
          lg:px-12
        "
      >
        {/* =========================================
            HEADER
        ========================================== */}

        <header
          className="
            relative
            flex
            items-center
            justify-between
            border-b
            border-white/[0.06]
            pb-4
            sm:pb-6
          "
        >
          {/* DESKTOP BRAND */}

          <button
            type="button"
            onClick={() => router.push("/")}
            className="
              group
              hidden
              cursor-pointer
              text-left
              outline-none
              sm:block
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

          {/* MOBILE BRAND */}

          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="
              flex
              cursor-pointer
              flex-col
              text-left
              outline-none
              sm:hidden
            "
          >
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.45em]
                text-[#D6B25E]
              "
            >
              SoulMirror
            </p>

            <p
              className="
                mt-1.5
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-white/25
              "
            >
              Dashboard
            </p>
          </button>

          {/* DESKTOP USER AREA */}

          <div
            className="
              hidden
              items-center
              gap-4
              sm:flex
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
                md:block
              "
            />

            <button
              type="button"
              onClick={() => scrollToSection("plans")}
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

            <button
              type="button"
              onClick={() => router.push("/settings")}
              className="
                cursor-pointer
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-white/30
                outline-none
                transition-colors
                duration-500
                hover:text-[#D6B25E]
              "
            >
              Settings
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            onClick={() =>
              setMobileMenuOpen((value) => !value)
            }
            aria-label={
              mobileMenuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={mobileMenuOpen}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              border
              border-white/[0.08]
              text-white/60
              outline-none
              transition-colors
              duration-300
              active:text-[#D6B25E]
              sm:hidden
            "
          >
            {mobileMenuOpen ? (
              <X size={17} strokeWidth={1.5} />
            ) : (
              <Menu size={17} strokeWidth={1.5} />
            )}
          </button>

          {/* =========================================
              MOBILE MENU
          ========================================== */}

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -6,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -6,
                }}
                transition={{
                  duration: 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  absolute
                  left-0
                  right-0
                  top-full
                  z-50
                  border-b
                  border-white/[0.08]
                  bg-[#050505]/[0.97]
                  backdrop-blur-xl
                  sm:hidden
                "
              >
                <div className="px-1 py-5">
                  <div className="px-4 pb-5">
                    <p
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.35em]
                        text-white/20
                      "
                    >
                      Personal space
                    </p>

                    <p
                      className="
                        mt-2
                        font-[family:var(--font-cormorant)]
                        text-2xl
                        font-light
                        text-[#F4F1EA]
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
                        text-[#D6B25E]/70
                      "
                    >
                      {planLabel}
                    </p>
                  </div>

                  <div
                    className="
                      mx-4
                      border-t
                      border-white/[0.06]
                    "
                  />

                  <nav className="py-3">
                    <button
                      type="button"
                      onClick={() =>
                        navigate("/dashboard")
                      }
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        px-4
                        py-3.5
                        text-left
                        text-[10px]
                        uppercase
                        tracking-[0.3em]
                        text-[#F4F1EA]
                        active:text-[#D6B25E]
                      "
                    >
                      <span>Dashboard</span>
                      <span className="text-white/20">
                        →
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        scrollToSection("intelligence")
                      }
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        px-4
                        py-3.5
                        text-left
                        text-[10px]
                        uppercase
                        tracking-[0.3em]
                        text-white/60
                        active:text-[#D6B25E]
                      "
                    >
                      <span>Intelligence</span>
                      <span className="text-white/20">
                        →
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        scrollToSection("journey")
                      }
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        px-4
                        py-3.5
                        text-left
                        text-[10px]
                        uppercase
                        tracking-[0.3em]
                        text-white/60
                        active:text-[#D6B25E]
                      "
                    >
                      <span>Journey</span>
                      <span className="text-white/20">
                        →
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        scrollToSection("plans")
                      }
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        px-4
                        py-3.5
                        text-left
                        text-[10px]
                        uppercase
                        tracking-[0.3em]
                        text-white/60
                        active:text-[#D6B25E]
                      "
                    >
                      <span>Plans</span>
                      <span className="text-white/20">
                        →
                      </span>
                    </button>
                  </nav>

                  <div
                    className="
                      mx-4
                      border-t
                      border-white/[0.06]
                    "
                  />

                  <div className="py-3">
                    <button
                      type="button"
                      onClick={() =>
                        navigate("/settings")
                      }
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        px-4
                        py-3.5
                        text-left
                        text-[10px]
                        uppercase
                        tracking-[0.3em]
                        text-white/45
                        active:text-[#D6B25E]
                      "
                    >
                      <span>Settings</span>
                      <span className="text-white/20">
                        →
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => navigate("/")}
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        px-4
                        py-3.5
                        text-left
                        text-[10px]
                        uppercase
                        tracking-[0.3em]
                        text-white/45
                        active:text-[#D6B25E]
                      "
                    >
                      <span>Home</span>
                      <span className="text-white/20">
                        →
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={handleLogout}
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        px-4
                        py-3.5
                        text-left
                        text-[10px]
                        uppercase
                        tracking-[0.3em]
                        text-white/30
                        active:text-[#D6B25E]
                      "
                    >
                      <span>Log out</span>
                      <span className="text-white/20">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* =========================================
            CINEMATIC INTRO
        ========================================== */}

        <section
          className="
            relative
            flex
            min-h-[58vh]
            flex-col
            justify-center
            overflow-hidden
            py-14
            sm:min-h-[78vh]
            sm:py-32
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              left-[42%]
              top-1/2
              h-[360px]
              w-[520px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#D6B25E]/[0.025]
              blur-[100px]
              sm:h-[500px]
              sm:w-[700px]
              sm:blur-[130px]
            "
          />

          <div className="relative z-10 max-w-6xl">
            <motion.div
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
                amount: 0.5,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                flex
                items-center
                gap-3
                sm:gap-4
              "
            >
              <span
                className="
                  h-px
                  w-8
                  bg-gradient-to-r
                  from-transparent
                  to-[#D6B25E]/60
                  sm:w-14
                "
              />

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.5em]
                  text-[#D6B25E]
                  sm:text-[10px]
                  sm:tracking-[0.55em]
                "
              >
                Your inner world
              </span>
            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.35,
              }}
              transition={{
                delay: 0.08,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mt-6
                max-w-5xl
                font-[family:var(--font-cormorant)]
                text-[2.65rem]
                font-light
                leading-[0.98]
                tracking-[-0.025em]
                text-[#F4F1EA]
                sm:mt-8
                sm:text-6xl
                md:text-7xl
                lg:text-[6.8rem]
              "
            >
              Understand yourself.
              <br />

              <span className="text-white/[0.24]">
                Evolve consciously.
              </span>
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.35,
              }}
              transition={{
                delay: 0.2,
                duration: 0.75,
              }}
              className="
                mt-6
                max-w-xl
                text-[13px]
                leading-6
                text-white/40
                sm:mt-9
                sm:text-[15px]
                sm:leading-8
              "
            >
              SoulMirror remembers your journey and
              helps you see patterns that are difficult
              to notice alone.
            </motion.p>

            <motion.div
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
                amount: 0.35,
              }}
              transition={{
                delay: 0.3,
                duration: 0.7,
              }}
              className="
                mt-8
                flex
                items-center
                gap-4
                sm:mt-12
                sm:gap-5
              "
            >
              <span
                className="
                  h-px
                  w-12
                  bg-white/[0.08]
                  sm:w-24
                "
              />

              <span
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.4em]
                  text-white/20
                  sm:text-[8px]
                  sm:tracking-[0.45em]
                "
              >
                A space for reflection
              </span>
            </motion.div>
          </div>

          <div
            className="
              absolute
              bottom-5
              left-0
              flex
              items-center
              gap-3
              sm:bottom-12
              sm:gap-4
            "
          >
            <span
              className="
                text-[7px]
                uppercase
                tracking-[0.35em]
                text-white/20
                sm:text-[8px]
                sm:tracking-[0.4em]
              "
            >
              Explore
            </span>

            <motion.span
              animate={{
                y: [0, 4, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                text-xs
                text-[#D6B25E]/60
              "
            >
              ↓
            </motion.span>
          </div>
        </section>

        {/* =========================================
            CURRENT STATE
        ========================================== */}

        <section
          id="current-state"
          className="
            border-t
            border-white/[0.06]
            py-14
            sm:py-32
          "
        >
          <div className="mb-8 sm:mb-12">
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.5em]
                text-[#D6B25E]
                sm:text-[10px]
              "
            >
              Current state
            </p>

            <h3
              className="
                mt-3
                font-[family:var(--font-cormorant)]
                text-[1.9rem]
                font-light
                sm:mt-4
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
          id="intelligence"
          className="
            scroll-mt-8
            border-t
            border-white/[0.06]
            py-14
            sm:py-32
          "
        >
          <div className="mb-9 sm:mb-14">
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.5em]
                text-[#D6B25E]
                sm:text-[10px]
              "
            >
              Explore yourself
            </p>

            <h3
              className="
                mt-3
                font-[family:var(--font-cormorant)]
                text-[1.9rem]
                font-light
                sm:mt-4
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
          id="journey"
          className="
            scroll-mt-8
            border-t
            border-white/[0.06]
            py-14
            sm:py-32
          "
        >
          <div className="mb-9 sm:mb-14">
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.5em]
                text-[#D6B25E]
                sm:text-[10px]
              "
            >
              Your journey
            </p>

            <h3
              className="
                mt-3
                font-[family:var(--font-cormorant)]
                text-[1.9rem]
                font-light
                sm:mt-4
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
            py-14
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
            py-14
            sm:py-32
          "
        >
          <PremiumPanel />
        </section>

        {/* =========================================
            FOOTER
        ========================================== */}

        <footer
          className="
            overflow-hidden
            border-t
            border-white/[0.06]
            pt-6
            sm:pt-8
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              gap-5
              text-center
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:text-left
            "
          >
            <button
              type="button"
              onClick={() => router.push("/")}
              className="
                w-full
                cursor-pointer
                text-center
                text-[8px]
                uppercase
                tracking-[0.32em]
                text-white/20
                outline-none
                transition-colors
                duration-500
                hover:text-[#D6B25E]
                sm:w-fit
                sm:text-left
                sm:text-[9px]
                sm:tracking-[0.4em]
              "
            >
              SOULMIRROR — PERSONAL INTELLIGENCE
            </button>

            <div
              className="
                flex
                w-full
                items-center
                justify-center
                gap-6
                sm:w-auto
              "
            >
              <button
                type="button"
                onClick={() => router.push("/settings")}
                className="
                  cursor-pointer
                  text-[8px]
                  uppercase
                  tracking-[0.28em]
                  text-white/25
                  outline-none
                  transition-colors
                  duration-500
                  hover:text-[#D6B25E]
                  sm:text-[9px]
                  sm:tracking-[0.3em]
                "
              >
                Settings
              </button>

              <button
                type="button"
                onClick={handleLogout}
                className="
                  cursor-pointer
                  text-[8px]
                  uppercase
                  tracking-[0.28em]
                  text-white/25
                  outline-none
                  transition-colors
                  duration-500
                  hover:text-[#D6B25E]
                  sm:text-[9px]
                  sm:tracking-[0.3em]
                "
              >
                Logout
              </button>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}