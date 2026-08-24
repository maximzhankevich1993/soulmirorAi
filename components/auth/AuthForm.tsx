"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { supabase } from "../../src/lib/supabaseClient";

interface AuthFormProps {
  initialMode?: "login" | "register";
}

export function AuthForm({
  initialMode = "login",
}: AuthFormProps) {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [mode, setMode] = useState<"login" | "register">(
    initialMode
  );

  const [message, setMessage] = useState<string | null>(
    null
  );

  const isLogin = mode === "login";

  async function handleAuth() {
    if (loading) return;

    try {
      setLoading(true);
      setMessage(null);

      if (!email.trim() || !password.trim()) {
        setMessage(
          "Please enter your email and password."
        );
        setLoading(false);
        return;
      }

      /*
       * =========================================
       * LOGIN
       * =========================================
       */

      if (mode === "login") {
        const {
          data,
          error,
        } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

        if (error) {
          throw error;
        }

        if (!data.user) {
          throw new Error(
            "Unable to create your session."
          );
        }

        /*
         * User successfully authenticated.
         * Enter the personal Dashboard.
         */

        router.push("/dashboard");
        router.refresh();

        return;
      }

      /*
       * =========================================
       * REGISTER
       * =========================================
       */

      const {
        data,
        error,
      } = await supabase.auth.signUp({
        email: email.trim(),
        password,
      });

      if (error) {
        throw error;
      }

      /*
       * If Supabase immediately creates a session,
       * we can enter the Dashboard directly.
       */

      if (data.session && data.user) {
        router.push("/dashboard");
        router.refresh();

        return;
      }

      /*
       * If email confirmation is enabled,
       * Supabase returns no session until the
       * user confirms their email.
       */

      setMessage(
        "Your account has been created. Check your email to confirm your account."
      );
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Authentication failed.";

      setMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  const switchMode = () => {
    if (loading) return;

    setMessage(null);

    setMode((current) =>
      current === "login"
        ? "register"
        : "login"
    );
  };

  return (
    <div className="w-full">
      <AnimatePresence
        mode="wait"
        initial={false}
      >
        <motion.div
          key={mode}
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.96,
            filter: "blur(14px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            y: -25,
            scale: 0.98,
            filter: "blur(12px)",
          }}
          transition={{
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {/* TITLE */}

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
              x: isLogin ? -35 : 35,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              x: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.7,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-8 text-center"
          >
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.45em]
                text-white/35
              "
            >
              {isLogin
                ? "Return to your inner world"
                : "Begin your journey"}
            </p>

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
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mx-auto
                mt-4
                h-px
                w-16
                origin-center
                bg-gradient-to-r
                from-transparent
                via-[#D6B25E]/50
                to-transparent
              "
            />
          </motion.div>

          {/* INPUTS */}

          <div className="space-y-3">
            <motion.div
              initial={{
                opacity: 0,
                x: -60,
                y: 20,
                scale: 0.96,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative"
            >
              <input
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                type="email"
                placeholder="Email"
                autoComplete="email"
                className="
                  peer
                  h-14
                  w-full
                  cursor-text
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  px-5
                  text-sm
                  text-[#F4F1EA]
                  outline-none
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  placeholder:text-white/25
                  hover:border-white/[0.14]
                  hover:bg-white/[0.04]
                  focus:border-[#D6B25E]/30
                  focus:bg-white/[0.05]
                  focus:shadow-[0_0_40px_rgba(214,178,94,0.04)]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-5
                  right-5
                  h-px
                  origin-left
                  scale-x-0
                  bg-gradient-to-r
                  from-transparent
                  via-[#D6B25E]/60
                  to-transparent
                  transition-transform
                  duration-500
                  peer-focus:scale-x-100
                "
              />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 60,
                y: 20,
                scale: 0.96,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative"
            >
              <input
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                type="password"
                placeholder="Password"
                autoComplete={
                  isLogin
                    ? "current-password"
                    : "new-password"
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAuth();
                  }
                }}
                className="
                  peer
                  h-14
                  w-full
                  cursor-text
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  px-5
                  text-sm
                  text-[#F4F1EA]
                  outline-none
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  placeholder:text-white/25
                  hover:border-white/[0.14]
                  hover:bg-white/[0.04]
                  focus:border-[#D6B25E]/30
                  focus:bg-white/[0.05]
                  focus:shadow-[0_0_40px_rgba(214,178,94,0.04)]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-5
                  right-5
                  h-px
                  origin-left
                  scale-x-0
                  bg-gradient-to-r
                  from-transparent
                  via-[#D6B25E]/60
                  to-transparent
                  transition-transform
                  duration-500
                  peer-focus:scale-x-100
                "
              />
            </motion.div>
          </div>

          {/* BUTTON */}

          <motion.button
            type="button"
            onClick={handleAuth}
            disabled={loading}
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.95,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              y: -2,
              scale: 1.01,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              group
              relative
              mt-6
              flex
              h-14
              w-full
              cursor-pointer
              items-center
              justify-center
              overflow-hidden
              rounded-2xl
              border
              border-[#D6B25E]/20
              bg-[#D6B25E]/[0.08]
              text-sm
              font-medium
              text-[#F4F1EA]
              backdrop-blur-2xl
              shadow-[0_10px_40px_rgba(0,0,0,0.25)]
              transition-all
              duration-500
              hover:border-[#D6B25E]/40
              hover:bg-[#D6B25E]/[0.13]
              hover:shadow-[0_15px_55px_rgba(214,178,94,0.08)]
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            <span
              className="
                pointer-events-none
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-[#D6B25E]/[0.12]
                to-transparent
                transition-transform
                duration-1000
                group-hover:translate-x-full
              "
            />

            <span className="relative z-10">
              {loading
                ? "Entering..."
                : isLogin
                  ? "Enter SoulMirror"
                  : "Create Intelligence"}
            </span>
          </motion.button>

          {/* MODE SWITCH */}

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
              delay: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 text-center"
          >
            <button
              type="button"
              onClick={switchMode}
              disabled={loading}
              className="
                group
                cursor-pointer
                text-[11px]
                uppercase
                tracking-[0.28em]
                text-white/35
                transition-all
                duration-500
                hover:text-[#D6B25E]
                disabled:cursor-not-allowed
                disabled:opacity-30
              "
            >
              {isLogin
                ? "Create new account"
                : "Already have an account?"}

              <span
                className="
                  mx-auto
                  mt-2
                  block
                  h-px
                  w-0
                  bg-[#D6B25E]/50
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </button>
          </motion.div>

          {/* MESSAGE */}

          <AnimatePresence mode="wait">
            {message && (
              <motion.p
                key={message}
                initial={{
                  opacity: 0,
                  y: 10,
                  filter: "blur(6px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                  filter: "blur(6px)",
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
                  mt-6
                  text-center
                  text-xs
                  leading-6
                  text-white/45
                "
              >
                {message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}