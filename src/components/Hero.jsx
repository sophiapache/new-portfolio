import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import Sections from "../components/Sections/Sections";
import AboutMe from "../components/AboutMe/AboutMe";
import Work from "../components/Work/Work";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [selectView, setView] = useState("");

  if (selectView === "ABOUT ME") {
    return (
      <div className="aboutMeContainer">
        <AboutMe />;
      </div>
    );
  } else if (selectView === "WORK") {
    return (
      <div className="WorkContainer">
        <Work />;
      </div>
    );
  } else {
    return (
      <div className="heroDiv">
        <div className="hero" />
        <TypeAnimation
          sequence={[
            "Hello World!", // Types 'One'
            1000, // Waits 1s
            "I am a front-end developer.", // Deletes 'One' and types 'Two'
            2000, // Waits 2s
            // "Two Three", // Types 'Three' without deleting 'Two'
            () => {
              console.log("Sequence completed");
            },
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          className="ArcadeTitle"
        />
        <Sections selectView={selectView} setView={setView} />
      </div>
    );
  }
};
export default Hero;
