import { loginAuthSchema, registerAuthSchema } from "@/schemas/auth";
import { z } from "zod";

export type TAuthLogin = z.infer<typeof loginAuthSchema>;
export type TAuthRegister = z.infer<typeof registerAuthSchema>;
