import "./Header.css";
import { Icon } from "@iconify/react";
import React, { useState, useEffect } from "react";

const Subheader = ({ selectView, setView }) => {
  function handleClick(view) {
    setView(view);
  }
  return (
    <div className="subHeaderContainer">
      <Icon
        icon="pixelarticons:arrow-left-box"
        onClick={() => handleClick("HOME")}
        className="element"
      />
    </div>
  );
};
export default Subheader;
