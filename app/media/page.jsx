"use client";
import React, { useEffect } from "react";
import Transition from "@/components/Transition";
import RevealOnScroll from "@/components/RevealOnScroll";
import { alfa } from "../layout";
import { motion, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import useMeasure from "react-use-measure";
import useStore from "@/utils/store";

const images = [
  "/dolls1.jpeg",
  "/dolls2.jpeg",
  "/dolls3.jpeg",
  "/dolls4.jpeg",
  "/dolls5.jpeg",
];

const FAST_DURATION = 10;
const SLOW_DURATION = 40;

const Media = () => {
  const xTranslation = useMotionValue(0);

  let [ref, { width }] = useMeasure();
  const [mustFinish, setMustFinish] = useState(false);
  const [duration, setDuration] = useState(0.5);
  const [rerender, setRerender] = useState(false);
  const { currentPointer, setCurrentPointer } = useStore();

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width]);

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

        <div
          className={
            "  max-h-[70vh] min-h-[70vh] h-[70vh] w-screen overflow-hidden"
          }
        >
          <div className="flex flex-col w-full h-full items-start relative justify-start bg-black py-[5vh] ">
            <div className="circle absolute  right-0 bottom-0" />
            <div className="circle -bottom-1/2 -right-1/2 absolute" />

            <motion.div
              className="h-[35vh] mt-[5vh] left-0 flex gap-4"
              style={{ x: xTranslation }}
              ref={ref}
              onHoverStart={() => {
                setMustFinish(true);
                setDuration(SLOW_DURATION);
              }}
              onHoverEnd={() => {
                setMustFinish(true);
                setDuration(FAST_DURATION);
              }}
            >
              {[...images, ...images].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="w-[30vh] h-[30vh] relative"
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    onMouseEnter={() => {
                      setCurrentPointer("i");
                    }}
                    onMouseLeave={() => {
                      setCurrentPointer("");
                    }}
                    src={item}
                    layout="fill"
                    objectFit="cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default Media;
