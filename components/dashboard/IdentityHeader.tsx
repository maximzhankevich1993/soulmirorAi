"use client";

import { motion } from "framer-motion";
import {
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { supabase } from "../../src/lib/supabaseClient";
import { GlassCard } from "../../src/components/ui/GlassCard";

type UserProfile = {
  id: string;
  email: string;
  name: string;
};

export function IdentityHeader() {
  const router = useRouter();

  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);

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

        setUser({
          id: user.id,
          email: user.email || "",
          name: metadataName,
        });
      } catch (error) {
        console.error(
          "Identity header loading error:",
          error
        );
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, [router]);

  async function handleLogout() {
    if (loggingOut) return;

    try {
      setLoggingOut(true);

      await supabase.auth.signOut();

      router.replace("/login");
      router.refresh();
    } catch (error) {
      console.error(
        "Logout error:",
        error
      );

      setLoggingOut(false);
    }
  }

  if (loading) {
    return (
      <section className="pt-8 md:pt-10">
        <div
          className="
            h-32
            w-full
            animate-pulse
            rounded-[32px]
            border
            border-white/[0.06]
            bg-white/[0.02]
          "
        />
      </section>
    );
  }

  if (!user) {
    return null;
  }

  const firstName =
    user.name?.trim().split(" ")[0] ||
    user.email.split("@")[0] ||
    "there";

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: -30,
        filter: "blur(12px)",
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
      className="pt-8 md:pt-10"
    >
      <GlassCard
        className="
          relative
          overflow-hidden
          px-6
          py-6
          md:px-8
          md:py-7
        "
      >
        {/* Cinematic atmosphere */}

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#D6B25E]/[0.055]
            blur-[150px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-1/3
            h-px
            w-1/3
            bg-gradient-to-r
            from-transparent
            via-[#D6B25E]/20
            to-transparent
          "
        />

        <div
          className="
            relative
            z-10
            flex
            flex-col
            gap-7
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          {/* Identity */}

          <div>
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#D6B25E]
                  shadow-[0_0_12px_rgba(214,178,94,0.7)]
                "
              />

              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.5em]
                  text-[#D6B25E]/80
                "
              >
                SoulMirror
              </p>
            </div>

            <h1
              className="
                mt-4
                font-[family:var(--font-cormorant)]
                text-4xl
                font-light
                leading-tight
                text-[#F4F1EA]
                md:text-5xl
              "
            >
              Welcome back,{" "}
              <span className="text-[#D6B25E]">
                {firstName}.
              </span>
            </h1>

            <p
              className="
                mt-3
                max-w-xl
                text-sm
                leading-7
                text-white/40
              "
            >
              Your personal intelligence system
              is evolving with you.
            </p>

            <p
              className="
                mt-2
                max-w-xl
                truncate
                text-[11px]
                text-white/20
              "
            >
              {user.email}
            </p>
          </div>

          {/* Controls */}

          <div
            className="
              flex
              items-center
              gap-2
              md:gap-3
            "
          >
            {/* Plan */}

            <div
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-[#D6B25E]/20
                bg-[#D6B25E]/[0.06]
                px-4
                py-2.5
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#D6B25E]
                  shadow-[0_0_8px_rgba(214,178,94,0.7)]
                "
              />

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-[#D6B25E]/80
                "
              >
                Free
              </span>
            </div>

            {/* Settings */}

            <motion.button
              type="button"
              onClick={() =>
                router.push("/dashboard/settings")
              }
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                flex
                h-11
                w-11
                cursor-pointer
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                text-white/45
                transition-all
                duration-500
                hover:border-white/20
                hover:bg-white/[0.06]
                hover:text-[#D6B25E]
              "
              aria-label="Settings"
            >
              <Settings size={17} />
            </motion.button>

            {/* Logout */}

            <motion.button
              type="button"
              onClick={handleLogout}
              disabled={loggingOut}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                flex
                h-11
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-4
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-white/35
                transition-all
                duration-500
                hover:border-white/20
                hover:bg-white/[0.06]
                hover:text-white/70
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
            >
              <LogOut size={15} />

              <span className="hidden sm:block">
                {loggingOut
                  ? "Leaving"
                  : "Logout"}
              </span>
            </motion.button>
          </div>
        </div>

        {/* Mobile settings hint */}

        <motion.button
          type="button"
          onClick={() =>
            router.push("/dashboard/settings")
          }
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.6,
          }}
          className="
            relative
            z-10
            mt-6
            flex
            w-full
            items-center
            justify-between
            rounded-2xl
            border
            border-white/[0.06]
            bg-white/[0.02]
            px-4
            py-3
            text-left
            md:hidden
          "
        >
          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-white/25
              "
            >
              Personal profile
            </p>

            <p
              className="
                mt-1
                text-xs
                text-white/50
              "
            >
              Manage your identity
            </p>
          </div>

          <ChevronRight
            size={16}
            className="text-white/25"
          />
        </motion.button>
      </GlassCard>
    </motion.section>
  );
}