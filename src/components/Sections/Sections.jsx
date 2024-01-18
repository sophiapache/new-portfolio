import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import Nav from "./Nav";

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
    image: "imgs/spring.png",
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

  const transitions = useTransition(selectIndex, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });
  return (
    <div className="sections">
      {transitions((style, i) => (
        <animated.div
          key={sections[i].id}
          className="sectionsBox"
          style={{
            ...style,
          }}
        >
          <img
            src={sections[i].image}
            alt={sections[i].view}
            onClick={() => handleClick(sections[i].view)}
          />
          <p>{sections[i].view}</p>
          <p>
            <Nav
              handleNav={handleNav}
              setCarousel={setCarousel}
              selectCarousel={selectCarousel}
            />
          </p>
        </animated.div>
      ))}
    </div>
  );
};

export default Sections;
