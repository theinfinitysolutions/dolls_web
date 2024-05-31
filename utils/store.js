import { create } from "zustand";

export const useStore = create((set) => ({
  currentPointer: "",
  setCurrentPointer: (pointer) => set({ currentPointer: pointer }),
}));

export default useStore;
