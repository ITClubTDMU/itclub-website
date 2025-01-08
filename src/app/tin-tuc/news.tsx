"use client";

import React, { useState } from "react";
import { NewsService } from "@/services/newsService";
import { useFilterNews } from "@/stores/filter-news-store";
import { useQuery } from "@tanstack/react-query";

import { useObserver } from "@/hooks/useObserver";
import { useTriggerLoadingApp } from "@/hooks/useTriggerLoadingApp";
import CardNews from "@/components/card/card-news";
import CardNewsSkeleton from "@/components/card/card-news-skeleton";
import LatestNews from "@/components/news/latest-news";
import LazyLoadNews from "@/components/news/lazy-load-news";
import ScrollToTop from "@/components/scroll-to-top";
import SectionHeading from "@/components/section/heading";

import FilterNews from "./filter-news";

const News = () => {
  useTriggerLoadingApp(false);

  const filter = useFilterNews((state) => state.filter);
  const [page, setPage] = useState(1);

  const { data, isPending } = useQuery({
    queryKey: ["news", "page1", filter],
    queryFn: async () =>
      await NewsService.getAll({
        ...filter,
        pageNumber: page,
        pageSize: 17,
      }),
    staleTime: 1000 * 60 * 5,
    retry: 3,
  });

  useObserver(
    {
      targetElementId: "end_observe",
      action: () => setPage(page + 1),
    },
    [data]
  );

  return (
    <div className="mx-auto mt-3 w-full max-w-[1200px] px-extraPageHorizontal pb-40">
      <ScrollToTop elementId="news_backToTop" />
      <SectionHeading text="Tin tức" />

      <LatestNews />

      <div
        className="list mt-node grid w-full gap-node xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-xs:grid-cols-1"
        id="container_news"
      >
        {data?.payload
          .slice(5)
          .map((news, index) => (
            <CardNews
              key={index + 1}
              id={
                index === 11 && page === 1 ? "end_observe" : "observe" + index
              }
              data={news}
              className="animate-fadeIn"
            />
          ))}

        {!data &&
          isPending &&
          Array.from({ length: 12 }).map((_, index) => (
            <CardNewsSkeleton key={index + 1} />
          ))}
        {page > 1 && <LazyLoadNews page={page} pageSize={17} />}
      </div>

      <FilterNews />
    </div>
  );
};

export default News;
