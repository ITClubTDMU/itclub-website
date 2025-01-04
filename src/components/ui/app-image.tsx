"use client";

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
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  return (
    <div
      className={cn(
        "relative h-full w-full",
        {
          "bg-gray-200 blur-sm": isLoading,
        },
        container
      )}
    >
      {isError ? (
        <AspectRatio ratio={ratio}>
          <Image src={"/placeholder.webp"} alt="error img" />
        </AspectRatio>
      ) : (
        <>
          {ratio ? (
            <AspectRatio ratio={ratio}>
              <Image
                src={src}
                alt={alt}
                fill
                {...rest}
                className={cn("object-cover", className)}
                onLoad={() => {
                  setIsLoading(false);
                }}
                onError={() => setIsError(true)}
              />
            </AspectRatio>
          ) : (
            <Image
              src={src}
              alt={alt}
              fill
              {...rest}
              className={cn("object-cover", className)}
              onLoad={() => {
                setIsLoading(false);
              }}
              onError={() => setIsError(true)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default AppImage;
