"use client";
import React, { useEffect } from "react";
import Transition from "@/components/Transition";
import RevealOnScroll from "@/components/RevealOnScroll";
import { alfa } from "../layout";
import { motion, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import useMeasure from "react-use-measure";
import useStore from "@/utils/store";
import { blogRef } from "@/utils/consts";
import { GoLinkExternal } from "react-icons/go";

const images = [
  "/dolls1.jpeg",
  "/dolls2.jpeg",
  "/dolls3.jpeg",
  "/dolls4.jpeg",
  "/dolls5.jpeg",
];

const FAST_DURATION = 15;
const SLOW_DURATION = 40;

const Media = () => {
  const xTranslation = useMotionValue(0);

  let [ref, { width }] = useMeasure();
  const [mustFinish, setMustFinish] = useState(false);
  const [duration, setDuration] = useState(15);
  const [rerender, setRerender] = useState(false);
  const { currentPointer, setCurrentPointer } = useStore();

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width]);

  return (
    <Transition>
      <div className="flex flex-col max-w-screen min-h-screen w-screen bg-black overflow-y-hidden relative items-center justify-center py-[5vh] overflow-hidden">
        <div className="circle absolute  right-0 bottom-0" />
        <div className="circle -bottom-1/2 -right-1/2 absolute" />
        <div className="circle -bottom-1/3 left-0 absolute" />
        <div className="flex flex-col w-[90vw] h-full items-start relative justify-start  pt-[5vh] ">
          <h2 className="text-white text-[4rem] leading-[4rem] font-bold ">
            MEDIA
          </h2>
          <p className="text-white text-sm">
            {
              "Discover exclusive articles, follow us on social media for updates, and explore our gallery for a visual journey into Dole's Music"
            }
          </p>
        </div>

        <div className="flex flex-col items-start w-[90vw] ">
          <div className="flex flex-col md:flex-row w-full justify-between items-center">
            <div
              onMouseEnter={() => {
                setCurrentPointer("a");
              }}
              onMouseLeave={() => {
                setCurrentPointer("");
              }}
              className=" w-full md:w-[57.5%] flex flex-row justify-between items-center bg-[#c7c7c7]/70 px-2 py-2"
            >
              <div className="h-[30vh] w-1/2 relative bg-slate-800">
                <Image src={blogRef[1].imageURL} layout="fill" />
              </div>
              <div className="flex flex-col items-start w-1/2 px-4">
                <h2 className="text-white text-base md:text-xl font-medium ">
                  {blogRef[1].title}
                </h2>
                <p className="text-white/70 text-xs md:text-base mt-3">
                  {blogRef[1].source}
                </p>
                <button
                  onClick={() => {
                    window.open(blogRef[1].link);
                  }}
                  className="px-4 py-2 flex flex-row items-center mt-4 text-white bg-red-400 "
                >
                  <p className="mr-2 text-xs md:text-base">Visit</p>
                  <GoLinkExternal />
                </button>
              </div>
            </div>
            <div
              onMouseEnter={() => {
                setCurrentPointer("a");
              }}
              onMouseLeave={() => {
                setCurrentPointer("");
              }}
              className=" w-full  mt-8 md:mt-0  md:w-[40%] flex flex-row justify-between items-center bg-cyan-800 px-2 py-2"
            >
              <div className="h-[30vh] w-1/2 relative bg-cyan-800">
                <Image src={blogRef[3].imageURL} layout="fill" />
              </div>
              <div className="flex flex-col items-start w-1/2 px-4">
                <h2 className="text-white text-base md:text-xl font-medium ">
                  {blogRef[3].title}
                </h2>
                <p className="text-white/70 text-xs md:text-base mt-3">
                  {blogRef[3].source}
                </p>
                <button
                  onClick={() => {
                    window.open(blogRef[3].link);
                  }}
                  className="px-4 py-2 flex flex-row items-center mt-4 text-white bg-red-400 "
                >
                  <p className="mr-2 text-xs md:text-base">Visit</p>
                  <GoLinkExternal />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full justify-between items-center mt-8">
            <div
              onMouseEnter={() => {
                setCurrentPointer("a");
              }}
              onMouseLeave={() => {
                setCurrentPointer("");
              }}
              className="w-full md:w-[48.5%] flex flex-row justify-between items-center bg-lime-800 px-2 py-2"
            >
              <div className="h-[30vh] w-1/2 relative bg-lime-800">
                <Image src={blogRef[0].imageURL} layout="fill" />
              </div>
              <div className="flex flex-col items-start w-1/2 px-4">
                <h2 className="text-white text-base md:text-xl font-medium ">
                  {blogRef[0].title}
                </h2>
                <p className="text-white/70 text-xs md:text-base mt-3">
                  {blogRef[0].source}
                </p>
                <button
                  onClick={() => {
                    window.open(blogRef[0].link);
                  }}
                  className="px-4 py-2 flex flex-row items-center mt-4 text-white bg-red-400 "
                >
                  <p className="mr-2 text-xs md:text-base">Visit</p>
                  <GoLinkExternal />
                </button>
              </div>
            </div>
            <div
              onMouseEnter={() => {
                setCurrentPointer("a");
              }}
              onMouseLeave={() => {
                setCurrentPointer("");
              }}
              className=" w-full  mt-8 md:mt-0  md:w-[48.5%] flex flex-row justify-between items-center bg-rose-800 px-2 py-2"
            >
              <div className="h-[30vh] w-1/2 relative bg-cyan-800">
                <Image src={blogRef[2].imageURL} layout="fill" />
              </div>
              <div className="flex flex-col items-start w-1/2 px-4">
                <h2 className="text-white text-base md:text-xl font-medium ">
                  {blogRef[2].title}
                </h2>
                <p className="text-white/70 text-xs md:text-base mt-3">
                  {blogRef[2].source}
                </p>
                <button
                  onClick={() => {
                    window.open(blogRef[2].link);
                  }}
                  className="px-4 py-2 flex flex-row items-center mt-4 text-white bg-red-400 "
                >
                  <p className="mr-2 text-xs md:text-base">Visit</p>
                  <GoLinkExternal />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            "  py-8 min-h-[50vh] w-screen overflow-hidden bg-transparent"
          }
        >
          <div className="flex flex-col w-full h-full items-start relative justify-start py-[5vh] ">
            <motion.div
              className="h-[35vh] mt-[5vh] left-0 flex gap-4"
              style={{ x: xTranslation }}
              ref={ref}
              onHoverStart={() => {
                setMustFinish(true);
                setDuration(SLOW_DURATION);
              }}
              onHoverEnd={() => {
                setMustFinish(true);
                setDuration(FAST_DURATION);
              }}
            >
              {[...images, ...images].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="w-[30vh] h-[30vh] relative"
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    onMouseEnter={() => {
                      setCurrentPointer("i");
                    }}
                    onMouseLeave={() => {
                      setCurrentPointer("");
                    }}
                    src={item}
                    layout="fill"
                    objectFit="cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default Media;
