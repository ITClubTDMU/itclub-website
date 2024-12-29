import React from "react";

import { cn } from "@/lib/utils";

type TSectionHeading = {
  text?: string;
  className?: string;
};

const SectionHeading = ({ text, className }: TSectionHeading) => {
  return (
    <h1
      className={cn(
        "max-xs:text-2xl mb-node text-center text-[3.5rem] font-bold uppercase text-primary mt-[80px]",
        className
      )}
    >
      {text}
    </h1>
  );
};

export default SectionHeading;
