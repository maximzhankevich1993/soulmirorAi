"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

interface Props {
  children: ReactNode;
}

export function SmoothScroll({ children }: Props) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1,
      wheelMultiplier: 1,
    });

    let animationFrame = 0;

    function raf(time: number) {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    }

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}