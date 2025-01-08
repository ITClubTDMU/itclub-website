import React from "react";

import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

type TCardNewsSkeleton = {
  size?: "md" | "lg";
} & React.HTMLAttributes<HTMLDivElement>;

export const CardNewsSkeleton = ({
  size = "md",
  className,
  ...rest
}: TCardNewsSkeleton) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-node rounded-2xl bg-white shadow-md",
        className
      )}
      {...rest}
    >
      {/* Skeleton for Image */}
      <Skeleton className="h-[200px] w-full rounded-tl-2xl rounded-tr-2xl" />

      {/* Content Skeleton */}
      <div className="content px-5 pb-10">
        {/* Skeleton for Date */}
        <Skeleton className="mb-2 h-4 w-1/4" />

        {/* Skeleton for Title */}
        <Skeleton className="mb-2 h-6 w-3/4" />

        {/* Skeleton for Short Description */}
        {size === "lg" && (
          <div className="space-y-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i  + 1} className="h-4 w-full" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardNewsSkeleton;
