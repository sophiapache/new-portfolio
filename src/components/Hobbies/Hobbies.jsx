import "./Hobbies.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Icon } from "@iconify/react";

const hobbies = [
  {
    id: 3721,
    icon: "ic:outline-backpack",
    title: "BACKPACKING",
    description: "one",
  },
  {
    id: 5498,
    icon: "iconoir:yoga",
    title: "YOGA",
    description: "two",
  },
  {
    id: 1867,
    icon: "icon-park-outline:writing-fluently",
    title: "WRITING",
    description: "three",
  },
  {
    id: 9374,
    icon: "bxs:cat",
    title: "VOLUNTEERING",
    description: "four",
  },
  {
    id: 6025,
    icon: "ph:guitar",
    title: "BASS GUITAR",
    description: "five",
  },
  {
    id: 8143,
    icon: "ic:baseline-surfing",
    title: "SURFING",
    description: "six",
  },
];
const Hobbies = () => {
  return (
    <div className="hobbiesContainer">
      <div className="hobbiesTitle">HOBBIES</div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {hobbies.map((hobby) => (
          <Grid
            item
            xs={2}
            style={{
              height: "250px",
              width: "450px",
              padding: "20px 110px 50px",
              fontFamily: "'Press Start 2P', sans-serif",
              color: "white",
            }}
          >
            <Icon icon={hobby.icon} className="element" />
            <p>{hobby.title}</p>
            <p>
              <span style={{ fontFamily: "Play" }}>{hobby.description}</span>
            </p>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default Hobbies;
