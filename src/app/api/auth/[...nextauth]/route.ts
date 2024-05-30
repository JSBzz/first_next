import { authOptions } from "@/app/_lib/next-auth/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
