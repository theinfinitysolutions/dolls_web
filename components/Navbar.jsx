"use client";
import React from "react";
import { SiApplemusic } from "react-icons/si";
import { AiFillYoutube } from "react-icons/ai";
import { FaSpotify } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex flex-row max-w-screen w-screen h-[5vh] fixed z-0  text-white ">
      <div className="w-full flex flex-row justify-end items-center px-8 py-8">
        {/* <p className="text-3xl text-white italic">Dole's Music</p> */}
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
