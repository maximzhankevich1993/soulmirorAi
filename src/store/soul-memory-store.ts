import { create } from "zustand";


interface SoulMemory {

  archetype: string;

  emotion: string;

  insight: string;

  shadow: string;


  setMemory: (
    data: Partial<SoulMemory>
  ) => void;


  clearMemory: () => void;

}


export const useSoulMemoryStore =
  create<SoulMemory>((set) => ({

    archetype: "Unknown",

    emotion: "Calm",

    insight: "",

    shadow: "",


    setMemory: (data) =>
      set((state) => ({
        ...state,
        ...data,
      })),


    clearMemory: () =>
      set({
        archetype: "Unknown",
        emotion: "Calm",
        insight: "",
        shadow: "",
      }),

  }));