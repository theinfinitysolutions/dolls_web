"use client";
import React from "react";
import Image from "next/image";
import Transition from "@/components/Transition";
import RevealOnScroll from "@/components/RevealOnScroll";
import { alfa } from "../layout";

const ContactUs = () => {
  return (
    <Transition>
      <div className="flex flex-col max-w-screen max-h-[100vh] h-screen w-screen bg-black overflow-y-hidden relative items-center justify-center py-[5vh] overflow-hidden">
        <div className="circle absolute  right-0 bottom-0" />
        <div className="circle -bottom-1/2 -right-1/2 absolute" />
        <div className="circle -bottom-1/2 left-0 absolute" />

        <div
          className={
            "  max-h-[70vh] min-h-[70vh] h-[70vh] w-screen overflow-hidden"
          }
        >
          <div className="flex flex-col w-full h-full items-start relative justify-start  py-[5vh] ">
            <RevealOnScroll
              addedClasses={
                "flex flex-col items-center justify-center w-full p-8 animate-animateSlideUp"
              }
            >
              <h2
                className={`${alfa.className} text-white text-[4rem] leading-[4rem] font-bold `}
              >
                CONTACT
              </h2>
              <p className="text-white text-sm">
                {
                  " Reach out to us for any collorations or queries. We are always here to help you."
                }
              </p>
            </RevealOnScroll>
            <div className=" flex flex-col items-center w-full mt-[5vh]">
              <form className=" w-[40%] flex flex-col items-center justify-center">
                <div className="flex flex-col items-center w-full">
                  <input
                    type="text"
                    placeholder="Name"
                    className="mb-4 w-full bg-transparent placeholder:text-white/70 text-white  text-xl border-b-[1px] border-red-800"
                  />
                </div>
                <div className="flex flex-col items-center w-full mt-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="mb-4 w-full placeholder:text-white/70 text-white  bg-transparent text-xl border-b-[1px] border-red-800"
                  />
                </div>
                <div className="flex flex-col items-center w-full mt-4">
                  <textarea
                    placeholder="Message"
                    className="mb-4 w-full placeholder:text-white/70 text-white  h-[10vh] bg-transparent text-xl border-b-[1px] border-red-800"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-red-800 text-white px-8 py-2 mt-8 "
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default ContactUs;
