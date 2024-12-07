import React from "react";

import { cn } from "@/lib/utils";

type TSectionTitle = {
  text?: string;
  className?: string;
  underlineDirection?: "left" | "right" | "bottom";
};

const SectionTitle = ({
  text,
  underlineDirection,
  className,
}: TSectionTitle) => {
  return (
    <h1
      className={cn(
        "relative mb-node w-max text-center text-[2.5rem] font-bold uppercase text-primary",
        className
      )}
    >
      <div
        className={cn(
          "absolute -bottom-0.5 left-0 h-1.5 w-[60%] rounded-full bg-primary",
          {
            "right-0 top-0 h-full w-1.5": underlineDirection === "right",
            "left-0 top-0 h-full w-1.5": underlineDirection === "left",
          }
        )}
      ></div>
      {text}
    </h1>
  );
};

export default SectionTitle;
