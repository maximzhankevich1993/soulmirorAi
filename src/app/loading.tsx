"use client";

import { useEffect, useState } from "react";

import { CinematicLoader } from "../../components/loading/CinematicLoader";

const MIN_LOADING_TIME = 4000;

export default function Loading() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setReady(true);
    }, MIN_LOADING_TIME);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  if (!ready) {
    return <CinematicLoader />;
  }

  return <CinematicLoader />;
}