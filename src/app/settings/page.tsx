"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Check, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

import { supabase } from "../../lib/supabaseClient";

type UserPlan = "free" | "day" | "monthly" | "yearly";

const planLabels: Record<UserPlan, string> = {
  free: "Free",
  day: "Day",
  monthly: "Monthly",
  yearly: "Yearly",
};

const ease = [0.16, 1, 0.3, 1] as const;

export default function SettingsPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState<UserPlan>("free");

  const [name, setName] = useState("");
  const [saved, setSaved] = useState(false);

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
        setName(metadataName || firstName);
        setEmail(user.email || "");

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
              data.plan === "monthly" ||
              data.plan === "yearly"
            ) {
              setPlan(data.plan);
            }
          }
        } catch (error) {
          console.error("Failed to load plan:", error);
        }
      } catch (error) {
        console.error("Failed to load settings:", error);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, [router]);

  /*
   * =========================================================
   * SAVE PROFILE
   * =========================================================
   */

  async function handleSaveProfile() {
    const trimmedName = name.trim();

    if (!trimmedName) {
      return;
    }

    setSaved(false);

    const { error } = await supabase.auth.updateUser({
      data: {
        name: trimmedName,
      },
    });

    if (error) {
      console.error("Failed to update profile:", error);
      return;
    }

    setUserName(trimmedName.split(" ")[0] || "there");
    setSaved(true);

    window.setTimeout(() => {
      setSaved(false);
    }, 2200);
  }

  /*
   * =========================================================
   * LOGOUT
   * =========================================================
   */

  async function handleLogout() {
    await supabase.auth.signOut();

    router.push("/");
    router.refresh();
  }

  /*
   * =========================================================
   * LOADING
   * =========================================================
   */

  if (loading) {
    return (
      <main className="min-h-screen bg-[#050505] text-[#F4F1EA]">
        <div className="flex min-h-screen items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3"
          >
            <span className="h-1 w-1 rounded-full bg-[#D6B25E] shadow-[0_0_10px_rgba(214,178,94,0.8)]" />

            <span className="text-[9px] uppercase tracking-[0.45em] text-white/25">
              SoulMirror
            </span>
          </motion.div>
        </div>
      </main>
    );
  }

  /*
   * =========================================================
   * PAGE
   * =========================================================
   */

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-[#F4F1EA]">
      {/* =====================================================
          ATMOSPHERE
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-300px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#D6B25E]/[0.035] blur-[180px]" />

        <div className="absolute right-[-350px] top-[35%] h-[650px] w-[650px] rounded-full bg-[#D6B25E]/[0.015] blur-[180px]" />

        <div className="absolute bottom-[-300px] left-[-300px] h-[600px] w-[600px] rounded-full bg-[#8B5CF6]/[0.012] blur-[180px]" />
      </div>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 pb-32 sm:px-8 lg:px-12">
        {/* =================================================
            HEADER
        ================================================== */}

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
            ease,
          }}
          className="flex items-center justify-between border-b border-white/[0.07] py-7"
        >
          {/* BACK */}

          <button
            type="button"
            onClick={() => router.push("/dashboard")}
            className="group flex cursor-pointer items-center gap-3"
          >
            <ArrowLeft
              size={15}
              strokeWidth={1.4}
              className="text-white/30 transition-all duration-500 group-hover:-translate-x-1 group-hover:text-[#D6B25E]"
            />

            <span className="text-[9px] uppercase tracking-[0.4em] text-white/35 transition-colors duration-500 group-hover:text-[#D6B25E]">
              Back to SoulMirror
            </span>
          </button>

          {/* BRAND */}

          <div className="text-right">
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#D6B25E]">
              SoulMirror
            </p>

            <p className="mt-1 text-[8px] uppercase tracking-[0.3em] text-white/20">
              Settings
            </p>
          </div>
        </motion.header>

        {/* =================================================
            INTRO
        ================================================== */}

        <section className="flex min-h-[62vh] flex-col justify-center py-24 sm:py-32">
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
              duration: 0.8,
              ease,
            }}
            className="text-[10px] uppercase tracking-[0.5em] text-[#D6B25E]"
          >
            Personal space
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 35,
              filter: "blur(14px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              delay: 0.1,
              duration: 1,
              ease,
            }}
            className="mt-6 max-w-5xl font-[family:var(--font-cormorant)] text-6xl font-light leading-[0.98] sm:text-7xl md:text-8xl"
          >
            Your space,
            <br />
            <span className="text-white/25">
              your rules.
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
              delay: 0.25,
              duration: 0.8,
              ease,
            }}
            className="mt-8 max-w-xl text-sm leading-7 text-white/40"
          >
            Shape the way SoulMirror remembers you,
            understands you and becomes part of your
            personal journey.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            className="mt-10 flex items-center gap-3"
          >
            <span className="h-1 w-1 rounded-full bg-[#D6B25E] shadow-[0_0_10px_rgba(214,178,94,0.8)]" />

            <span className="text-[8px] uppercase tracking-[0.4em] text-white/20">
              {userName}'s intelligence space
            </span>
          </motion.div>
        </section>

        {/* =================================================
            PROFILE
        ================================================== */}

        <SettingsSection
          eyebrow="Profile"
          title="Who you are"
          description="Your identity inside SoulMirror."
        >
          <div className="max-w-2xl">
            {/* NAME */}

            <label className="block">
              <span className="text-[9px] uppercase tracking-[0.35em] text-white/25">
                Name
              </span>

              <input
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                  setSaved(false);
                }}
                className="mt-4 w-full border-b border-white/[0.12] bg-transparent pb-4 text-lg font-light text-[#F4F1EA] outline-none transition-colors duration-500 placeholder:text-white/20 focus:border-[#D6B25E]/50"
                placeholder="Your name"
              />
            </label>

            {/* EMAIL */}

            <div className="mt-10">
              <p className="text-[9px] uppercase tracking-[0.35em] text-white/25">
                Email
              </p>

              <p className="mt-4 border-b border-white/[0.08] pb-4 text-sm text-white/45">
                {email}
              </p>
            </div>

            {/* SAVE */}

            <button
              type="button"
              onClick={handleSaveProfile}
              className="mt-8 flex cursor-pointer items-center gap-3 border-b border-white/[0.12] pb-3 text-[9px] uppercase tracking-[0.35em] text-white/40 transition-colors duration-500 hover:border-[#D6B25E]/40 hover:text-[#D6B25E]"
            >
              {saved ? (
                <>
                  <Check size={14} />
                  Saved
                </>
              ) : (
                "Save changes"
              )}
            </button>
          </div>
        </SettingsSection>

        {/* =================================================
            EXPERIENCE
        ================================================== */}

        <SettingsSection
          eyebrow="Experience"
          title="How SoulMirror feels"
          description="Your experience should feel personal, quiet and intentional."
        >
          <div className="max-w-2xl">
            <SettingRow
              title="Cinematic experience"
              description="Keep immersive transitions and atmospheric motion enabled."
              control={<Toggle enabled />}
            />

            <SettingRow
              title="Intelligence memory"
              description="Allow SoulMirror to build context from your journey."
              control={<Toggle enabled />}
            />

            <SettingRow
              title="Daily reflections"
              description="Receive gentle prompts for deeper self-reflection."
              control={<Toggle enabled />}
            />
          </div>
        </SettingsSection>

        {/* =================================================
            APPEARANCE
        ================================================== */}

        <SettingsSection
          eyebrow="Appearance"
          title="Your atmosphere"
          description="SoulMirror is designed around a quiet dark environment."
        >
          <div className="max-w-2xl">
            <div className="flex items-center justify-between border-b border-white/[0.08] py-6">
              <div>
                <p className="text-sm text-white/65">
                  Dark experience
                </p>

                <p className="mt-2 text-xs text-white/25">
                  SoulMirror's signature environment.
                </p>
              </div>

              <div className="flex h-8 w-14 items-center rounded-full border border-[#D6B25E]/25 bg-[#D6B25E]/10 px-1">
                <div className="ml-auto h-6 w-6 rounded-full bg-[#D6B25E]" />
              </div>
            </div>
          </div>
        </SettingsSection>

        {/* =================================================
            MEMBERSHIP
        ================================================== */}

        <SettingsSection
          eyebrow="Membership"
          title="Your experience"
          description="Choose how deeply you want to explore your inner world."
        >
          <div className="max-w-2xl">
            <div className="flex flex-col justify-between gap-6 border-y border-white/[0.08] py-7 sm:flex-row sm:items-center">
              <div>
                <p className="text-[9px] uppercase tracking-[0.35em] text-white/25">
                  Current plan
                </p>

                <h3 className="mt-3 font-[family:var(--font-cormorant)] text-4xl font-light text-[#F4F1EA]">
                  {planLabels[plan]}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => {
                  router.push("/dashboard#plans");
                }}
                className="group flex cursor-pointer items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-white/35 transition-colors duration-500 hover:text-[#D6B25E]"
              >
                Explore plans

                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        </SettingsSection>

        {/* =================================================
            ACCOUNT
        ================================================== */}

        <SettingsSection
          eyebrow="Account"
          title="Your account"
          description="Manage access to your SoulMirror experience."
        >
          <div className="max-w-2xl">
            <button
              type="button"
              onClick={handleLogout}
              className="group flex cursor-pointer items-center gap-4 border-b border-white/[0.08] pb-5 text-left"
            >
              <LogOut
                size={16}
                strokeWidth={1.4}
                className="text-white/30 transition-colors duration-500 group-hover:text-[#D6B25E]"
              />

              <div>
                <p className="text-sm text-white/55 transition-colors duration-500 group-hover:text-white/80">
                  Log out
                </p>

                <p className="mt-1 text-xs text-white/20">
                  End your current SoulMirror session.
                </p>
              </div>
            </button>
          </div>
        </SettingsSection>

        {/* =================================================
            FOOTER
        ================================================== */}

        <footer className="border-t border-white/[0.07] pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={() => router.push("/")}
              className="w-fit cursor-pointer text-[9px] uppercase tracking-[0.4em] text-white/20 transition-colors duration-500 hover:text-[#D6B25E]"
            >
              SOULMIRROR — PERSONAL INTELLIGENCE
            </button>

            <p className="text-[8px] uppercase tracking-[0.3em] text-white/15">
              {userName}
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}

