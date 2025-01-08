"use client";

import React, { memo, useEffect } from "react";
import { ArrowUp } from "lucide-react";



import { Button } from "@/components/ui/button";





interface ScrollToTopProps {
  elementId: string;
}
const ScrollToTop = ({ elementId }: ScrollToTopProps) => {
  // console.log("elementId-render", elementId);
  useEffect(() => {
    window.onscroll = () => {
      const button = document.getElementById(elementId);
      if (!button) return;
      if (window.scrollY > 100) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    };

    return () => {
      window.onscroll = null;
    };
  }, [elementId]);

  return (
    <Button
      id={elementId}
      className="fixed bottom-4 right-4 h-max w-max text-xl"
      variant={"outline"}
      onClick={() => window.scrollTo(0, 0)}
      style={{ display: "none" }}
    >
      <ArrowUp className="!h-8 !w-8" />
    </Button>
  );
};

export default memo(ScrollToTop);