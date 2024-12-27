"use client";
import { signIn } from "next-auth/react";
import React from "react";

export default function SignInButton({
  provider,
}: {
  provider: "google" | "github";
}) {
  return (
    <button onClick={async () => await signIn(provider)}>Iniciar sesión</button>
  );
}
