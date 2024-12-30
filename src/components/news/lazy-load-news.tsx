import React, { memo, useEffect } from "react";
import { NewsService } from "@/services/newsService";
import { useQuery } from "@tanstack/react-query";

import CardNews from "../card/card-news";
import CardNewsSkeleton from "../card/card-news-skeleton";

interface LazyLoadNewsProps {
  page: number;
}

const LazyLoadNews = ({ page }: LazyLoadNewsProps) => {
  const [pageLazy, setPageLazy] = React.useState(page);
  const { data } = useQuery({
    queryKey: ["news", page],
    queryFn: async () =>
      await NewsService.getAll({
        pageNumber: page,
        pageSize: 12,
      }),
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // console.log(entry.target);
          observer.disconnect();
          setPageLazy(pageLazy + 1);
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
    <>
      {!data &&
        Array.from({ length: 12 }).map((_, index) => (
          <CardNewsSkeleton key={index + 1} className="" />
        ))}
      {data?.payload.map((news, index) => (
        <CardNews
          key={index + 1}
          id={
            index === data.payload.length - 1 && page === pageLazy
              ? "end_observe"
              : `observe ${page}` + index
          }
          data={news}
          className="animate-fadeIn"
        />
      ))}
      {data && data.payload.length > 0 && pageLazy !== page && (
        <LazyLoadNews page={pageLazy} />
      )}
      <div></div>
    </>
  );
};

export default memo(LazyLoadNews);
