"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { ArrowRight } from "lucide-react";

import {
  useEffect,
  useRef,
  useState,
} from "react";


interface SoulSpaceHeroProps {
  onOpenAuth?: (mode: "login" | "register") => void;
}

const letters = "SoulMirror".split("");

export function SoulSpaceHero({
  onOpenAuth,
}: SoulSpaceHeroProps) {
  const router = useRouter();

  const ref = useRef<HTMLDivElement>(null);

  const [started, setStarted] = useState(false);

  const [userName, setUserName] = useState<string | null>(
    null
  );

  const [checkingAuth, setCheckingAuth] = useState(true);

  /*
   * =====================================================
   * HERO START
   * =====================================================
   */

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setStarted(true);
    }, 100);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  /*
   * =====================================================
   * AUTH STATE
   * =====================================================
   *
   * If the user is already authenticated:
   *
   * Sign In / Sign Up
   *
   * becomes:
   *
   * User Name / Dashboard
   *
   * =====================================================
   */

  useEffect(() => {
    let mounted = true;

    const loadUser = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!mounted) return;

        if (user) {
          const metadata = user.user_metadata;

          const name =
            metadata?.full_name ||
            metadata?.name ||
            metadata?.display_name ||
            user.email?.split("@")[0] ||
            "You";

          setUserName(name);
        } else {
          setUserName(null);
        }
      } catch (error) {
        console.error(
          "Failed to load authenticated user:",
          error
        );

        if (mounted) {
          setUserName(null);
        }
      } finally {
        if (mounted) {
          setCheckingAuth(false);
        }
      }
    };

    loadUser();

    /*
     * Keep the hero synchronized with Supabase.
     *
     * This is important when the user logs in
     * without a full page reload.
     */

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (!mounted) return;

        if (!session?.user) {
          setUserName(null);
          return;
        }

        const user = session.user;

        const metadata = user.user_metadata;

        const name =
          metadata?.full_name ||
          metadata?.name ||
          metadata?.display_name ||
          user.email?.split("@")[0] ||
          "You";

        setUserName(name);
      }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  /*
   * =====================================================
   * HERO SCROLL
   * =====================================================
   */

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -140]
  );

  const heroScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.94]
  );

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [1, 1, 0]
  );

  const heroBlur = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [
      "blur(0px)",
      "blur(0px)",
      "blur(8px)",
    ]
  );

  /*
   * =====================================================
   * START EXPERIENCE
   * =====================================================
   */

  const handleStartExperience = () => {
    const target = document.getElementById(
      "features"
    );

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /*
   * =====================================================
   * ECOSYSTEM
   * =====================================================
   */

  const handleExploreEcosystem = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    const target =
      document.getElementById("ecosystem");

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /*
   * =====================================================
   * AUTH
   * =====================================================
   */

  const handleSignIn = () => {
    onOpenAuth?.("login");
  };

  const handleSignUp = () => {
    onOpenAuth?.("register");
  };

  /*
   * =====================================================
   * DASHBOARD
   * =====================================================
   */

  const handleDashboard = () => {
    router.push("/dashboard");
  };

  /*
   * =====================================================
   * RENDER
   * =====================================================
   */

  return (
    <section
      ref={ref}
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-[#050505]
        px-6
        py-24
      "
    >
      {/* =====================================================
          DEEP ATMOSPHERE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 bg-[#050505]" />

      {/* =====================================================
          CENTRAL GOLDEN ATMOSPHERE
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.75,
        }}
        animate={{
          opacity: started ? 1 : 0,
          scale: started ? 1 : 0.75,
        }}
        transition={{
          duration: 2.4,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[720px]
          w-[720px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6B25E]/[0.035]
          blur-[180px]
        "
      />

      {/* =====================================================
          PURPLE INTELLIGENCE ATMOSPHERE
      ====================================================== */}

      <motion.div
        animate={{
          x: [-40, 40, -40],
          y: [20, -20, 20],
          opacity: [0.05, 0.12, 0.05],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[-150px]
          right-[-150px]
          h-[550px]
          w-[550px]
          rounded-full
          bg-[#8B5CF6]
          blur-[180px]
        "
      />

      {/* =====================================================
          GOLDEN CINEMATIC LIGHT THREADS
      ====================================================== */}

      <motion.svg
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: started ? 1 : 0,
        }}
        transition={{
          duration: 2.5,
          delay: 0.4,
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          h-full
          w-full
          overflow-visible
        "
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        fill="none"
      >
        <motion.path
          d="
            M -180 610
            C 100 420
              270 360
              500 510
            C 760 680
              930 760
              1130 500
            C 1260 330
              1380 360
              1600 180
          "
          stroke="#D6B25E"
          strokeWidth="1.15"
          strokeLinecap="round"
          initial={{
            pathLength: 0.15,
            opacity: 0.08,
          }}
          animate={{
            pathLength: [0.15, 1, 0.15],
            pathOffset: [0, 0.05, 0],
            opacity: [0.08, 0.5, 0.08],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.path
          d="
            M -160 180
            C 130 340
              330 520
              610 360
            C 860 220
              1050 110
              1220 330
            C 1320 470
              1450 520
              1610 410
          "
          stroke="#D6B25E"
          strokeWidth="0.8"
          strokeLinecap="round"
          initial={{
            pathLength: 0.1,
            opacity: 0.04,
          }}
          animate={{
            pathLength: [0.1, 0.85, 0.1],
            opacity: [0.04, 0.32, 0.04],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.path
          d="
            M -120 760
            C 260 650
              430 760
              700 570
            C 950 390
              1150 420
              1570 620
          "
          stroke="#F4F1EA"
          strokeWidth="0.45"
          strokeLinecap="round"
          initial={{
            pathLength: 0.1,
            opacity: 0.02,
          }}
          animate={{
            pathLength: [0.1, 1, 0.1],
            opacity: [0.02, 0.18, 0.02],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        <motion.path
          d="
            M -100 430
            C 180 600
              400 620
              650 430
            C 880 250
              1080 250
              1510 470
          "
          stroke="#D6B25E"
          strokeWidth="0.5"
          strokeLinecap="round"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0.02, 0.2, 0.02],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.svg>

      {/* =====================================================
          DARK CINEMATIC OVERLAY
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-black/20
          via-transparent
          to-black/65
        "
      />

      {/* =====================================================
          AUTH / USER BUTTONS
      ====================================================== */}

      {!checkingAuth && (
        <motion.div
          initial={{
            opacity: 0,
            y: -30,
            x: 20,
            filter: "blur(12px)",
          }}
          animate={{
            opacity: started ? 1 : 0,
            y: started ? 0 : -30,
            x: started ? 0 : 20,
            filter: started
              ? "blur(0px)"
              : "blur(12px)",
          }}
          transition={{
            delay: 0.65,
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute
            right-5
            top-5
            z-30
            flex
            items-center
            gap-2
            sm:right-8
            sm:top-8
            md:right-10
            md:top-10
          "
        >
          {userName ? (
            <>
              {/* USER NAME */}

              <div
                className="
                  flex
                  items-center
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  px-5
                  py-2.5
                  text-[10px]
                  uppercase
                  tracking-[0.22em]
                  text-white/55
                  backdrop-blur-xl
                "
              >
                {userName}
              </div>

              {/* DASHBOARD */}

              <motion.button
                type="button"
                onClick={handleDashboard}
                whileHover={{
                  y: -2,
                  scale: 1.025,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  cursor-pointer
                  rounded-2xl
                  border
                  border-[#D6B25E]/25
                  bg-[#D6B25E]/[0.08]
                  px-5
                  py-2.5
                  text-[10px]
                  uppercase
                  tracking-[0.28em]
                  text-[#D6B25E]/80
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-[#D6B25E]/45
                  hover:bg-[#D6B25E]/[0.13]
                  hover:text-[#D6B25E]
                "
              >
                Dashboard
              </motion.button>
            </>
          ) : (
            <>
              {/* SIGN IN */}

              <motion.button
                type="button"
                onClick={handleSignIn}
                whileHover={{
                  y: -2,
                  scale: 1.025,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  cursor-pointer
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  px-5
                  py-2.5
                  text-[10px]
                  uppercase
                  tracking-[0.28em]
                  text-white/45
                  backdrop-blur-xl
                  shadow-[0_8px_30px_rgba(0,0,0,0.18)]
                  transition-all
                  duration-500
                  hover:border-white/[0.2]
                  hover:bg-white/[0.06]
                  hover:text-white
                "
              >
                Sign In
              </motion.button>

              {/* SIGN UP */}

              <motion.button
                type="button"
                onClick={handleSignUp}
                whileHover={{
                  y: -2,
                  scale: 1.025,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  cursor-pointer
                  rounded-2xl
                  border
                  border-white/[0.14]
                  bg-white/[0.055]
                  px-5
                  py-2.5
                  text-[10px]
                  uppercase
                  tracking-[0.28em]
                  text-white/75
                  backdrop-blur-xl
                  shadow-[0_10px_40px_rgba(0,0,0,0.25)]
                  transition-all
                  duration-500
                  hover:border-white/[0.28]
                  hover:bg-white/[0.09]
                  hover:text-white
                  hover:shadow-[0_15px_50px_rgba(255,255,255,0.06)]
                "
              >
                Sign Up
              </motion.button>
            </>
          )}
        </motion.div>
      )}

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <motion.div
        style={{
          y: heroY,
          scale: heroScale,
          opacity: heroOpacity,
          filter: heroBlur,
        }}
        className="
          relative
          z-10
          flex
          w-full
          max-w-7xl
          flex-col
          items-center
          text-center
        "
      >
        {/* EON AI */}

        <motion.p
          initial={{
            opacity: 0,
            y: 25,
            x: -20,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: started ? 1 : 0,
            y: started ? 0 : 25,
            x: started ? 0 : -20,
            filter: started
              ? "blur(0px)"
              : "blur(10px)",
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-[10px]
            uppercase
            tracking-[0.65em]
            text-[#D6B25E]/80
          "
        >
          EON AI
        </motion.p>

        {/* SOULMIRROR */}

        <h1
          className="
            mt-8
            flex
            whitespace-nowrap
            font-[family:var(--font-cormorant)]
            text-[56px]
            font-light
            leading-none
            tracking-[0.025em]
            text-[#F4F1EA]
            sm:text-[76px]
            md:text-[104px]
            lg:text-[128px]
          "
        >
          {letters.map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -140 : 140,
                y: index % 3 === 0 ? -60 : 60,
                scale: 0.7,
                rotate:
                  index % 2 === 0 ? -8 : 8,
                filter: "blur(18px)",
              }}
              animate={
                started
                  ? {
                      opacity: 1,
                      x: 0,
                      y: 0,
                      scale: 1,
                      rotate: 0,
                      filter: "blur(0px)",
                    }
                  : {
                      opacity: 0,
                      x:
                        index % 2 === 0
                          ? -140
                          : 140,
                      y:
                        index % 3 === 0
                          ? -60
                          : 60,
                      scale: 0.7,
                      rotate:
                        index % 2 === 0
                          ? -8
                          : 8,
                      filter: "blur(18px)",
                    }
              }
              transition={{
                delay:
                  0.25 + index * 0.11,
                duration: 1.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        {/* GOLD LINE */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          animate={{
            opacity: started ? 1 : 0,
            scaleX: started ? 1 : 0,
          }}
          transition={{
            delay: 1.55,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-8
            h-px
            w-[120px]
            origin-center
            bg-gradient-to-r
            from-transparent
            via-[#D6B25E]/70
            to-transparent
          "
        />

        {/* TAGLINE */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: started ? 1 : 0,
            y: started ? 0 : 15,
          }}
          transition={{
            delay: 1.8,
            duration: 1,
          }}
          className="
            mt-7
            text-[10px]
            uppercase
            tracking-[0.5em]
            text-white/40
          "
        >
          Reflect · Understand · Evolve
        </motion.p>

        {/* DESCRIPTION */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: started ? 1 : 0,
            y: started ? 0 : 20,
          }}
          transition={{
            delay: 2.05,
            duration: 1,
          }}
          className="
            mt-8
            max-w-xl
            text-base
            leading-8
            text-white/45
            md:text-lg
          "
        >
          Your personal intelligence mirror.
          <br />
          AI designed to understand identity,
          dreams, archetypes and evolution.
        </motion.p>

        {/* ACTIONS */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: started ? 1 : 0,
            y: started ? 0 : 25,
            filter: started
              ? "blur(0px)"
              : "blur(8px)",
          }}
          transition={{
            delay: 2.35,
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-12
            flex
            flex-col
            items-center
            gap-3
            sm:flex-row
          "
        >
          {/* START EXPERIENCE */}

          <motion.button
            type="button"
            onClick={handleStartExperience}
            whileHover={{
              y: -3,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              group
              relative
              flex
              h-14
              cursor-pointer
              items-center
              gap-3
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.14]
              bg-white/[0.055]
              px-8
              text-sm
              font-medium
              text-white
              backdrop-blur-2xl
              shadow-[0_10px_40px_rgba(0,0,0,0.25)]
              transition-all
              duration-500
              hover:border-white/[0.28]
              hover:bg-white/[0.09]
              hover:shadow-[0_15px_55px_rgba(255,255,255,0.06)]
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
                via-white/[0.07]
                to-transparent
                transition-transform
                duration-1000
                group-hover:translate-x-full
              "
            />

            <span className="relative z-10">
              Start Experience
            </span>

            <ArrowRight
              size={16}
              strokeWidth={1.5}
              className="
                relative
                z-10
                transition-transform
                duration-500
                group-hover:translate-x-1
              "
            />
          </motion.button>

          {/* EXPLORE ECOSYSTEM */}

          <motion.a
            href="#ecosystem"
            onClick={handleExploreEcosystem}
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              flex
              h-14
              cursor-pointer
              items-center
              justify-center
              rounded-2xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              px-8
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-white/45
              backdrop-blur-xl
              transition-all
              duration-500
              hover:border-white/[0.18]
              hover:bg-white/[0.05]
              hover:text-white/80
            "
          >
            Explore Ecosystem
          </motion.a>
        </motion.div>

        {/* SCROLL INDICATOR */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: started ? 1 : 0,
          }}
          transition={{
            delay: 3.1,
            duration: 1.2,
          }}
          className="
            absolute
            -bottom-28
            left-1/2
            hidden
            -translate-x-1/2
            flex-col
            items-center
            gap-3
            md:flex
          "
        >
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.45em]
              text-white/20
            "
          >
            Scroll to explore
          </span>

          <motion.div
            animate={{
              y: [0, 5, 0],
              opacity: [0.25, 0.7, 0.25],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              h-8
              w-px
              bg-gradient-to-b
              from-white/30
              to-transparent
            "
          />
        </motion.div>
      </motion.div>

      {/* =====================================================
          FLOATING PARTICLES
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 18 }).map(
          (_, i) => (
            <motion.span
              key={i}
              animate={{
                y: [0, -60, 0],
                opacity: [
                  0.05,
                  0.3,
                  0.05,
                ],
              }}
              transition={{
                duration: 5 + (i % 5),
                repeat: Infinity,
                delay: i * 0.35,
                ease: "easeInOut",
              }}
              className="
                absolute
                h-[2px]
                w-[2px]
                rounded-full
                bg-[#D6B25E]
              "
              style={{
                left: `${(i * 37) % 100}%`,
                top: `${(i * 53) % 100}%`,
              }}
            />
          )
        )}
      </div>
    </section>
  );
}