"use client";
import { ApolloProvider } from "@/providers/apollo_provider";
import { SessionProvider } from "next-auth/react";
import React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ApolloProvider>{children}</ApolloProvider>
    </SessionProvider>
  );
}
