"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NewsService } from "@/services/newsService";
import { useLoadingStore } from "@/stores/loadingStore";
import { useQueryClient } from "@tanstack/react-query";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { name: "Trang chủ", link: "/" },
  // { name: "Hoạt động/Sự kiện", link: "/hoat-dong" },
  // { name: "Về chúng tôi", link: "#about-us" },
  // { name: "Giá trị", link: "#gia-tri-mang-lai" },
  { name: "Thành viên", link: "/thanh-vien" },
  { name: "Tin tức", link: "/tin-tuc" },
  // { name: "Kết nối", link: "/comingsoon" },
];

const NavMenu = () => {
  return (
    <>
      <SiteMenu />

      <Sheet>
        <SheetTrigger>
          <Menu className="hidden h-12 w-12 text-blue-500 max-xs:block" />
        </SheetTrigger>
        <SheetContent
          className="z-[99999] max-w-[200px] px-0 data-[state=open]:xs:hidden"
          sheetOverlayClassname="data-[state=open]:xs:hidden"
        >
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
  const path = usePathname().split("/")[1];
  const queryClient = useQueryClient();
  const updateLoadingApp = useLoadingStore((state) => state.updateLoading);

  return (
    <ul
      className={cn(
        "nav flex flex-1 justify-end gap-16 text-lg font-medium max-xs:hidden max-xs:text-md",
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
            "nav-item cursor-pointer font-medium transition-all duration-300 ease-in-out",
            {
              "font-medium text-primary": path === item.link.split("/")[1],
              "hover:text-primary": path !== item.link.split("/")[1],
              "mt-10 w-full px-4 py-5 shadow-none": variant === "mobile",
            }
          )}
          onMouseEnter={() => {
            if (item.link === "/tin-tuc") {
              queryClient.prefetchQuery({
                queryKey: ["news", "page1"],
                queryFn: async () =>
                  await NewsService.getAll({
                    pageNumber: 1,
                    pageSize: 17,
                  }),
                staleTime: 1000 * 60 * 5,
              });
            }
          }}
        >
          <Link
            href={item.link}
            onClick={() => {
              updateLoadingApp(true);
            }}
            className="h-full w-full block"
          >
            {item.name}
          </Link>
        </li>
      ))}
      {/* <Button className="ml-4 mt-node hidden max-xs:block">
        Đăng nhập/Đăng ký
      </Button> */}
    </ul>
  );
};
export default NavMenu;
