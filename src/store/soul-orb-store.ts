import { create } from "zustand";
import type { SoulState } from "@/components/soul-space/SoulOrbStates";


interface SoulOrbStore {
  state: SoulState;

  setState: (
    state: SoulState
  ) => void;
}


export const useSoulOrbStore =
  create<SoulOrbStore>((set) => ({
    state: "calm",

    setState: (state) =>
      set({
        state,
      }),
  }));