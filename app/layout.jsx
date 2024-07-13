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
import useStore from "@/utils/store";
import { MdOutlineArrowOutward } from "react-icons/md";
import { MdOutlineCameraAlt } from "react-icons/md";
import JoinUsModal from "@/components/secretPlaylistModal";
import { IoIosMusicalNotes } from "react-icons/io";
import RandomCursor from "@/components/RandomCursor";
import { usePathname } from "next/navigation";
import localFont from "next/font/local";
import ViewProductModal from "@/components/ViewProductModal";

export const gazpacho_black = localFont({
  src: "../public/gazpacho_black.ttf",
});

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
  const pathname = usePathname();
  const cursorRef = useRef(null);
  const currentPointer = useStore((state) => state.currentPointer);
  const setCurrentPointer = useStore((state) => state.setCurrentPointer);
  const { showModal, setShowModal, showSongsModal } = useStore();

  useEffect(() => {
    const handleMouseMove = (event) => {
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY + window.scrollY}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("scroll", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (showModal) {
      if (pathname != "/exclusive") {
        useStore.setState({ showModal: false });
      }
    }
  }, [pathname]);

  return (
    <html lang="en">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Dole's Music" />
      <meta
        name="keywords"
        content="Dole's Music, Doleshwar Raj, Doleshwar, Raj, Atrangi Funkaar, Atrangi, Funkaar, Apple Music, Spotify, Doleshwar Apple,Doleshwar Raj Apple Music, Doleshwar Raj Spotify, Doleshwar Raj Music, Doleshwar Raj Songs, Doleshwar Raj Albums, Doleshwar Raj Musician, Doleshwar Raj Music, Doleshwar Raj Musician, MAMA Beats, SSD, Jiya jaye na, Jiya, SSD,Shaunak"
      />
      <title>{"Dole's Music"}</title>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <body
        className={`${abril.className} relative min-h-screen bg-black/95 ${
          showModal || showSongsModal.open ? "h-screen overflow-hidden" : ""
        }`}
      >
        {pathname == "/" ? (
          <div className="bg-animation z-0">
            <div id="stars3"></div>
            <div id="stars4"></div>
          </div>
        ) : null}

        <div
          ref={cursorRef}
          style={{ zIndex: 100, pointerEvents: "none" }}
          className={`hidden lg:flex cursor-alt absolute  ${
            currentPointer != ""
              ? "border-[1px] border-white bg-white h-12 w-12  "
              : " border-[1px] border-white  h-12 w-12"
          }   flex justify-center items-center rounded-full -translate-x-1/2 -translate-y-1/2 `}
        >
          {currentPointer == "a" ? (
            <MdOutlineArrowOutward color="black" className="text-xl" />
          ) : currentPointer == "i" ? (
            <MdOutlineCameraAlt color="black" className="text-xl" />
          ) : (
            <RandomCursor />
          )}
        </div>
        <div className=" hidden md:block fixed top-0 left-0 h-screen w-screen -z-10">
          <Image
            src={"/bgimg.jpeg"}
            unoptimized
            layout="fill"
            alt="bg image"
            className=" opacity-20"
          />
        </div>
        <div className="block md:hidden fixed top-0 left-0 h-screen w-screen -z-10">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + "/dolls3.jpeg"}
            unoptimized
            layout="fill"
            objectFit={"cover"}
            objectPosition={"bottom"}
            alt="bg image"
            className=" opacity-20"
          />
        </div>
        <Navbar />
        <div className="z-0 min-h-screen max-w-screen">{children}</div>
        <Footer />
        <JoinUsModal />
        <ViewProductModal />
      </body>
    </html>
  );
}
