"use client";

import React from "react";
import { NewsService } from "@/services/newsService";
import { useQuery } from "@tanstack/react-query";

import CardNews from "@/components/card/card-news";

import CardNewsSkeleton from "../card/card-news-skeleton";

const LatestNews = () => {
  const { data } = useQuery({
    queryKey: ["news", "4latest"],
    queryFn: async () => {
      return await NewsService.getAll({ pageSize: 5 });
    },
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-node max-xs:grid-cols-1 max-md:grid-cols-1">
      {data
        ? data?.payload
            .slice(0, 1)
            .map((news) => (
              <CardNews key={news._id} data={news} className="" size="lg" />
            ))
        : Array.from({ length: 1 }).map((_, index) => (
            <CardNewsSkeleton key={index + 1} size="lg" />
          ))}

      <div className="not-important-news grid grid-cols-2 gap-node max-xs:grid-cols-1">
        {data
          ? data?.payload
              .slice(1)
              .map((news) => (
                <CardNews key={news._id} data={news} className="" size="md" />
              ))
          : Array.from({ length: 4 }).map((_, index) => (
              <CardNewsSkeleton key={index + 1} size="md" />
            ))}
      </div>
    </div>
  );
};

export default LatestNews;
