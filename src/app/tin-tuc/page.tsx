"use client";

import React, { useEffect, useState } from "react";
import { NewsService } from "@/services/newsService";
import { useQuery } from "@tanstack/react-query";

import CardNews from "@/components/card/card-news";
import LatestNews from "@/components/news/latest-news";
import LazyLoadNews from "@/components/news/lazy-load-news";
import SectionHeading from "@/components/section/heading";

const News = () => {
  const [page, setPage] = useState(1);
  // console.log("page", page);
  const { data } = useQuery({
    queryKey: ["news", "page1"],
    queryFn: async () =>
      await NewsService.getAll({
        pageNumber: 1,
        pageSize: 12,
      }),
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          setPage(page + 1);
        }
      });
    });
    const target = document.getElementById("end_observe");
    // console.log("target", target);
    if (target) observer.observe(target);
    return () => {
      if (target) observer.unobserve(target);
    };
  }, [data]);

  return (
    <div className="mx-auto mt-3 max-w-[1200px] px-extraPageHorizontal pb-40">
      <SectionHeading text="Tin tức" />
      <LatestNews />

      <div
        className="list mt-node grid gap-node xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-xs:grid-cols-1"
        id="container_news"
      >
        {data?.payload
          .slice(4)
          .map((news, index) => (
            <CardNews
              key={index + 1}
              id={index === 7 && page === 1 ? "end_observe" : "observe" + index}
              data={news}
              className="animate-fadeIn"
            />
          ))}
        {page > 1 && <LazyLoadNews page={page} />}
      </div>
    </div>
  );
};

export default News;
