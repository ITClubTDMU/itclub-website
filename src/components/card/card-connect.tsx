import React from "react";
import { Dot, SquareArrowOutUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import AppImage from "@/components/ui/app-image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "../ui/button";

type CardConnectProps = {
  className?: string;
  isDetail?: boolean;
};

const CardConnect = ({ className, isDetail }: CardConnectProps) => {
  return (
    <div
      className={cn(
        "mx-auto flex h-[500px] max-w-[350px] flex-col gap-node",
        className,
        {
          "w-full max-w-[50%]": isDetail,
        }
      )}
    >
      <AppImage
        src={"/thumbnail_connect.avif"}
        alt="thumbnail_connect"
        ratio={16 / 9}
        container={cn("w-full h-max", {
          hidden: isDetail,
        })}
      />

      <div className="card-body flex flex-1 flex-col gap-node px-5">
        <div className="author flex items-center gap-5">
          <AppImage
            src={"/thumbnail_connect.avif"}
            alt="thumbnail_connect"
            ratio={1}
            container="w-[40px] h-[40px]"
            className="rounded-full"
          />
          <div className="info">
            <div className="flex items-center">
              <span className="font-bold">Nguyễn Văn Minh</span>
              <Dot className="text-gray-400" />
              <span className="font-medium text-gray-400">D24</span>
            </div>
            <div className="flex items-center text-sm font-medium text-gray-400">
              <span>Ngày 25/12/2024</span> <Dot /> <span>25 view</span>
            </div>
          </div>

          {isDetail && <Button className="ml-auto">Quan tâm</Button>}
        </div>

        <div className="content">
          <TooltipProvider>
            <Tooltip delayDuration={300}>
              <TooltipTrigger className="w-full">
                <h1 className="truncate text-lg font-semibold">
                  Title card headingTitle card headingTitle card heading
                </h1>
              </TooltipTrigger>
              <TooltipContent>
                Title card headingTitle card headingTitle card heading
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <p
            className={cn("line-clamp-4", {
              "line-clamp-none": isDetail,
            })}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            expedita placeat. Soluta beatae sunt tenetur sint magnam modi
            expedita vero, facilis eos fugiat provident hic dolores fugit ad
            maxime necessitatibus.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Earum, expedita placeat. Soluta beatae sunt
            tenetur sint magnam modi expedita vero, facilis eos fugiat provident
            hic dolores fugit ad maxime necessitatibus.Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Earum, expedita placeat. Soluta
            beatae sunt tenetur sint magnam modi expedita vero, facilis eos
            fugiat provident hic dolores fugit ad maxime necessitatibus.Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Earum, expedita
            placeat. Soluta beatae sunt tenetur sint magnam modi expedita vero,
            facilis eos fugiat provident hic dolores fugit ad maxime
            necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Earum, expedita placeat. Soluta beatae sunt tenetur sint
            magnam modi expedita vero, facilis eos fugiat provident hic dolores
            fugit ad maxime necessitatibus.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Earum, expedita placeat. Soluta beatae
            sunt tenetur sint magnam modi expedita vero, facilis eos fugiat
            provident hic dolores fugit ad maxime necessitatibus.
          </p>
        </div>

        <ScrollArea className="mt-auto w-full">
          <div className="tags flex w-full gap-3">
            {Array.from({ length: 15 }).map((_, index) => (
              <div
                key={index + 1}
                className="py-.5 w-max cursor-pointer rounded-full border px-3"
              >
                #Tag {index}
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <div className={cn("card-footer", { hidden: isDetail })}>
        <div className="group mx-auto mt-auto flex w-max animate-jumUpDown cursor-pointer items-center justify-center gap-2 py-2 font-medium text-primary hover:animate-none">
          <span>Xem chi tiết</span>
          <SquareArrowOutUpRight className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default CardConnect;
