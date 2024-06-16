"use client";
import React from "react";
import { SiApplemusic } from "react-icons/si";
import { AiFillYoutube } from "react-icons/ai";
import { FaSpotify } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";
import useStore from "@/utils/store";
import Image from "next/image";

const navbarItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Music",
    link: "/music",
  },
  {
    title: "Media",
    link: "/media",
  },
  {
    title: "Exclusive",
    link: "/exclusive",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const router = useRouter();
  const path = usePathname();

  const { setCurrentPointer } = useStore();

  return (
    <nav className="flex flex-row max-w-screen w-full h-[5vh] fixed z-50  text-white ">
      <div className="w-full flex flex-row justify-between items-center px-8 py-8">
        <div className="flex flex-row items-baseline">
          <a
            onMouseEnter={() => {
              setCurrentPointer("a");
            }}
            onMouseLeave={() => {
              setCurrentPointer("");
            }}
            onClick={() => {
              router.push("/");
            }}
            className="text-xl text-white "
          >
            {"Dole's Music /"}
          </a>
          <p className=" text-sm text-red-500 ml-1">
            {navbarItems.find((item) => item.link == path)?.title}
          </p>
        </div>
        <div className="flex flex-row justify-around items-center w-4/12 lg:w-2/12">
          <a
            onMouseEnter={() => {
              setCurrentPointer("a");
            }}
            onMouseLeave={() => {
              setCurrentPointer("");
            }}
            onClick={() => {
              window.open(
                "https://music.apple.com/in/artist/doleshwar-raj/1747343701",
                "_blank"
              );
            }}
          >
            <SiApplemusic className=" text-sm lg:text-xl " />
          </a>
          <a
            onMouseEnter={() => {
              setCurrentPointer("a");
            }}
            onMouseLeave={() => {
              setCurrentPointer("");
            }}
            onClick={() => {
              window.open("https://www.youtube.com/c/AtrangiFunkaar", "_blank");
            }}
          >
            <AiFillYoutube className=" text-sm lg:text-xl " />
          </a>

          <a
            onMouseEnter={() => {
              setCurrentPointer("a");
            }}
            onMouseLeave={() => {
              setCurrentPointer("");
            }}
            onClick={() => {
              window.open(
                "https://open.spotify.com/playlist/6iehjmMgDPjf9v0NeS3iJW?si=pDWOhU8DToKmfi_1S9Ma0w",
                "_blank"
              );
            }}
          >
            <FaSpotify className=" text-sm lg:text-xl " />
          </a>

          <a
            onMouseEnter={() => {
              setCurrentPointer("a");
            }}
            onMouseLeave={() => {
              setCurrentPointer("");
            }}
            onClick={() => {
              window.open(
                "https://wynk.in/music/artist/doleshwar-raj/wa_5qYTFSKcgg",
                "_blank"
              );
            }}
          >
            <Image
              src="/wynk.png"
              height={12}
              width={12}
              className=" h-4 w-4 lg:h-6 lg:w-6 "
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
