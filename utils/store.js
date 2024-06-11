import { create } from "zustand";

export const useStore = create((set) => ({
  currentPointer: "",
  setCurrentPointer: (pointer) => set({ currentPointer: pointer }),
  showModal: false,
  setShowModal: (modal) => set(modal),
  showSongsModal: {
    open: false,
    song: 0,
  },
  showSongsModal: {
    open: false,
    song: 0,
  },
  setShowSongsModal: (showSongsModal) =>
    set((state) => (state.showSongsModal = showSongsModal)),
}));

export default useStore;
