"use client";
import Image from "next/image";
import RevealOnScroll from "../components/RevealOnScroll";
import { CardStack } from "@/components/CardStack";
import { IoIosMenu } from "react-icons/io";
import { alfa } from "./layout";
import CarouselComponent from "@/components/CarouselHome/CarouselComponent";

let list = ["Music", "Gallery", "Media", "Contact"];

export default function Home() {
  return (
    <main className="flex max-h-screen flex-col items-center justify-between overflow-y-hidden">
      <div className="flex flex-col w-screen h-screen items-center relative mt-[10vh]">
        {/* <div className="circle2 absolute right-[40vw] top-1/2 -z-10" /> */}
        <div className="flex flex-row items-center justify-between h-[80vh] w-[90vw] relative z-20">
          <div className="flex flex-row items-center justify-between w-full  h-[90vh] z-20 ">
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
            <CarouselComponent />
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
