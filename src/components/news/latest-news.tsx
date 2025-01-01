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
      return await NewsService.getAll({ pageSize: 4 });
    },
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div className="not-important-news grid grid-cols-2 gap-node max-sm:grid-cols-1  mx-auto">
      {data
        ? data?.payload.map((news) => <CardNews key={news._id} data={news} className="" size="lg" />)
        : Array.from({ length: 4 }).map((_, index) => (
            <CardNewsSkeleton key={index + 1} />
          ))}
    </div>
  );
};

export default LatestNews;
