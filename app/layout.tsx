import "@/styles/globals.css";

import React from "react";

import { cn } from "@/lib/utils";
import { geist } from "@/styles/fonts";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aughh",
  description: "Staically generated blog with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-geist antialiased", "bg-zinc-900", geist.variable)}>
        <main className="max-w-4xl px-8 py-6 mx-auto">
          <p className="text-2xl font-semibold text-zinc-50">Aughh</p>
          {children}
        </main>
      </body>
    </html>
  );
}
