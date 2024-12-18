"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";

const HomePage = () => {
  const session = useSession();
  console.log(session)
  return (
    <div>
      <Button
        onClick={() => {
          signIn("credentials", {});
        }}
      >
        signIn
      </Button>
      <Button
        onClick={() => {
          signOut();
        }}
      >
        sign out
      </Button>
    </div>
  );
};

export default HomePage;
