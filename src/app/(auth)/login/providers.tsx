import React from "react";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";

export default function Providers() {
  const mutation = useMutation({
    mutationFn: async (provider: string) => signIn(provider),
    onSuccess: () => {},
  });

  return (
    <div className="flex h-16 flex-col items-center gap-node font-medium">
      <span>hoặc</span>
      <Button
        type="button"
        variant={"outline"}
        className="h-full w-full text-lg"
        disabled={mutation.isPending}
        onClick={() => {
          mutation.mutate("google");
        }}
      >
        Đăng nhập với google
      </Button>
    </div>
  );
}
