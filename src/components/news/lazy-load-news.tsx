import React, { memo } from "react";
import { NewsService } from "@/services/newsService";
import { useQuery } from "@tanstack/react-query";

import { useObserver } from "@/hooks/useObserver";

import CardNews from "../card/card-news";
import CardNewsSkeleton from "../card/card-news-skeleton";

interface LazyLoadNewsProps {
  page: number;
  pageSize: number;
}

const LazyLoadNews = ({ page, pageSize }: LazyLoadNewsProps) => {
  const [pageLazy, setPageLazy] = React.useState(page);

  const { data } = useQuery({
    queryKey: ["news", page],
    queryFn: async () =>
      await NewsService.getAll({
        pageNumber: page,
        pageSize,
      }),
    staleTime: 1000 * 60 * 5,
  });

  // console.log(
  //   "s",
  //   page,
  //   pageSize,
  //   data?.payload.slice(...(pageSize === 17 ? [0, -1] : [0]))
  // );

  useObserver(
    { targetElementId: "end_observe", action: () => setPageLazy(page + 1) },
    [data]
  );
  return (
    <>
      {!data &&
        Array.from({ length: 16 }).map((_, index) => (
          <CardNewsSkeleton key={index + 1} className="" />
        ))}
      {data?.payload.map((news, index) => {
        const isEndObserve =
          index === data.payload.length - 1 && page === pageLazy;

        return (
          <CardNews
            key={index + 1}
            id={isEndObserve ? "end_observe" : `observe ${page}` + index}
            data={news}
            className="animate-fadeIn"
          />
        );
      })}
      {data && data.payload.length > 0 && pageLazy !== page && (
        <LazyLoadNews page={pageLazy} pageSize={17} />
      )}
      <div></div>
    </>
  );
};

export default memo(LazyLoadNews);
