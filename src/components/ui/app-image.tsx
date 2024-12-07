import React from "react";
import Image, { ImageProps } from "next/image";

import { cn } from "@/lib/utils";

import { AspectRatio } from "./aspect-ratio";

type TImageProps = ImageProps & {
  container?: string;
  ratio?: number;
};

const AppImage = ({
  alt,
  ratio,
  className,
  container,
  ...rest
}: TImageProps) => {
  return (
    <div className={cn("relative h-full w-full", container)}>
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

export default AppImage;
