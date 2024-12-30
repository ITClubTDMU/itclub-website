"use client";

import React from "react";
import Link from "next/link";

import AppImage from "../ui/app-image";
import NavMenu from "./nav-menu";

const Header = () => {
  return (
    <div className="fixed top-0 z-[99999] flex w-full items-center justify-center rounded-bl-lg rounded-br-lg bg-background px-extraPageHorizontal py-3 shadow-md">
      <div className="flex w-full max-w-[1200px] items-center justify-between">
        <Link href="/">
          <AppImage
            src={"/logo.png"}
            alt="it club logo"
            container="w-20 h-20"
          />
        </Link>

        <NavMenu />
        {/* <Button className="rounded-full max-xs:hidden">Đăng nhập/Đăng ký</Button> */}
      </div>
    </div>
  );
};

export default Header;
