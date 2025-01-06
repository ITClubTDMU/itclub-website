import React, { useEffect } from "react";
import { useFilterNews } from "@/stores/filter-news-store";
import { Filter, FilterX } from "lucide-react";
import { parseAsArrayOf, parseAsString, useQueryStates } from "nuqs";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import FilterCategory from "@/components/filter/filter-category";

const FilterNews = () => {
  const updateFilterNews = useFilterNews((state) => state.updateFilter);

  const [filter, setFilter] = useQueryStates({
    categories: parseAsArrayOf(parseAsString, ",").withDefault([]),
  });

  useEffect(() => {
    updateFilterNews(filter);
  }, [filter]);

  return (
    <div className="fixed -right-2 top-1/2">
      <Sheet>
        <SheetTrigger asChild>
          <div className="cursor-pointer rounded-full bg-white p-4 shadow-xl">
            <Filter className="text-color" />
          </div>
        </SheetTrigger>
        <SheetContent
          className="z-[999999] mr-5 mt-[calc(var(--affix-header)+2rem)] flex h-[80%] flex-col rounded-2xl"
          sheetOverlayClassname="z-[99999]"
        >
          <SheetHeader>
            <SheetTitle>Lọc tin tức</SheetTitle>
            <SheetDescription>
              Tìm kiếm tin tức theo những gì bạn muốn
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div>
              <h4 className="font-medium">Danh mục</h4>
              <FilterCategory
                filterCategories={filter.categories}
                onChangeCallback={(category) => {
                  if (category === "????") {
                    setFilter({
                      categories: [],
                    });
                    return;
                  }

                  if (!filter.categories) {
                    setFilter({
                      ...filter,
                      categories: [category],
                    });
                    return;
                  }
                  if (filter.categories.includes(category)) {
                    setFilter({
                      ...filter,
                      categories: filter.categories.filter(
                        (item) => item !== category
                      ),
                    });
                  } else {
                    setFilter({
                      ...filter,
                      categories: [...filter.categories, category],
                    });
                  }
                }}
              />
            </div>
          </div>
          <SheetFooter className="mt-auto">
            <Button
              type="button"
              onClick={() => {
                setFilter({
                  categories: [],
                });
              }}
            >
              Bỏ bộ lọc <FilterX className="!h-6 !w-6" />
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default FilterNews;
