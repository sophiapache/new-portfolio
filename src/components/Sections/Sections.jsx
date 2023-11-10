import "./Sections.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutMe from "../AboutMe/AboutMe";

const sections = [
  {
    id: 6589,
    view: "ABOUT ME",
  },
  {
    id: 9899,
    view: "WORK",
  },
  {
    id: 3551,
    view: "SKILLS",
  },
  {
    id: 7608,
    view: "PROJECTS",
  },
  {
    id: 3773,
    view: "REFS",
  },
  {
    id: 7406,
    view: "HOBBIES",
  },
];

const Sections = ({ selectView, setView }) => {
  // const [selectView, setView] = useState("");

  useEffect(() => {
    console.log(selectView);
  }, [selectView]);

  function handleClick(view) {
    setView(view);
  }

  return (
    <div className="sections">
      {sections.map((section) => (
        <div
          key={section.id}
          onClick={() => handleClick(section.view)}
          className={section.view == selectView ? "selected" : ""}
        >
          {section.view}
        </div>
      ))}
    </div>
  );
};
export default Sections;
