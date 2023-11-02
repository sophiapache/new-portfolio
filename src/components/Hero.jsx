import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import Sections from "../components/Sections/Sections";

const Hero = () => {
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
      <Sections />
    </div>
  );
};
export default Hero;
