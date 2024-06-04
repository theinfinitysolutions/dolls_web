import React, { useState, useEffect } from "react";
import { IoIosMusicalNotes } from "react-icons/io";
import { GiMusicalNotes } from "react-icons/gi";
import { PiMusicNoteFill } from "react-icons/pi";

let cursorClass = "text-2xl text-white";

const RandomCursor = () => {
  const icons = [
    <IoIosMusicalNotes className={cursorClass} />,
    <GiMusicalNotes className={cursorClass} />,
    <PiMusicNoteFill className={cursorClass} />,
  ];
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 300);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return <div>{icons[currentIconIndex]}</div>;
};

export default RandomCursor;
