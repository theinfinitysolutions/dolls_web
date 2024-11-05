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
  setShowSongsModal: (modal) => set({ showSongsModal: modal }),
  hoverCarousel: false,
  setHoverCarousel: (hover) => set(hover),
  sidebar: {
    show: false,
  },
  setShow: (sidebar) => set((state) => (state.sidebar = sidebar)),
}));

export default useStore;
