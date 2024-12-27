import Google from "next-auth/providers/google";
//import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),

    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     email: {
    //       label: "Email",
    //       type: "email",
    //       placeholder: "jsmith@uap.edu.ar",
    //     },
    //     password: { label: "Contraseña", type: "password" },
    //   },
    //   async authorize(credentials) {
    //     //Find user with the email
    //     if (!credentials) return null;
    //     // const result = await findUserByEmail(credentials?.email)

    //     // //NextAuth maneja el error
    //     // if (!result) {
    //     //   throw new Error('No user found with thar email')
    //     // }

    //     // //Check hased password with DB password
    //     // const checkPassword = await verifyHashScrypt(
    //     //   credentials.password,
    //     //   result.password!
    //     // )

    //     // if (!checkPassword) {
    //     //   throw new Error("Password doesn't match")
    //     // }
    //     // return {
    //     //   email: result.email,
    //     //   id: result.id,
    //     //   role: result.role,
    //     // }

    //     return { email: "", id: "", role: "" };
    //   },
    // }),
  ],

  session: { strategy: "jwt" },
};
