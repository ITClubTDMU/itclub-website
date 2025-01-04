"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";



import AppImage from "../ui/app-image";
import NavMenu from "./nav-menu";


const Header = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!ref.current) return;
      const div = ref.current;
      if (window.scrollY > 20) {
        div.style.backgroundColor = "rgba(255,255,255,0.8)";
        div.style.backdropFilter = "blur(6px)";
      } else {
        // div.style.display = "none";
        div.style.backdropFilter = "blur(0px)";
        div.style.backgroundColor = "rgb(255,255,255)";
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed top-0 z-[99999] flex w-full items-center justify-center rounded-bl-lg rounded-br-lg bg-white px-extraPageHorizontal py-3 shadow-md"
    >
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