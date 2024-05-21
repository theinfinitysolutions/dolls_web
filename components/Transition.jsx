"use client";
import { motion } from "framer-motion";

const title = "DOLE'S MUSIC";

const Transition = ({ children }) => {
  return (
    <main className="min-h-screen w-full flex">
      {children}
      <motion.div
        style={{
          zIndex: 1000,
        }}
      >
        <motion.div
          className="slide-in "
          initial={{ scaleY: 1 }}
          animate={{ scaleY: [0, 1, 1, 0] }}
          exit={{ scaleY: 0 }}
          transition={{
            duration: 1,

            times: [0, 0.2, 0.7, 1],
          }}
        >
          <div className="flex flex-col w-full h-full bg-black justify-center items-center">
            <motion.div
              className="overflow-hidden "
              initial={{ opacity: 0 }}
              animate={{ opacity: [1, 0.6, 1, 0.6] }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1,
                ease: [0.6, 1, 0.2, 1],
                repeat: Infinity,
              }}
            >
              <h1 className="text-[4rem] text-white flex-row flex-nowrap">
                {title.split("").map((item, index) => (
                  <span
                    className=" animate-slideUp"
                    style={{ animationDelay: `${index + 1}00 !important` }}
                  >
                    {item}
                  </span>
                ))}
              </h1>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Transition;
