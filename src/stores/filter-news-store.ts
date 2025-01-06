import { NewsSearchParams } from "@/types/news";
import { create } from "zustand";

type TFilter = Partial<NewsSearchParams>
type TFilterNewsStore = {
  filter: TFilter;
  updateFilter: (value: TFilter) => void;
};

const useFilterNews = create<TFilterNewsStore>((set) => ({
  filter: false,
  updateFilter: (value) =>
    set(() => ({
      filter: value,
    })),
}));

export { useFilterNews };
