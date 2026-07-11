"use client";

import { useEffect, useState } from "react";


interface JourneyItem {
  type: "soul" | "dream" | "tarot";
  title: string;
  description: string;
  date: string;
}


export function useSoulJourney() {

  const [items, setItems] =
    useState<JourneyItem[]>([]);


  const [loading, setLoading] =
    useState(true);


  async function loadHistory() {

    try {

      setLoading(true);


      const response =
        await fetch(
          "/api/history"
        );


      if (!response.ok) {
        throw new Error(
          "History loading failed"
        );
      }


      const data =
        await response.json();


      setItems(
        data.items || []
      );


    } catch(error){

      console.error(
        "JOURNEY ERROR:",
        error
      );


      setItems([]);


    } finally {

      setLoading(false);

    }

  }



  useEffect(() => {

    loadHistory();

  }, []);



  return {
    items,
    loading,
    refresh: loadHistory,
  };

}