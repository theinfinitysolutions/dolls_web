"use client";
import React from "react";
import { abril } from "../layout";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { songsAtrangi, songsMAMA, songsSSD } from "@/utils/consts";
import { FaSpotify } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import App from "next/app";
import Transition from "@/components/Transition";

const Music = () => {
  return (
    <Transition>
      <div className="flex flex-col max-w-screen min-h-screen overflow-y-scroll relative items-center justify-between py-[5vh]">
        <div className="flex flex-col items-start w-[90vw]">
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
            </div>
            <div className="grid grid-cols-4 justify-around  w-11/12 items-end">
              {songsAtrangi.map((song, index) => (
                <div className="flex flex-col items-center w-[10vw] ml-[5vw]">
                  <div className="h-[10vw] w-[10vw] group mt-4 relative">
                    <div className="h-[10vw] w-[10vw]  mt-4 absolute z-20">
                      <Image
                        src={`/song${(index + 3) % 8}.jpeg`}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="h-[10vw] w-[10vw] -z-10 group-hover:z-10 absolute bg-[#00000077] transition-all opacity-0 translate-y-[-10vw] group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-200">
                        <div className="flex flex-col items-center justify-center h-full w-full">
                          <div className="flex flex-row items-center justify-around w-full">
                            <a
                              href={song.Spotify}
                              target="_blank"
                              rel="noreferrer"
                              className=" cursor-pointer"
                            >
                              <FaSpotify size={18} color="#fff" />
                            </a>
                            <a
                              href={song.AppleMusic}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <SiApplemusic size={18} color="#fff" />
                            </a>
                            <a
                              href={song.Youtube}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <SiYoutubemusic size={18} color="#fff" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[10vw] w-[10vw] z-10 absolute transition-all group-hover:translate-x-[-5vw] group-hover:duration-200  mt-4 ">
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
            <div className="flex flex-row justify-around items-center w-full mt-[10vh]">
              <div className=" flex flex-row w-[20vw] h-full items-center">
                <div className="w-full h-[20vh] relative flex flex-col justify-center items-center">
                  <h2
                    className={`${abril.className} text-white text-[5rem] leading-[4rem] text-center font-bold `}
                  >
                    SSD
                  </h2>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 justify-around  w-11/12 items-end">
              {songsSSD.map((song, index) => (
                <div className="flex flex-col items-center w-[10vw] ml-[5vw]">
                  <div className="h-[10vw] w-[10vw] group mt-4 relative">
                    <div
                      className={`h-[10vw] w-[10vw]  mt-4 absolute z-20 group`}
                    >
                      <Image
                        src={`/song${(index + 3) % 8}.jpeg`}
                        layout="fill"
                        objectFit="cover"
                      />

                      <div className="h-[10vw] w-[10vw] -z-10 group-hover:z-10 absolute bg-[#00000077] transition-all opacity-0 translate-y-[-10vw] group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-200">
                        <div className="flex flex-col items-center justify-center h-full w-full">
                          <div className="flex flex-row items-center justify-around w-full">
                            <a
                              href={song.Spotify}
                              target="_blank"
                              rel="noreferrer"
                              className=" cursor-pointer"
                            >
                              <FaSpotify size={18} color="#fff" />
                            </a>
                            <a
                              href={song.AppleMusic}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <SiApplemusic size={18} color="#fff" />
                            </a>
                            <a
                              href={song.Youtube}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <SiYoutubemusic size={18} color="#fff" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[10vw] w-[10vw] z-10 absolute transition-all group-hover:translate-x-[-5vw] group-hover:duration-200  mt-4 ">
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
                      {song.artist?.length > 15
                        ? song.artist.slice(0, 15) + "..."
                        : song.artist}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-row justify-around items-center w-full mt-[10vh]">
              <div className=" flex flex-row w-[20vw] h-full items-center">
                <div className="w-full h-[20vh] relative flex-col justify-center items-center">
                  <h2
                    className={`${abril.className} text-white text-[5rem] leading-[4rem] text-center font-bold `}
                  >
                    MAMA Beats
                  </h2>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 justify-around  w-11/12 items-end">
              {songsMAMA.map((song, index) => (
                <div className="flex flex-col items-center w-[10vw] ml-[5vw]">
                  <div className="h-[10vw] w-[10vw] group mt-4 relative">
                    <div className="h-[10vw] w-[10vw]  mt-4 absolute z-20 group">
                      <Image
                        src={`/song${(index + 3) % 8}.jpeg`}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="h-[10vw] w-[10vw] -z-10 group-hover:z-10 absolute bg-[#00000077] transition-all opacity-0 translate-y-[-10vw] group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-200">
                        <div className="flex flex-col items-center justify-center h-full w-full">
                          <div className="flex flex-row items-center justify-around w-full">
                            <a
                              href={song.Spotify}
                              target="_blank"
                              rel="noreferrer"
                              className=" cursor-pointer"
                            >
                              <FaSpotify size={18} color="#fff" />
                            </a>
                            <a
                              href={song.AppleMusic}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <SiApplemusic size={18} color="#fff" />
                            </a>
                            <a
                              href={song.Youtube}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <SiYoutubemusic size={18} color="#fff" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[10vw] w-[10vw] z-10 absolute transition-all group-hover:translate-x-[-5vw] group-hover:duration-200  mt-4 ">
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
    </Transition>
  );
};

export default Music;
