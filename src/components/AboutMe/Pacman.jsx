import "./Pacman.css";
import React, { useState } from "react";

const Pacman = () => {
  const [selectedDot, setSelectedDot] = useState("dot-2");
  const handleDotChange = (event) => {
    setSelectedDot(event.target.value);
  };
  return (
    // <div className="pagination">
    //   <input
    //     id="dot-1"
    //     value="dot-1"
    //     type="radio"
    //     name="dots"
    //     checked={selectedOption === "dot-1"}
    //     onChange={handleOptionChange}
    //   />
    //   <label htmlFor="dot-1"></label>
    //   <input
    //     id="dot-2"
    //     value="dot-2"
    //     type="radio"
    //     name="dots"
    //     checked={selectedOption === "dot-2"}
    //     onChange={handleOptionChange}
    //   />
    //   <label htmlFor="dot-2"></label>
    //   <input
    //     id="dot-3"
    //     value="dot-3"
    //     type="radio"
    //     name="dots"
    //     checked={selectedOption === "dot-2"}
    //     onChange={handleOptionChange}
    //     defaultChecked
    //   />
    //   <label htmlFor="dot-3"></label>
    //   <input
    //     id="dot-4"
    //     value="dot-4"
    //     type="radio"
    //     name="dots"
    //     checked={selectedOption === "dot-4"}
    //     onChange={handleOptionChange}
    //   />
    //   <label htmlFor="dot-4"></label>
    //   <input
    //     id="dot-5"
    //     value="dot-5"
    //     type="radio"
    //     name="dots"
    //     checked={selectedOption === "dot-5"}
    //     onChange={handleOptionChange}
    //   />
    //   <label htmlFor="dot-5"></label>
    //   <input
    //     id="dot-6"
    //     value="dot-6"
    //     type="radio"
    //     name="dots"
    //     checked={selectedOption === "dot-6"}
    //     onChange={handleOptionChange}
    //   />
    //   <label htmlFor="dot-6"></label>
    //   <input
    //     id="dot-7"
    //     value="dot-7"
    //     type="radio"
    //     name="dots"
    //     checked={selectedOption === "dot-7"}
    //     onChange={handleOptionChange}
    //   />
    //   <label htmlFor="dot-7"></label>
    //   <input
    //     id="dot-8"
    //     value="dot-8"
    //     type="radio"
    //     name="dots"
    //     checked={selectedOption === "dot-8"}
    //     onChange={handleOptionChange}
    //   />
    //   <label htmlFor="dot-8"></label>
    // </div>
    <div className="pagination">
      {Array.from({ length: 8 }, (_, index) => {
        const dotId = `dot-${index + 1}`;
        return (
          <div key={dotId} className="dot-container">
            <input
              id={dotId}
              type="radio"
              name="dots"
              checked={selectedDot === dotId}
              onChange={handleDotChange}
            />
            <label htmlFor={dotId}></label>
          </div>
        );
      })}
      <div
        className="pacman"
        style={{
          transform: `translateX(calc(var(--ddim) + var(--rdim) * ${
            selectedDot.split("-")[1] - 1
          }))`,
        }}
      ></div>
    </div>
  );
};
export default Pacman;
