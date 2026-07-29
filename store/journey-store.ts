"use client";

import { create } from "zustand";

export interface JourneyItem {
  id: string;
  type: "soul" | "dream" | "tarot";
  title: string;
  description: string;
  date: string;
}

interface JourneyStore {

  items: JourneyItem[];

  setItems: (
    items: JourneyItem[]
  ) => void;

  addItem: (
    item: JourneyItem
  ) => void;

}

export const useJourneyStore =
create<JourneyStore>((set)=>({

items:[],

setItems:(items)=>
set({
items,
}),

addItem:(item)=>
set((state)=>({

items:[
item,
...state.items,
],

})),

}));