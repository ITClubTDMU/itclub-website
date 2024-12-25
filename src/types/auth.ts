import { loginAuthSchema, registerAuthSchema } from "@/schemas/auth";
import { z } from "zod";

import { User } from "./user";

export type TAuthLogin = z.infer<typeof loginAuthSchema>;
export type TAuthLoginGoogle = {
  email?: string | null;
  fullName?: string | null;
  avatar?: string | null;
};
export type TAuthLoginRes = {
  accessToken: string;
} & User;

export type TAuthRegister = z.infer<typeof registerAuthSchema>;
export type TAuthRegisterRes = User;
