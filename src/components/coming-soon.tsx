"use client";

import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils"; // Utility for conditional classes, if you use it
import { Button } from "@/components/ui/button"; // Import Button from ShadCN components

import AppImage from "./ui/app-image";

const ComingSoon = () => {
  const router = useRouter();

  return (
    <section className={cn("flex h-screen items-center justify-center")}>
      <div className="p-6 text-center md:p-12">
        <h1 className="text-4xl font-bold text-gray-800 md:text-6xl">
          Coming Soon
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Có vẽ tính năng này sẽ được cập nhật sớm
        </p>
        <div>
          <AppImage src={"/comingsoon.webp"} alt="coming soon" ratio={1} />
        </div>
        <Button
          className="mt-6"
          onClick={() => {
            router.back();
          }}
        >
          Quay trở lại
        </Button>
      </div>
    </section>
  );
};

export default ComingSoon;
