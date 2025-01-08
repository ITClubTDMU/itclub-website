"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { NewsService } from "@/services/newsService";
import { useFilterNews } from "@/stores/filter-news-store";
import { useQuery } from "@tanstack/react-query";

import { cn } from "@/lib/utils";
import CardNews from "@/components/card/card-news";

import CardNewsSkeleton from "../card/card-news-skeleton";
import NoData from "../error/no-data";
import ServerError from "../error/server-error";
import ViewMore from "./view-more";

interface LatestNewsProps {
  className?: string;
}

const LatestNews = ({ className }: LatestNewsProps) => {
  const filter = useFilterNews((state) => state.filter);

  const path = usePathname();

  const { data, isPending, isError } = useQuery({
    queryKey: ["news", "4latest", filter],
    queryFn: async () => {
      return await NewsService.getAll({ ...filter, pageSize: 5 });
    },
    staleTime: 1000 * 60 * 10,
  });

  // console.log("status ", isPending, isPaused, isError, isRefetching, isFetching);

  if (isError && !data) {
    return <ServerError />;
  }
  return (
    <>
      {data && (
        <div
          className={cn(
            "mx-auto grid grid-cols-2 gap-node max-sm:grid-cols-1",
            className
          )}
        >
          {data?.payload
            .slice(0, 1)
            .map((news) => <CardNews key={news._id} data={news} size="lg" />)}

          <div className="not-important-news grid grid-cols-2 grid-rows-2 gap-node max-xs:grid-cols-1 max-xs:grid-rows-none">
            {data?.payload
              .slice(1)
              .map((news) => <CardNews key={news._id} data={news} size="md" />)}
          </div>
        </div>
      )}

      {isPending && (
        <div className="mx-auto grid grid-cols-2 gap-node max-sm:grid-cols-1">
          <CardNewsSkeleton size="lg" />

          <div className="not-important-news grid grid-cols-2 grid-rows-2 gap-node max-xs:grid-cols-1 max-xs:grid-rows-none">
            {Array.from({ length: 4 }).map((_, id) => (
              <CardNewsSkeleton key={id + 1} size="md" />
            ))}
          </div>
        </div>
      )}

      {data &&
        data.payload.length > 5 &&
        (path.startsWith("/tin-tuc") || path.startsWith("/")) && <ViewMore />}

      {data?.payload.length === 0 && !isPending && <NoData />}
    </>
  );
};

export default LatestNews;
