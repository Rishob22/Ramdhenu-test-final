import React from "react";
import { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <div
      onClick={() => scrollNext()}
      style={{ cursor: "pointer", marginLeft: "10px" }}
    >
      ➡️
    </div>
  );
};

export default RightArrow;
