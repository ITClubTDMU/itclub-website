"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Mail } from "lucide-react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import AppImage from "@/components/ui/app-image";
import { Button } from "@/components/ui/button";

type TMemberBODCardProps = {
  className?: string;
  member: {
    name: string;
    position: string;
    contact: { type: string; link: string; isHidden?: boolean }[];
    avatar: string;
    sizes?: string;
  };
};

const MemberCardBOD = ({ className, member }: TMemberBODCardProps) => {
  const handleCopy = async (textToCopy: string, isHidden?: boolean) => {
    if (isHidden) {
      toast.info("Email đã được ẩn", {
        className: "bg-primary",
        classNames: {
          icon: "text-primary",
        },
      });
      return;
    }
    try {
      navigator.clipboard.writeText(textToCopy);
      toast.info("Đã sao chép email", {
        className: "bg-primary",
        classNames: {
          icon: "text-primary",
        },
      });
    } catch {
      toast.warning("Email đã được ẩn", {
        className: "bg-primary",
        classNames: {
          icon: "text-primary",
        },
      });
    }
  };

  return (
    <div className={cn("flex w-full flex-col items-center pb-4", className)}>
      <AppImage
        src={member.avatar}
        alt="avatar_member"
        ratio={1}
        container="bg-[#73bdff] rounded-full max-h-max max-w-[120px]"
        className="rounded-full"
        draggable="false"
        loading="lazy"
        decoding="async"
        sizes={member.sizes}
      />
      <div className="mt-3 flex flex-1 flex-col text-center text-lg">
        <div className="text-wrap font-medium">{member.position}</div>
        <div className="font-medium text-primary">{member.name}</div>
      </div>

      <div className="flex items-center gap-3">
        {member.contact.map((c) => {
          return (
            <div
              key={c.type}
              className="h-max w-max cursor-pointer rounded-full p-4 leading-[0] hover:bg-gray-100"
            >
              {c.type === "fb" ? (
                <Link
                  key={c.type}
                  href={c.link === "" ? "1" : "2"}
                  target="_blank"
                  className=""
                  onClick={(e) => {
                    if (c.isHidden) {
                      e.preventDefault();
                      toast.info("Facebook đã được ẩn", {
                        className: "bg-primary",
                        classNames: {
                          icon: "text-primary",
                        },
                      });
                    }
                  }}
                >
                  <Facebook className="!h-6 !w-6 text-[#1877f2]" />
                </Link>
              ) : (
                <Button
                  key={c.type}
                  variant={"ghost"}
                  className={cn("h-max w-max p-0")}
                  onClick={() => {
                    handleCopy(c.link, c.isHidden);
                  }}
                >
                  <Mail className="!h-6 !w-6 text-[#ee2054]" />
                </Button>
              )}
            </div>
          );
        })}
      </div>
      {/* <div>sklfjlakjsd</div> */}
    </div>
  );
};

export default MemberCardBOD;
