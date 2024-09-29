"use client";
import React, { useRef } from "react";
import Image from "next/image";
import RevealOnScroll from "../components/RevealOnScroll";
import { abril, alfa, calistoga, orbitron } from "./layout";
import CarouselComponent from "@/components/CarouselHome/CarouselComponent";
import Link from "next/link";
import Transition from "@/components/Transition";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { FaArrowRightLong } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";
import { AiFillYoutube } from "react-icons/ai";
import { FaSpotify } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa";
import { RiArrowRightDownLine } from "react-icons/ri";
import useStore from "@/utils/store";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { gazpacho_black } from "./layout";
import { upcoming } from "@/utils/consts";
import { useRouter } from "next/navigation";

let list = ["Music", "Media", "Contact"];

const images = [
  "/dolls1.jpeg",
  "/dolls2.jpeg",
  "/dolls3.jpeg",
  "/dolls4.jpeg",
  "/dolls5.jpeg",
];

const FAST_DURATION = 50;
const SLOW_DURATION = 10000;

let navbarClass =
  "relative text-white text-base lg:text-[0.75rem] lg:text-md xl:text-lg block after:block after:content-[''] after:absolute after:h-[2px] after:bg-red-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center cursor-none";

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const Home = () => {
  const [duration, setDuration] = useState(FAST_DURATION);
  const [selectedHover, setSelectedHover] = React.useState(0);
  let [ref, { width }] = useMeasure();
  const router = useRouter();
  const xTranslation = useMotionValue(0);
  const location = useRef(null);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  const [loading, setLoading] = React.useState(false);

  const [emailSent, setEmailSent] = React.useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const [currentGroup, setCurrentGroup] = useState(0);
  const [currentSong, setCurrentSong] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { currentPointer, setCurrentPointer } = useStore();

  const onSubmit = (data) => {
    setLoading(true);
    emailjs
      .send(
        "service_vyc3aph",
        "template_vw3o9zp",
        {
          from_name: data.name,
          from_email: data.email,
          from_phoneNumber: data.phoneNumber,
          from_message: data.message,
        },
        {
          publicKey: "VV1JBQAmRXz7mALR7",
        }
      )
      .then((res) => {
        setEmailSent(true);
        setLoading(false);
        reset();
      })
      .catch((err) => {
        setLoading(false);
        console.log("error", err);
      });
  };

  useEffect(() => {
    if (emailSent) {
      setTimeout(() => {
        setEmailSent(false);
      }, 2000);
    }
  }, [emailSent]);

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

  const handleMouseMove = (e) => {
    if (location.current) {
      location.current.style.left =
        e.clientX > window.innerWidth / 2
          ? `${e.clientX - 180}px`
          : `${e.clientX + 5}px`;
      location.current.style.top = `${e.clientY + scrollY}px`;
    }
  };

  const handleMouseOver = (e) => {
    location.current.style.display = "block";
  };

  const handleMouseOut = () => {
    location.current.style.display = "none";
  };

  const serviceList = [
    {
      title: "Music",
    },
    {
      title: "Gallery",
    },
    {
      title: "Media",
    },
    {
      title: "Contact",
    },
  ];

  let text1 = "Dole's Music";

  return (
    <Transition>
      <main
        id="home"
        className="flex flex-col min-h-screen overflow-y-scroll relative items-center justify-between"
      >
        <div className="flex flex-col absolute items-center justify-center animate-slideInLeft  top-[10vh] w-full h-[90vh] -left-[70vw] lg:-left-[55vw] z-0 ">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + "/asset1.png"}
            layout="fill"
            objectFit="contain"
            alt="asset1"
            className="rounded-3xl animate-rotate2 opacity-70"
          />
        </div>

        <a
          href="/contact"
          // onMouseEnter={() => {
          //   setCurrentPointer("a");
          // }}
          // onMouseLeave={() => {
          //   setCurrentPointer("");
          // }}
          className=" fixed animate-rotate2 right-4 z-50 bottom-4 w-[7.5vh] h-[7.5vh] lg:w-[15vh] lg:h-[15vh] cursor-pointer "
        >
          <Image
            src={"/asset2.png"}
            alt={"asset2"}
            objectFit="contain"
            layout="fill"
          />
        </a>

        <div className="flex flex-col w-screen items-center relative justify-center lg:max-h-screen min-h-[95vh] lg:h-[100vh] overflow-hidden">
          <a
            href=""
            onClick={() => {
              window.scrollTo(0, window.innerHeight, {
                behavior: "smooth",
                duration: 1000,
              });
            }}
            // onMouseEnter={() => {
            //   setCurrentPointer("a");
            // }}
            // onMouseLeave={() => {
            //   setCurrentPointer("");
            // }}
            className="  absolute left-[40%] lg:left-[47.5%] flex flex-row items-center bottom-4 lg:bottom-8 animate-bounce z-50 cursor-pointer"
          >
            <p className={`text-sm ${orbitron.className}`}>Scroll Down</p>
            <RiArrowRightDownLine className="text-white" />
          </a>
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-[90vw] h-full relative overflow-y-hidden  z-1">
            <div className="flex flex-row items-center justify-between relative w-full  lg:w-5/12  ">
              <RevealOnScroll addedClasses="flex flex-col  top-0 left-0 items-center lg:items-start justify-center w-full">
                <h1
                  className={` ${gazpacho_black.className} overflow-hidden text-[2.75rem] lg:text-[4.5rem] text3d text-center font-bold leading-[5rem] text-[#ffffff]`}
                >
                  {text1.split("").map((char, index) => (
                    <span
                      className={`animate-slideUp inline-block  [animation-fill-mode:backwards] ${
                        char == "'" ? "text-[#ff0000]" : ""
                      }`}
                      key={`${char}-${index}`}
                      style={{
                        animationDelay: `${index * 0.05}s`,
                        transitionDelay: 3,
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </h1>
                <div className="flex flex-row justify-between w-9/12 lg:w-[17.5vw] mt-4">
                  {list.map((item, index) => (
                    <Link
                      // onMouseEnter={() => {
                      //   setCurrentPointer("a");
                      // }}
                      // onMouseLeave={() => {
                      //   setCurrentPointer("");
                      // }}
                      href={"/" + item.toLowerCase()}
                      key={index}
                      id={item.toLowerCase()}
                      data-value={item}
                      className="flex flex-col items-start justify-center  transition-colors duration-300 hover:text-[#7a180f] "
                    >
                      <h2 className={navbarClass}>{item}</h2>
                    </Link>
                  ))}
                </div>
              </RevealOnScroll>
            </div>
            <div className=" hidden lg:flex lg:-ml-[5%] w-full lg:w-7/12 overflow-hidden ">
              <CarouselComponent eventsDisabled={false} />
            </div>
            <div
              disabled={true}
              style={{
                pointerEvents: "none",
              }}
              className=" flex lg:hidden lg:-ml-[5%] z-0 w-full mt-[5vh] h-[50vh] overflow-hidden pointer-events-none "
            >
              <CarouselComponent eventsDisabled={true} />
            </div>
            {/* <div className="flex flex-col items-start  w-4/12">
              <div
                onMouseLeave={() => {}}
                className="flex flex-col w-full lg:w-[70%] group items-center justify-center"
              >
                {serviceList.map((item, index) => {
                  return (
                    <a
                      key={item.index}
                      onMouseEnter={() => {
                        debounce(() => {
                          setSelectedHover(index);
                        }, 300)();
                      }}
                      className="flex text-primaryText group-hover:text-[#c7c7c755] justify-start w-full mb-4  border-b-[1px] border-[#ffffff22] hover:border-[#ffffff44] transition-all duration-300 ease-in-out"
                    >
                      <div className="hover:text-primaryText flex group/text flex-row items-start space-x-4 py-1">
                        <p className="text-[0.75rem] text-red-700">
                          0{index + 1}
                        </p>
                        <h1 className=" text-[2.25rem] leading-[4rem]  group-hover/text:translate-x-[20px] hover:text-white duration-200">
                          {item.title}
                        </h1>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div> */}
          </div>
        </div>
        <RevealOnScroll
          threshold={0.2}
          addedClasses={
            "  lg:max-h-[100vh] min-h-[100vh] lg:h-[100vh] w-screen overflow-hidden"
          }
        >
          <div className="flex flex-col w-full h-full items-start relative justify-start  bg-black py-[5vh] ">
            <div className="flex flex-col lg:flex-row w-full justify-between items-start">
              <div className="circle left-1/3 bottom-0 absolute" />
              <div className="circle right-0 top-0 absolute" />
              <div className="flex w-full lg:w-1/2 flex-col items-center lg:items-start">
                <RevealOnScroll
                  addedClasses={
                    "flex flex-col items-center lg:items-start justify-center w-full p-4 lg:p-8 animate-slideInLeft"
                  }
                >
                  <h2
                    className={`${abril.className} text-white text-[3rem] lg:text-[4rem] leading-[4rem] font-bold `}
                  >
                    {"What's New"}
                  </h2>
                  {/* <p className="text-white text-center lg:text-start text-sm">
                    {
                      " Showcase your music collection and explore different genres with Dole's Music. From classical to rock, we have it all."
                    }
                  </p> */}
                </RevealOnScroll>
                <div className="flex flex-row items-center justify-start mt-[5vh] px-8">
                  <p className="text-xl text-white ">Upcoming Music</p>
                </div>
                <div className="flex flex-col items-center w-[40vh] mx-[10vw]">
                  <div className=" h-[60vw] w-[60vw] lg:h-[40vh] lg:w-[40vh] group mt-4 relative">
                    <div className=" w-[60vw] h-[60vw] lg:h-[40vh] lg:w-[40vh]  mt-4 absolute z-20">
                      <Image
                        src={upcoming[0].imageUrl}
                        layout="fill"
                        objectFit="cover"
                        alt={upcoming[0].song + "music"}
                      />
                    </div>
                    <div className=" w-[60vw] h-[60vw] lg:h-[40vh] lg:w-[40vh] z-10 absolute transition-all group-hover:translate-x-[10vw] group-hover:duration-200  mt-4 ">
                      <Image
                        src={process.env.NEXT_PUBLIC_API_URL + "/asset1.png"}
                        layout="fill"
                        objectFit="cover"
                        className="rotate-45"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mt-8 w-full items-center">
                    <p className="text-2xl font-semibold">{upcoming[0].song}</p>
                    <p className="text-base font-semibold text-red-500 ">
                      {upcoming[0].artist}
                    </p>
                    <p className="text-sm font-semibold text-red-500 ">
                      Prod. {upcoming[0].Producer}
                    </p>
                  </div>
                  {upcoming[0].released ? (
                    <div className="flex flex-row justify-center gap-x-4 items-center mt-4 w-full ">
                      {upcoming[0].AppleMusic.length > 0 && (
                        <a
                          // onMouseEnter={() => {
                          //   setCurrentPointer("a");
                          // }}
                          // onMouseLeave={() => {
                          //   setCurrentPointer("");
                          // }}
                          href={upcoming[0].AppleMusic}
                          target="_blank"
                          className="cursor-pointer"
                        >
                          <SiApplemusic className="text-base " />
                        </a>
                      )}
                      {upcoming[0].Youtube.length > 0 && (
                        <a
                          // onMouseEnter={() => {
                          //   setCurrentPointer("a");
                          // }}
                          // onMouseLeave={() => {
                          //   setCurrentPointer("");
                          // }}
                          href={upcoming[0].Youtube}
                          target="_blank"
                          className="cursor-pointer"
                        >
                          <AiFillYoutube className="text-base" />
                        </a>
                      )}
                      {upcoming[0].Spotify.length > 0 && (
                        <a
                          // onMouseEnter={() => {
                          //   setCurrentPointer("a");
                          // }}
                          // onMouseLeave={() => {
                          //   setCurrentPointer("");
                          // }}
                          href={upcoming[0].Spotify}
                          target="_blank"
                          className="cursor-pointer"
                        >
                          <FaSpotify className="text-base" />
                        </a>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-row justify-around items-center mt-4 w-full ">
                      <p className="text-white border-b-[1px] border-red-500 text-sm">
                        Coming Soon
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div
                onMouseMove={handleMouseMove}
                className="flex flex-col w-full lg:w-1/2 items-start mt-8 lg:mt-0 p-8"
              >
                {upcoming.slice(1, 5).map((item, index) => {
                  return (
                    <div
                      key={index}
                      // onMouseEnter={() => {
                      //   setIsHovered(true);
                      //   setCurrentGroup(index);
                      //   setCurrentSong(item);
                      // }}
                      // onMouseLeave={() => {
                      //   setIsHovered(false);
                      //   setCurrentGroup(-1);
                      //   setCurrentSong({});
                      // }}
                      // onMouseOver={handleMouseOver}
                      // onMouseOut={handleMouseOut}
                      className="flex flex-row justify-between p-2 border-[0.25px] overflow-hidden z-20 border-[#666666] mb-4 w-full"
                    >
                      <div className="flex flex-row items-center">
                        <div className=" h-[10vh] w-[10vh] lg:h-[15vh] lg:w-[15vh] relative">
                          <Image
                            src={item.imageUrl}
                            layout="fill"
                            alt={`song ${item.song}`}
                          />
                        </div>
                        <div className="flex flex-col items-start justify-center ml-8">
                          <h3 className="text-white text-sm lg:text-xl">
                            {item.song}
                          </h3>
                          <p className="text-red-500 text-xs lg:text-sm">
                            {item.artist}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row items-center w-5/12 lg:w-3/12">
                        {item.released ? (
                          <div className="flex flex-row justify-end gap-x-6 lg:gap-x-8 mr-4 lg:mr-8 items-center w-full ">
                            {item.AppleMusic.length > 0 && (
                              <a
                                // onMouseEnter={() => {
                                //   setCurrentPointer("a");
                                // }}
                                // onMouseLeave={() => {
                                //   setCurrentPointer("");
                                // }}
                                href={item.AppleMusic}
                                target="_blank"
                                className="cursor-pointer"
                              >
                                <SiApplemusic className="text-sm " />
                              </a>
                            )}
                            {item.Youtube.length > 0 && (
                              <a
                                // onMouseEnter={() => {
                                //   setCurrentPointer("a");
                                // }}
                                // onMouseLeave={() => {
                                //   setCurrentPointer("");
                                // }}
                                href={item.Youtube}
                                target="_blank"
                                className="cursor-pointer"
                              >
                                <AiFillYoutube className="text-sm" />
                              </a>
                            )}
                            {item.Spotify.length > 0 && (
                              <a
                                // onMouseEnter={() => {
                                //   setCurrentPointer("a");
                                // }}
                                // onMouseLeave={() => {
                                //   setCurrentPointer("");
                                // }}
                                href={item.Spotify}
                                target="_blank"
                                className="cursor-pointer"
                              >
                                <FaSpotify className="text-sm" />
                              </a>
                            )}

                            {/* <a
                              onMouseEnter={() => {
                                setCurrentPointer("a");
                              }}
                              onMouseLeave={() => {
                                setCurrentPointer("");
                              }}
                              onClick={() => {
                                window.open(item.Soundcloud, "_blank");
                              }}
                            >
                              <Image
                                src="/wynk.png"
                                alt="wynk"
                                width={12}
                                height={12}
                              />
                            </a> */}
                          </div>
                        ) : (
                          <div className="flex flex-row justify-around items-center  w-full ">
                            <p className="text-white border-b-[1px] border-red-500 text-sm">
                              Coming Soon
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
                <div className=" w-full flex mt-4 flex-row justify-end items-center">
                  <a
                    // onMouseEnter={() => {
                    //   setCurrentPointer("a");
                    // }}
                    // onMouseLeave={() => {
                    //   setCurrentPointer("");
                    // }}
                    className=" text-white hover:underline leading-8 text-sm lg:text-base cursor-pointer"
                    href="/music"
                  >
                    Check out our comlpete music catalog
                  </a>
                  <FaArrowRightLong className=" text-white ml-3 mt-1" />
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
        <div
          className={
            "  lg:max-h-[70vh] lg:min-h-[70vh] lg:h-[70vh] w-screen overflow-hidden"
          }
        >
          <div className="flex flex-col w-full h-full items-start relative justify-start bg-black py-[5vh] ">
            <div className="circle absolute  right-0 bottom-0" />
            <div className="circle -bottom-1/2 -right-1/2 absolute" />
            <RevealOnScroll
              addedClasses={
                "flex flex-col items-center lg:items-start justify-center w-full p-8 animate-slideInLeft"
              }
            >
              <h2
                className={`${abril.className} text-white text-[3rem] lg:text-[4rem] leading-[4rem] font-bold `}
              >
                Gallery
              </h2>
              {/* <p className="text-white text-center lg:text-start text-sm">
                {
                  " Showcase your music collection and explore different genres with Dole's Music. From classical to rock, we have it all."
                }
              </p> */}
            </RevealOnScroll>
            <motion.div
              className="h-[25vh] lg:h-[35vh] mt-[5vh] left-0 flex gap-4"
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
              {Array(20)
                .fill(1)
                .map((item, idx) => (
                  <a key={idx} href="/media">
                    <motion.div
                      className=" w-[20vh] h-[20vh] lg:w-[30vh] lg:h-[30vh] relative"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Image
                        // onMouseEnter={() => {
                        //   setCurrentPointer("i");
                        // }}
                        // onMouseLeave={() => {
                        //   setCurrentPointer("");
                        // }}
                        src={
                          process.env.NEXT_PUBLIC_API_URL +
                          `/dolls${idx + 10}.jpeg`
                        }
                        layout="fill"
                        alt={`gallery dolls${idx}`}
                        objectFit="cover"
                      />
                    </motion.div>
                  </a>
                ))}
            </motion.div>
          </div>
        </div>
        <div className={"  h-[90vh] lg:h-[80vh] w-screen overflow-hidden z-20"}>
          <div className="flex flex-col w-full h-full items-start relative justify-start bg-black py-[5vh] ">
            <div className="circle absolute  right-0 bottom-0 z-0" />
            <div className="circle -bottom-1/2 -right-1/2 absolute z-0" />
            <RevealOnScroll
              addedClasses={
                "flex flex-col items-center lg:items-center justify-center w-full p-8 animate-animateSlideUp"
              }
            >
              <h2
                className={`${abril.className} text-white text-[3rem] lg:text-[4rem] leading-[4rem] font-bold `}
              >
                Contact
              </h2>
              <p className="text-white text-center lg:text-start text-sm">
                {" Reach out to us for any collaborations or queries."}
              </p>
            </RevealOnScroll>
            <div className=" flex flex-col items-center w-full mt-[5vh]">
              <form
                id="contact-form-home"
                onSubmit={handleSubmit(onSubmit)}
                className=" w-[80vw] lg:w-[40%] flex flex-col items-center justify-center"
              >
                <div className="flex flex-col items-center w-full">
                  <input
                    type="text"
                    id="name"
                    placeholder="Name*"
                    {...register("name", { required: true, minLength: 5 })}
                    className="mb-4 w-full bg-transparent placeholder:text-white/70 focus:bg-transparent text-white  text-xl border-b-[1px] border-red-800"
                  />
                  {errors.name?.message ? (
                    <p className=" text-xs text-red-500">
                      {errors.name.message}
                    </p>
                  ) : null}
                </div>
                <div className="flex flex-col items-center w-full mt-4">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email*"
                    {...register("email", {
                      required: true,
                      minLength: 5,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address",
                      },
                    })}
                    className="mb-4 w-full placeholder:text-white/70 focus:bg-transparent text-white  bg-transparent text-xl border-b-[1px] border-red-800"
                  />
                  {errors.email?.message ? (
                    <p className=" text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  ) : null}
                </div>
                <div className="flex flex-col items-center w-full mt-4">
                  <input
                    type="phoneNumber"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    {...register("phoneNumber")}
                    className="mb-4 w-full placeholder:text-white/70 focus:bg-transparent text-white  bg-transparent text-xl border-b-[1px] border-red-800"
                  />
                </div>
                <div className="flex flex-col items-center w-full mt-4">
                  <textarea
                    placeholder="Message*"
                    id="message"
                    {...register("message", { required: true })}
                    className="mb-4 w-full placeholder:text-white/70 focus:bg-transparent text-white  h-[10vh] bg-transparent text-xl border-b-[1px] border-red-800"
                  />
                  {errors.message?.message ? (
                    <p className=" text-xs text-red-500">
                      {errors.message.message}
                    </p>
                  ) : null}
                </div>
                {emailSent ? (
                  <button
                    type="submit"
                    disabled
                    className="bg-green-400 text-white px-8 py-2 mt-8 "
                  >
                    Email Sent
                  </button>
                ) : (
                  <button
                    disabled={
                      errors.name ||
                      errors.email ||
                      errors.message ||
                      errors.phoneNumber
                    }
                    type="submit"
                    // onMouseEnter={() => {
                    //   setCurrentPointer("a");
                    // }}
                    // onMouseLeave={() => {
                    //   setCurrentPointer("");
                    // }}
                    id="submit-button"
                    className="bg-red-800 z-20 disabled:bg-gray-700 text-white px-8 py-2 mt-8 cursor-pointer "
                  >
                    {loading ? "..." : "Submit"}
                  </button>
                )}
              </form>
            </div>
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
      </main>
    </Transition>
  );
};

export default Home;
