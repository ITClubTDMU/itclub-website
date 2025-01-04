"use client";

import React from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import AppImage, { TAppImageProps } from "@/components/ui/app-image";

interface SectionServiceProps {
  content?: string;
  imageProps?: Omit<TAppImageProps, "src"> & {
    src: string;
  };
  index: number;
}

const SectionService = ({
  content,
  imageProps,
  index,
}: SectionServiceProps) => {
  return (
    <div className="group grid w-full grid-cols-4 items-center max-xs:!max-w-full max-sm:mx-auto max-sm:max-w-[80%] max-sm:grid-cols-none">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className={cn(
          "order-0 col-span-2 text-lg max-sm:order-none max-sm:px-[2rem]",
          {
            "order-1": index % 2 !== 0,
          }
        )}
      >
        {content}
      </motion.p>
      <motion.div
        className="col-span-2 max-sm:w-[100%]"
        initial={{
          opacity: 0,
          scale: 0,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 1, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
      >
        <AppImage
          ratio={4 / 3}
          src={"/sec_gia_tri.png"}
          alt="sec-gia-tri"
          {...imageProps}
        />
      </motion.div>
    </div>
  );
};

export default SectionService;
