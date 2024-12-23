import {
  TAuthLogin,
  TAuthLoginGoogle,
  TAuthLoginRes,
  TAuthRegister,
  TAuthRegisterRes,
} from "@/types/auth";
import { http } from "@/lib/http";

const AUTH_PATH = "/auth";

export const AuthService = {
  login: async (data: TAuthLogin) => {
    return await http.post<TAuthLoginRes>(AUTH_PATH, data);
  },
  loginWithGoogle: async (data: TAuthLoginGoogle) => {
    return await http.post<TAuthLoginRes>(AUTH_PATH, data);
  },
  register: async (data: TAuthRegister) => {
    return await http.post<TAuthRegisterRes>(
      "/user",
      {
        username: data.username,
        password: data.password,
        fullName: data.fullName,
        email: data.email,
      },
      {
        isAuthApi: true,
      }
    );
  },
};
