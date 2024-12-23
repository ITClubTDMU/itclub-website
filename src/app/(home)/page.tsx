"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

import { http } from "@/lib/http";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const session = useSession();
  console.log(session);
  return (
    <div>
      {!session.data ? (
        <Button
          onClick={() => {
            signIn("credentials", {
              username: "admin123",
              password: "12345678",
              redirect: false,
            });
            // AuthService.login({
            //   username: "admin123",
            //   password: "12345678"
            // })
          }}
        >
          signIn
        </Button>
      ) : (
        <Button
          onClick={() => {
            signOut();
          }}
        >
          sign out
        </Button>
      )}
      <Button
        onClick={async () => {
          http.getList("/user", { isAuthApi: true }).then((res) => {
            console.log(res);
          });
        }}
      >
        fetch api auth
      </Button>
    </div>
  );
};

export default HomePage;
