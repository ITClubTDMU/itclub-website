import React from "react";
import Image, { ImageProps } from "next/image";

import { cn } from "@/lib/utils";

import { AspectRatio } from "./aspect-ratio";

export type TAppImageProps = ImageProps & {
  container?: string;
  ratio?: number;
};

const AppImage = ({
  alt,
  ratio,
  src,
  className,
  container,
  ...rest
}: TAppImageProps) => {
  return (
    <div className={cn("relative h-full w-full", container)}>
      {ratio ? (
        <AspectRatio ratio={ratio}>
          <Image
            src={src}
            alt={alt}
            fill
            {...rest}
            className={cn("object-cover", className)}
          />
        </AspectRatio>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          {...rest}
          className={cn("object-cover", className)}
        />
      )}
    </div>
  );
};

export default AppImage;
