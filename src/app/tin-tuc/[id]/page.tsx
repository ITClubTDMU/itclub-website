"use client";

import React from "react";
import { useParams } from "next/navigation";
import { NewsService } from "@/services/newsService";
import { useQuery } from "@tanstack/react-query";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ServerError from "@/components/error/server-error";
import LightBoxGallery from "@/components/gallery/light-box-gallery";

const DetailNews = () => {
  const { id } = useParams();
  // console.log("id", id);
  const { data, isPending } = useQuery({
    queryKey: ["news", id],
    queryFn: async () => {
      return await NewsService.get(id as string);
    },
    staleTime: 1000 * 60 * 10,
  });

  // console.log("data", data, isError, isPending)
  if (!isPending && !data) {
    return <ServerError />;
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="mb-section mt-6">
        <Breadcrumb>
          <BreadcrumbList className="mx-auto max-w-[80%] py-3 text-lg">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/tin-tuc">Tin tức</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{data?.payload.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <hr />
      </div>
      {/* 
      <div>
        {data?.payload.categories.map((category) => (<Bage))}
      </div> */}
      <div
        className="froala-wrapper mx-auto max-w-[720px] px-6 !font-roboto"
        dangerouslySetInnerHTML={{
          __html: data?.payload.content ?? "",
        }}
      ></div>

      <div className="relative mx-auto h-[100%] max-w-[720px] px-6">
        {data && (
          <LightBoxGallery
            photos={data.payload.images.map((img, i) => {
              return {
                height: 16,
                width: 8,
                src: img,
                alt: `image ${i + 1}`,
                title: `image ${i + 1}`,
              };
            })}
          />
        )}
      </div>
    </div>
  );
};

export default DetailNews;
