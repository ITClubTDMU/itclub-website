import { create } from "zustand";

type TState = {
  data: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
};

const useStore = create<TState>((set) => ({
  data: 0,
  increasePopulation: () => set((state) => ({ data: state.data + 1 })),
  removeAllBears: () => set({ data: 0 }),
  updateBears: (newBears) => set({ data: newBears }),
}));

export { useStore };
