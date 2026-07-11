"use client";

import { useEffect } from "react";
import { useSoulMemoryStore } from "@/store/soul-memory-store";


export function SoulMemoryLoader() {

  const setMemory =
    useSoulMemoryStore(
      (state) => state.setMemory
    );


  useEffect(() => {

    async function loadMemory() {

      try {

        const response =
          await fetch(
            "/api/soul-memory"
          );


        if (!response.ok) {
          return;
        }


        const data =
          await response.json();


        if (!data) {
          return;
        }


        setMemory({

  archetype:
    data.archetype ?? "Unknown",

  emotion:
    data.emotion ?? "Calm",

  insight:
    data.insight ?? "",

  shadow:
    data.shadow ?? "",

});


      } catch(error){

        console.error(
          "SOUL MEMORY LOAD ERROR:",
          error
        );

      }

    }


    loadMemory();


  }, [setMemory]);


  return null;
}