import "./Sections.css";
import React, { useState } from "react";
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

const Sections = () => {
  const [selectView, setView] = useState(null);

  function handleClick(view) {
    console.log(view);
    setView(view !== selectView ? view : null);
    console.log(selectView);
  }

  return (
    <div className="sections">
      {sections.map((section) => (
        <div
          key={section.id}
          onClick={() => handleClick(section.view)}
          className={section.view === selectView ? "selected" : ""}
        >
          {section.view}
        </div>
      ))}
    </div>
  );
};
export default Sections;
