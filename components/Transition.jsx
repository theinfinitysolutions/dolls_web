"use client";
import { motion } from "framer-motion";

const title = "DOLE'S MUSIC";

const Transition = ({ children }) => {
  return (
    <main className="h-screen w-screen flex">
      {children}
      <motion.div>
        <motion.div
          className="slide-in"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: [0, 1, 1, 0] }}
          exit={{ scaleX: 0 }}
          transition={{
            duration: 3,

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
