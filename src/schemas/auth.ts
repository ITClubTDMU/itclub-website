import * as z from "zod";

const baseAuthSchema = z.object({
  username: z.string().min(1).max(50).email(),
  password: z.string().min(5).max(20),
});

const baseRegisterAuthSchema = baseAuthSchema.extend({
  fullname: z.string().min(1).max(50),
  confirmPassword: z.string().min(1).max(20),
});

export const loginAuthSchema = baseAuthSchema.extend({
  rememberMe: z.boolean().optional(),
});

export const registerAuthSchema = baseRegisterAuthSchema.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "Mật khẩu không khớp",
    path: ["confirmPassword", "password"],
  }
);

export const otpAuthSchema = z.object({
  code_otp: z.string().min(1).max(6),
});

export const emailOtpChangePasswordSchema = baseAuthSchema.pick({
  username: true,
});

export const forgotPasswordSchema = baseRegisterAuthSchema
  .pick({ password: true, confirmPassword: true })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu không khớp",
    path: ["confirmPassword"],
  });

export const renewPasswordSchema = baseRegisterAuthSchema
  .pick({ confirmPassword: true })
  .extend({
    passwordOld: z.string().min(6).max(20),
    passwordNew: z.string().min(6).max(20),
  })
  .refine((data) => data.passwordNew === data.confirmPassword, {
    message: "Mật khẩu không khớp",
    path: ["confirmPassword", "passwordNew"],
  });
