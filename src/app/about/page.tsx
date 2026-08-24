
"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Sparkles,
  Moon,
  Compass,
  ArrowRight,
  Fingerprint,
} from "lucide-react";

import Link from "next/link";

import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowIcon } from "@/components/ui/GlowIcon";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090B] text-[#F4F1EA]">

      {/* ========================================================= */}
      {/* ATMOSPHERE */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            left-1/2
            top-[-220px]
            h-[650px]
            w-[650px]
            -translate-x-1/2
            rounded-full
            bg-[#D6B25E]/[0.07]
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            right-[-200px]
            top-[700px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#8B5CF6]/[0.05]
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            left-[-250px]
            top-[1300px]
            h-[550px]
            w-[550px]
            rounded-full
            bg-[#D6B25E]/[0.04]
            blur-[180px]
          "
        />

      </div>


      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative pt-40 pb-28 md:pt-48 md:pb-36">

        <Container>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            className="mx-auto max-w-5xl text-center"
          >

            <div className="flex justify-center">

              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#D6B25E]/20
                  bg-[#D6B25E]/[0.04]
                  px-5
                  py-2
                  backdrop-blur-xl
                "
              >

                <Sparkles
                  size={14}
                  className="text-[#D6B25E]"
                />

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.4em]
                    text-[#D6B25E]
                  "
                >
                  About SoulMirror
                </span>

              </div>

            </div>


            <h1
              className="
                mt-10
                font-[family:var(--font-cormorant)]
                text-6xl
                font-light
                leading-[0.95]
                tracking-tight
                md:text-8xl
              "
            >
              A mirror
              <br />

              <span className="text-white/45">
                for your inner world.
              </span>
            </h1>


            <p
              className="
                mx-auto
                mt-10
                max-w-2xl
                text-base
                leading-8
                text-white/55
                md:text-lg
              "
            >
              SoulMirror AI is a personal intelligence
              experience designed to help you explore
              who you are, what you feel and the patterns
              shaping your life.
            </p>

          </motion.div>


          {/* HERO ORB */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              delay: 0.2,
            }}
            className="
              relative
              mx-auto
              mt-20
              flex
              h-56
              w-56
              items-center
              justify-center
              md:h-72
              md:w-72
            "
          >

            <div
              className="
                absolute
                inset-0
                rounded-full
                border
                border-[#D6B25E]/20
              "
            />

            <div
              className="
                absolute
                inset-8
                rounded-full
                border
                border-white/10
              "
            />

            <div
              className="
                absolute
                inset-16
                rounded-full
                bg-[#D6B25E]/10
                blur-2xl
              "
            />

            <Fingerprint
              size={42}
              strokeWidth={1}
              className="
                relative
                z-10
                text-[#D6B25E]/80
              "
            />

          </motion.div>

        </Container>

      </section>


      {/* ========================================================= */}
      {/* PHILOSOPHY */}
      {/* ========================================================= */}

      <section className="relative py-28 md:py-36">

        <Container>

          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
              }}
              className="lg:col-span-5"
            >

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.45em]
                  text-[#D6B25E]
                "
              >
                Our Philosophy
              </p>

              <h2
                className="
                  mt-6
                  font-[family:var(--font-cormorant)]
                  text-5xl
                  font-light
                  leading-tight
                  md:text-6xl
                "
              >
                Technology should
                <br />
                help us understand
                <br />
                ourselves.
              </h2>

            </motion.div>


            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="lg:col-span-7"
            >

              <GlassCard
                highlight
                className="
                  relative
                  overflow-hidden
                  p-8
                  md:p-12
                "
              >

                <div
                  className="
                    pointer-events-none
                    absolute
                    right-[-100px]
                    top-[-100px]
                    h-72
                    w-72
                    rounded-full
                    bg-[#D6B25E]/10
                    blur-[120px]
                  "
                />

                <div className="relative z-10 space-y-6">

                  <p
                    className="
                      text-lg
                      leading-9
                      text-white/65
                    "
                  >
                    Modern AI can answer questions,
                    generate content and automate tasks.
                    We believe it can also become something
                    more personal.
                  </p>

                  <p
                    className="
                      text-lg
                      leading-9
                      text-white/65
                    "
                  >
                    SoulMirror was created around a simple
                    idea: intelligence becomes more meaningful
                    when it understands the person behind
                    the question.
                  </p>

                  <p
                    className="
                      text-lg
                      leading-9
                      text-white/65
                    "
                  >
                    Instead of simply giving you answers,
                    SoulMirror is designed to help you notice
                    patterns, reflect on experiences and
                    develop a deeper understanding of yourself.
                  </p>

                </div>

              </GlassCard>

            </motion.div>

          </div>

        </Container>

      </section>


      {/* ========================================================= */}
      {/* THREE DIMENSIONS */}
      {/* ========================================================= */}

      <section className="relative py-28 md:py-36">

        <Container>

          <div className="mx-auto max-w-3xl text-center">

            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.45em]
                text-[#D6B25E]
              "
            >
              The SoulMirror Approach
            </p>

            <h2
              className="
                mt-6
                font-[family:var(--font-cormorant)]
                text-5xl
                font-light
                md:text-6xl
              "
            >
              Three dimensions.
              <br />
              One evolving picture.
            </h2>

            <p
              className="
                mt-6
                leading-8
                text-white/50
              "
            >
              SoulMirror brings different forms of reflection
              together to create a more complete picture of
              your inner world.
            </p>

          </div>


          <div
            className="
              mt-16
              grid
              gap-6
              md:grid-cols-3
            "
          >

            {[
              {
                icon: Brain,
                number: "01",
                title: "Identity",
                description:
                  "Explore emotions, archetypes, personality patterns and the forces shaping the way you see yourself.",
              },
              {
                icon: Moon,
                number: "02",
                title: "Dreams",
                description:
                  "Turn dreams and symbolic experiences into opportunities for reflection and deeper interpretation.",
              },
              {
                icon: Compass,
                number: "03",
                title: "Evolution",
                description:
                  "Build an evolving personal intelligence layer that can connect insights across your journey.",
              },
            ].map((item, index) => (

              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
              >

                <GlassCard
                  className="
                    h-full
                    p-8
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#D6B25E]/20
                  "
                >

                  <div className="flex items-center justify-between">

                    <GlowIcon>

                      <item.icon
                        size={20}
                        className="text-[#D6B25E]"
                      />

                    </GlowIcon>

                    <span
                      className="
                        text-[10px]
                        tracking-[0.3em]
                        text-white/25
                      "
                    >
                      {item.number}
                    </span>

                  </div>


                  <h3
                    className="
                      mt-8
                      font-[family:var(--font-cormorant)]
                      text-3xl
                      font-light
                    "
                  >
                    {item.title}
                  </h3>


                  <p
                    className="
                      mt-4
                      text-sm
                      leading-7
                      text-white/50
                    "
                  >
                    {item.description}
                  </p>

                </GlassCard>

              </motion.div>

            ))}

          </div>

        </Container>

      </section>


      {/* ========================================================= */}
      {/* INTELLIGENCE */}
      {/* ========================================================= */}

      <section className="relative py-28 md:py-36">

        <Container>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            <GlassCard
              highlight
              className="
                relative
                overflow-hidden
                p-8
                md:p-16
              "
            >

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-0
                  h-96
                  w-96
                  -translate-x-1/2
                  rounded-full
                  bg-[#8B5CF6]/10
                  blur-[140px]
                "
              />

              <div
                className="
                  relative
                  z-10
                  mx-auto
                  max-w-4xl
                  text-center
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
                  Personal Intelligence
                </p>

                <h2
                  className="
                    mt-6
                    font-[family:var(--font-cormorant)]
                    text-5xl
                    font-light
                    md:text-6xl
                  "
                >
                  Intelligence that
                  <br />
                  becomes more personal over time.
                </h2>

                <p
                  className="
                    mx-auto
                    mt-7
                    max-w-2xl
                    leading-8
                    text-white/55
                  "
                >
                  Your reflections are not isolated moments.
                  Together, they can reveal recurring themes,
                  emotional patterns and meaningful changes
                  across your journey.
                </p>


                <div
                  className="
                    mt-12
                    flex
                    flex-wrap
                    justify-center
                    gap-3
                  "
                >

                  {[
                    "Memory",
                    "Reflection",
                    "Patterns",
                    "Archetypes",
                    "Evolution",
                  ].map((item) => (

                    <span
                      key={item}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-5
                        py-2.5
                        text-xs
                        text-white/45
                      "
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

            </GlassCard>

          </motion.div>

        </Container>

      </section>


      {/* ========================================================= */}
      {/* QUOTE */}
      {/* ========================================================= */}

      <section className="relative py-28 md:py-40">

        <Container>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
            }}
            className="mx-auto max-w-4xl text-center"
          >

            <div
              className="
                mx-auto
                mb-8
                h-px
                w-20
                bg-gradient-to-r
                from-transparent
                via-[#D6B25E]
                to-transparent
              "
            />

            <p
              className="
                font-[family:var(--font-cormorant)]
                text-4xl
                font-light
                leading-tight
                text-[#F4F1EA]
                md:text-6xl
              "
            >
              "The better we understand
              <br />
              ourselves, the more consciously
              <br />
              we can shape what comes next."
            </p>

            <p
              className="
                mt-8
                text-[10px]
                uppercase
                tracking-[0.4em]
                text-[#D6B25E]/70
              "
            >
              The SoulMirror Philosophy
            </p>

          </motion.div>

        </Container>

      </section>


      {/* ========================================================= */}
      {/* EON */}
      {/* ========================================================= */}

      <section className="relative py-28">

        <Container>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              mx-auto
              max-w-3xl
              text-center
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
              Built by EON AI
            </p>

            <h2
              className="
                mt-6
                font-[family:var(--font-cormorant)]
                text-5xl
                font-light
                md:text-6xl
              "
            >
              Intelligence designed
              <br />
              around human potential.
            </h2>

            <p
              className="
                mx-auto
                mt-7
                max-w-2xl
                leading-8
                text-white/50
              "
            >
              SoulMirror is part of EON AI's vision to create
              personal intelligence systems that grow around
              memory, identity and human potential.
            </p>

          </motion.div>

        </Container>

      </section>


      {/* ========================================================= */}
      {/* CTA */}
      {/* ========================================================= */}

      <section className="relative pb-32 pt-16 md:pb-44">

        <Container>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              mx-auto
              max-w-3xl
              text-center
            "
          >

            <h2
              className="
                font-[family:var(--font-cormorant)]
                text-5xl
                font-light
                md:text-6xl
              "
            >
              Your journey starts
              <br />
              with a single reflection.
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-xl
                leading-8
                text-white/45
              "
            >
              Step inside SoulMirror and begin exploring
              the world within.
            </p>


            <Link
              href="/#soul-scan"
              className="
                group
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-2xl
                border
                border-[#D6B25E]/30
                bg-gradient-to-r
                from-[#D6B25E]/10
                to-[#8B5CF6]/10
                px-7
                py-3.5
                text-sm
                text-[#F4F1EA]
                transition-all
                duration-500
                hover:border-[#D6B25E]/60
                hover:shadow-[0_0_40px_rgba(214,178,94,0.15)]
              "
            >

              Begin Your Journey

              <ArrowRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />

            </Link>

          </motion.div>

        </Container>

      </section>


      {/* ========================================================= */}
      {/* FOOTER SPACER */}
      {/* ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-[#D6B25E]/30
          to-transparent
        "
      />

    </main>
  );
}

