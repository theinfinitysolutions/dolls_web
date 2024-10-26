import React from "react";
import { FaSpotify } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import Image from "next/image";

const SongCard = ({
  song,
  artist,
  songIndex,
  imageUrl,
  Spotify,
  AppleMusic,
  Youtube,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      data-song="Song Name"
      className="flex flex-col items-center  h-full w-[25vw] lg:h-[17.5vw] lg:w-[10vw] ml-[5vw] "
    >
      <div className=" h-[25vw] w-[25vw] lg:h-[10vw] lg:w-[10vw] group mt-4 overflow-hidden relative">
        <div className=" h-[25vw] w-[25vw] lg:h-[10vw] lg:w-[10vw]  mt-4 absolute z-20">
          {imageUrl.toString().length > 0 ? (
            <Image src={imageUrl} layout="fill" objectFit="cover" alt={song} />
          ) : (
            <Image
              src={process.env.NEXT_PUBLIC_API_URL + `/exclusive2.jpeg`}
              layout="fill"
              objectFit="cover"
              alt="song1"
            />
          )}

          <div className=" h-[20vw] w-[20vw] lg:h-[10vw] lg:w-[10vw] pointer-events-none -z-20 group-hover:z-10 absolute bg-[#00000077] transition-all opacity-0 translate-y-[-10vw] group-hover:opacity-100 group-hover:translate-y-0 group-hover">
            <div className="flex flex-col items-center justify-center h-full w-full">
              <div className="flex flex-row items-center pointer-events-auto justify-around w-full">
                <a
                  href={Spotify}
                  target="_blank"
                  rel="noreferrer"
                  className=" cursor-pointer"
                >
                  <FaSpotify size={18} color="#fff" />
                </a>
                <a
                  href={AppleMusic}
                  target="_blank"
                  rel="noreferrer"
                  className=" cursor-pointer"
                >
                  <SiApplemusic size={18} color="#fff" />
                </a>
                <a
                  href={Youtube}
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
        <p className=" text-sm lg:text-md text-center font-semibold">{song}</p>
        <p className=" text-xs lg:text-xs text-center font-semibold text-red-500 ">
          {artist}
        </p>
      </div>
    </div>
  );
};

export default SongCard;
