import React, { PropsWithChildren } from "react";
import { Droplet } from "lucide-react";

import { cn } from "@/lib/utils";
import AppImage from "@/components/ui/app-image";

type TimeCountDownProps = {
  unit: string;
};
const TimeCountDown = ({ unit }: TimeCountDownProps) => {
  return (
    <div className="back flex flex-col items-center px-5">
      <span className="text-3xl font-bold text-primary max-xs:text-2xl">00</span>
      <span className="text-lg font-semibold text-black/70 max-xs:text-md">{unit}</span>
    </div>
  );
};

const DetailActivityPage = () => {
  return (
    <div className="min-h-screen pb-20">
      <div className="relative h-max w-full">
        <AppImage
          src={"/icpc.jpg"}
          ratio={16 / 9}
          alt="banner-activity"
          container="max-h-[400px] overflow-hidden mb-section"
        />

        <div className="absolute bottom-0 left-1/2 flex w-1/2 max-xs:w-[75%] -translate-x-1/2 translate-y-1/2 flex-col gap-node bg-background px-10 pb-14 pt-3 shadow-lg">
          <div className="heading relative mx-auto mb-4 mt-node flex h-5 w-full">
            <div className="line absolute left-1/2 top-1/2 h-[2px] w-[calc(100%-50px)] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-primary/25"></div>
            <div className="text absolute left-1/2 top-1/2 w-max -translate-x-1/2 -translate-y-1/2 bg-background px-3 text-xl font-semibold text-primary max-xs:text-md">
              Đếm ngược thời gian đến đại hội
            </div>
          </div>
          <div className="time flex gap-node justify-center">
            <TimeCountDown unit="Ngày" />
            <TimeCountDown unit="Giờ" />
            <TimeCountDown unit="Phút" />
            <TimeCountDown unit="Giây" />
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-60 w-1/2 border-s-2 border-gray-200 pb-4 dark:border-gray-700">
        {/* <div className="line absolute left-1/2 h-full w-0 border-s-[1.5px] border-green-500"></div> */}
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index + 1} className="group mb-section w-full">
            <TimelineDot className="">
              <div className="h-full w-full rounded-full border-4 border-background bg-primary"></div>
              <Droplet className="absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
            </TimelineDot>
            <TimelineContent className="">
              <time className="mb-1 text-xs text-gray-400 dark:text-gray-500">
                February 2022
              </time>
              <TimelineTitle>Khởi động đăng ký</TimelineTitle>

              <p className="text-base text-gray-500 dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages. change content here
              </p>
            </TimelineContent>
          </div>
        ))}
      </div>
    </div>
  );
};

type TimelineTitleProps = PropsWithChildren;

const TimelineTitle = ({ ...rest }: TimelineTitleProps) => {
  return <div className="flex items-center text-lg font-semibold" {...rest} />;
};

type TimelineDotProps = PropsWithChildren &
  React.HTMLAttributes<HTMLDivElement>;

const TimelineDot = ({ className, ...rest }: TimelineDotProps) => {
  return (
    <div
      className={cn(
        "absolute -left-[1px] mt-2.5 h-14 w-14 -translate-x-1/2 rounded-full bg-background",
        className
      )}
      {...rest}
    />
  );
};

type TimelineContentProps = PropsWithChildren &
  React.HTMLAttributes<HTMLDivElement>;

const TimelineContent = ({ className, ...rest }: TimelineContentProps) => {
  return <div className={cn("content ml-10", className)} {...rest} />;
};
export default DetailActivityPage;
