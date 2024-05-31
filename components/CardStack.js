import React, { useEffect } from "react";
import { motion } from "framer-motion";
import move from "lodash-move";
import Image from "next/image";

const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

export const CardStack = () => {
  const [cards, setCards] = React.useState([1, 2, 3, 4]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCards(move(cards, 0, cards.length - 1));
    }, 2000);

    return () => clearTimeout(timeout);
  }, [cards]);

  //   const moveToEnd = (from) => {
  //     setCards(move(cards, from, cards.length - 1));
  //   };

  return (
    <div style={wrapperStyle}>
      <ul style={cardWrapStyle}>
        {cards.map((color, index) => {
          const canDrag = index === 0;

          return (
            <motion.li
              key={color}
              className="shadow-[0_8px_3200px_1px_rgba(256,256,256,0.1)]"
              style={{
                ...cardStyle,
                backgroundColor: color,
                cursor: canDrag ? "grab" : "auto",
              }}
              animate={{
                left: index * CARD_OFFSET * 4,
                top: index * CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: 4 - index,
              }}
              drag={canDrag ? "y" : false}
              dragConstraints={{
                top: 0,
                bottom: 0,
              }}
              onDragEnd={() => moveToEnd(index)}
            >
              <div className="relative h-full w-full">
                <Image
                  onMouseEnter={() => {
                    setCurrentPointer("i");
                  }}
                  onMouseLeave={() => {
                    setCurrentPointer("");
                  }}
                  src={`/dolls${color}.jpeg`}
                  className=""
                  layout="fill"
                />
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};
const wrapperStyle = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40vh",
};

const cardWrapStyle = {
  position: "relative",
  width: "350px",
  height: "220px",
};

const cardStyle = {
  position: "absolute",
  width: "30vw",
  height: "70vh",
  borderRadius: "8px",
  transformOrigin: "top center",
  listStyle: "none",
};
