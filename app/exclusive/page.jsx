"use client";
import React, { useEffect, useRef, useState } from "react";
import Transition from "@/components/Transition";
import { secretPlaylist } from "@/utils/consts";
import Image from "next/image";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { LuPlay } from "react-icons/lu";
import useStore from "@/utils/store";
import { resolve } from "styled-jsx/css";

const ExlcusiveMusic = () => {
  const [selected, setSelected] = useState(0);
  const audioRef = useRef();

  const { currentPointer, setCurrentPointer } = useStore();
  const { showModal, setShowModal } = useStore();

  const playAudio = () => {
    audioRef.current.play();
  };

  const checkIfMailSent = () => {
    return new Promise(async (resolve, reject) => {
      let item = localStorage.getItem("email");
      console.log("item  a", item);
      if (item) {
        reject();
      } else {
        resolve();
      }
    });
  };

  useEffect(() => {
    checkIfMailSent()
      .then(() => {
        setTimeout(() => {
          useStore.setState({ showModal: true });
        }, 2500);
      })
      .catch((err) => {
        console.log("err items", err);
      });
  }, []);

  return (
    <Transition>
      <div className="flex flex-col max-w-screen min-h-screen w-screen overflow-y-scroll relative items-center justify-start py-[5vh] overflow-hidden">
        <div className="w-[90vw] flex flex-row justify-between items-center md:items-start mt-[10vh]">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <h2 className="text-white text-[2.5rem] md:text-[4rem] leading-[4rem] font-bold ">
              EXCLUSIVE MUSIC
            </h2>
            <p className="text-white text-sm text-center md:text-start">
              {
                " Reach out to us for any collorations or queries. We are always here to help you."
              }
            </p>
          </div>
        </div>
        <div className="w-[90vw] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center md:items-start mt-[5vh]">
          <div className="w-full mt-2 md:mt-0 md:w-1/2 flex flex-col items-center md:max-h-[70vh] overflow-y-scroll">
            {secretPlaylist.map((song, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row items-center justify-between border-[0.5px] px-4 py-2 border-[#c7c7c799] w-full mt-4"
                >
                  <div className="flex flex-row items-center">
                    <div className="h-[12.5vh] bg-pink-50 w-[12.5vh] relative">
                      <Image
                        src={`/song${index % 5}.jpeg`}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center ml-8">
                      <p className="text-xl text-white ">{song.title}</p>
                      <p className="text-xsml text-red-700 ">{song.songName}</p>
                    </div>
                  </div>
                  <a
                    onClick={() => {
                      setSelected(index);
                    }}
                    onMouseEnter={() => {
                      setCurrentPointer("a");
                    }}
                    onMouseLeave={() => {
                      setCurrentPointer("");
                    }}
                    className="flex flex-col items-center justify-center mx-4"
                  >
                    <LuPlay className="text-white  text-2xl" />
                  </a>
                </div>
              );
            })}
          </div>
          <div className=" w-full md:w-1/2 flex flex-col items-center max-h-[70vh] justify-center">
            <div className="h-[30vh] w-[30vh] group mt-4 relative">
              <div className="h-[30vh] w-[30vh]  mt-4 absolute z-20">
                <Image
                  onMouseEnter={() => {
                    setCurrentPointer("i");
                  }}
                  onMouseLeave={() => {
                    setCurrentPointer("");
                  }}
                  src="/song0.jpeg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="h-[30vh] w-[30vh] z-10 absolute transition-all translate-x-[10vw]   mt-4 ">
                <Image
                  src="/asset1.png"
                  layout="fill"
                  objectFit="cover"
                  className="rotate-45"
                />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center mt-[5vh] w-full md:w-[25vw] md:ml-[10vw]">
              <div className="flex flex-col items-start">
                <p className="text-base text-red-700">Song</p>
                <p className="text-xl text-white">
                  {secretPlaylist[selected].title}
                </p>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-base text-red-700">Artist</p>
                <p className="text-xl text-white">
                  {secretPlaylist[selected].songName}
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-center mt-[2.5vh] md:ml-[11.5vw] w-10/12 md:w-[30vw] relative items-center z-10">
              <AudioPlayer
                className="w-full"
                style={{
                  width: "100%",
                  backgroundColor: "black",
                  color: "white",
                }}
                src={secretPlaylist[selected].url}
                onPlay={(e) => console.log("onPlay")}
              />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default ExlcusiveMusic;
