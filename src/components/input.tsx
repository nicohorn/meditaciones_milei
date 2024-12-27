import React, { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn("bg-accent px-3 placeholder:text-text/50 py-1", className)}
      {...props}
    />
  );
}
