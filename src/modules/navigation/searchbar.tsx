"use client";

import Input from "@/components/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const SearchBar = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="flex gap-2 w-full">
      <Input
        className="w-full"
        placeholder="Buscar frases"
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key == "Enter")
            router.push(
              pathname +
                "?" +
                createQueryString("search", e.currentTarget.value)
            );

          // Clear search by removing URL parameters when input is empty
          if (e.currentTarget.value.length == 0) {
            router.push(pathname);
          }
        }}
      />
    </div>
  );
};
