"use client";

import React from "react";

import { cn } from "@/lib/utils";
import AppImage from "@/components/ui/app-image";
import SectionHeading from "@/components/section/heading";

const members = [
  {
    name: "Nguyễn Phạm Minh Triết",
    position: "Founder, Chủ nhiệm, Trưởng ban Lập trình",
  },
  {
    name: "Nguyễn Minh Thắng",
    position: "Trưởng ban đề án",
  },
  {
    name: "Nguyễn Minh Thắng1",
    position: "Trưởng ban đề án1",
  },
  {
    name: "Nguyễn Minh Thắng2",
    position: "Trưởng ban đề án2",
  },
  {
    name: "Nguyễn Minh Thắng3",
    position: "Trưởng ban đề án3",
  },
];

const Sec5 = () => {
  return (
    <div className="section_home flex max-h-[700px] flex-col items-center justify-center">
      <SectionHeading text="Ban chủ nhiệm" />
      <div className="flex w-full select-none gap-node overflow-hidden">
        <div className="flex min-w-full shrink-0 animate-marquee_member gap-node">
          {members.map((member, index) => (
            <MemberCard key={index + 1} member={member} />
          ))}
        </div>
        <div className="flex min-w-full shrink-0 animate-marquee_member gap-node">
          {members.map((member, index) => (
            <MemberCard key={index + 1} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

type TMemberCardProps = {
  className?: string;
  member: {
    name: string;
    position: string;
  };
};
const MemberCard = ({ className, member }: TMemberCardProps) => {
  return (
    <div
      className={cn(
        "flex w-full basis-1/4 flex-col pb-4 max-xs:basis-full",
        className
      )}
    >
      <AppImage
        src={"/avatar_member.webp"}
        alt="avatar_member"
        ratio={3 / 4}
        container="bg-primary/75 rounded-tl-xl rounded-tr-xl max-h-max"
        draggable="false"
        loading="lazy"
        decoding="async"
      />
      <div className="flex flex-1 flex-col px-4 text-lg">
        <span className="text-wrap font-semibold">{member.position}</span>
        <span className="mt-auto text-wrap font-semibold text-primary">
          {member.name}
        </span>
      </div>
      {/* <div>sklfjlakjsd</div> */}
    </div>
  );
};
export default Sec5;
