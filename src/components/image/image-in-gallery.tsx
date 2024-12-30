import React from "react";
import Image, { ImageProps } from "next/image";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { AspectRatio } from "../ui/aspect-ratio";

const imageVariants = cva("relative h-full w-full", {
  variants: {
    rowSpan: {
      default: "row-span-1",
      "2": "row-span-2",
      "3": "row-span-3",
      "4": "row-span-4",
      "5": "row-span-5",
    },
    colSpan: {
      default: "col-span-1",
      "2": "col-span-2",
      "3": "col-span-3",
      "4": "col-span-4",
      "5": "col-span-5",
    },
  },
  defaultVariants: {
    colSpan: "default",
    rowSpan: "default",
  },
});

export interface ImageInGalleryProps
  extends ImageProps,
    VariantProps<typeof imageVariants> {
  container?: string;
  ratio?: number;
}

const ImageInGallery = ({
  alt,
  ratio,
  className,
  container,
  rowSpan,
  colSpan,
  ...rest
}: ImageInGalleryProps) => {
  console.log(colSpan, rowSpan)
  return (
    <div
      className={cn(imageVariants({ colSpan, rowSpan, className: container }))}
    >
      {!ratio ? (
        <Image
          alt={alt}
          fill
          {...rest}
          className={cn("object-cover", className)}
        />
      ) : (
        <AspectRatio ratio={ratio} className="absolute">
          <Image
            alt={alt}
            fill
            {...rest}
            className={cn("object-cover", className)}
          />
        </AspectRatio>
      )}
    </div>
  );
};

export default ImageInGallery;
