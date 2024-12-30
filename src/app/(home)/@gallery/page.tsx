"use client";

import ImageInGallery from "@/components/image/image-in-gallery";

function makeSpan(rowSpan?: number, colSpan?: number) {
  return {
    rowSpan: rowSpan?.toString() ?? "1",
    colSpan: colSpan?.toString() ?? "1",
  };
}

const photos: {
  rowSpan?: string;
  colSpan?: string;
  src: string;
  alt: string;
  ratio: number;
}[] = [
  { src: "/icpc.jpg", ratio: 16 / 9, alt: "icpc 1", ...makeSpan(1, 4) },
  { src: "/tsv.jpg", ratio: 3 / 2, alt: "tsv 1", ...makeSpan(1, 2) },
  { src: "/icpc.jpg", ratio: 1, alt: "Image 1", ...makeSpan(1, 2) },
  { src: "/avatar_member.webp", ratio: 4 / 3, alt: "Image Member 1" },
  { src: "/icpc.jpg", ratio: 1, alt: "Image 1" },
];

export default function PhotoGallery() {
  return (
    <div className="w-full h-max">
      <div className="grid grid-cols-6 grid-rows-2">
        {photos.map((photo, index) => (
          <ImageInGallery
            key={index + 1}
            {...photo}
            rowSpan={photo.rowSpan as any}
            colSpan={photo.colSpan as any}
          />
        ))}
      </div>
    </div>
  );
}
