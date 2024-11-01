"use client";

import React, { useState, useEffect, useRef } from "react";
import Transition from "@/components/Transition";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";

let services = [
  {
    name: "Custom Voiceovers",
    description:
      "Tailored voiceovers to give your brand a unique and professional voice.",
  },
  {
    name: "Copywriting for Ads & Music",
    description:
      "Engaging, creative copy that resonates with audiences in advertisements and music.",
  },
  {
    name: "High-Quality Music Productions",
    description:
      "Expertly crafted music productions designed to meet industry standards.",
  },
  {
    name: "Ready-to-Release Mix & Masters",
    description:
      "Polished mixes and masters, prepared for release on all major platforms.",
  },
  {
    name: "Multilingual Ad Jingles",
    description:
      "Catchy, multilingual jingles to expand your ad’s reach and appeal to diverse audiences.",
  },
];

const Services = () => {
  const router = useRouter();
  const containerRef = useRef(null);
  const mainDivRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["42.5%", "-100%"]);

  useEffect(() => {
    const handleScroll = () => {
      const { clientHeight } = mainDivRef.current;
      let top = mainDivRef.current.getBoundingClientRect().top;
      let scrollY = window.scrollY;

      console.log("Heights", scrollY, top);

      if (top <= 0) {
        containerRef.current.style.position = "fixed";
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
        id="services"
        className="flex flex-col z-30 max-w-screen min-h-screen w-screen overflow-y-scroll relative items-center justify-between pt-[5vh] overflow-hidden"
      >
        <div className="  h-[30vh] lg:h-[40vh] relative flex flex-col items-center justify-end w-11/12 lg:w-[80vw]">
          <h1 className=" text-white text-[2.5rem]  lg:text-[6rem]">
            WHAT WE OFFER?
          </h1>
          <p className=" text-xl text-white w-full lg:w-6/12 text-center">
            {
              "We are a dynamic team offering end-to-end audio services across independent music, films, and ads."
            }
          </p>
        </div>
        <div
          ref={mainDivRef}
          className="h-[200vh] w-full flex relative flex-col overflow-hidden items-center "
        >
          <motion.div
            style={{
              x: x,
              scale: 1,
              position: "sticky",
            }}
            ref={containerRef}
            className=" h-[80vh] top-[10vh] flex flex-row justify-center items-start gap-x-[10vw]"
          >
            {services.map((item, index) => {
              return (
                <div
                  key={index}
                  className={` h-[45vh] w-[55vw] ${
                    index % 2 == 1 ? "mt-[30vh]" : ""
                  } bg-black shadow-lg  flex flex-row items-center relative overflow-hidden justify-center`}
                >
                  <div className="circle top-[-7.5vh] left-[-7.5vh] absolute z-30" />

                  <div className=" w-full lg:w-1/2  h-full flex flex-col items-center justify-center px-8">
                    <h1 className=" text-white text-[1.5rem]  lg:text-[2.5rem] lg:leading-[2.25rem]">
                      {item.name}
                    </h1>
                    <p className=" text-xl text-white w-full text-start mt-4">
                      {item.description}
                    </p>
                  </div>
                  <div className=" w-full lg:w-1/2 h-full relative flex-col items-center justify-start px-4">
                    <Image
                      src="/dolls42.jpeg"
                      alt="dolls"
                      layout="fill"
                      className="object-cover"
                    />
                  </div>
                </div>
              );
            })}
            <div
              className={` h-[45vh] w-[55vw] mt-[30vh] bg-black shadow-lg relative overflow-hidden  flex flex-col items-center justify-center`}
            >
              <div className="circle top-[-7.5vh] left-[-7.5vh] absolute z-30" />
              <div className="circle top-[-7.5vh] right-[-47.5vh] absolute z-30" />

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
          </motion.div>
        </div>
      </div>
    </Transition>
  );
};

export default Services;
