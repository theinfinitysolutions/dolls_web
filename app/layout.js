"use client";
import { Cutive_Mono, Abril_Fatface } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Alfa_Slab_One } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Transition from "@/components/Transition";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

const inter = Cutive_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

export const alfa = Alfa_Slab_One({
  subsets: ["latin"],
  weight: ["400"],
});

export const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
});

let title = "DOLE'S MUSIC";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${abril.className} relative min-h-screen bg-black/95`}>
        <div className="fixed top-0 left-0 h-screen w-screen -z-10">
          <Image src={"/bgimg.jpeg"} layout="fill" className=" opacity-10" />
        </div>
        <Navbar />
        <div className="z-0 min-h-screen max-w-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
