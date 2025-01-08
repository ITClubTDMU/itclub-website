import React from "react";
import { AlertCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NoDataProps {
  className?: string;
  onAction?: () => void;
}
const NoData = ({ onAction, className }: NoDataProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-16 text-center m-auto",
        className
      )}
    >
      <div className="rounded-full bg-gray-100 p-4">
        <AlertCircle className="h-12 w-12 text-gray-500" />
      </div>
      <h2 className="mt-4 text-xl font-semibold text-gray-700">
        Không có dữ liệu
      </h2>
      <p className="mt-2 text-sm text-gray-500">
        Không tìm thấy dữ liệu nào để hiện thị
      </p>
      <Button
        className="mt-4 shadow-xl shadow-primary/20"
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

export default NoData;
