import { create } from "zustand";

import { NewsSearchParams } from "@/types/news";

type TFilter = Partial<NewsSearchParams>;
type TFilterNewsStore = {
  filter: TFilter;
  updateFilter: (value: TFilter) => void;
};

const useFilterNews = create<TFilterNewsStore>((set) => ({
  filter: false,
  updateFilter: (value) =>
    set(() => {
      if(value.categories?.length === 0)  {
        delete value.categories;
      }
      for (const key in value) {
        if (!value[key as keyof TFilter] ) {
          delete value[key as keyof TFilter];
        }
      }
      return {
        filter: value,
      };
    }),
}));

export { useFilterNews };
