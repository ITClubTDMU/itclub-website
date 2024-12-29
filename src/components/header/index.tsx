"use client";

import React from "react";

import AppImage from "../ui/app-image";
import NavMenu from "./nav-menu";

const Header = () => {
  return (
    <div className="flex w-full items-center justify-center rounded-bl-lg rounded-br-lg px-extraPageHorizontal py-3 shadow-md fixed top-0 z-[99999] bg-background">
      <div className="w-full max-w-[1200px] flex justify-between items-center">
        <AppImage src={"/logo.png"} alt="it club logo" container="w-20 h-20" />

        <NavMenu />
        {/* <Button className="rounded-full max-xs:hidden">Đăng nhập/Đăng ký</Button> */}
      </div>
    </div>
  );
};

export default Header;
