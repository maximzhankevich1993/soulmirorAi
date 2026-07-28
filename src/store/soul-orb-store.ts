"use client";

import { create } from "zustand";

import type {
  SoulState,
} from "@/components/soul-space/SoulOrbStates";



interface SoulOrbStore {


  /*
    Current visual state
  */

  state: SoulState;



  /*
    AI interpretation data
  */

  archetype: string | null;

  emotion: string | null;



  insight: string | null;



  energy: number;



  /*
    Actions
  */


  setState: (
    state: SoulState
  ) => void;



  setSoulData: (
    data:{
      archetype?: string;
      emotion?: string;
      insight?: string;
      energy?: number;
    }
  ) => void;



  reset:()=>void;

}





export const useSoulOrbStore =
  create<SoulOrbStore>((set)=>({



    state:"calm",


    archetype:null,


    emotion:null,


    insight:null,


    energy:1,





    setState:(state)=>{


      set({

        state,

      });


    },





    setSoulData:(data)=>{


      set((current)=>({


        archetype:
          data.archetype ??
          current.archetype,



        emotion:
          data.emotion ??
          current.emotion,



        insight:
          data.insight ??
          current.insight,



        energy:
          data.energy ??
          current.energy,


      }));


    },





    reset:()=>{


      set({

        state:"calm",

        archetype:null,

        emotion:null,

        insight:null,

        energy:1,

      });


    },



  }));