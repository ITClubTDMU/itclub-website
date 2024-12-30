import React from "react";

import { cn } from "@/lib/utils";

import AppImage from "../ui/app-image";
import { News } from "@/types/news";
import formatDate from "@/utils/formatDate";
import Link from "next/link";

type TCardNews = {
  size?: "md" | "lg";
  data?: News;
} & React.HTMLAttributes<HTMLDivElement>;

const CardNews = ({ size = "md", className, data, ...rest }: TCardNews) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-node rounded-2xl bg-white shadow-md",
        className
      )}
      {...rest}
    >
      <AppImage
        src={data?.thumbnail ?? "/images/placeholder.jpg"}
        alt="thumbnail news"
        fill
        ratio={16 / 9}
        className="rounded-tl-2xl rounded-tr-2xl"
        container="max-h-max"
      />
      <div className="content px-5 pb-10">
        <div className="flex flex-col gap-2 font-medium">
          <span className="text-secondary">{formatDate(data?.createdAt)}</span>
          <Link href={`/tin-tuc/${data?._id}`} className="line-clamp-2 cursor-pointer uppercase hover:underline">
            {data?.title} {data?._id}
          </Link>
        </div>
        <p
          className={cn("short-description", {
            hidden: size === "md",
            "line-clamp-6": size === "lg",
          })}
        >
          {data?.shortDescription}
        </p>
      </div>
    </div>
  );
};




export default CardNews;
