"use client";

import { motion } from "framer-motion";

interface StateRowProps {
  label: string;
  value: string;
  delay?: number;
}

function StateRow({
  label,
  value,
  delay = 0,
}: StateRowProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 16,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        x: 5,
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      transition={{
        delay,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        flex
        min-h-[68px]
        items-center
        gap-5
        border-b
        border-white/[0.06]
        py-4
        sm:min-h-[92px]
        sm:gap-8
        sm:py-5
      "
    >
      {/* LABEL */}

      <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
        <span
          className="
            h-1
            w-1
            shrink-0
            rounded-full
            bg-[#D6B25E]/60
          "
        />

        <span
          className="
            text-[8px]
            uppercase
            tracking-[0.35em]
            text-white/25
            sm:text-[9px]
            sm:tracking-[0.4em]
          "
        >
          {label}
        </span>
      </div>

      {/* VALUE */}

      <p
        className="
          max-w-[170px]
          shrink-0
          text-right
          text-[12px]
          leading-5
          text-white/65
          sm:max-w-[260px]
          sm:text-sm
          sm:leading-6
        "
      >
        {value}
      </p>
    </motion.div>
  );
}

export function SoulOrbPanel() {
  return (
    <div className="relative">
      {/* =========================================
          ATMOSPHERE
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-120px]
          top-[-100px]
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#D6B25E]/[0.018]
          blur-[140px]
          sm:right-[-180px]
          sm:top-[-120px]
          sm:h-[500px]
          sm:w-[500px]
          sm:blur-[160px]
        "
      />

      {/* =========================================
          MAIN GRID
      ========================================== */}

      <div
        className="
          grid
          grid-cols-1
          gap-10
          lg:grid-cols-[1.15fr_0.85fr]
          lg:gap-20
          xl:gap-28
        "
      >
        {/* =========================================
            CURRENT STATE
        ========================================== */}

        <div className="min-w-0">
          {/* STATE LABEL */}

          <motion.div
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
              amount: 0.5,
            }}
            transition={{
              duration: 0.8,
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
                bg-[#D6B25E]/50
                sm:w-12
              "
            />

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.45em]
                text-[#D6B25E]
                sm:text-[9px]
                sm:tracking-[0.5em]
              "
            >
              Current state
            </span>
          </motion.div>

          {/* STATE TITLE */}

          <motion.h3
            initial={{
              opacity: 0,
              y: 35,
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
              delay: 0.12,
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              mt-6
              max-w-3xl
              font-[family:var(--font-cormorant)]
              text-[2.75rem]
              font-light
              leading-[0.95]
              tracking-[-0.025em]
              text-[#F4F1EA]
              sm:mt-8
              sm:text-7xl
              md:text-8xl
            "
          >
            See where you are.
          </motion.h3>

          {/* DESCRIPTION */}

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
              amount: 0.35,
            }}
            transition={{
              delay: 0.3,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              mt-6
              max-w-xl
              text-[13px]
              leading-6
              text-white/40
              sm:mt-8
              sm:text-[15px]
              sm:leading-8
            "
          >
            Your current emotional and psychological
            landscape, reflected through everything
            you have explored with SoulMirror.
          </motion.p>

          {/* STATUS */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            className="
              mt-7
              flex
              items-center
              gap-3
              sm:mt-10
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#D6B25E]
                shadow-[0_0_14px_rgba(214,178,94,0.65)]
              "
            />

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.4em]
                text-white/25
              "
            >
              Intelligence active
            </span>
          </motion.div>
        </div>

        {/* =========================================
            SIGNALS
        ========================================== */}

        <div className="min-w-0">
          <div
            className="
              mb-5
              flex
              items-center
              justify-between
              sm:mb-7
            "
          >
            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.45em]
                text-white/20
              "
            >
              Signals
            </span>

            <span
              className="
                text-[7px]
                uppercase
                tracking-[0.35em]
                text-white/15
              "
            >
              Live reflection
            </span>
          </div>

          <div className="border-t border-white/[0.06]">
            <StateRow
              label="Emotional tone"
              value="Reflective"
              delay={0.1}
            />

            <StateRow
              label="Dominant pattern"
              value="Seeking clarity"
              delay={0.18}
            />

            <StateRow
              label="Inner direction"
              value="Moving inward"
              delay={0.26}
            />

            <StateRow
              label="Current energy"
              value="Quiet transformation"
              delay={0.34}
            />
          </div>

          {/* BOTTOM STATEMENT */}

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
              amount: 0.4,
            }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            className="
              mt-10
              border-t
              border-white/[0.06]
              pt-6
              sm:mt-20
              sm:pt-7
            "
          >
            <p
              className="
                max-w-md
                font-[family:var(--font-cormorant)]
                text-xl
                font-light
                leading-[1.25]
                text-white/45
                sm:text-2xl
              "
            >
              The most important patterns are
              often the ones you almost notice.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}