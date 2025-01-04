import React from "react";
import Link from "next/link";
import formatDate from "@/utils/formatDate";

import { News } from "@/types/news";
import { cn } from "@/lib/utils";

import AppImage from "../ui/app-image";

type TCardNews = {
  size?: "md" | "lg";
  data?: News;
} & React.HTMLAttributes<HTMLDivElement>;

const CardNews = ({ size = "md", className, data, ...rest }: TCardNews) => {
  return (
    <div
      className={cn(
        "flex max-h-[450px] w-full flex-col gap-node rounded-2xl bg-white shadow-md",
        { "max-h-[750px]": size === "lg" },
        className
      )}
      {...rest}
    >
      <AppImage
        src={data?.thumbnail ?? "/images/placeholder.jpg"}
        alt="thumbnail news"
        ratio={16 / 9}
        className="!max-h-[300px] rounded-tl-2xl rounded-tr-2xl"
        container=" overflow-hidden max-h-[300px]"
      />
      <div className="content flex-1 px-5 pb-10">
        <div className="flex flex-col gap-2">
          <span className="text-secondary">{formatDate(data?.createdAt)}</span>
          <Link
            href={`/tin-tuc/${data?._id}`}
            className="line-clamp-2 cursor-pointer font-medium uppercase hover:underline"
          >
            {data?.title}
          </Link>
        </div>
        <p
          className={cn("short-description max-xs:hidden", {
            hidden: size === "md",
            "line-clamp-4": size === "lg",
          })}
        >
          {data?.shortDescription}
        </p>
      </div>
    </div>
  );
};

export default CardNews;
