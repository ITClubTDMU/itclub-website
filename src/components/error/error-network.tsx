"use client";

import { CloudAlert } from "lucide-react";

import { Button } from "../ui/button";

const ErrorNetwork = () => {
  return (
    <div className="flex max-w-[300px] flex-col items-center text-lg mx-auto my-auto justify-center">
      <CloudAlert className="!h-40 !w-40 text-red-500" />
      <div className="flex items-center gap-3">
        <span>Có lẽ không có kết nối internet</span>
        <Button
          onClick={() => {
            window.location.reload();
          }}
          variant={"link"}
          className="p-0"
        >
          Thử lại
        </Button>
      </div>
    </div>
  );
};

export default ErrorNetwork;
