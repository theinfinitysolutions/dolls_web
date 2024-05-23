"use client";
import React from "react";
import Transition from "@/components/Transition";

const Media = () => {
  return (
    <Transition>
      <div className="flex flex-col max-w-screen max-h-[100vh] h-screen w-screen bg-black overflow-y-hidden relative items-center justify-center py-[5vh] overflow-hidden">
        <div className="circle absolute  right-0 bottom-0" />
        <div className="circle -bottom-1/2 -right-1/2 absolute" />
        <div className="circle -bottom-1/2 left-0 absolute" />
        <div className="flex flex-col w-[90vw] h-full items-start relative justify-start  py-[5vh] ">
          <h2 className="text-white text-[4rem] leading-[4rem] font-bold ">
            MEDIA
          </h2>
          <p className="text-white text-sm">
            {
              " Reach out to us for any collorations or queries. We are always here to help you."
            }
          </p>
        </div>
      </div>
    </Transition>
  );
};

export default Media;
