"use client";
import React from "react";
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

let list = ["Music", "Media", "Contact"];

const images = [
  "/dolls1.jpeg",
  "/dolls2.jpeg",
  "/dolls3.jpeg",
  "/dolls4.jpeg",
  "/dolls5.jpeg",
];

let songlist = [
  {
    title: "OCD",
    artist: "Meraki",
  },
  {
    title: "Tere Aankhon Se",
    artist: "Abhisehk Nirwan",
  },
  {
    title: "Kya Karu",
    artist: "Param",
  },
  {
    title: "Maula",
    artist: "Ajay Tewari",
  },
];

const FAST_DURATION = 50;
const SLOW_DURATION = 120;

let navbarClass =
  "relative text-white text-base md:text-[0.75rem] lg:text-md xl:text-lg block after:block after:content-[''] after:absolute after:h-[2px] after:bg-red-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center cursor-none";

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
  const { currentPointer, setCurrentPointer } = useStore();
  const [emailSent, setEmailSent] = React.useState(false);

  const { register, handleSubmit, formState, reset } = useForm();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  const onSubmit = (data) => {
    emailjs
      .send(
        "service_vyc3aph",
        "template_vw3o9zp",
        {
          from_name: "anirudh",
          from_email: "test@gmail.com",
          from_message: "abcddefgh",
        },
        {
          publicKey: "8SoO2AD_OUoRwAQ7_ntbU",
        }
      )
      .then((res) => {
        setEmailSent(true);
        setTimeout(() => {
          setEmailSent(false);
        }, 1500);
        reset();
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const TextEffect = (id) => {
    let interval = null;
    let doc = document.getElementById(id);
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      if (!doc) {
        clearInterval(interval);
        return;
      }
      if (doc.inertText) {
        doc.innerText = doc.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return doc.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 16)];
          })
          .join("");

        if (iteration >= doc.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }
    }, 30);
  };

  useEffect(() => {
    setTimeout(() => {
      list.forEach((item) => {
        TextEffect(item);
      });
    }, [2000]);
  }, []);

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
      <main className="flex flex-col min-h-screen overflow-y-scroll relative items-center justify-between">
        <div className="flex flex-col absolute items-center justify-center animate-slideInLeft  top-[12.5vh] w-full h-[80vh] -left-[55vw] z-0 ">
          <Image
            src="/asset1.png"
            layout="fill"
            objectFit="contain"
            alt="asset1"
            className="rounded-3xl animate-rotate1 opacity-70"
          />
        </div>

        <div className=" fixed  animate-rotate1 right-4 z-20 bottom-4 w-[7.5vh] h-[7.5vh] md:w-[15vh] md:h-[15vh]   ">
          <Image
            src={"/asset2.png"}
            alt={"asset2"}
            objectFit="contain"
            layout="fill"
          />
        </div>

        <div className="flex flex-col w-screen items-center relative justify-center md:max-h-screen min-h-[100vh] md:h-[100vh] overflow-hidden">
          {/* <div className="circle2 absolute right-[40vw] top-1/2 -z-10" /> */}
          <div className="  absolute left-[40%] md:left-[47.5%] flex flex-row items-center bottom-4 md:bottom-8 animate-bounce z-50">
            <p className={`text-sm ${orbitron.className}`}>Scroll Down</p>
            <RiArrowRightDownLine className="text-white" />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-[90vw] h-full relative overflow-y-hidden  z-1">
            <div className="flex flex-row items-center justify-between relative w-full  md:w-5/12  ">
              <RevealOnScroll addedClasses="flex flex-col  top-0 left-0 items-center md:items-start justify-center w-full">
                <h1
                  className={` ${gazpacho_black.className} overflow-hidden text-[3.5rem] md:text-[5rem] text3d text-center font-bold leading-[5rem] text-[#ffffff]`}
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
                <div className="flex flex-row justify-between w-9/12 md:w-[17.5vw] mt-4">
                  {list.map((item, index) => (
                    <Link
                      onMouseEnter={() => {
                        setCurrentPointer("a");
                      }}
                      onMouseLeave={() => {
                        setCurrentPointer("");
                      }}
                      href={"/" + item.toLowerCase()}
                      key={index}
                      id={item}
                      data-value={item}
                      className="flex flex-col items-start justify-center  transition-colors duration-300 hover:text-[#7a180f] "
                    >
                      <h2 className={navbarClass}>{item}</h2>
                    </Link>
                  ))}
                </div>
              </RevealOnScroll>
            </div>
            <div className=" md:-ml-[5%] w-full md:w-7/12 overflow-hidden ">
              <CarouselComponent />
            </div>
            {/* <div className="flex flex-col items-start  w-4/12">
              <div
                onMouseLeave={() => {}}
                className="flex flex-col w-full md:w-[70%] group items-center justify-center"
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
            "  md:max-h-[100vh] min-h-[100vh] md:h-[100vh] w-screen overflow-hidden"
          }
        >
          <div className="flex flex-col w-full h-full items-start relative justify-start  bg-black py-[5vh] ">
            <div className="flex flex-col md:flex-row w-full justify-between items-start">
              <div className="circle left-1/3 bottom-0 absolute" />
              <div className="circle right-0 top-0 absolute" />
              <div className="flex w-full md:w-1/2 flex-col items-center md:items-start">
                <RevealOnScroll
                  addedClasses={
                    "flex flex-col items-center md:items-start justify-center w-full p-4 md:p-8 animate-slideInLeft"
                  }
                >
                  <h2
                    className={`${abril.className} text-white text-[3rem] md:text-[4rem] leading-[4rem] font-bold `}
                  >
                    {"WHAT'S NEW"}
                  </h2>
                  <p className="text-white text-center md:text-start text-sm">
                    {
                      " Showcase your music collection and explore different genres with Dole's Music. From classical to rock, we have it all."
                    }
                  </p>
                </RevealOnScroll>
                <div className="flex flex-row items-center justify-start mt-[5vh] px-8">
                  <p className="text-xl text-white ">Upcoming Music</p>
                  <FaArrowRightLong className="text-white ml-4" />
                </div>
                <div className="flex flex-col items-center w-[40vh] mx-[10vw]">
                  <div className=" h-[60vw] w-[60vw] md:h-[40vh] md:w-[40vh] group mt-4 relative">
                    <div className=" w-[60vw] h-[60vw] md:h-[40vh] md:w-[40vh]  mt-4 absolute z-20">
                      <Image
                        src={upcoming[0].imageUrl}
                        layout="fill"
                        objectFit="cover"
                        alt={upcoming[0].song + "music"}
                      />
                    </div>
                    <div className=" w-[60vw] h-[60vw] md:h-[40vh] md:w-[40vh] z-10 absolute transition-all group-hover:translate-x-[10vw] group-hover:duration-200  mt-4 ">
                      <Image
                        src="/asset1.png"
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
                </div>
              </div>
              <div className="flex flex-col w-full md:w-1/2 items-start mt-8 md:mt-0 p-8">
                {upcoming.slice(1, 5).map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-row justify-between p-2 border-[0.25px] border-[#666666] mb-4 w-full"
                    >
                      <div className="flex flex-row items-center">
                        <div className=" h-[10vh] w-[10vh] md:h-[15vh] md:w-[15vh] relative">
                          <Image
                            src={item.imageUrl}
                            layout="fill"
                            alt={`song ${item.song}`}
                          />
                        </div>
                        <div className="flex flex-col items-start justify-center ml-8">
                          <h3 className="text-white text-sm md:text-xl">
                            {item.song}
                          </h3>
                          <p className="text-red-500 text-xs md:text-sm">
                            {item.artist}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row items-center w-5/12 md:w-3/12">
                        {item.released ? (
                          <div className="flex flex-row justify-around items-center w-full ">
                            <a
                              onMouseEnter={() => {
                                setCurrentPointer("a");
                              }}
                              onMouseLeave={() => {
                                setCurrentPointer("");
                              }}
                              onClick={() => {
                                router.push("/");
                              }}
                            >
                              <SiApplemusic className="text-sm " />
                            </a>
                            <a
                              onMouseEnter={() => {
                                setCurrentPointer("a");
                              }}
                              onMouseLeave={() => {
                                setCurrentPointer("");
                              }}
                              onClick={() => {}}
                            >
                              <AiFillYoutube className="text-sm" />
                            </a>

                            <a
                              onMouseEnter={() => {
                                setCurrentPointer("a");
                              }}
                              onMouseLeave={() => {
                                setCurrentPointer("");
                              }}
                              onClick={() => {}}
                            >
                              <FaSpotify className="text-sm" />
                            </a>

                            <a
                              onMouseEnter={() => {
                                setCurrentPointer("a");
                              }}
                              onMouseLeave={() => {
                                setCurrentPointer("");
                              }}
                              onClick={() => {}}
                            >
                              <Image
                                src="/wynk.png"
                                alt="wynk"
                                width={12}
                                height={12}
                              />
                            </a>
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
              </div>
            </div>
          </div>
        </RevealOnScroll>
        <div
          className={
            "  md:max-h-[70vh] md:min-h-[70vh] md:h-[70vh] w-screen overflow-hidden"
          }
        >
          <div className="flex flex-col w-full h-full items-start relative justify-start bg-black py-[5vh] ">
            <div className="circle absolute  right-0 bottom-0" />
            <div className="circle -bottom-1/2 -right-1/2 absolute" />
            <RevealOnScroll
              addedClasses={
                "flex flex-col items-center md:items-start justify-center w-full p-8 animate-slideInLeft"
              }
            >
              <h2
                className={`${alfa.className} text-white text-[3rem] md:text-[4rem] leading-[4rem] font-bold `}
              >
                Gallery
              </h2>
              <p className="text-white text-center md:text-start text-sm">
                {
                  " Showcase your music collection and explore different genres with Dole's Music. From classical to rock, we have it all."
                }
              </p>
            </RevealOnScroll>
            <motion.div
              className="h-[25vh] md:h-[35vh] mt-[5vh] left-0 flex gap-4"
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
                  <motion.div
                    key={idx}
                    className=" w-[20vh] h-[20vh] md:w-[30vh] md:h-[30vh] relative"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Image
                      onMouseEnter={() => {
                        setCurrentPointer("i");
                      }}
                      onMouseLeave={() => {
                        setCurrentPointer("");
                      }}
                      src={`https://mystorage1.blr1.cdn.digitaloceanspaces.com/dolls/dolls${
                        idx + 10
                      }.jpeg`}
                      layout="fill"
                      alt={`gallery dolls${idx}`}
                      objectFit="cover"
                    />
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </div>
        <div
          className={
            "  max-h-[70vh] min-h-[70vh] h-[70vh] w-screen overflow-hidden"
          }
        >
          <div className="flex flex-col w-full h-full items-start relative justify-start bg-black py-[5vh] ">
            <div className="circle absolute  right-0 bottom-0" />
            <div className="circle -bottom-1/2 -right-1/2 absolute" />
            <RevealOnScroll
              addedClasses={
                "flex flex-col items-center md:items-center justify-center w-full p-8 animate-animateSlideUp"
              }
            >
              <h2
                className={`${alfa.className} text-white text-[3rem] md:text-[4rem] leading-[4rem] font-bold `}
              >
                CONTACT
              </h2>
              <p className="text-white text-center md:text-start text-sm">
                {
                  " Reach out to us for any collorations or queries. We are always here to help you."
                }
              </p>
            </RevealOnScroll>
            <div className=" flex flex-col items-center w-full mt-[5vh]">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className=" w-[80vw] md:w-[40%] flex flex-col items-center justify-center"
              >
                <div className="flex flex-col items-center w-full">
                  <input
                    type="text"
                    placeholder="Name"
                    {...register("name", { required: true })}
                    className="mb-4 w-full placeholder:text-white/70 text-white  bg-black text-xl border-b-[1px] border-red-800"
                  />
                </div>
                <div className="flex flex-col items-center w-full mt-4">
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                    className="mb-4 w-full placeholder:text-white/70 text-white  bg-black text-xl border-b-[1px] border-red-800"
                  />
                </div>
                <div className="flex flex-col items-center w-full mt-4">
                  <textarea
                    placeholder="Message"
                    {...register("message", { required: true })}
                    className="mb-4 w-full placeholder:text-white/70 text-white  h-[10vh] bg-black text-xl border-b-[1px] border-red-800"
                  />
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
                    type="submit"
                    onMouseEnter={() => {
                      setCurrentPointer("a");
                    }}
                    onMouseLeave={() => {
                      setCurrentPointer("");
                    }}
                    className={` ${
                      emailSent ? "bg-red-400" : "bg-red-800"
                    }  text-white px-8 py-2 mt-8`}
                  >
                    {emailSent ? "Submit" : "Sent"}
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
    </Transition>
  );
};

export default Home;
