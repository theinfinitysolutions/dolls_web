"use client";
import React, { useEffect, useRef, useState } from "react";
import { abril } from "../layout";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { songsAtrangi, songsMAMA, songsSSD } from "@/utils/consts";
import { FaSpotify } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import Transition from "@/components/Transition";
import useStore from "@/utils/store";

const music = [
  {
    genre: "ROCK",
    streams: "13M +",
    artists: "6",
    songs: songsAtrangi,
  },
  {
    genre: "RnB",
    streams: "7M +",
    artists: "10",
    songs: songsSSD,
  },
  {
    genre: "RAP & HIP HOP",
    streams: "1M +",
    artists: "2",
    songs: songsMAMA,
  },
];

const Music = () => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [currentGroup, setCurrentGroup] = useState(0);
  const [currentSong, setCurrentSong] = useState({});
  // const { x, y } = useMousePosition();
  const location = useRef(null);
  const { setCurrentPointer } = useStore();

  const handleMouseMove = (e) => {
    if (location.current) {
      location.current.style.left = `${e.clientX + 10}px`;
      location.current.style.top = `${e.clientY + 10 + scrollY}px`;
    }
  };

  const handleMouseOver = (e) => {
    location.current.style.display = "block";
  };

  const handleMouseOut = () => {
    location.current.style.display = "none";
  };

  useEffect(() => {
    console.log("location 1", location);
  }, []);
  return (
    <Transition>
      <div className="flex flex-col max-w-screen min-h-screen w-screen overflow-y-scroll relative items-center justify-between py-[5vh] overflow-hidden">
        <div className="flex flex-col items-center w-[90vw] ">
          <div className="flex flex-col items-center w-full mt-[5vh] relative">
            {music.map((item, index) => (
              <div
                key={index}
                className="flex flex-row w-full h-[40vh] mt-[10vh] relative overflow-hidden bg-[#00000055]"
              >
                <div className="px-4 py-2 absolute right-0 top-0 bg-white">
                  <p className="text-black text-sm">View All</p>
                </div>
                <div className="w-[40vh] h-[40vh] z-50 absolute bg-white flex flex-col justify-between items-center px-4 pt-4">
                  <div className="flex flex-row  w-full justify-between items-center border-t-[1px] border-black"></div>
                  <div className="flex flex-col items-start">
                    <p className="text-start text-red-700 text-sm">Genre</p>
                    <h3 className=" text-[4rem] leading-[3rem] text-black font-semibold">
                      {item.genre}
                    </h3>
                  </div>
                  <div className="flex flex-row  w-full justify-between items-center border-t-[1px] border-black">
                    <div className="flex flex-col items-center py-2 w-1/2 border-r-[1px] border-black">
                      <p className="text-start text-red-700 text-sm">Streams</p>
                      <p className="text-start text-xl text-black">
                        {item.streams}
                      </p>
                    </div>
                    <div className="flex flex-col items-center py-2 w-1/2">
                      <p className="text-start text-red-700 text-sm">Artists</p>
                      <p className="text-start text-xl text-black">
                        {item.artists}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  onMouseMove={handleMouseMove}
                  className={` flex flex-row items-center w-full animate-infinitescroll ${
                    isHovered && currentGroup === index
                      ? "[animation-play-state:paused]"
                      : "[animation-play-state:running]"
                  }`}
                >
                  {item.songs.map((song, songIndex) => (
                    <div
                      data-song="Song Name"
                      onMouseEnter={() => {
                        setIsHovered(true);
                        setCurrentGroup(index);
                        setCurrentSong(song);
                      }}
                      onMouseLeave={() => {
                        setIsHovered(false);
                        setCurrentGroup(-1);
                        setCurrentSong({});
                      }}
                      key={songIndex}
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                      className="flex flex-col items-center h-[17.5vw]  w-[10vw] ml-[5vw]"
                    >
                      <div className="h-[10vw] w-[10vw] group mt-4 relative">
                        <div className="h-[10vw] w-[10vw]  mt-4 absolute z-20">
                          {song.imageUrl.toString().length > 0 ? (
                            <Image
                              src={song.imageUrl.toString()}
                              layout="fill"
                              objectFit="cover"
                            />
                          ) : (
                            <Image
                              src={"/song1.jpeg"}
                              layout="fill"
                              objectFit="cover"
                            />
                          )}

                          <div className="h-[10vw] pointer-events-none w-[10vw] -z-20 group-hover:z-10 absolute bg-[#00000077] transition-all opacity-0 translate-y-[-10vw] group-hover:opacity-100 group-hover:translate-y-0 group-hover">
                            <div className="flex flex-col items-center justify-center h-full w-full">
                              <div className="flex flex-row items-center pointer-events-auto justify-around w-full">
                                <a
                                  onMouseEnter={() => {
                                    setCurrentPointer("a");
                                  }}
                                  onMouseLeave={() => {
                                    setCurrentPointer("");
                                  }}
                                  href={song.Spotify}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <FaSpotify size={18} color="#fff" />
                                </a>
                                <a
                                  onMouseEnter={() => {
                                    setCurrentPointer("a");
                                  }}
                                  onMouseLeave={() => {
                                    setCurrentPointer("");
                                  }}
                                  href={song.AppleMusic}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <SiApplemusic size={18} color="#fff" />
                                </a>
                                <a
                                  onMouseEnter={() => {
                                    setCurrentPointer("a");
                                  }}
                                  onMouseLeave={() => {
                                    setCurrentPointer("");
                                  }}
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
            ))}
          </div>
        </div>
        <div className="flex flex-row w-[90vw] h-[40vh] relative  mt-[5vh] justify-end items-center">
          <div className="flex flex-col items-end w-6/12">
            <p className="text-white text-3xl text-right">
              {" Like our music? Try our exclusive playlist. "}
            </p>

            <div className=" w-[10vw] h-[3vw] mt-4 z-10  rotate-12 rounded-md">
              <Image
                src={"/arrow.png"}
                layout="fill"
                objectFit="contain"
                className="opacity-80"
              />
            </div>
          </div>
          <div className="flex flex-col items-center ml-4">
            <a
              onClick={() => {
                router.push("/exclusive");
              }}
              className=" doorframe group h-[30vh] w-[17.5vh] relative border-[0.5px] overflow-hidden border-red-100 rounded-md"
              tabindex="0"
            >
              <div className="door w-full h-full z-10 rounded-md">
                <Image src={"/door.png"} layout="fill" />
              </div>
              <div className=" w-full h-full bg-black absolute flex flex-col items-end justify-center z-0">
                <div className="circle -z-10"></div>
                <div className="w-[10vh] h-[15vh] mb-[10vh]  relative rotate-45 translate-x-[15vw] group-hover:translate-x-6 group-hover:rotate-[-30deg]  duration-150 rounded-md">
                  <Image src={"/arm.png"} layout="fill" objectFit="contain" />
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* <Tooltip
          text={{
            title: currentSong.song,
            artist: currentSong.artist,
          }}
          ref={location}
          position={{ x: location.clientX, y: location.clientY }}
        /> */}
        <div
          style={{
            // top: `${y}px`,
            // left: `${x}px`,
            zIndex: 100,
          }}
          className="tooltip bg-white absolute"
          ref={location}
        >
          <div className="flex flex-col items-center px-4 py-2">
            <div className="h-[7.5vw] w-[7.5vw] relative">
              {currentSong.imageUrl?.toString().length > 0 ? (
                <Image
                  src={currentSong.imageUrl.toString()}
                  layout="fill"
                  objectFit="cover"
                />
              ) : (
                <Image
                  onMouseEnter={() => {
                    setCurrentPointer("i");
                  }}
                  onMouseLeave={() => {
                    setCurrentPointer("");
                  }}
                  src={"/song1.jpeg"}
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </div>
            <div className="flex flex-col items-start mt-4 mb-2">
              <div className="flex flex-col items-start ">
                <p className=" text-white text-2xl">{currentSong.song}</p>
              </div>
              <div className="flex flex-col items-start mb-1">
                <p className=" text-red-700 text-xs ">Artist</p>
                <p className=" text-white text-sm -mt-1">
                  {currentSong.artist}
                </p>
              </div>
              <div className="flex flex-col items-start mb-1">
                <p className=" text-red-700 text-xs ">Mix</p>
                <p className=" text-white text-sm -mt-1">
                  {currentSong?.mix || "Hardik Keshan"}
                </p>
              </div>
              <div className="flex flex-col items-start">
                <p className=" text-red-700 text-xs ">Production</p>
                <p className=" text-white text-sm -mt-1">
                  {currentSong?.prod || "Current day studios"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default Music;
