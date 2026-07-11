"use client";

import { useEffect, useState } from "react";

export function SoulOrbInteraction() {
  const [energy, setEnergy] = useState(50);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const x =
        event.clientX / window.innerWidth;

      const y =
        event.clientY / window.innerHeight;

      const value =
        Math.round(
          ((x + y) / 2) * 100
        );

      setEnergy(value);
    };

    window.addEventListener(
      "mousemove",
      handleMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMove
      );
    };
  }, []);

  return {
    energy,
    intensity:
      1 + energy / 100,
    scale:
      1 + energy / 1000,
  };
}