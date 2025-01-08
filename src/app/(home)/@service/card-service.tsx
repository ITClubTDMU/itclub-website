"use client";

import React from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import AppImage, { TAppImageProps } from "@/components/ui/app-image";

interface CardServiceProps {
  className?: string;
  data: {
    content?: string;
    title?: string;
    imageProps?: Omit<TAppImageProps, "src"> & {
      src: string;
    };
  };
}

const CardService = ({ className, data }: CardServiceProps) => {
  return (
    <motion.div
      className={cn(
        "flex w-full flex-col gap-node rounded-2xl bg-white pb-5 shadow-md duration-300 md:hover:-translate-y-5 sm:basis-[calc((100%/3)-var(--space-node))] xs:basis-[calc(50%-var(--space-node))] shrink-0",
        className
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
    >
      <AppImage
        src={data.imageProps?.src ?? "/placeholder.webp"}
        alt="thumbnail news"
        ratio={16 / 9}
        className="rounded-tl-2xl rounded-tr-2xl"
        container="max-h-max"
        {...data.imageProps}
      />
      <div className="content flex-1 px-5">
        <div className="flex justify-center gap-2 text-lg font-medium uppercase">
          {data.title}
        </div>
        <p className={cn("content_service")}>{data.content}</p>
      </div>
    </motion.div>
  );
};

export default CardService;
