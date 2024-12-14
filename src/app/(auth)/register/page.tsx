"use client";

import { registerAuthSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { TAuthRegister } from "@/types/auth";
import { useZodErrors } from "@/hooks/useZodError";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/form/form-input";

export default function RegisterForm() {
  useZodErrors();

  const form = useForm<TAuthRegister>({
    resolver: zodResolver(registerAuthSchema),
    defaultValues: {
      fullname: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: TAuthRegister) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto mt-section flex max-w-[500px] flex-col gap-node"
      >
        <h2 className="text-center text-2xl font-semibold">Đăng ký</h2>

        <FormInput
          control={form.control}
          name="fullname"
          formLabelProps={{ title: "Họ và tên" }}
        />
        <FormInput
          control={form.control}
          name="username"
          formLabelProps={{ title: "Tên hiển thị" }}
        />
        <FormInput
          control={form.control}
          name="email"
          formLabelProps={{ title: "Email" }}
        />
        <FormInput
          control={form.control}
          name="password"
          formLabelProps={{ title: "Mật khẩu" }}
        />
        <FormInput
          control={form.control}
          name="confirmPassword"
          formLabelProps={{ title: "Nhập lại mật khẩu" }}
        />
        <Button type="submit" className="mt-node h-16 w-full text-lg shadow-lg">
          Đăng ký
        </Button>
      </form>
    </Form>
  );
}
