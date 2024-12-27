import React from "react";
import { SearchBar } from "@/modules/navigation/searchbar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col items-center space-y-8">
        <SearchBar />
        {children}
      </div>
    </>
  );
}
