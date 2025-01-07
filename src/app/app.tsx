"use client";

import React, { PropsWithChildren } from "react";
import { AuthProvider } from "@/contexts/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { Toaster } from "@/components/ui/sonner";
import Loading from "@/components/loading";

const queryClient = new QueryClient();

export const App = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <NuqsAdapter>{children}</NuqsAdapter>
      </AuthProvider>
      <Loading />
      <Toaster />
    </QueryClientProvider>
  );
};
