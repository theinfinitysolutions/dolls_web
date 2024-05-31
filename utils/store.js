import { create } from "zustand";

export const useStore = create((set) => ({
  currentPointer: "",
  setCurrentPointer: (pointer) => set({ currentPointer: pointer }),
  showModal: false,
  setShowModal: (modal) => set(modal),
}));

export default useStore;
