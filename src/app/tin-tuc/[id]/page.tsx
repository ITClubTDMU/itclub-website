"use client";

import React from "react";
import { useParams } from "next/navigation";
import { NewsService } from "@/services/newsService";
import { useQuery } from "@tanstack/react-query";

import AppImage from "@/components/ui/app-image";

const DetailNews = () => {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["news", id],
    queryFn: async () => {
      return await NewsService.get(id as string);
    },
    staleTime: 1000 * 60 * 10,
  });

  return (
    <div className="min-h-screen pb-20">
      <div className="relative h-max w-full">
        <AppImage
          src={data?.payload.thumbnail ?? "/images/placeholder.jpg"}
          ratio={16 / 9}
          alt="banner-activity"
          container="max-h-[calc(100vh-var(--affix-header)-70px)] overflow-hidden mb-section"
        />
      </div>

      <div className="mx-auto max-w-[720px] px-6">{data?.payload.content}</div>
    </div>
  );
};

export default DetailNews;
