"use client";
import { Cutive_Mono, Abril_Fatface, Calistoga } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import {
  Alfa_Slab_One,
  Dancing_Script,
  Shadows_Into_Light,
  Jacquard_12_Charted,
  Orbitron,
} from "next/font/google";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";

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

export const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
});

export const shadows = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

export const calistoga = Calistoga({
  subsets: ["latin"],
  weight: ["400"],
});

export const jacquard = Jacquard_12_Charted({
  subsets: ["latin"],
  weight: ["400"],
});

export const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400"],
});

let title = "DOLE'S MUSIC";

export default function RootLayout({ children }) {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY + window.scrollY}px `;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("scroll", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <html lang="en">
      <body className={`${abril.className} relative min-h-screen bg-black/95`}>
        <div
          ref={cursorRef}
          className="cursor-alt absolute bg-pink-500 h-8 w-8 rounded-full -translate-x-1/2 -translate-y-1/2 "
        ></div>
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
