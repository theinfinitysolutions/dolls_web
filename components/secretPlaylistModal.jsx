import React, { useState, useEffect } from "react";
import useStore from "@/utils/store";
import Image from "next/image";

export default function JoinUsModal() {
  const [open, setOpen] = useState(false);
  const { showModal, setShowModal } = useStore();

  useEffect(() => {
    console.log("showmodal", showModal);
    setOpen(showModal);
  }, [showModal]);

  return (
    <div>
      {open ? (
        <div className=" fixed left-0 top-0 z-50 w-screen h-screen bg-black/80 flex flex-col items-center justify-center ">
          <div className="h-[50vh] w-[60vw] bg-black flex flex-row">
            <div className="w-1/2 h-full relative">
              <Image src="/dolls3.jpeg" layout="fill" className=" opacity-50" />
            </div>
            <div className="w-1/2 h-full relative flex flex-col p-8 justify-center items-start">
              <h2 className="text-4xl">Join Us</h2>
              <p className="text-sm">
                Join our growing community and get access to exclusive music
                before everyone
              </p>
              <form className="mt-8 w-full">
                <input
                  placeholder="Name"
                  className="w-full border-[1px] placeholder:text-[#c7c7c7]/60 bg-black p-2 border-[#ababab]  text-white"
                />
                <input
                  placeholder="Email"
                  className="w-full mt-4 border-[1px] placeholder:text-[#c7c7c7]/60 bg-black p-2 border-[#ababab]  text-white"
                />
              </form>
              <div className="w-full flex flex-row items-center justify-end mt-4">
                <button className="px-3 py-2 bg-red-500 text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
