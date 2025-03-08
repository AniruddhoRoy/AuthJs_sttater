import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import db from "./prisma/db"
import authConfig from "./auth.config"
export const { handlers, signIn, signOut, auth } = NextAuth({
  pages:{
    signIn:"/auth/login",
    error:"/auth/error"
  },
  callbacks:{
    // async signIn({account,user}){
    //     return false
    // }
},
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
  secret:process.env.AUTH_SECRET
})