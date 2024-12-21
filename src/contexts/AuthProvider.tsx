"use client";

import React, { PropsWithChildren } from "react";
import { SessionProvider } from "next-auth/react";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  return (
    <SessionProvider>
      <div className="flex h-full w-full flex-col bg-background text-[1.6rem] transition-colors duration-300 ease-in-out">
        {children}
      </div>
    </SessionProvider>
  );
};
