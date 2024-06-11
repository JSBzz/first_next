"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};
const queryClient = new QueryClient();
export default function AuthSession({ children }: Props) {
  return (
    <SessionProvider basePath={process.env.NEXT_PUBLIC_NEXTAUTH_URL}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SessionProvider>
  );
}
