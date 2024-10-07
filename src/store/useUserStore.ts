import { create } from "zustand";

interface UserState {
  email: string | null;
  name: string | null;
  image: string | null;
  setState: (key: keyof UserState, value: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
  email: null,
  name: null,
  image: null,
  setState: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
