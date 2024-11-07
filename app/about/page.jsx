"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import Transition from "@/components/Transition";
import Image from "next/image";
import { useRouter } from "next/navigation";

const cards = [
  {
    title: "Who we are?",
    description:
      "We are a dynamic team offering end-toend audio services across independent music, films, and ads. ",
    image: "/dolls21.jpeg",
  },
  {
    title: null,
    description:
      "With over 100 completed projects, we specialize in Fast High-Quality composition, production, and lyric writing with swift revisions and genre-fluid creativity",
    image: "/dolls20.jpeg",
  },
  {
    title: null,
    description:
      "Our Philosophy is simple: the best music comes from collaboration, where each member’s unique energy contributes to something deeply resonant.",
    image: "/dolls28.jpeg",
  },
];

export default function Component() {
  const router = useRouter();
  const containerRef = useRef(null);
  const mainDivRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: scrollYA } = useScroll({
    target: mainDivRef,
    offset: ["start start", "end start"],
  });

  const mainScroll = useTransform(
    scrollYA,
    [0, 0.25, 0.5, 0.75],
    [0, 0, 0, -100]
  );

  useEffect(() => {
    const handleScroll = () => {
      const { clientHeight } = mainDivRef.current;
      let top = mainDivRef.current.getBoundingClientRect().top;
      let scrollY = window.scrollY;

      // console.log("Heights", scrollY, top);

      if (top <= 0) {
        containerRef.current.style.position = "fixed";
        // }
      } else {
        containerRef.current.style.position = "sticky";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Transition>
      <div
        id="about"
        className="flex flex-col z-30 max-w-screen min-h-screen w-screen overflow-y-scroll relative items-center justify-between pt-[5vh] overflow-hidden"
      >
        <div className=" h-[30vh] lg:h-[40vh] relative flex flex-col items-center justify-end w-11/12 lg:w-[80vw]">
          <h1 className=" text-white text-[2.5rem]  lg:text-[6rem]">
            ABOUT US
          </h1>
          <p className=" text-xl text-white w-full lg:w-9/12 text-center">
            {
              "A creative music collective driven by the synergy of artists, merging diverse skills and experiences to craft powerful audio solutions."
            }
          </p>
        </div>

        <div
          ref={mainDivRef}
          className="h-[200vh] w-full hidden lg:flex relative flex-col overflow-hidden items-center "
        >
          <motion.div
            style={{
              y: mainScroll,
              position: "sticky",
            }}
            className={` top-[10vh] h-[500px] w-11/12 lg:w-[80vw] flex items-center justify-center`}
            ref={containerRef}
          >
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                color={card.color}
                progress={scrollYProgress}
                index={index}
                description={card.description}
                image={card.image}
              />
            ))}
          </motion.div>
        </div>

        <div className=" flex lg:hidden flex-col items-center w-full mt-8">
          {cards.map((card, index) => (
            <NormalCard
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>

        <div className=" h-[30vh] relative overflow-hidden flex flex-col bg-black items-center mt-[10vh] justify-center w-full">
          <div className="circle -bottom-[80%] -right-[30%] absolute z-30" />
          <div className="circle -bottom-[80%] -left-[10%] absolute z-30" />
          <h1 className=" text-white text-[2rem]  lg:text-[3rem]">
            We are <span className="text-red-700">{"Dole's"}</span> Music
          </h1>
          <p className=" text-base text-white w-full lg:w-9/12 -mt-1 text-center">
            {
              "A creative music collective driven by the synergy of artists, merging diverse skills and experiences to craft powerful audio solutions."
            }
          </p>
          <button
            onClick={() => {
              router.push("/contact");
            }}
            className=" bg-red-700 text-white px-8 py-2 rounded-md mt-4"
          >
            Get in touch
          </button>
        </div>
      </div>
    </Transition>
  );
}

function NormalCard({ title, description, image }) {
  return (
    <div className=" w-11/12 lg:w-[70vw] h-[450px] mb-[5vh] z-10">
      <div
        className={`bg-black z-10  w-full h-full flex flex-col relative lg:flex-row items-center overflow-hidden justify-center`}
      >
        <div className="circle top-[-7.5vh] left-[-7.5vh] absolute z-30" />

        <div className=" w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col items-center lg:items-start pl-8 pr-8 justify-center">
          {title ? (
            <h2 className="text-white text-[2rem] z-20 lg:text-[3rem] font-bold text-center lg:text-start">
              {title}
            </h2>
          ) : null}
          <p className="text-white text-lg lg:text-xl z-20 text-center lg:text-start ">
            {description}
          </p>
        </div>
        <div className=" w-full lg:w-1/2 h-1/2 lg:h-full bg-cover bg-center relative overflow-hidden">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + image}
            alt="image"
            layout="fill"
            className=" transition-all duration-200 scale-110 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function Card({ title, color, progress, index, description, image }) {
  const yOffset = 500;
  const initialY = index * yOffset;

  let altObj = {
    0: [0, 0, 0, 0],
    1: [initialY * 2 + 100, initialY, 0, 0],
    2: [initialY + 100, initialY, initialY / 2, 0],
  };

  let obj = {
    0: [0, 0, 0, initialY - 100],
    1: [50, 50, initialY * 2, initialY * 2 + 100],
    2: [100, initialY, initialY, initialY + 100],
  };

  const y = useTransform(progress, [0.15, 0.2, 0.4, 0.6], [...altObj[index]]);

  // const scale = useTransform(
  //   progress,
  //   [0, 0.5, 0.75, 1],
  //   [1, 0.95, 0.85 - 0.025 * (index + 1), 0.8 + 0.04 - (index + 1)]
  // );

  return (
    <motion.div
      className={`absolute w-11/12 lg:w-[70vw] h-[450px] z-10`}
      style={{
        y,
        zIndex: index,
      }}
    >
      <div
        className={`bg-black z-10  w-full h-full flex flex-col relative lg:flex-row items-center overflow-hidden justify-center`}
      >
        <div className="circle top-[-7.5vh] left-[-7.5vh] absolute z-30" />

        <div className=" w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col items-center lg:items-start pl-8 pr-8 justify-center">
          {title ? (
            <h2 className="text-white text-[2rem] z-20 lg:text-[3rem] font-bold text-center lg:text-start">
              {title}
            </h2>
          ) : null}
          <p className="text-white text-lg lg:text-xl z-20 text-center lg:text-start ">
            {description}
          </p>
        </div>
        <div className=" w-full lg:w-1/2 h-1/2 lg:h-full bg-cover bg-center relative overflow-hidden">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + image}
            alt="image"
            layout="fill"
            className=" transition-all duration-200 scale-110 object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}
