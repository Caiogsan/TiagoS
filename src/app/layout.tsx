import type { Metadata } from "next";
import { Satisfy } from "next/font/google";
import "./globals.css";

import Header from "@/components/header/page";

const permanent = Satisfy({weight: "400", style: "normal", variable: "--font-permanent", preload: false});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${permanent.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
