import "./Sections.css";
import { Icon } from "@iconify/react";
import React, { useState, useEffect } from "react";

const Nav = ({ selectCarousel, setCarousel, handleNav }) => {
  return (
    <div className="nav">
      <div className="navIcons">
        <Icon
          icon="pixelarticons:arrow-left-box"
          onClick={() => handleNav("prev")}
          className="navIcons"
        />
      </div>
      <div className="navIcons">
        <Icon
          icon="pixelarticons:arrow-right-box"
          onClick={() => handleNav("next")}
          className="navIcons"
        />
      </div>
    </div>
  );
};
export default Nav;
