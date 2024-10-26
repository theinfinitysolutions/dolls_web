"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { alfa } from "../layout";
import useStore from "@/utils/store";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Transition from "@/components/Transition";
import ContactUsComponent from "@/components/ContactUsComponent";

const ContactUs = () => {
  return (
    <Transition>
      <div
        id="contact"
        className="flex flex-col max-w-screen h-full w-screen bg-black overflow-y-hidden relative items-center justify-center py-[5vh] overflow-hidden"
      >
        <div className="circle absolute  right-0 bottom-0" />
        <div className="circle -bottom-1/2 -right-1/2 absolute" />
        <div className="circle -bottom-1/2 left-0 absolute" />

        <div className={"  lg:h-full w-screen overflow-hidden"}>
          <ContactUsComponent />
        </div>

        <div className=" w-3/12 flex flex-row justify-center z-20 items-center gap-x-2 my-2 lg:my-8">
          <div className="h-[1px] bg-white w-[45%]  border-white" />
          <p className=" text-xl text-white">OR</p>
          <div className="h-[1px] bg-white w-[45%]  border-white" />
        </div>

        <div className="flex flex-col items-center z-20 w-11/12 lg:w-6/12">
          <p>Reach out to us on our Social media</p>
          <div className=" w-4/12 flex flex-row justify-between mt-4 lg:mt-8">
            <a
              href="https://www.instagram.com/doleshwar_raj/"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer"
            >
              <FaInstagram size={24} color="#fff" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer"
            >
              <FaFacebook size={24} color="#fff" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer"
            >
              <FaTwitter size={24} color="#fff" />
            </a>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default ContactUs;
