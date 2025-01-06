"use client";

import {
  ClickHandlerProps,
  Photo,
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
  RowsPhotoAlbumProps,
} from "react-photo-album";

import "react-photo-album/rows.css";

import AppImage from "../ui/app-image";
import { useState } from "react";

interface PhotoGalleryProps extends RowsPhotoAlbumProps {
  photos: Photo[];
  onLoadImage?: (w: number, h: number) => void;
  onClickCallBack?: (props: ClickHandlerProps<Photo>) => void;
}

export default function PhotoGallery({
  photos,
  onLoadImage,
  onClickCallBack,
}: Readonly<PhotoGalleryProps>) {

  const [dimension, setDimension] = useState<{ w: number; h: number }>();
  console.log("dimension", dimension);
  return (
    <RowsPhotoAlbum
      photos={photos}
      render={{
        image: (
          { alt = "", title }: RenderImageProps,
          { photo }: RenderImageContext
        ) => {
          console.log(onLoadImage);
          return (
            <AppImage
              key={photo.src}
              alt={alt}
              title={title}
              src={photo.src}
              ratio={1}
              onLoadCallBack={(w, h) => {
                if (onLoadImage) {
                  console.log("w, h app image", w, h);
                  onLoadImage(w, h);
                  setDimension({w, h})
                }
              }}
            />
          );
        },
      }}
      onClick={(props) => {
        if (onClickCallBack) onClickCallBack(props);
      }}
      defaultContainerWidth={1200}
      sizes={{
        size: "1168px",
        sizes: [
          { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
        ],
      }}
    />
  );
}
