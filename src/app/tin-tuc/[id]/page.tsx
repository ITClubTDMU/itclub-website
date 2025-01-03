"use client";

import React from "react";
import { useParams, usePathname } from "next/navigation";
import { NewsService } from "@/services/newsService";
import { useQuery } from "@tanstack/react-query";

import AppImage from "@/components/ui/app-image";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";

const DetailNews = () => {
  const path = usePathname();
  console.log(path);
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
      <AppImage
        src={data?.payload.thumbnail ?? "/images/placeholder.jpg"}
        alt={"detail image"}
        ratio={16 / 9}
      />

      {/* <div>
        <Breadcrumb>
          <BreadcrumbList>
            {}
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div> */}
      <div
        className="mx-auto max-w-[720px] px-6"
        dangerouslySetInnerHTML={{
          __html: data?.payload.content ?? "",
        }}
      ></div>

      <div className="mx-auto grid max-w-[720px] grid-cols-2 px-6">
        {data?.payload.images.map((image, index) => (
          <AppImage
            src={image}
            alt={`${index} image`}
            key={index + 1}
            ratio={16 / 9}
            container="max"
          />
        ))}
      </div>
    </div>
  );
};

export default DetailNews;
