"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";

import AppImage from "../ui/app-image";
import { Button } from "../ui/button";
import NavMenu from "./nav-menu";

const Header = () => {
  return (
    <div className="] px-extraPageHorizontal flex items-center justify-between rounded-bl-lg rounded-br-lg py-3 shadow-md">
      <AppImage src={"/logo.png"} alt="it club logo" container="w-20 h-20" />

      <NavMenu />
      <Button className="max-xs:hidden rounded-full">Đăng nhập/Đăng ký</Button>
    </div>
  );
};

export default Header;
