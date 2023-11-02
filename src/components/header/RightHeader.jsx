import "./RightHeader.css";
import { Icon } from "@iconify/react";

const RightHeader = () => {
  return (
    <div className="rightHeader">
      <Icon icon="pixelarticons:mail" className="element" />
      <Icon icon="pixelarticons:downasaur" className="element" />
      <Icon icon="pixelarticons:contact" className="element" />
    </div>
  );
};
export default RightHeader;
