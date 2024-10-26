"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuBuilding } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useRouter } from "next/router";

let footerItemsClass =
  "text-base lg:text-sm hover:underline text-quirkyReddishOrange/80";

const navbarItems = [
  {
    title: "Why Liquid Salt ?",
    link: "/",
  },
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "R&D",
    link: "/research",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
];

const webItems = [
  {
    title: "Terms & Conditions",
    link: "/terms",
  },
  {
    title: "Privacy Policy",
    link: "/privacy",
  },
  {
    title: "Disclaimer",
    link: "/disclaimer",
  },
  {
    title: "FAQ",
    link: "/faq",
  },
];

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className=" max-w-screen bg-black">
        <div className="border-t-[1px] border-[#c7c7c7]/30 mt-6 py-4 flex flex-col-reverse items-center  lg:flex-row lg:justify-between">
          <div className="w-3/12" />
          <p className="text-center text-sm text-quirkyReddishOrange">
            &copy; {new Date().getFullYear()}{" "}
            {"Dole's Music. All rights reserved."}
          </p>
          <div className="flex flex-row text-sm justify-center w-full lg:w-3/12 mb-4 lg:mb-0 text-quirkyReddishOrange"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
