import NextAuth, { User, type DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";



import { AuthService } from "./services/authService";


declare module "next-auth" {
  interface Session {
    user: {
      token?: string;
      avatar?: string;
      fullName?: string;
    } & DefaultSession["user"];
  }

  interface User {
    token?: string;
    avatar?: string;
    fullName?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    token?: string;
    avatar?: string;
    fullName?: string;
  }
}

export const handler = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        if (!credentials) return null;

        const { username, password } = credentials;

        try {
          const res = await AuthService.login({
            username,
            password,
          });

          if (res) {
            return {
              fullName: res.payload.fullName,
              avatar: res.payload.avatar,
              email: res.payload.email,
              token: res.payload.accessToken,
              id: res.payload.accessToken,
            };
          }
          return null;
        } catch {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, account }) => {
      if (user) {
        token.token = user.token;
        token.avatar = user.avatar;
        token.fullName = user.fullName;
        token.email = user.email;
      }
      if (account?.provider === "google" && user) {
        try {
          const res = await AuthService.loginWithGoogle({
            email: user.email,
            fullName: user.name,
            avatar: user.image,
          });
          if (res) {
            token.token = res.payload.accessToken;
            token.avatar = res.payload.avatar;
            token.fullName = res.payload.fullName;
            token.email = res.payload.email;
          }
        } catch {
          throw new Error("Failed to login with google");
        }
      }

      return token;
    },
    session: ({ token, session }) => {
      return {
        ...session,
        user: {
          token: token.token ?? session.user?.token,
          avatar: token.avatar ?? session.user?.avatar,
          fullName: token.fullName ?? session.user?.fullName,
          email: token.email ?? session.user?.email,
        },
      };
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 5 * 60,
    updateAge: 0,
  },
});