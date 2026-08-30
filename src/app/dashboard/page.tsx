
"use client";

import {
  useEffect,
  useState,
} from "react";

import { supabase } from "@/lib/supabase/client";

import {
  DashboardShell,
} from "../../../components/dashboard/DashboardShell";

type Usage = {
  soulScan: number;
  dream: number;
  tarot: number;
};

export default function DashboardPage() {
  const [user, setUser] =
    useState<Awaited<
      ReturnType<typeof supabase.auth.getUser>
    >["data"]["user"]>(null);

  const [usage, setUsage] = useState<Usage>({
    soulScan: 0,
    dream: 0,
    tarot: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadDashboard() {
      try {
        /*
         * Use the SAME Supabase browser client
         * as SoulSpaceHero and AuthForm.
         */

        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        if (error) {
          console.error(
            "Supabase user error:",
            error
          );

          if (mounted) {
            setUser(null);
          }

          return;
        }

        if (!mounted) return;

        setUser(user);

        /*
         * No authenticated user.
         */

        if (!user) {
          return;
        }

        /*
         * Load personal usage.
         */

        const response = await fetch(
          "/api/usage",
          {
            method: "GET",
            credentials: "include",
            cache: "no-store",
          }
        );

        if (!response.ok) {
          console.error(
            "Failed to load usage:",
            response.status
          );

          return;
        }

        const data = await response.json();

        if (!mounted) return;

        setUsage({
          soulScan:
            typeof data?.soulScan === "number"
              ? data.soulScan
              : 0,

          dream:
            typeof data?.dream === "number"
              ? data.dream
              : 0,

          tarot:
            typeof data?.tarot === "number"
              ? data.tarot
              : 0,
        });
      } catch (error) {
        console.error(
          "Dashboard loading error:",
          error
        );
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadDashboard();

    /*
     * Keep dashboard synchronized with the
     * Supabase authentication state.
     */

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!mounted) return;

        setUser(session?.user ?? null);

        /*
         * If the session disappears, immediately
         * remove the user from the dashboard state.
         */

        if (!session?.user) {
          setUser(null);
        }
      }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  /*
   * ==========================================
   * LOADING
   * ==========================================
   */

  if (loading) {
    return (
      <main
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-[#050505]
          text-[#F4F1EA]
        "
      >
        <div className="text-center">
          <p
            className="
              text-xs
              uppercase
              tracking-[0.5em]
              text-[#D6B25E]
            "
          >
            Entering SoulMirror
          </p>

          <div
            className="
              mx-auto
              mt-6
              h-px
              w-20
              bg-gradient-to-r
              from-transparent
              via-[#D6B25E]/60
              to-transparent
              animate-pulse
            "
          />
        </div>
      </main>
    );
  }

  /*
   * ==========================================
   * NOT AUTHENTICATED
   * ==========================================
   */

  if (!user) {
    return (
      <main
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-[#050505]
          px-6
          text-[#F4F1EA]
        "
      >
        <div
          className="
            w-full
            max-w-md
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-10
            text-center
            backdrop-blur-xl
          "
        >
          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.45em]
              text-[#D6B25E]/70
            "
          >
            SoulMirror
          </p>

          <h1
            className="
              mt-5
              font-[family:var(--font-cormorant)]
              text-4xl
              font-light
            "
          >
            Enter SoulMirror
          </h1>

          <p
            className="
              mt-4
              text-sm
              leading-7
              text-white/45
            "
          >
            Please login to access your
            personal intelligence system.
          </p>
        </div>
      </main>
    );
  }

  /*
   * ==========================================
   * AUTHENTICATED DASHBOARD
   * ==========================================
   */

  return (
    <DashboardShell
      usage={usage}
    />
  );
}