/* ============================================================
   SETTINGS SECTION
============================================================ */

function SettingsSection({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 45,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-100px",
      }}
      transition={{
        duration: 0.9,
        ease,
      }}
      className="border-t border-white/[0.07] py-24 sm:py-32"
    >
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        {/* LEFT */}

        <div>
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#D6B25E]">
            {eyebrow}
          </p>

          <h2 className="mt-5 font-[family:var(--font-cormorant)] text-4xl font-light leading-tight text-[#F4F1EA] sm:text-5xl">
            {title}
          </h2>

          <p className="mt-5 max-w-sm text-sm leading-7 text-white/30">
            {description}
          </p>
        </div>

        {/* RIGHT */}

        <div>{children}</div>
      </div>
    </motion.section>
  );
}

/* ============================================================
   SETTING ROW
============================================================ */

function SettingRow({
  title,
  description,
  control,
}: {
  title: string;
  description: string;
  control: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-8 border-b border-white/[0.08] py-6">
      <div>
        <p className="text-sm text-white/65">
          {title}
        </p>

        <p className="mt-2 max-w-lg text-xs leading-6 text-white/25">
          {description}
        </p>
      </div>

      {control}
    </div>
  );
}

/* ============================================================
   TOGGLE
============================================================ */

function Toggle({
  enabled,
}: {
  enabled: boolean;
}) {
  return (
    <div
      className={`flex h-8 w-14 shrink-0 items-center rounded-full border px-1 transition-all duration-500 ${
        enabled
          ? "border-[#D6B25E]/25 bg-[#D6B25E]/10"
          : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <div
        className={`h-6 w-6 rounded-full transition-all duration-500 ${
          enabled
            ? "ml-auto bg-[#D6B25E]"
            : "bg-white/20"
        }`}
      />
    </div>
  );
}