import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providersq
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // GithubProvider({
    //   clientId: process.env.GIHUB_CLIENT_ID,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET,
    // }),
    // ...add more providers here
],
secret : process.env.SECRET,
}

const handler= NextAuth(authOptions);
export {handler as GET , handler as POST}