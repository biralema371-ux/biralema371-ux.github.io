import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Message For You",
  description: "A message from my heart",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="am">
      <body>{children}</body>
    </html>
  );
}