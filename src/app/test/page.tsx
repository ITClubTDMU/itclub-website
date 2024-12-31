"use client";

import React from "react";

import { cn } from "@/lib/utils";

const TestPage = () => {
  return (
    <div
      className={cn("h-40 w-full max-sm:bg-blue-500", {
        "max-xs:bg-red-500": true,
      })}
    >
      asfaf
    </div>
  );
};

export default TestPage;
