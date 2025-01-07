import React from "react";
import { ServerCrash } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "../ui/button";

interface ServerErrorProps {
  className?: string;
  onAction?: () => void;
}
const ServerError = ({ className, onAction }: ServerErrorProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-16 text-center mx-auto max-w-[300px]",
        className
      )}
    >
      <div className="rounded-full bg-gray-100 p-4">
        <ServerCrash className="h-12 w-12 text-red-500" />
      </div>
      <h2 className="mt-4 text-xl font-semibold text-gray-700">
        Có lỗi xảy ra
      </h2>
      <p className="mt-2 text-sm text-gray-500">
        Có thể máy chủ đang gặp sự cố, <br /> vui lòng thử lại sau
      </p>
      <Button
        className="mt-4 hidden shadow-xl shadow-primary/20"
        variant="default"
        onClick={() => {
          if (onAction) onAction();
        }}
      >
        Thử lại
      </Button>
    </div>
  );
};

export default ServerError;
