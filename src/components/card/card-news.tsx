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
        "flex w-full flex-col gap-node rounded-2xl bg-white shadow-md",
        className
      )}
      {...rest}
    >
      <AppImage
        src={data?.thumbnail ?? "/images/placeholder.jpg"}
        alt="thumbnail news"
        ratio={16 / 9}
        className="rounded-tl-2xl rounded-tr-2xl"
        container=" overflow-hidden"
      />
      <div className="content flex-1 px-5 pb-10">
        <div className="flex flex-col gap-2 font-medium">
          <span className="text-secondary">{formatDate(data?.createdAt)}</span>
          <Link
            href={`/tin-tuc/${data?._id}`}
            className="line-clamp-2 cursor-pointer uppercase hover:underline"
          >
            {data?.title} {data?._id}
          </Link>
        </div>
        <p
          className={cn("short-description max-xs:hidden", {
            hidden: size === "md",
            "line-clamp-4": size === "lg",
          })}
        >
          {data?.shortDescription} Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Asperiores dolore aliquid assumenda earum laudantium
          blanditiis totam, aliquam minus quod dignissimos! Consectetur, minima
          optio placeat fugiat veritatis aperiam reiciendis perferendis
          rem?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Asperiores dolore aliquid assumenda earum laudantium blanditiis totam,
          aliquam minus quod dignissimos! Consectetur, minima optio placeat
          fugiat veritatis aperiam reiciendis perferendis rem?Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Asperiores dolore aliquid
          assumenda earum laudantium blanditiis totam, aliquam minus quod
          dignissimos! Consectetur, minima optio placeat fugiat veritatis
          aperiam reiciendis perferendis rem?
        </p>
      </div>
    </div>
  );
};

export default CardNews;
