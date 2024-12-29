"use client";

import React from "react";
import { redirect } from "next/navigation";
import { loginAuthSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

import { TAuthLogin } from "@/types/auth";
import { useZodErrors } from "@/hooks/useZodError";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/form/form-input";

import Providers from "./providers";

const LoginPage = () => {
  useZodErrors();

  const form = useForm<TAuthLogin>({
    resolver: zodResolver(loginAuthSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (payload: TAuthLogin) =>
      signIn("credentials", {
        ...payload,
        redirect: false,
      }),
    onSuccess: () => {
      redirect("/");
    },
  });

  async function onSubmit(values: TAuthLogin) {
    // console.log(values);
    mutation.mutate(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto mt-section flex max-w-[500px] flex-col gap-node"
      >
        <h2 className="text-center text-2xl font-semibold">Đăng nhập</h2>
        <FormInput
          control={form.control}
          name="username"
          formLabelProps={{ title: "Tên tài khoản" }}
        />
        <FormInput
          control={form.control}
          name="password"
          formLabelProps={{ title: "Mật khẩu" }}
        />

        <div className="text-right font-medium text-primary">
          <Button variant={"link"}>Quên mật khẩu?</Button>
        </div>
        <Button
          type="submit"
          className="h-16 w-full text-lg shadow-lg"
          disabled={mutation.isPending}
        >
          Đăng nhập
        </Button>
        <Providers />
      </form>
    </Form>
  );
};

export default LoginPage;
