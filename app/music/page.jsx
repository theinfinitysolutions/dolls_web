"use client";
import React, { useEffect, useRef, useState } from "react";
import { abril } from "../layout";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { pop, rock, hiphop } from "@/utils/consts";
import { FaSpotify } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import Transition from "@/components/Transition";
import { Swiper, SwiperSlide } from "swiper/react";
import useStore from "@/utils/store";

import "swiper/css";

const music = [
  {
    genre: "POP",
    streams: "7M +",
    artists: "10",
    songs: pop,
  },
  {
    genre: "ROCK",
    streams: "13M +",
    artists: "6",
    songs: rock,
  },

  {
    genre: "HIP HOP",
    streams: "1M +",
    artists: "2",
    songs: hiphop,
  },
];

const Music = () => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [currentGroup, setCurrentGroup] = useState(0);
  const [currentSong, setCurrentSong] = useState({});
  const location = useRef(null);
  const { setCurrentPointer } = useStore();
  const { showSongsModal, setShowSongsModal } = useStore();

  const handleMouseMove = (e) => {
    if (location.current) {
      location.current.style.left =
        e.clientX > window.innerWidth / 2
          ? `${e.clientX - 200}px`
          : `${e.clientX + 10}px`;
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
    console.log("location 1", location, showSongsModal);
  }, [showSongsModal]);

  return (
    <Transition>
      <div
        id="music"
        className="flex flex-col max-w-screen min-h-screen w-screen overflow-y-scroll relative items-center justify-between py-[5vh] overflow-hidden"
      >
        <div className="flex flex-col items-center w-[90vw] ">
          <div className="flex flex-col items-center w-full mt-[2.5vh] lg:mt-[5vh] relative">
            {music.map((item, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row w-full h-full lg:h-[40vh] mt-[5vh] lg:mt-[10vh] relative overflow-hidden bg-[#00000055]"
              >
                <a
                  // onMouseEnter={() => {
                  //   setCurrentPointer("a");
                  // }}
                  // onMouseLeave={() => {
                  //   setCurrentPointer("");
                  // }}
                  onClick={() => {
                    setShowSongsModal({
                      open: true,
                      song: index,
                    });
                    console.log("showSongsModal");
                  }}
                  className="px-4 py-2 absolute right-0 top-0 z-40 bg-white cursor-pointer"
                >
                  <p className="text-black text-sm">View All</p>
                </a>
                <div className=" lg:w-[40vh] lg:h-[40vh] z-50 lg:absolute bg-white flex flex-col justify-between items-center px-4 pt-4">
                  <div className="flex flex-row  w-full justify-between items-center border-t-[1px] border-black"></div>
                  <div className="flex flex-col items-start">
                    <p className="text-start text-red-700 text-sm">Genre</p>
                    <h3 className=" text-[2rem] lg:text-[4rem] leading-[3rem] text-black font-semibold">
                      {item.genre}
                    </h3>
                  </div>
                  <div className="flex flex-row  w-full justify-between items-center border-t-[1px] border-black">
                    <div className="flex flex-col items-center py-2 w-1/2 border-r-[1px] border-black">
                      <p className="text-start text-red-700 text-xs lg:text-sm">
                        Streams
                      </p>
                      <p className="text-start text-base lg:text-xl text-black">
                        {item.streams}
                      </p>
                    </div>
                    <div className="flex flex-col items-center py-2 w-1/2">
                      <p className="text-start text-red-700 text-xs lg:text-sm">
                        Artists
                      </p>
                      <p className="text-start text-base lg:text-xl text-black">
                        {item.artists}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  onMouseMove={handleMouseMove}
                  className={` hidden lg:flex flex-row items-center w-full animate-infinitescroll ${
                    (isHovered && currentGroup === index) || showSongsModal.open
                      ? "[animation-play-state:paused]"
                      : "[animation-play-state:running]"
                  }`}
                >
                  {[...item.songs, ...item.songs].map((song, songIndex) => (
                    <div
                      data-song="Song Name"
                      // onMouseEnter={() => {
                      //   setIsHovered(true);
                      //   setCurrentGroup(index);
                      //   setCurrentSong(song);
                      // }}
                      // onMouseLeave={() => {
                      //   setIsHovered(false);
                      //   setCurrentGroup(-1);
                      //   setCurrentSong({});
                      // }}
                      // key={songIndex}
                      // onMouseOver={handleMouseOver}
                      // onMouseOut={handleMouseOut}
                      className="flex flex-col items-center  h-full w-[25vw] lg:h-[17.5vw] lg:w-[10vw] ml-[5vw] "
                    >
                      <div className=" h-[25vw] w-[25vw] lg:h-[10vw] lg:w-[10vw] group mt-4 overflow-hidden relative">
                        <div className=" h-[25vw] w-[25vw] lg:h-[10vw] lg:w-[10vw]  mt-4 absolute z-20">
                          {song.imageUrl.toString().length > 0 ? (
                            <Image
                              src={song.imageUrl.toString()}
                              layout="fill"
                              objectFit="cover"
                              alt={song.song}
                            />
                          ) : (
                            <Image
                              src={"/song1.jpeg"}
                              layout="fill"
                              objectFit="cover"
                              alt="song1"
                            />
                          )}

                          <div className=" h-[20vw] w-[20vw] lg:h-[10vw] lg:w-[10vw] pointer-events-none -z-20 group-hover:z-10 absolute bg-[#00000077] transition-all opacity-0 translate-y-[-10vw] group-hover:opacity-100 group-hover:translate-y-0 group-hover">
                            <div className="flex flex-col items-center justify-center h-full w-full">
                              <div className="flex flex-row items-center pointer-events-auto justify-around w-full">
                                <a
                                  // onMouseEnter={() => {
                                  //   setCurrentPointer("a");
                                  // }}
                                  // onMouseLeave={() => {
                                  //   setCurrentPointer("");
                                  // }}
                                  href={song.Spotify}
                                  target="_blank"
                                  rel="noreferrer"
                                  className=" cursor-pointer"
                                >
                                  <FaSpotify size={18} color="#fff" />
                                </a>
                                <a
                                  // onMouseEnter={() => {
                                  //   setCurrentPointer("a");
                                  // }}
                                  // onMouseLeave={() => {
                                  //   setCurrentPointer("");
                                  // }}
                                  href={song.AppleMusic}
                                  target="_blank"
                                  rel="noreferrer"
                                  className=" cursor-pointer"
                                >
                                  <SiApplemusic size={18} color="#fff" />
                                </a>
                                <a
                                  // onMouseEnter={() => {
                                  //   setCurrentPointer("a");
                                  // }}
                                  // onMouseLeave={() => {
                                  //   setCurrentPointer("");
                                  // }}
                                  href={song.Youtube}
                                  target="_blank"
                                  rel="noreferrer"
                                  className=" cursor-pointer"
                                >
                                  <SiYoutubemusic size={18} color="#fff" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col mt-[3vh] lg:mt-4 w-full items-center">
                        <p className=" text-sm lg:text-md text-center font-semibold">
                          {song.song}
                        </p>
                        <p className=" text-xs lg:text-xs text-center font-semibold text-red-500 ">
                          {song.artist}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex lg:hidden my-4">
                  <Swiper
                    slidesPerView={1.5}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                      clickable: true,
                    }}
                    loop={true}
                    className="mySwiper"
                  >
                    {item.songs.map((song, songIndex) => (
                      <SwiperSlide key={songIndex}>
                        <div
                          data-song="Song Name"
                          key={songIndex}
                          className="flex flex-col items-center  h-full w-[55vw] lg:h-[17.5vw] lg:w-[10vw] ml-[5vw]"
                        >
                          <div className=" h-[55vw] w-[55vw] lg:h-[10vw] lg:w-[10vw] group mt-4 overflow-hidden relative">
                            <div className=" h-[55vw] w-[55vw] lg:h-[10vw] lg:w-[10vw]  mt-4 absolute z-20">
                              {song.imageUrl.toString().length > 0 ? (
                                <Image
                                  src={song.imageUrl.toString()}
                                  layout="fill"
                                  objectFit="cover"
                                  alt={song.song}
                                />
                              ) : (
                                <Image
                                  src={"/song1.jpeg"}
                                  layout="fill"
                                  objectFit="cover"
                                  alt="song1"
                                />
                              )}

                              <div className=" h-[55vw] w-[55vw] lg:h-[10vw] lg:w-[10vw] pointer-events-none -z-20 group-hover:z-10 absolute bg-[#00000077] transition-all opacity-0 translate-y-[-10vw] group-hover:opacity-100 group-hover:translate-y-0 group-hover">
                                <div className="flex flex-col items-center justify-center h-full w-full">
                                  <div className="flex flex-row items-center pointer-events-auto justify-around w-full">
                                    <a
                                      // onMouseEnter={() => {
                                      //   setCurrentPointer("a");
                                      // }}
                                      // onMouseLeave={() => {
                                      //   setCurrentPointer("");
                                      // }}
                                      href={song.Spotify}
                                      target="_blank"
                                      rel="noreferrer"
                                      className=" cursor-pointer"
                                    >
                                      <FaSpotify size={18} color="#fff" />
                                    </a>
                                    <a
                                      // onMouseEnter={() => {
                                      //   setCurrentPointer("a");
                                      // }}
                                      // onMouseLeave={() => {
                                      //   setCurrentPointer("");
                                      // }}
                                      href={song.AppleMusic}
                                      target="_blank"
                                      rel="noreferrer"
                                      className=" cursor-pointer"
                                    >
                                      <SiApplemusic size={18} color="#fff" />
                                    </a>
                                    <a
                                      // onMouseEnter={() => {
                                      //   setCurrentPointer("a");
                                      // }}
                                      // onMouseLeave={() => {
                                      //   setCurrentPointer("");
                                      // }}
                                      href={song.Youtube}
                                      target="_blank"
                                      rel="noreferrer"
                                      className=" cursor-pointer"
                                    >
                                      <SiYoutubemusic size={18} color="#fff" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col mt-[3vh] lg:mt-4 w-full items-center">
                            <p className=" text-lg lg:text-md text-center font-semibold">
                              {song.song}
                            </p>
                            <p className=" text-sm lg:text-xs text-center font-semibold text-red-500 ">
                              {song.artist}
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className=" flex flex-row w-full pb-4 px-2 justify-end items-center">
                  <a
                    onClick={() => {
                      setShowSongsModal({
                        open: true,
                        song: index,
                      });
                    }}
                    className=" lg:hidden text-white underline cursor-pointer "
                  >
                    View All
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row w-[90vw] h-[40vh] relative  mt-[5vh] justify-end items-center">
          <div className="flex flex-col items-end w-6/12">
            <p className="text-white text-xl lg:text-3xl text-right">
              {" Like our music? Try our exclusive playlist. "}
            </p>

            <div className=" w-[10vw] h-[3vw] mt-4 z-10  rotate-12 rounded-md">
              <Image
                src={"/arrow.png"}
                layout="fill"
                alt="arrow"
                objectFit="contain"
                className="opacity-80"
              />
            </div>
          </div>
          <div className="flex flex-col items-center ml-4">
            <a
              href="/exclusive"
              id="exclusive-nav"
              className=" doorframe group h-[30vh] w-[17.5vh] relative border-[0.5px] overflow-hidden border-red-100 rounded-md"
              tabindex="0"
            >
              <div className="door w-full h-full z-10 rounded-md">
                <Image src={"/door.png"} alt="door" layout="fill" />
              </div>
              <div className=" w-full h-full bg-black absolute flex flex-col items-end justify-center z-0">
                <div className="circle -z-10"></div>
                <div className="w-[10vh] h-[15vh] mb-[10vh]  relative rotate-45 translate-x-[15vw] group-hover:translate-x-6 group-hover:rotate-[-30deg]  duration-150 rounded-md">
                  <Image
                    src={"/arm.png"}
                    alt={"arm"}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>

        <div
          style={{
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
                  alt={currentSong.song}
                />
              ) : (
                <Image
                  // onMouseEnter={() => {
                  //   setCurrentPointer("i");
                  // }}
                  // onMouseLeave={() => {
                  //   setCurrentPointer("");
                  // }}
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
              {currentSong.Producer ? (
                <div className="flex flex-col items-start mb-1">
                  <p className=" text-red-700 text-xs ">Producer</p>
                  <p className=" text-white text-sm -mt-1">
                    {currentSong?.Producer}
                  </p>
                </div>
              ) : null}
              {currentSong.Mix ? (
                <div className="flex flex-col items-start mb-1">
                  <p className=" text-red-700 text-xs ">Mix</p>
                  <p className=" text-white text-sm -mt-1">
                    {currentSong?.Mix}
                  </p>
                </div>
              ) : null}

              {currentSong.Master ? (
                <div className="flex flex-col items-start">
                  <p className=" text-red-700 text-xs ">Master</p>
                  <p className=" text-white text-sm -mt-1">
                    {currentSong?.Master}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default Music;
