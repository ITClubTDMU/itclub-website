"use client";

import React, { useState } from "react";
import { Photo } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

import PhotoGallery from ".";

import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/plugins/thumbnails.css";

interface LightBoxGalleryProps {
  photos: Photo[];
}

const LightBoxGallery = ({ photos }: LightBoxGalleryProps) => {
  const [index, setIndex] = useState(-1);
  const [myPhotoLightBox, setMyPhotoLightBox] = useState<Photo[]>(photos);
  // console.log("myPhotoLightBox", myPhotoLightBox);

  return (
    <>
      <PhotoGallery
        photos={photos}
        onClickCallBack={({ index }) => setIndex(index)}
        onLoadImage={(w, h) => {
          // console.log("w, h", w, h);
          setMyPhotoLightBox((prev) => {
            return prev.map((photo) => {
              if (photo.width === 8 && photo.height === 16) {
                return { ...photo, width: w, height: h };
              }
              return photo;
            });
          });
        }}
        targetRowHeight={150}
      />
      <Lightbox
        slides={myPhotoLightBox}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        className="z-[999999]"
      />
    </>
  );
};

export default LightBoxGallery;
