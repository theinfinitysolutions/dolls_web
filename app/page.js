"use client";
import Image from "next/image";
import RevealOnScroll from "../components/RevealOnScroll";
import { CardStack } from "@/components/CardStack";
import { IoIosMenu } from "react-icons/io";
import { alfa } from "./layout";

let list = ["Music", "Gallery", "Media", "Contact"];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col min-h-screen w-screen items-center relative mt-[10vh]">
        {/* <div className="circle2 absolute right-[40vw] top-1/2 -z-10" /> */}
        <div className="flex flex-row items-center justify-between h-[80vh] w-[90vw] relative z-20">
          <div className="flex flex-row items-center justify-between w-full  h-full z-20 ">
            <div className="flex flex-col items-start justify-center w-1/2 p-8">
              <h1
                className={`${alfa.className} text-white text-[4rem] leading-[4rem] font-bold `}
              >
                Dole's Music
              </h1>
              <div className="flex flex-row justify-between w-[20vw] mt-4">
                {list.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start justify-center w-[10%] cursor-pointer transition-colors duration-300 hover:text-[#7a180f]"
                  >
                    <h2 className="text-white text-lg">{item}</h2>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-row w-8/12   justify-start items-center overflow-hidden">
              {[1, 2, 3, 4].map((item, index) => {
                return (
                  <div
                    className={`flex flex-col max-w-[20vw] bg-transparent w-[20vw] overlflow-x-hidden group mr-4 h-[50vh] group relative  `}
                  >
                    <Image
                      src={`/dolls${index + 1}.jpeg`}
                      layout="fill"
                      objectFit="cover"
                      className={`group-hover:scale-125 group-hover:transition-all group-hover:duration-[700ms] overflow-hidden max-w-[15vw]`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col absolute items-center justify-center animate-slideInLeft   w-full h-[80vh] -left-[50vw] z-10 ">
            <Image
              src="/asset1.png"
              layout="fill"
              objectFit="contain"
              className="rounded-3xl animate-rotate1 opacity-40"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
