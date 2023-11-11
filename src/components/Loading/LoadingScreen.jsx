import "./LoadingScreen.css";
import { TypeAnimation } from "react-type-animation";

const LoadingScreen = () => {
  return (
    <div className="hero">
      <div className="typing">
        <TypeAnimation
          sequence={[
            "Loading...", // Types 'One'
            8000, // Waits 1s
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          className="ArcadeTitle"
        />
      </div>
    </div>
  );
};
export default LoadingScreen;
