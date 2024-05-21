"use client";
import React from "react";
import { SiApplemusic } from "react-icons/si";
import { AiFillYoutube } from "react-icons/ai";
import { FaSpotify } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";

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

  return (
    <nav className="flex flex-row max-w-screen w-full h-[5vh] fixed z-50  text-white ">
      <div className="w-full flex flex-row justify-between items-center px-8 py-8">
        <div className="flex flex-row items-baseline">
          <a
            onClick={() => {
              router.push("/");
            }}
            className="text-xl text-white cursor-pointer"
          >
            Dole's Music /
          </a>
          <p className="text-sm text-red-500 ml-1">
            {navbarItems.find((item) => item.link == path).title}
          </p>
        </div>
        <div className="flex flex-row justify-around items-center w-2/12">
          <a
            onClick={() => {
              router.push("/");
            }}
          >
            <SiApplemusic className="text-xl " />
          </a>
          <a onClick={() => {}}>
            <AiFillYoutube className="text-xl" />
          </a>

          <a onClick={() => {}}>
            <FaSpotify className="text-xl" />
          </a>

          <a onClick={() => {}}>
            <FaSoundcloud className="text-xl" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
