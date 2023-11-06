import "./AboutMe.css";
import Pacman from "./Pacman.jsx";
import Description from "./Description.jsx";

const AboutMe = () => {
  return (
    <div className="aboutMeContainer">
      <div className="aboutme">ABOUT ME</div>
      <div className="pacmanContainer">
        <Pacman />
      </div>
      <div className="description">
        <Description />
      </div>
    </div>
  );
};
export default AboutMe;
