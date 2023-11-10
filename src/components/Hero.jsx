import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import LoadingScreen from "../components/Loading/LoadingScreen";
import Sections from "../components/Sections/Sections";
import AboutMe from "../components/AboutMe/AboutMe";
import Work from "../components/Work/Work";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Refs from "../components/Refs/Refs";
import Hobbies from "../components/Hobbies/Hobbies";
import Subheader from "../components/header/Subheader";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [selectView, setView] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, []);

  if (isLoading) {
    return (
      <div className="heroDiv">
        <LoadingScreen />
      </div>
    );
  } else if (selectView === "ABOUT ME") {
    return (
      <div className="aboutMeContainer">
        <Subheader selectView={selectView} setView={setView} />;
        <AboutMe />;
      </div>
    );
  } else if (selectView === "WORK") {
    return (
      <div className="WorkContainer">
        <Subheader selectView={selectView} setView={setView} />;
        <Work />;
      </div>
    );
  } else if (selectView === "SKILLS") {
    return (
      <div className="skillsContainer">
        <Subheader selectView={selectView} setView={setView} />;
        <Skills />;
      </div>
    );
  } else if (selectView === "PROJECTS") {
    return (
      <div className="projectsContainer">
        <Subheader selectView={selectView} setView={setView} />;
        <Projects />;
      </div>
    );
  } else if (selectView === "REFS") {
    return (
      <div className="refsContainer">
        <Subheader selectView={selectView} setView={setView} />;
        <Refs />;
      </div>
    );
  } else if (selectView === "HOBBIES") {
    return (
      <div className="hobbiesContainer">
        <Subheader selectView={selectView} setView={setView} />;
        <Hobbies />;
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
