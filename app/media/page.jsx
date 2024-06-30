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
import { InstagramEmbed } from "react-social-media-embed";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const images = [
  "/dolls1.jpeg",
  "/dolls2.jpeg",
  "/dolls3.jpeg",
  "/dolls4.jpeg",
  "/dolls5.jpeg",
];

const FAST_DURATION = 15;
const SLOW_DURATION = 40;

const socialLinks = [
  "https://www.instagram.com/p/CoB621KrzMo/",
  "https://www.instagram.com/p/CgjYWVhhtHe/",
  "https://www.instagram.com/p/CcIUOvdhIdV/",
  "https://www.instagram.com/p/Ca4l11jBeGj/",
  "https://www.instagram.com/p/CW0SW7FMa27/",
  "https://www.instagram.com/p/CWlBNSth1W2/",
  "https://www.instagram.com/p/C0UJQvox27L/?utm_source=ig_embed&utm_campaign=invalid&ig_rid=8db9eac1-8056-49f9-aee2-dc37cee24bc8",
  "https://www.instagram.com/p/CyYG6_VRJ79/?utm_source=ig_embed&utm_campaign=invalid&ig_rid=60e0903c-5dae-4574-8e31-abef0f017593",
];

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

  useEffect(() => {
    const s = document.createElement("script");
    s.setAttribute("src", "//www.instagram.com/embed.js");
    s.setAttribute("async", "true");
    document.head.appendChild(s);
  }, []);

  return (
    <Transition>
      <div
        id="media"
        className="flex flex-col max-w-screen min-h-screen w-screen bg-black overflow-y-hidden relative items-center justify-center py-[5vh] overflow-hidden"
      >
        <div className="circle absolute  right-0 bottom-0" />
        <div className="circle -bottom-1/2 -right-1/2 absolute" />
        <div className="circle -bottom-1/3 left-0 absolute" />
        <div className="circle -bottom-1/4 right-0 absolute" />
        <div className="flex flex-col w-[90vw] h-full items-start relative justify-start  pt-[5vh] ">
          <h2 className="text-white text-[2rem] lg:text-[4rem] lg:leading-[4rem] font-bold ">
            Press Release
          </h2>
          <p className="text-white text-sm">
            {
              "Discover exclusive articles, follow us on social media for updates, and explore our gallery for a visual journey into Dole's Music"
            }
          </p>
        </div>

        <div className="flex flex-col items-start w-[90vw] mt-8">
          <div className="flex flex-col lg:flex-row w-full justify-between items-center">
            <div
              onMouseEnter={() => {
                setCurrentPointer("a");
              }}
              onMouseLeave={() => {
                setCurrentPointer("");
              }}
              className=" w-full lg:w-[57.5%] flex flex-row justify-between overflow-hidden relative items-center border-[1px] border-[#c7c7c7]/40"
            >
              <div className="circle -bottom-1/2 -right-1/2 absolute" />
              <div className="h-[30vh] w-1/2 relative bg-black">
                <Image
                  src={blogRef[1].imageURL}
                  className=" object-contain lg:object-cover "
                  layout="fill"
                  alt={`blog image ${blogRef[1].title}`}
                />
              </div>
              <div className="flex flex-col items-start w-1/2 px-4 py-2">
                <h2 className="text-white text-base lg:text-xl font-medium ">
                  {blogRef[1].title}
                </h2>
                <p className="text-white/70 text-xs lg:text-base mt-3">
                  {blogRef[1].source}
                </p>
                <button
                  onClick={() => {
                    window.open(blogRef[1].link);
                  }}
                  className="px-4 py-2 flex flex-row items-center mt-4 text-white bg-red-400 "
                >
                  <p className="mr-2 text-xs lg:text-base">Visit</p>
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
              className=" w-full  mt-8 lg:mt-0  lg:w-[40%] flex flex-row justify-between overflow-hidden relative items-center border-[1px] border-[#c7c7c7]/40"
            >
              <div className="circle -bottom-1/2 -right-1/2 absolute" />
              <div className="h-[30vh] w-1/2 relative bg-black">
                <Image
                  src={blogRef[3].imageURL}
                  className=" object-contain lg:object-cover "
                  layout="fill"
                  alt={`blog image ${blogRef[3].title}`}
                />
              </div>
              <div className="flex flex-col items-start w-1/2 px-4 py-2">
                <h2 className="text-white text-base lg:text-xl font-medium ">
                  {blogRef[3].title}
                </h2>
                <p className="text-white/70 text-xs lg:text-base mt-3">
                  {blogRef[3].source}
                </p>
                <button
                  onClick={() => {
                    window.open(blogRef[3].link);
                  }}
                  className="px-4 py-2 flex flex-row items-center mt-4 text-white bg-red-400 "
                >
                  <p className="mr-2 text-xs lg:text-base">Visit</p>
                  <GoLinkExternal />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row w-full justify-between items-center mt-8">
            <div
              onMouseEnter={() => {
                setCurrentPointer("a");
              }}
              onMouseLeave={() => {
                setCurrentPointer("");
              }}
              className="w-full lg:w-[48.5%] flex flex-row justify-between overflow-hidden relative items-center border-[1px] border-[#c7c7c7]/40"
            >
              <div className="circle -bottom-1/2 -right-1/2 absolute" />
              <div className="h-[30vh] w-1/2 relative bg-black">
                <Image
                  src={blogRef[0].imageURL}
                  className=" object-contain lg:object-cover "
                  layout="fill"
                  alt={`blog image ${blogRef[0].title}`}
                />
              </div>
              <div className="flex flex-col items-start w-1/2 px-4 py-2">
                <h2 className="text-white text-base lg:text-xl font-medium ">
                  {blogRef[0].title}
                </h2>
                <p className="text-white/70 text-xs lg:text-base mt-3">
                  {blogRef[0].source}
                </p>
                <button
                  onClick={() => {
                    window.open(blogRef[0].link);
                  }}
                  className="px-4 py-2 flex flex-row items-center mt-4 text-white bg-red-400 "
                >
                  <p className="mr-2 text-xs lg:text-base">Visit</p>
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
              className=" w-full  mt-8 lg:mt-0  lg:w-[48.5%] flex flex-row justify-between overflow-hidden relative items-center border-[1px] border-[#c7c7c7]/40"
            >
              <div className="circle -bottom-1/2 -right-1/2 absolute" />
              <div className="h-[30vh] w-1/2 relative bg-black">
                <Image
                  src={blogRef[2].imageURL}
                  className=" object-contain lg:object-cover "
                  layout="fill"
                  alt={`blog image ${blogRef[2].title}`}
                />
              </div>
              <div className="flex flex-col items-start w-1/2 px-4 py-2">
                <h2 className="text-white text-base lg:text-xl font-medium ">
                  {blogRef[2].title}
                </h2>
                <p className="text-white/70 text-xs lg:text-base mt-3">
                  {blogRef[2].source}
                </p>
                <button
                  onClick={() => {
                    window.open(blogRef[2].link);
                  }}
                  className="px-4 py-2 flex flex-row items-center mt-4 text-white bg-red-400 "
                >
                  <p className="mr-2 text-xs lg:text-base">Visit</p>
                  <GoLinkExternal />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center lg:items-start w-[90vw] mt-[10vh]">
          <h2 className="text-white text-[2rem] lg:text-[4rem] lg:leading-[4rem] font-bold ">
            Social Media
          </h2>
          <p className="text-white text-sm text-center lg:text-start mt-2 w-11/12 lg:w-6/12">
            {
              " Dive into our social scene! Here are few posts from our recent work. Join the groove and explore the beat. Don't miss out – follow us now! "
            }
          </p>
          <div className="hidden w-full lg:flex flex-row gap-x-4 mt-[5vh]">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {socialLinks.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        zIndex: 10,
                      }}
                      onMouseEnter={() => {
                        setCurrentPointer("a");
                      }}
                      onMouseLeave={() => {
                        setCurrentPointer("");
                      }}
                    >
                      <InstagramEmbed height={600} width={330} url={item} />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className=" w-full flex lg:hidden flex-row gap-x-4 mt-[5vh]">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {socialLinks.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        zIndex: 10,
                      }}
                      onMouseEnter={() => {
                        setCurrentPointer("a");
                      }}
                      onMouseLeave={() => {
                        setCurrentPointer("");
                      }}
                    >
                      <InstagramEmbed height={600} width={330} url={item} />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          {/* <div className=" w-full flex flex-row gap-x-4 mt-8">
            {socialLinks.map((item) => {
              return (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    zIndex: 10,
                  }}
                >
                  <InstagramEmbed width={350} url={item} />
                </div>
              );
            })}
          </div> */}
        </div>
        <div className="flex flex-col items-start w-[90vw] mt-[10vh]">
          <h2 className="text-white text-[2rem] lg:text-[4rem] lg:leading-[4rem] font-bold ">
            Gallery
          </h2>
          <p className="text-white text-sm mt-2">
            {
              "Discover our vibrant gallery! Immerse yourself in stunning visuals from our shows and performances. Explore the rhythm and experience the magic. Dive in now!"
            }
          </p>
          <div className=" grid grid-cols-2 lg:grid-cols-4 gap-8 mt-[5vh]">
            {Array(39)
              .fill(1)
              .map((item, idx) => {
                return (
                  <>
                    {[30, 35, 37].includes(idx + 1) ? null : (
                      <div
                        key={idx}
                        onMouseEnter={() => {
                          setCurrentPointer("i");
                        }}
                        onMouseLeave={() => {
                          setCurrentPointer("");
                        }}
                        className=" w-[40vw] h-[40vw] border-[0.15px] border-[#c7c7c7]/30 lg:h-[20vw] lg:w-[20vw] relative bg-black/80"
                      >
                        <Image
                          src={
                            process.env.NEXT_PUBLIC_API_URL +
                            `/dolls${idx + 1}.jpeg`
                          }
                          layout="fill"
                          objectFit="contain"
                          className=" transition-all duration-300 hover:scale-110"
                        />
                      </div>
                    )}
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default Media;
