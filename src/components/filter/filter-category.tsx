import React from "react";
import { CategoryService } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query";

import { cn } from "@/lib/utils";

import { Badge } from "../ui/badge";

interface FilterCategoryProps {
  className?: string;
  filterCategories?: string[];
  onChangeCallback?: (category: string) => void;
}

const FilterCategory = ({
  className,
  filterCategories,
  onChangeCallback,
}: FilterCategoryProps) => {
  // const queryClient = useQueryClient();

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => CategoryService.getAll(),
    staleTime: Infinity,
  });

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <Badge
        className={cn("bor w-max cursor-pointer px-2 text-gray-500", {
          "bg-primary text-white":
            !filterCategories || filterCategories.length === 0,
        })}
        variant={
          !filterCategories || filterCategories.length === 0
            ? "default"
            : "outline"
        }
        onClick={() => {
          if (onChangeCallback) onChangeCallback("????");
        }}
      >
        Tất cả
      </Badge>

      {categories?.payload.map((category) => (
        <Badge
          key={category._id}
          className={cn("bor w-max cursor-pointer px-2 text-gray-500", {
            "bg-primary text-white": filterCategories?.includes(
              category.categoryName
            ),
          })}
          onClick={() => {
            if (onChangeCallback) onChangeCallback(category.categoryName);
          }}
          variant={
            filterCategories?.includes(category.categoryName)
              ? "default"
              : "outline"
          }
          // onMouseEnter={() => {
          //   queryClient.prefetchQuery({
          //     queryKey: []
          //   })
          // }}
        >
          {category.categoryName}
        </Badge>
      ))}
    </div>
  );
};

export default FilterCategory;
