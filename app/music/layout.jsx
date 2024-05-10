import Transition from "@/components/Transition";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <Transition>{children}</Transition>
    </div>
  );
};

export default layout;
