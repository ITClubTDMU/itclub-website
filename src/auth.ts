import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const handler = NextAuth({
  providers: [
    Credentials({
      name: "Credentials 123",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        // If no error and we have user data, return it
        
        return user;
      },
    }),
  ],
  callbacks: {
    jwt: (params) => {
      console.log("JWT callback", params)
      return params.token;
    },
    session: ({user, session}) => {
      console.log("SESSION CALLBACK", session, user);
      return {
        ...session,
        user
      };
    }
  },
  session: {
    strategy: "jwt"
  },
});
