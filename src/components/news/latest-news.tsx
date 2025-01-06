"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { NewsService } from "@/services/newsService";
import { useQuery } from "@tanstack/react-query";

import CardNews from "@/components/card/card-news";

import CardNewsSkeleton from "../card/card-news-skeleton";
import ViewMore from "./view-more";

const LatestNews = () => {
  const path = usePathname();

  const { data, isPending, isError, isRefetching, isFetching } = useQuery({
    queryKey: ["news", "4latest"],
    queryFn: async () => {
      return await NewsService.getAll({ pageSize: 5 });
    },
    staleTime: 1000 * 60 * 10,
  });

  console.log("status ", isPending, isError, isRefetching, isFetching);
  return (
    <>
      {data && (
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-node max-sm:grid-cols-1">
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
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-node max-sm:grid-cols-1">
          <CardNewsSkeleton size="lg" />

          <div className="not-important-news grid grid-cols-2 grid-rows-2 gap-node max-xs:grid-cols-1 max-xs:grid-rows-none">
            {Array.from({ length: 4 }).map((_, id) => (
              <CardNewsSkeleton key={id + 1} size="md" />
            ))}
          </div>
        </div>
      )}

      {data && data.payload.length > 5 && path.startsWith("/tin-tuc") && (
        <ViewMore />
      )}
    </>
  );
};

export default LatestNews;
