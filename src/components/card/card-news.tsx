import React from "react";

import { cn } from "@/lib/utils";

import AppImage from "../ui/app-image";

type TCardNews = {
  size?: "md" | "lg";
} & React.HTMLAttributes<HTMLDivElement>;

const CardNews = ({ size = "md", className, ...rest }: TCardNews) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-node rounded-2xl bg-white shadow-md",
        className
      )}
      {...rest}
    >
      <AppImage
        src={"/icpc.jpg"}
        alt="thumbnail news"
        fill
        ratio={16 / 9}
        className="rounded-tl-2xl rounded-tr-2xl"
        container="max-h-max"
      />
      <div className="content px-5 pb-10">
        <div className="flex flex-col gap-2 font-medium">
          <span className="text-secondary">24 Th01 2024</span>
          <span className="line-clamp-2 cursor-pointer uppercase hover:underline">
            Muôn vàng câu chúc chào đón xuân sang
          </span>
        </div>
        <p
          className={cn("short-description", {
            hidden: size === "md",
            "line-clamp-6": size === "lg",
          })}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odio
          tempore ratione dolorum a incidunt nisi et. Autem excepturi, dolor,
          nobis maiores quam officia unde sunt doloribus quasi blanditiis
          laboriosam.
        </p>
      </div>
    </div>
  );
};

export default CardNews;
