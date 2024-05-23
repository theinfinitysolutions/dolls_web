import React from "react";
import useMousePosition from "./useMousePosition";

const Tooltip = ({ text, position, ref }) => {
  const { x, y } = useMousePosition();

  return (
    <div
      style={{
        top: `${y}px`,
        left: `${x}px`,
        zIndex: 100,
      }}
      className="bg-white h-[40vh] w-[40vh] absolute"
      ref={ref}
    >
      <strong className="text-black tetx-xl">Song:{currentSon}</strong>
      <br />
      <strong className="text-black tetx-xl">Artist:</strong>
    </div>
  );
};

export default Tooltip;
