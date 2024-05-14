"use client";
import React from "react";
import { abril } from "../layout";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { songsAtrangi, songsMAMA, songsSSD } from "@/utils/consts";

const Music = () => {
  return (
    <div className="flex flex-col max-w-screen min-h-screen overflow-y-scroll relative items-center justify-between py-[5vh]">
      <div className="flex flex-col items-start w-[90vw]">
        <h1
          className={`${abril.className} text-white text-[5rem] leading-[4rem] font-bold `}
        >
          Music
        </h1>
        <div className="flex flex-col items-center w-full mt-[5vh] relative">
          <div className="flex flex-row justify-around items-center w-full">
            <div className=" flex flex-row w-[20vw] h-full items-center">
              <div className="w-full h-[20vh] relative">
                <Image
                  src="/atrangifunkaar.png"
                  objectFit="contain"
                  layout="fill"
                />
              </div>
            </div>
            <div className="flex flex-row justify-between w-[60vw] px-8">
              <div className="flex flex-col items-center w-[15vw] ">
                <div className="h-[15vw] w-[15vw] group mt-4 relative">
                  <div className="h-[15vw] w-[15vw]  mt-4 absolute z-20">
                    <Image
                      src={`/song${0}.jpeg`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="h-[15vw] w-[15vw] z-10 absolute transition-all group-hover:translate-x-[-7vw] group-hover:duration-200  mt-4 ">
                    <Image
                      src="/asset1.png"
                      layout="fill"
                      objectFit="cover"
                      className="rotate-45"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-8 w-full items-center">
                  <p className="text-md font-semibold">
                    {songsAtrangi[0].song}
                  </p>
                  <p className="text-sm font-semibold text-red-500 ">
                    {songsAtrangi[0].artist}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center w-[15vw] ">
                <div className="h-[15vw] w-[15vw] group mt-4 relative">
                  <div className="h-[15vw] w-[15vw]  mt-4 absolute z-20">
                    <Image
                      src={`/song${1}.jpeg`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="h-[15vw] w-[15vw] z-10 absolute transition-all group-hover:translate-x-[-7vw] group-hover:duration-200  mt-4 ">
                    <Image
                      src="/asset1.png"
                      layout="fill"
                      objectFit="cover"
                      className="rotate-45"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-8 w-full items-center">
                  <p className="text-md font-semibold">
                    {songsAtrangi[1].song}
                  </p>
                  <p className="text-sm font-semibold text-red-500 ">
                    {songsAtrangi[1].artist}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center w-[15vw] ">
                <div className="h-[15vw] w-[15vw] group mt-4 relative">
                  <div className="h-[15vw] w-[15vw]  mt-4 absolute z-20">
                    <Image
                      src={`/song${2}.jpeg`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="h-[15vw] w-[15vw] z-10 absolute transition-all group-hover:translate-x-[-7vw] group-hover:duration-200  mt-4 ">
                    <Image
                      src="/asset1.png"
                      layout="fill"
                      objectFit="cover"
                      className="rotate-45"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-8 w-full items-center">
                  <p className="text-md font-semibold">
                    {songsAtrangi[2].song}
                  </p>
                  <p className="text-sm font-semibold text-red-500 ">
                    {songsAtrangi[2].artist}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 justify-around  w-11/12 items-end">
            {songsAtrangi.map((song, index) => (
              <div className="flex flex-col items-center w-[15vw] ml-[5vw]">
                <div className="h-[15vw] w-[15vw] group mt-4 relative">
                  <div className="h-[15vw] w-[15vw]  mt-4 absolute z-20">
                    <Image
                      src={`/song${(index + 3) % 8}.jpeg`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="h-[15vw] w-[15vw] z-10 absolute transition-all group-hover:translate-x-[-7vw] group-hover:duration-200  mt-4 ">
                    <Image
                      src="/asset1.png"
                      layout="fill"
                      objectFit="cover"
                      className="rotate-45"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-8 w-full items-center">
                  <p className="text-md text-center font-semibold">
                    {song.song}
                  </p>
                  <p className="text-sm font-semibold text-red-500 ">
                    {song.artist}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-row justify-around items-center w-full">
            <div className=" flex flex-row w-[20vw] h-full items-center">
              <div className="w-full h-[20vh] relative flex-col justify-center items-center">
                <h2
                  className={`${abril.className} text-white text-[5rem] leading-[4rem] text-center font-bold `}
                >
                  SSD
                </h2>
              </div>
            </div>
            <div className="flex flex-row justify-between w-[60vw] px-8">
              <div className="flex flex-col items-center w-[15vw] ">
                <div className="h-[15vw] w-[15vw] group mt-4 relative">
                  <div className="h-[15vw] w-[15vw]  mt-4 absolute z-20">
                    <Image
                      src={`/song${0}.jpeg`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="h-[15vw] w-[15vw] z-10 absolute transition-all group-hover:translate-x-[-7vw] group-hover:duration-200  mt-4 ">
                    <Image
                      src="/asset1.png"
                      layout="fill"
                      objectFit="cover"
                      className="rotate-45"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-8 w-full items-center">
                  <p className="text-xl font-semibold">{songsSSD[0].song}</p>
                  <p className="text-base font-semibold text-red-500 ">
                    {songsSSD[0].artist}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center w-[15vw] ">
                <div className="h-[15vw] w-[15vw] group mt-4 relative">
                  <div className="h-[15vw] w-[15vw]  mt-4 absolute z-20">
                    <Image
                      src={`/song${1}.jpeg`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="h-[15vw] w-[15vw] z-10 absolute transition-all group-hover:translate-x-[-7vw] group-hover:duration-200  mt-4 ">
                    <Image
                      src="/asset1.png"
                      layout="fill"
                      objectFit="cover"
                      className="rotate-45"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-8 w-full items-center">
                  <p className="text-xl font-semibold">{songsSSD[1].song}</p>
                  <p className="text-base font-semibold text-red-500 ">
                    {songsSSD[1].artist}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center w-[15vw] ">
                <div className="h-[15vw] w-[15vw] group mt-4 relative">
                  <div className="h-[15vw] w-[15vw]  mt-4 absolute z-20">
                    <Image
                      src={`/song${2}.jpeg`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="h-[15vw] w-[15vw] z-10 absolute transition-all group-hover:translate-x-[-7vw] group-hover:duration-200  mt-4 ">
                    <Image
                      src="/asset1.png"
                      layout="fill"
                      objectFit="cover"
                      className="rotate-45"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-8 w-full items-center">
                  <p className="text-xl font-semibold">{songsSSD[2].song}</p>
                  <p className="text-base font-semibold text-red-500 ">
                    {songsSSD[2].artist}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 justify-around  w-11/12 items-end">
            {songsSSD.map((song, index) => (
              <div className="flex flex-col items-center w-[15vw] ml-[5vw]">
                <div className="h-[15vw] w-[15vw] group mt-4 relative">
                  <div className="h-[15vw] w-[15vw]  mt-4 absolute z-20">
                    <Image
                      src={`/song${(index + 3) % 8}.jpeg`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="h-[15vw] w-[15vw] z-10 absolute transition-all group-hover:translate-x-[-7vw] group-hover:duration-200  mt-4 ">
                    <Image
                      src="/asset1.png"
                      layout="fill"
                      objectFit="cover"
                      className="rotate-45"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-8 w-full items-center">
                  <p className="text-md text-center font-semibold">
                    {song.song}
                  </p>
                  <p className="text-sm font-semibold text-red-500 ">
                    {song.artist}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-row justify-around items-center w-full">
            <div className=" flex flex-row w-[20vw] h-full items-center">
              <div className="w-full h-[20vh] relative flex-col justify-center items-center">
                <h2
                  className={`${abril.className} text-white text-[5rem] leading-[4rem] text-center font-bold `}
                >
                  MAMA Beats
                </h2>
              </div>
            </div>
            <div className="flex flex-row justify-between w-[60vw] px-8">
              <div className="flex flex-col items-center w-[15vw] ">
                <div className="h-[15vw] w-[15vw] group mt-4 relative">
                  <div className="h-[15vw] w-[15vw]  mt-4 absolute z-20">
                    <Image
                      src={`/song${0}.jpeg`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="h-[15vw] w-[15vw] z-10 absolute transition-all group-hover:translate-x-[-7vw] group-hover:duration-200  mt-4 ">
                    <Image
                      src="/asset1.png"
                      layout="fill"
                      objectFit="cover"
                      className="rotate-45"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-8 w-full items-center">
                  <p className="text-xl font-semibold">{songsMAMA[0].song}</p>
                  <p className="text-base font-semibold text-red-500 ">
                    {songsMAMA[0].artist}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center w-[15vw] ">
                <div className="h-[15vw] w-[15vw] group mt-4 relative">
                  <div className="h-[15vw] w-[15vw]  mt-4 absolute z-20">
                    <Image
                      src={`/song${1}.jpeg`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="h-[15vw] w-[15vw] z-10 absolute transition-all group-hover:translate-x-[-7vw] group-hover:duration-200  mt-4 ">
                    <Image
                      src="/asset1.png"
                      layout="fill"
                      objectFit="cover"
                      className="rotate-45"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-8 w-full items-center">
                  <p className="text-xl font-semibold">{songsMAMA[1].song}</p>
                  <p className="text-base font-semibold text-red-500 ">
                    {songsMAMA[1].artist}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center w-[15vw] ">
                <div className="h-[15vw] w-[15vw] group mt-4 relative">
                  <div className="h-[15vw] w-[15vw]  mt-4 absolute z-20">
                    <h2
                      className={`${abril.className} text-white text-[5rem] leading-[4rem] font-bold `}
                    >
                      SSD
                    </h2>
                  </div>
                  <div className="h-[15vw] w-[15vw] z-10 absolute transition-all group-hover:translate-x-[-7vw] group-hover:duration-200  mt-4 ">
                    <Image
                      src="/asset1.png"
                      layout="fill"
                      objectFit="cover"
                      className="rotate-45"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-8 w-full items-center">
                  <p className="text-xl font-semibold">{songsMAMA[2].song}</p>
                  <p className="text-base font-semibold text-red-500 ">
                    {songsMAMA[2].artist}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 justify-around  w-11/12 items-end">
            {songsMAMA.map((song, index) => (
              <div className="flex flex-col items-center w-[15vw] ml-[5vw]">
                <div className="h-[15vw] w-[15vw] group mt-4 relative">
                  <div className="h-[15vw] w-[15vw]  mt-4 absolute z-20">
                    <Image
                      src={`/song${(index + 3) % 8}.jpeg`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="h-[15vw] w-[15vw] z-10 absolute transition-all group-hover:translate-x-[-7vw] group-hover:duration-200  mt-4 ">
                    <Image
                      src="/asset1.png"
                      layout="fill"
                      objectFit="cover"
                      className="rotate-45"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-8 w-full items-center">
                  <p className="text-md text-center font-semibold">
                    {song.song}
                  </p>
                  <p className="text-sm font-semibold text-red-500 ">
                    {song.artist}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
