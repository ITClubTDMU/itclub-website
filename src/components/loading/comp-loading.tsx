"use client";

import React from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

import Spinner from "../ui/spinner";

interface LoadingLevelComponentProps {
  isLoading?: boolean;
}

const LoadingLevelComponent = ({ isLoading }: LoadingLevelComponentProps) => {
  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-[999999] flex h-screen w-screen items-center justify-center bg-white/80 backdrop:blur-[6px]",
        {
          hidden: !isLoading,
        }
      )}
    >
      <div className="flex h-max w-max flex-col">
        <Spinner text="" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
          className="font-medium text-primary"
        >
          Đang tải...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingLevelComponent;
