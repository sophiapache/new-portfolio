import "./AboutMe.css";
import Pacman from "./Pacman.jsx";
import Description from "./Description.jsx";
import Grid from "@mui/material/Unstable_Grid2";
const AboutMe = () => {
  return (
    <div className="aboutMeContainer">
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        style={{
          height: "50vw",
          // padding: "100px 200px 50px",

          fontFamily: "'Play', sans-serif",
          color: "white",
          lineHeight: "25px",
        }}
      >
        <Grid item xs={6}>
          <div className="aboutme">ABOUT ME</div>
          <div className="pacmanContainer">
            <Pacman />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="description">
            <Description />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default AboutMe;
