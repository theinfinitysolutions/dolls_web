"use client ";
import { Playfair } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Alfa_Slab_One } from "next/font/google";

const inter = Playfair({
  subsets: ["latin"],
});

export const alfa = Alfa_Slab_One({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative bg-[#1c0c06]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
