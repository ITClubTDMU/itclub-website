"use client";

import React from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import AppImage from "@/components/ui/app-image";
import SectionHeading from "@/components/section/heading";

const members = [
  {
    name: "Trần Văn Hữu",
    position: "Founder, Chủ nhiệm, Trưởng ban Lập trình",
  },
  {
    name: "Nguyễn Minh Thắng",
    position: "Trưởng ban đề án",
  },
  {
    name: "Lê Tuấn Kiệt",
    position: "Trưởng ban đề án1",
  },
  {
    name: "Nguyễn Văn Minh",
    position: "Trưởng ban đề án2",
  },
  {
    name: "Nguyễn Thị Thu Huyền",
    position: "Trưởng ban đề án3",
  },
  {
    name: "Võ Hoàng Tuấn",
    position: "Trưởng ban đề án3",
  },
  {
    name: "Trần Phước Yên",
    position: "Trưởng ban đề án3",
  },
  {
    name: "Hồ Tuấn Phước",
    position: "Trưởng ban đề án3",
  },
  {
    name: "Võ Gia Huy",
    position: "Trưởng ban đề án3",
  },
];

const Member = () => {
  const path = usePathname();
  return (
    <div
      className={cn(
        "section_home flex flex-col items-center justify-center max-xs:hidden",
        {
          "max-xs:block": path === "/the-he",
        }
      )}
    >
      <SectionHeading text="Ban chủ nhiệm" />
      <div className="grid grid-cols-3 gap-node max-xs:!grid-cols-1 max-sm:grid-cols-2">
        {members.map((member, index) => (
          <MemberCard key={index + 1} member={member} />
        ))}
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
    <div className={cn("flex flex-col pb-4 max-xs:w-full", className)}>
      <AppImage
        src={"/avatar_member.webp"}
        alt="avatar_member"
        ratio={3 / 4}
        container="bg-primary/75 rounded-tl-xl rounded-tr-xl max-h-max"
        draggable="false"
        loading="lazy"
        decoding="async"
      />
      <div className="flex flex-1 flex-col text-lg">
        <span className="text-wrap font-semibold">{member.position}</span>
        <span className="mt-auto text-wrap font-semibold text-primary">
          {member.name}
        </span>
      </div>
      {/* <div>sklfjlakjsd</div> */}
    </div>
  );
};
export default Member;
