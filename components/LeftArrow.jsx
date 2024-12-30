import React from "react";
import { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <div
      onClick={() => scrollPrev()}
      style={{ cursor: "pointer", marginRight: "10px" }}
    >
      ⬅️
    </div>
  );
};

export default LeftArrow;
