"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";

const navItems = ["Trang chủ", "Hoạt động/Sự kiện", "Tin tức", "Kết nối"];
const NavMenu = () => {
  return (
    <>
      <SiteMenu />

      <Sheet>
        <SheetTrigger>
          <Menu className="max-xs:block hidden h-12 w-12 text-blue-500" />
        </SheetTrigger>
        <SheetContent className="px-0">
          <SiteMenu className="max-xs:block flex flex-col" variant="mobile" />
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
  const [active, setActive] = useState(navItems[0]);

  return (
    <ul
      className={cn("nav max-xs:hidden flex gap-16 font-medium max-xs:text-md text-lg flex-1 justify-center", className, {
        "max-xs:block flex-col": variant === "mobile",
      })}
    >
      {navItems.map((item) => (
        <li
          key={item}
          className={cn(
            "nav-item cursor-pointer font-semibold text-secondary",
            {
              "font-semibold text-blue-500 drop-shadow-lg": active === item,
              "hover:text-blue-500 hover:drop-shadow-lg": active !== item,
              "mt-10 w-full px-4 py-5 shadow-none": variant === "mobile",
            }
          )}
        >
          <Link href={"#"} onClick={() => setActive(item)}>
            {item}
          </Link>
        </li>
      ))}
      <Button className="ml-4 hidden max-xs:block mt-node">Đăng nhập/Đăng ký</Button>
    </ul>
  );
};
export default NavMenu;
