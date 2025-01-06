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
    <div className="group flex w-full flex-col items-center xs:flex-row xs:even:flex-row-reverse sm:flex-col max-xs:!max-w-full max-xs:flex-col max-xs:even:flex-col max-sm:mx-auto max-sm:max-w-[80%] sm:even:flex-col">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className={cn(
          "text-lg xs:max-w-[50%] sm:max-w-full max-xs:max-w-full max-sm:px-[2rem]",
          {
            "": index % 2 !== 0,
          }
        )}
      >
        {content}
      </motion.p>
      <motion.div
        className="w-full sm:mt-auto max-sm:mt-0 max-sm:w-[100%]"
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
          container="mt-auto h-max"
        />
      </motion.div>
    </div>
  );
};

export default SectionService;
