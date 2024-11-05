"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/utils/store";
import Link from "next/link";

const navbarItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Music",
    link: "/music",
  },
  {
    title: "Media",
    link: "/media",
  },
  {
    title: "Exclusive",
    link: "/exclusive",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Our Solutions",
    link: "/our-solutions",
  },
];

export default function Sidebar() {
  const router = useRouter();
  const [show, setter] = useState(false);
  const { setShow, sidebar } = useStore();
  const [navbarList, setNavbarList] = useState(navbarItems);

  useEffect(() => {
    console.log("sidebar", sidebar);
    setter(sidebar.show);
  }, [sidebar.show]);

  // Define our base class
  const className =
    "bg-black w-[80vw] md:hidden transition-[margin-right] ease-in-out duration-500 fixed md:static top-0 bottom-0 right-0 z-50";
  // Append class based on state of sidebar visiblity
  const appendClass = show ? " mr-[0]" : " mr-[-80vw] md:mr-0";

  // Clickable menu items
  const MenuItem = ({ icon, name, route }) => {
    // Highlight menu item based on currently displayed route
    const colorClass =
      router.pathname === route
        ? "text-white"
        : "text-white/50 hover:text-white";

    return (
      <Link
        onClick={() => {
          router.push(route);
          setShow({
            show: false,
          });
        }}
        href={route}
        className={`flex flex-row items-baseline gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-black/10 ${colorClass}`}
      >
        <div className="text-white text-xl ">{name}</div>
      </Link>
    );
  };

  // Overlay to prevent clicks in background, also serves as our close button
  const ModalOverlay = () => (
    <div
      className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
      onClick={() => {
        setShow({
          show: false,
        });
      }}
      style={{ zIndex: 100 }}
    />
  );

  return (
    <>
      <div style={{ zIndex: 120 }} className={`${className}${appendClass}`}>
        <div className="text-md px-2 mt-[20px] -mb-2 border-b-2 border-secondaryPurple">
          <p className=" text-primaryText text-lg pl-2">Menu</p>
        </div>
        <div className="flex flex-col mt-2">
          {navbarList.map((item, index) => {
            return <MenuItem key={index} name={item.title} route={item.link} />;
          })}
        </div>
      </div>
      {show ? <ModalOverlay /> : <></>}
    </>
  );
}
