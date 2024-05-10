"use client";
import Image from "next/image";
import RevealOnScroll from "../components/RevealOnScroll";
import { CardStack } from "@/components/CardStack";
import { IoIosMenu } from "react-icons/io";
import { alfa } from "./layout";
import CarouselComponent from "@/components/CarouselHome/CarouselComponent";
import Link from "next/link";
import Transition from "@/components/Transition";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

let list = ["Music", "Gallery", "Media", "Contact"];

const images = [
  "/dolls1.jpeg",
  "/dolls2.jpeg",
  "/dolls3.jpeg",
  "/dolls4.jpeg",
  "/dolls5.jpeg",
];

const FAST_DURATION = 25;
const SLOW_DURATION = 75;

const Home = () => {
  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

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
      <main className="flex flex-col min-h-screen overflow-y-scroll items-center justify-between">
        <div className="flex flex-col absolute items-center justify-center animate-slideInLeft  top-[12.5vh] w-full h-[80vh] -left-[50vw] z-0 ">
          <Image
            src="/asset1.png"
            layout="fill"
            objectFit="contain"
            className="rounded-3xl animate-rotate1 opacity-70"
          />
        </div>

        <div className=" fixed  animate-rotate1 right-4 z-20 bottom-4 w-[15vh] h-[15vh]   ">
          <Image src={"/asset2.png"} objectFit="contain" layout="fill" />
        </div>

        <div className="flex flex-col w-screen items-center relative justify-center max-h-screen min-h-[100vh] h-[100vh] overflow-hidden">
          {/* <div className="circle2 absolute right-[40vw] top-1/2 -z-10" /> */}
          <div className="flex flex-row items-center justify-between w-[90vw] h-full relative overflow-y-hidden  z-1">
            <div className="flex flex-row items-center justify-between w-full  ">
              <div className="flex flex-col items-start justify-center w-1/2 p-8">
                <h1
                  className={`${alfa.className} text-white text-[4rem] leading-[4rem] font-bold `}
                >
                  Dole's Music
                </h1>
                <div className="flex flex-row justify-between w-[25vw] mt-4">
                  {list.map((item, index) => (
                    <Link
                      href={"/music"}
                      key={index}
                      className="flex flex-col items-start justify-center cursor-pointer transition-colors duration-300 hover:text-[#7a180f]"
                    >
                      <h2 className="text-white text-lg">{item}</h2>
                    </Link>
                  ))}
                </div>
              </div>
              <CarouselComponent />
            </div>
          </div>
        </div>
        <RevealOnScroll
          addedClasses={
            "  max-h-[100vh] min-h-[100vh] h-[100vh] w-screen overflow-hidden"
          }
        >
          <div className="flex flex-col w-full h-full items-start relative justify-start bg-black py-[5vh] ">
            <RevealOnScroll
              addedClasses={
                "flex flex-col items-start justify-center w-full p-8 animate-slideInLeft"
              }
            >
              <h2
                className={`${alfa.className} text-white text-[4rem] leading-[4rem] font-bold `}
              >
                MUSIC
              </h2>
              <p className="text-white text-sm">
                {
                  " Showcase your music collection and explore different genres with Dole's Music. From classical to rock, we have it all."
                }
              </p>
            </RevealOnScroll>
            <div className="flex flex-row w-full justify-between items-center">
              <div className="flex w-1/2 flex-col items-center">
                <div className="h-[40vh] w-[40vh] relative">
                  <Image src="/dolls1.jpeg" layout="fill" objectFit="cover" />
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll
          addedClasses={
            "  max-h-[70vh] min-h-[70vh] h-[70vh] w-screen overflow-hidden"
          }
        >
          <div className="flex flex-col w-full h-full items-start relative justify-start bg-black py-[5vh] ">
            <RevealOnScroll
              addedClasses={
                "flex flex-col items-start justify-center w-full p-8 animate-slideInLeft"
              }
            >
              <h2
                className={`${alfa.className} text-white text-[4rem] leading-[4rem] font-bold `}
              >
                Gallery
              </h2>
              <p className="text-white text-sm">
                {
                  " Showcase your music collection and explore different genres with Dole's Music. From classical to rock, we have it all."
                }
              </p>
            </RevealOnScroll>
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
                  <Image src={item} layout="fill" objectFit="cover" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </RevealOnScroll>
      </main>
    </Transition>
  );
};

export default Home;
