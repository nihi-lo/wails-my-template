import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export interface CountState {
  count: number;
}

export interface CountAction {
  decrease: (by: number) => void;
  increase: (by: number) => void;
}

export const useCountStore = create<CountState & CountAction>()(
  persist(
    immer((set) => ({
      count: 0,
      decrease: (by) => set((state) => void (state.count -= by)),
      increase: (by) => set((state) => void (state.count += by)),
    })),
    { name: "countStore" },
  ),
);
