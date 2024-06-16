import React, { useState, useEffect } from "react";
import useStore from "@/utils/store";
import { pop, rock, hiphop } from "@/utils/consts";
import Image from "next/image";
import { FaSpotify } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { IoClose } from "react-icons/io5";

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

export default function ViewProductModal() {
  const [open, setOpen] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const { showSongsModal, setShowSongsModal, setCurrentPointer } = useStore();

  useEffect(() => {
    console.log("esaing", showSongsModal);
    if (showSongsModal) {
      setOpen(showSongsModal.open);
      setCurrentSong(showSongsModal.song);
    }
  }, [showSongsModal?.open]);

  return (
    <div>
      {open ? (
        <div className=" fixed left-0 top-0 z-50 w-screen h-screen bg-[#121212]/80 flex flex-col items-center justify-center ">
          <div className="h-[80vh] lg:h-[80vh] w-11/12 lg:w-[80vw] overflow-y-scroll bg-black flex flex-col items-start">
            <div className="flex flex-row w-full justify-between items-center px-[5vw] mt-[5vh]">
              <h3 className=" text-[2rem] lg:text-[4rem] leading-[3rem] text-white font-semibold">
                {music[currentSong].genre}
              </h3>
              <a
                onMouseEnter={() => {
                  setCurrentPointer("a");
                }}
                onMouseLeave={() => {
                  setCurrentPointer("");
                }}
                onClick={() => {
                  setShowSongsModal({
                    open: false,
                    song: 0,
                  });
                  setOpen(false);
                }}
                className=""
              >
                <IoClose className="text-white text-3xl" />
              </a>
            </div>
            <div className=" w-full overflow-y-scroll bg-black grid grid-cols-2 md:grid-cols-3 mt-8 lg:grid-cols-5 mb-8">
              {music[currentSong]?.songs.map((song, songIndex) => {
                return (
                  <div
                    data-song="Song Name"
                    key={songIndex}
                    className="flex flex-col items-center overflow-hidden  h-[30vw] w-[20vw] lg:h-[17.5vw] lg:w-[10vw] ml-[5vw]"
                  >
                    <div className=" h-[20vw] w-[20vw] lg:h-[10vw] lg:w-[10vw] group mt-4 relative">
                      <div className=" h-[20vw] w-[20vw] lg:h-[10vw] lg:w-[10vw]  mt-4 absolute z-20">
                        {song.imageUrl.toString().length > 0 ? (
                          <Image
                            src={song.imageUrl.toString()}
                            layout="fill"
                            alt={`song ${song.song}`}
                            objectFit="cover"
                          />
                        ) : (
                          <Image
                            src={"/song1.jpeg"}
                            layout="fill"
                            alt={"alt"}
                            objectFit="cover"
                          />
                        )}

                        <div className=" h-[20vw] w-[20vw] lg:h-[10vw] lg:w-[10vw] pointer-events-none -z-20 group-hover:z-10 absolute bg-[#00000077] transition-all opacity-0 translate-y-[-10vw] group-hover:opacity-100 group-hover:translate-y-0 group-hover">
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
                    <div className="flex flex-col mt-[12.5vh] lg:mt-8 w-full items-center">
                      <p className=" text-sm lg:text-md text-center font-semibold">
                        {song.song}
                      </p>
                      <p className=" text-xs lg:text-xs text-center font-semibold text-red-500 ">
                        {song.artist}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
