"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "../ui/button";

const navItems = [
  { name: "Trang chủ", link: "/" },
  { name: "Hoạt động/Sự kiện", link: "/hoat-dong" },
  { name: "Tin tức", link: "/tin-tuc" },
  { name: "Kết nối", link: "/ket-noi" },
];

const NavMenu = () => {
  return (
    <>
      <SiteMenu />

      <Sheet>
        <SheetTrigger>
          <Menu className="hidden h-12 w-12 text-blue-500 max-xs:block" />
        </SheetTrigger>
        <SheetContent className="px-0">
          <SheetTitle></SheetTitle>
          <SiteMenu className="flex flex-col max-xs:block" variant="mobile" />
        </SheetContent>
      </Sheet>
    </>
  );
};

type SiteMenuProps = {
  className?: string;
  variant?: "mobile" | "desktop";
};

const SiteMenu = ({ className, variant }: SiteMenuProps) => {
  const [active, setActive] = useState(navItems[0].name);

  return (
    <ul
      className={cn(
        "nav flex flex-1 justify-center gap-16 text-lg font-medium max-xs:hidden max-xs:text-md",
        className,
        {
          "flex-col max-xs:block": variant === "mobile",
        }
      )}
    >
      {navItems.map((item) => (
        <li
          key={item.name}
          className={cn(
            "nav-item cursor-pointer font-semibold text-secondary",
            {
              "font-semibold text-blue-500 drop-shadow-lg":
                active === item.name,
              "hover:text-blue-500 hover:drop-shadow-lg": active !== item.name,
              "mt-10 w-full px-4 py-5 shadow-none": variant === "mobile",
            }
          )}
        >
          <Link href={item.link} onClick={() => setActive(item.name)}>
            {item.name}
          </Link>
        </li>
      ))}
      <Button className="ml-4 mt-node hidden max-xs:block">
        Đăng nhập/Đăng ký
      </Button>
    </ul>
  );
};
export default NavMenu;
