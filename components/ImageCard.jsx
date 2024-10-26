import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ImageCard = ({ idx, imageUrl }) => {
  return (
    <a key={idx} href="/media">
      <motion.div
        className=" w-[20vh] h-[20vh] lg:w-[30vh] lg:h-[30vh] relative"
        whileHover={{ scale: 1.1 }}
      >
        <Image
          src={process.env.NEXT_PUBLIC_API_URL + imageUrl}
          layout="fill"
          loading={"lazy"}
          alt={`gallery dolls${idx}`}
          objectFit="cover"
        />
      </motion.div>
    </a>
  );
};

export default ImageCard;
