"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  alfa,
  abril,
  dancing,
  orbitron,
  jacquard,
  shadows,
} from "@/app/layout";

const title = "DOLE'S MUSIC";

let fonts = [alfa, abril, dancing, orbitron, jacquard, shadows];

const Transition = ({ children }) => {
  const [showContent, setShowContent] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 2000);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return prevIndex === 5 ? 0 : prevIndex + 1;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {showContent ? children : <div></div>}
      {showContent ? null : (
        <motion.div
          style={{
            zIndex: 2000,
            height: "100vh",
          }}
        >
          <motion.div
            className="slide-in w-full h-full bg-black fixed top-0 left-0 z-50"
            animate={{ y: ["100vh", 0, 0, "-100vh"] }}
            transition={{
              duration: 2,
              times: [0, 0.3, 0.7, 1],
              ease: [0.6, 1, 0.2, 1],
            }}
          >
            <div className="flex flex-col w-full h-full bg-black justify-center items-center">
              <motion.div className="overflow-hidden relative  ">
                <h1
                  className={` text-[2.5rem] lg:text-[5rem] text-white ${fonts[currentIndex].className}`}
                >
                  {title}
                </h1>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Transition;
