"use client";
import React from "react";
import { SiApplemusic } from "react-icons/si";
import { AiFillYoutube } from "react-icons/ai";
import { FaSpotify } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";
import useStore from "@/utils/store";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";

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
    <nav
      className={`flex flex-row max-w-screen w-full h-[5vh] z-50 ${
        path == "/" ? (path == "media" ? "bg-black" : "fixed") : "fixed"
      } text-white `}
    >
      <div className="w-full flex flex-row justify-between items-center px-2 lg:px-8 py-8">
        <div className="flex flex-row items-center">
          {path != "/" ? (
            <a
              // onMouseEnter={() => {
              //   setCurrentPointer("a");
              // }}
              // onMouseLeave={() => {
              //   setCurrentPointer("");
              // }}
              href="/"
              className="text-xl  mr-2  text-white cursor-pointer "
            >
              <IoMdArrowBack className="text-xl cursor-pointer" />
            </a>
          ) : null}
          <a
            // onMouseEnter={() => {
            //   setCurrentPointer("a");
            // }}
            // onMouseLeave={() => {
            //   setCurrentPointer("");
            // }}
            href="/"
            className=" text-lg lg:text-xl text-white cursor-pointer"
          >
            {"Dole's Music"} {path == "/" ? "" : " / "}
          </a>
          <p className=" text-sm text-red-500 ml-1 mt-1">
            {navbarItems.find((item) => `${item.link}/` == path)?.title}
          </p>
        </div>
        <div className="flex flex-row justify-around items-center w-5/12 lg:w-2/12">
          <a
            // onMouseEnter={() => {
            //   setCurrentPointer("a");
            // }}
            // onMouseLeave={() => {
            //   setCurrentPointer("");
            // }}
            href={"https://music.apple.com/in/artist/doleshwar-raj/1747343701"}
            target="_blank"
            className="cursor-pointer"
          >
            <SiApplemusic className=" text-base lg:text-xl " />
          </a>
          <a
            // onMouseEnter={() => {
            //   setCurrentPointer("a");
            // }}
            // onMouseLeave={() => {
            //   setCurrentPointer("");
            // }}
            href="https://www.youtube.com/c/AtrangiFunkaar"
            target="_blank"
            className=" cursor-pointer"
          >
            <AiFillYoutube className=" text-base lg:text-xl cursor-pointer " />
          </a>

          <a
            // onMouseEnter={() => {
            //   setCurrentPointer("a");
            // }}
            // onMouseLeave={() => {
            //   setCurrentPointer("");
            // }}
            href="https://open.spotify.com/playlist/6iehjmMgDPjf9v0NeS3iJW?si=pDWOhU8DToKmfi_1S9Ma0w"
            target="_blank"
            className=" cursor-pointer"
          >
            <FaSpotify className=" text-base lg:text-xl " />
          </a>

          <a
            // onMouseEnter={() => {
            //   setCurrentPointer("a");
            // }}
            // onMouseLeave={() => {
            //   setCurrentPointer("");
            // }}
            href="https://wynk.in/music/artist/doleshwar-raj/wa_5qYTFSKcgg"
            target="_blank"
            className=" cursor-pointer"
            x
          >
            <Image
              src={process.env.NEXT_PUBLIC_API_URL + "/wynk.png"}
              height={12}
              width={12}
              className=" h-4 w-4 lg:h-6 lg:w-6 "
              alt="wynk"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
