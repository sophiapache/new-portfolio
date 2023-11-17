import "./Hobbies.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Icon } from "@iconify/react";

const hobbies = [
  {
    id: 3721,
    icon: "ic:outline-backpack",
    title: "BACKPACKING",
    description:
      "I solo-backpacked for two years, reaching Europe, throughout the Americas, and Australia.",
  },
  {
    id: 5498,
    icon: "iconoir:yoga",
    title: "YOGA",
    description:
      "I have taking yoga classes for six years, dabbling in Aerial yoga, acro yoga, and traditional flows.",
  },
  {
    id: 1867,
    icon: "icon-park-outline:writing-fluently",
    title: "WRITING",
    description:
      "My first poetry piece, Lost Paradise, was published in a literary magazine called Flora Fiction in June 2023!",
  },
  {
    id: 9374,
    icon: "bxs:cat",
    title: "VOLUNTEERING",
    description:
      "I volunteer at a local cat rescue called CJPaws and take care of cats ready to be adopted.",
  },
  {
    id: 6025,
    icon: "ph:guitar",
    title: "BASS GUITAR",
    description:
      "I am self-learning with my Squier bass and using the app Fender Play.",
  },
  {
    id: 8143,
    icon: "ic:baseline-surfing",
    title: "SURFING",
    description:
      "I spent most of my time traveling surfing and find I feel most at peace in the water.",
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
