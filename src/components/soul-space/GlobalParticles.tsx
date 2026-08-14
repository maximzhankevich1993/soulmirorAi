"use client";

import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

function createParticles(): Particle[] {
  return Array.from({ length: 45 }, (_, index) => {
    /*
     * Deterministic values.
     *
     * We intentionally do not use Math.random()
     * because this component is rendered during SSR.
     * Using deterministic values prevents hydration mismatch.
     */

    const x = (index * 37.17) % 100;
    const y = (index * 61.43) % 100;

    const size = 1 + ((index * 17) % 20) / 10;

    const duration = 15 + ((index * 13) % 20);

    const delay = ((index * 7) % 10) / 2;

    return {
      id: index,
      x,
      y,
      size,
      duration,
      delay,
    };
  });
}

export function GlobalParticles() {
  const particles = createParticles();

  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        -z-20
        overflow-hidden
      "
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            opacity: 0,
            x: `${particle.x}vw`,
            y: `${particle.y}vh`,
          }}
          animate={{
            opacity: [0, 0.7, 0],
            y: [
              `${particle.y}vh`,
              `${particle.y - 8}vh`,
              `${particle.y}vh`,
            ],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            rounded-full
            bg-[#D6B25E]
            shadow-[0_0_15px_rgba(214,178,94,.8)]
          "
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}
    </div>
  );
}