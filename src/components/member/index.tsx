"use client";

import React from "react";
import { usePathname } from "next/navigation";



import { cn } from "@/lib/utils";
import AppImage from "@/components/ui/app-image";
import SectionHeading from "@/components/section/heading";





const members = [
  {
    name: "Trần Văn Hữu",
    position: "Chủ nhiệm",
    avatar: "/members/thayhuu/thayhuu.webp",
  },
  {
    name: "Nguyễn Minh Thắng",
    position: "Phó chủ nhiệm, Lập trình",
    avatar: "/members/thang/thang.webp",
  },
  {
    name: "Lê Tuấn Kiệt",
    position: "Phó chủ nhiệm, Lập trình",
    avatar: "/members/kiet/kiet.webp",
  },
  {
    name: "Nguyễn Văn Minh",
    position: "Ủy viên, Dự án",
    avatar: "/members/minh/minh.webp",
  },
  {
    name: "Nguyễn Thị Thu Huyền",
    position: "Ủy viên, Thư ký, Nhân sự",
    avatar: "/members/huyen/huyen.webp",
  },
  {
    name: "Võ Hoàng Tuấn",
    position: "Ủy viên, Truyền thông",
    avatar: "/members/tuan/tuan.webp",
  },
  {
    name: "Trần Phước Yên",
    position: "Ủy viên, Truyền thông",
    avatar: "/members/yen/yen.webp",
  },
  {
    name: "Hồ Tuấn Phước",
    position: "Ủy viên, Hiệu suất, Phân tích",
    avatar: "/members/phuoc/HoTuanPhuoc_nobg.webp",
  },
  {
    name: "Võ Gia Huy",
    position: "Ủy viên, Thiết kế",
    avatar: "/members/huy/huy.webp",
  },
];

const Member = () => {
  const path = usePathname();
  return (
    <div
      className={cn(
        "section_home flex flex-col items-center justify-center max-xs:hidden",
        {
          "max-xs:block": path === "/thanh-vien",
        }
      )}
    >
      <SectionHeading text="Thành viên" />
      <div className="grid w-full grid-cols-3 gap-node max-xs:!grid-cols-1 max-sm:grid-cols-2">
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
    avatar: string;
  };
};
const MemberCard = ({ className, member }: TMemberCardProps) => {
  return (
    <div className={cn("flex w-full flex-col pb-4 max-xs:w-full", className)}>
      <AppImage
        src={member.avatar}
        alt="avatar_member"
        ratio={3 / 4}
        container="bg-[#73bdff] rounded-tl-xl rounded-tr-xl max-h-max"
        draggable="false"
        loading="lazy"
        decoding="async"
      />
      <div className="flex flex-1 flex-col text-lg">
        <span className="text-wrap font-medium">{member.position}</span>
        <span className="mt-auto text-wrap font-medium text-primary">
          {member.name}
        </span>
      </div>
      {/* <div>sklfjlakjsd</div> */}
    </div>
  );
};
export default Member;