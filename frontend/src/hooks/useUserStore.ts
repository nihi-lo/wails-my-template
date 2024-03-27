import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export interface UserState {
  name: string;
}

export interface UserAction {
  updateName: (by: string) => void;
}

export const useUserStore = create<UserState & UserAction>()(
  persist(
    immer((set) => ({
      name: "",
      updateName: (by) => set((state) => void (state.name = by)),
    })),
    { name: "userStore" },
  ),
);
