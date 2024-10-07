import { create } from "zustand";

interface LayoutState {
  mode: "light" | "dark";
  setMode: (value: "light" | "dark") => void;
}

export const useLayoutStore = create<LayoutState>((set) => ({
  mode: "light",
  setMode: (value: "light" | "dark") => set({ mode: value }),
}));
