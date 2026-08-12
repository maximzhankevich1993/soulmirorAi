"use client";

import { useCallback, useEffect, useState } from "react";
import { useJourneyStore } from "@/store/journey-store";

export interface JourneyItem {
  id: string;
  type: "soul" | "dream" | "tarot";
  title: string;
  description: string;
  date: string;
}

export function useSoulJourney() {
  const items = useJourneyStore((state) => state.items);
  const setItems = useJourneyStore((state) => state.setItems);

  const [loading, setLoading] = useState(true);

  const loadJourney = useCallback(async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/journey");

      if (!response.ok) {
        throw new Error("Failed to load journey");
      }

      const data: JourneyItem[] = await response.json();

      setItems(data);
    } catch (error) {
      console.error("Journey error:", error);
    } finally {
      setLoading(false);
    }
  }, [setItems]);

  useEffect(() => {
    void loadJourney();
  }, [loadJourney]);

  return {
    items,
    loading,
    reload: loadJourney,
  };
}