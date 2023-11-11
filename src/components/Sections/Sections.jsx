import "./Sections.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Nav";
import { Icon } from "@iconify/react";

const sections = [
  {
    id: 6589,
    view: "ABOUT ME",
    image: "imgs/fall.png",
  },
  {
    id: 9899,
    view: "WORK",
    image: "imgs/spring.png",
  },
  {
    id: 3551,
    view: "SKILLS",
    image: "imgs/summer.png",
  },
  {
    id: 7608,
    view: "PROJECTS",
    image: "imgs/winter.png",
  },
  {
    id: 3773,
    view: "REFS",
    image: "imgs/fall.png",
  },
  {
    id: 7406,
    view: "HOBBIES",
    image: "imgs/fall.png",
  },
];

const Sections = ({ selectView, setView }) => {
  const [selectCarousel, setCarousel] = useState("ABOUT ME");
  const [selectIndex, setIndex] = useState(0);

  useEffect(() => {
    const fetchIndex = async () => {
      try {
        const index = sections.findIndex(
          (section) => section.view === selectCarousel
        );
        console.log(index);
        setIndex(index);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchIndex();
  }, [setIndex, selectCarousel]);

  function handleClick(view) {
    setView(view);
  }

  function handleNav(direction) {
    if (direction === "next") {
      setIndex((selectIndex) => (selectIndex + 1) % sections.length);
    } else if (direction === "prev") {
      setIndex(
        (selectIndex) => (selectIndex - 1 + sections.length) % sections.length
      );
    }
  }

  return (
    <div className="sections">
      <div key={sections[selectIndex].id} className="sectionsBox">
        <img
          src={sections[selectIndex].image}
          onClick={() => handleClick(sections[selectIndex].view)}
        />
        <p>{sections[selectIndex].view}</p>
        <p>
          <Nav
            handleNav={handleNav}
            setCarousel={setCarousel}
            selectCarousel={selectCarousel}
          />
        </p>
      </div>
    </div>
  );
};
export default Sections;
