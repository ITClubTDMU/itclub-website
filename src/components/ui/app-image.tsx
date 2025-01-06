"use client";

import React from "react";
import Image, { ImageProps } from "next/image";

import { cn } from "@/lib/utils";

import { AspectRatio } from "./aspect-ratio";

export type TAppImageProps = ImageProps & {
  container?: string;
  ratio?: number;
  isUseNaturalDimension?: boolean;
  onLoadCallBack?: (w: number, h: number) => void;
};

const AppImage = ({
  alt,
  ratio = 0,
  src,
  className,
  container,
  isUseNaturalDimension,
  onLoadCallBack,
  ...rest
}: TAppImageProps) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [naturalDemension, setNaturalDemension] = React.useState({
    width: 16,
    height: 9,
  });

  const calculatedRatio = naturalDemension.width / naturalDemension.height;

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
          <Image src={"/placeholder.webp"} alt="error img" fill />
        </AspectRatio>
      ) : (
        <>
          {ratio !== 0 ? (
            <AspectRatio
              ratio={isUseNaturalDimension ? calculatedRatio : ratio}
            >
              <Image
                src={src}
                alt={alt}
                fill
                {...rest}
                className={cn("object-cover", className)}
                onLoad={(e) => {
                  setNaturalDemension({
                    width: e.currentTarget.naturalWidth,
                    height: e.currentTarget.naturalHeight,
                  });
                  if (onLoadCallBack)
                    onLoadCallBack(
                      e.currentTarget.naturalWidth,
                      e.currentTarget.naturalHeight
                    );
                  setIsLoading(false);
                }}
                onError={() => setIsError(true)}
                priority={
                  typeof src === "string" &&
                  src.startsWith("https://lh3.googleusercontent")
                }
              />
            </AspectRatio>
          ) : (
            <Image
              src={src}
              alt={alt}
              fill
              {...rest}
              className={cn("object-cover", className)}
              onLoad={(e) => {
                setNaturalDemension({
                  width: e.currentTarget.naturalWidth,
                  height: e.currentTarget.naturalHeight,
                });
                if (onLoadCallBack)
                  onLoadCallBack(
                    e.currentTarget.naturalWidth,
                    e.currentTarget.naturalHeight
                  );
                setIsLoading(false);
              }}
              onError={() => setIsError(true)}
              priority={
                typeof src === "string" &&
                src.startsWith("https://lh3.googleusercontent")
              }
            />
          )}
        </>
      )}
    </div>
  );
};

export default AppImage;
