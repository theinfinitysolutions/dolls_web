import React from "react";
import Image from "next/image";
import { LuPause } from "react-icons/lu";
import { LuPlay } from "react-icons/lu";

const SecretPlaylistCard = ({ title, artist, onClick, selected, index }) => {
  return (
    <div
      id="exclusive-music-song"
      className="flex flex-row items-center justify-between border-[0.5px] px-4 py-2 border-[#c7c7c799] w-full mt-4"
    >
      <div className="flex flex-row items-center">
        <div className="h-[12.5vh] bg-pink-50 w-[12.5vh] relative">
          <Image
            src={
              process.env.NEXT_PUBLIC_API_URL +
              `/exclusive${(index % 3) + 1}.jpeg`
            }
            layout="fill"
            alt={`exclusive music ${song.title}`}
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col items-start justify-center ml-8">
          <p id="song-title" className="text-xl text-white ">
            {song.title}
          </p>
          <p id="song-artist" className="text-xsml text-red-700 ">
            {song.artist}
          </p>
        </div>
      </div>
      <a
        // onClick={() => {
        //   setSelected(index);
        //   window.scrollTo({
        //     top: 0,
        //     behavior: "smooth",
        //   });
        // }}
        onClick={onClick}
        // onMouseEnter={() => {
        //   setCurrentPointer("a");
        // }}
        // onMouseLeave={() => {
        //   setCurrentPointer("");
        // }}
        id="play-button"
        className="flex flex-col items-center justify-center mx-4 cursor-pointer"
      >
        {selected ? (
          <LuPause className="text-white  text-2xl" />
        ) : (
          <LuPlay className="text-white  text-2xl" />
        )}
      </a>
    </div>
  );
};

export default SecretPlaylistCard;
