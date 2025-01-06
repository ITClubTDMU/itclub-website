import { create } from "zustand";

type TLoadingStore = {
  isLoading: boolean;
  updateLoading: (value: boolean) => void;
};

const useLoadingStore = create<TLoadingStore>((set) => ({
  isLoading: false,
  updateLoading: (value) =>
    set(() => ({
      isLoading: value,
    })),
}));

export { useLoadingStore };
