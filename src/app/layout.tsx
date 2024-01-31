import { FontBody, FontHeading } from "@lib/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FE Mentor - Minimalist Portfolio Website",
  description: "Implemented by Jadurani Davalos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${FontHeading.variable} ${FontBody.variable}`}>{children}</body>
    </html>
  );
}
