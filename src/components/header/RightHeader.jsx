import "./RightHeader.css";
import { Icon } from "@iconify/react";

const RightHeader = () => {
  return (
    <div className="rightHeader">
      <a
        href="mailto: sophpache@gmail.com"
        style={{ color: "white", textDecoration: "none" }}
      >
        <Icon icon="pixelarticons:mail" className="element" />
      </a>
      <a
        href="https://www.github.com/sophiapache/"
        style={{ color: "white", textDecoration: "none" }}
      >
        <Icon icon="pixelarticons:downasaur" className="element" />
      </a>
      <a
        href="https://www.linkedin.com/in/sophia-pache/"
        style={{ color: "white", textDecoration: "none" }}
      >
        <Icon icon="pixelarticons:contact" className="element" />
      </a>
    </div>
  );
};
export default RightHeader;
