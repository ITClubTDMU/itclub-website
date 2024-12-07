"use client";

import React from "react";

import { cn } from "@/lib/utils";

import SectionHeading from "@/components/section/heading";
import AppImage from "@/components/ui/app-image";

const Sec5 = () => {
  return (
    <div className="section_home flex flex-col items-center justify-center">
      <SectionHeading text="Ban chủ nhiệm" className="w-max" />
      <div className="flex max-w-[1300px] select-none gap-node overflow-hidden max-xs:w-full">
        <div className="flex min-w-full shrink-0 animate-marquee_member gap-node">
          {Array.from({ length: 5 }).map((_, index) => (
            <MemberCard key={index + 1} />
          ))}
        </div>
        <div className="flex min-w-full shrink-0 animate-marquee_member gap-node">
          {Array.from({ length: 5 }).map((_, index) => (
            <MemberCard key={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

type TMemberCardProps = {
  className?: string;
};
const MemberCard = ({ className }: TMemberCardProps) => {
  return (
    <div className={cn("flex basis-1/4 flex-col p-1 pb-4 max-xs:basis-1/2", className)}>
      <AppImage
        src={"/avatar_member.webp"}
        alt="avatar_member"
        ratio={3 / 4}
        container="bg-primary/75 rounded-xl flex-1 "
        draggable="false"
      />
      <div className="mt-node flex flex-col text-lg">
        <span className="font-semibold">
          Founder,Chủ nhiệm,Trưởng ban Lập trình
        </span>
        <span className="font-semibold text-primary">
          Nguyễn Phạm Minh Triết
        </span>
      </div>
    </div>
  );
};
export default Sec5;
