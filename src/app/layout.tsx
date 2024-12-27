import type { Metadata } from "next";
import { Neuton } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import React from "react";
import Navbar from "@/modules/navigation/navbar";
import Providers from "./providers";

const neuton = Neuton({
  weight: ["200", "300", "400", "700", "800"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Meditaciones Milei",
  description:
    "Meditaciones Milei es una colección de dichos, publicaciones de redes sociales y recortes de videos hechos por el actual Presidente de la República Argentina, Javier Milei",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${neuton.className} antialiased text-white bg-background`}
      >
        <Image
          src="/assets/columna.png"
          width={350}
          height={350}
          className="fixed -translate-y-3 h-[102vh] translate-x-12"
          alt="Columna romana"
        />
        <Image
          src="/assets/columna.png"
          width={350}
          height={350}
          className="fixed -translate-y-3 h-[102vh] right-0 scale-x-[-1] -translate-x-12"
          alt="Columna romana"
        />
        <nav className="flex justify-center py-8 flex-col items-center space-y-3">
          <div className="flex flex-col items-center gap-4">
            <Navbar />
          </div>
        </nav>
        <div className="p-5 flex justify-center">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
