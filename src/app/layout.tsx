import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothCursor from "../components/SmoothCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Premium AI Agency",
  description: "Engineered in Chennai. Built for the World.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} cursor-none`}>
        <SmoothCursor />
        {children}
      </body>
    </html>
  );
}