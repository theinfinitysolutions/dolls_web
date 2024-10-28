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

export default function Component() {
  const router = useRouter();
  const containerRef = useRef(null);
  const mainDivRef = useRef(null);
  const scrollProgress = useRef(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: scrollYA } = useScroll({
    target: mainDivRef,
    offset: ["start start", "end start"],
  });

  const cards = [
    {
      title: "Who we are?",
      description:
        "We are a dynamic team offering end-toend audio services across independent music, films, and ads. ",
      image: "/dolls21.jpeg",
    },
    {
      title: "Our Work",
      description:
        "With over 100 completed projects, we specialize in Fast High-Quality composition, production, and lyric writing with swift revisions and genre-fluid creativity",
      image: "/dolls20.jpeg",
    },
    {
      title: "Our Mission",
      description:
        "Our Philosophy is simple: the best music comes from collaboration, where each member’s unique energy contributes to something deeply resonant.",
      image: "/dolls28.jpeg",
    },
  ];

  const mainScroll = useTransform(
    scrollYA,
    [0, 0.25, 0.5, 0.75],
    [0, 0, 0, -100]
  );

  useEffect(() => {
    const handleScroll = () => {
      const { scrollHeight, clientHeight } = mainDivRef.current;
      let scrollY = window.scrollY;

      console.log("Heights", scrollY, scrollHeight);

      const scrollPercentage = (scrollY / scrollHeight) * 100;

      console.log("scroll", scrollPercentage.toFixed(0));

      if (scrollY > 250) {
        // if (scrollPercentage > 50) {
        //   containerRef.current.style.position = "sticky";
        // } else {
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
        id="music"
        ref={mainDivRef}
        className="flex flex-col z-30 max-w-screen min-h-screen w-screen overflow-y-scroll bg-black relative items-center justify-between py-[5vh] overflow-hidden"
      >
        <div className=" h-[40vh] relative flex flex-col items-center justify-end w-11/12 lg:w-[80vw]">
          <h1 className=" text-white text-[3rem]  lg:text-[7rem]">ABOUT US</h1>
          <p className=" text-xl text-white w-full lg:w-9/12 text-center">
            {
              "A creative music collective driven by the synergy of artists, merging diverse skills and experiences to craft powerful audio solutions."
            }
          </p>
        </div>

        <div className="h-[200vh] flex relative flex-col overflow-hidden items-center ">
          <motion.div
            style={{
              y: mainScroll,
              position: "sticky",
            }}
            className={` top-[15vh] h-[500px] w-11/12 lg:w-[80vw]  flex items-center justify-center`}
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

        <div className=" h-[50vh] relative flex flex-col items-center mt-8 justify-end w-[80vw]">
          <h1 className=" text-white text-[2rem]  lg:text-[3rem]">
            We are <span className="text-red-700">{"Dole's"}</span> Music
          </h1>
          <p className=" text-xl text-white w-full lg:w-9/12 text-center">
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

function Card({ title, color, progress, index, description, image }) {
  const yOffset = 500;
  const initialY = index * yOffset;

  let obj = {
    0: [0, 0, 0, initialY - 100],
    1: [50, 50, initialY * 2, initialY * 2 + 100],
    2: [100, initialY, initialY, initialY + 100],
  };

  const y = useTransform(progress, [0.15, 0.35, 0.75, 1], [...obj[index]]);

  const scale = useTransform(
    progress,
    [0, 0.5, 0.75, 1],
    [1, 0.95, 0.85 - 0.025 * (index + 1), 0.8 + 0.025 - (index + 1)]
  );

  return (
    <motion.div
      className={`absolute w-11/12 lg:w-[70vw] h-[450px] z-10`}
      style={{
        y,
        scale,
        zIndex: index,
      }}
    >
      <div
        className={` absolute -top-[45px] ${
          index == 0
            ? "left-[2.5vw]"
            : index == 1
            ? "left-[7.5vw]"
            : "left-[12.5vw]"
        }  h-[50px] px-8 rounded-lg border-[1px]   border-primary`}
        style={{
          zIndex: -1,
        }}
      >
        <p className="text-white text-2xl font-bold">{title}</p>
      </div>
      <div
        className={`bg-black z-10 border-[1px] border-primary rounded-2xl w-full h-full flex flex-col lg:flex-row items-center justify-center`}
      >
        <div className=" w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col items-start pl-8 justify-center">
          <h2 className="text-white text-[3rem] font-bold text-start">
            {title}
          </h2>
          <p className="text-white text-lg text-start ">{description}</p>
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
