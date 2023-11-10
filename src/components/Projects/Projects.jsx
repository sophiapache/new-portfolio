import "./Projects.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

const projects = [
  {
    id: 3721,
    image: "imgs/arcadeimg.png",
    title: "PROJECT ONE",
    description: "one",
    tech: "tech one",
  },
  {
    id: 5498,
    image: "imgs/arcadeimg.png",
    title: "PROJECT TWO",
    description: "two",
    tech: "tech two",
  },
  {
    id: 1867,
    image: "imgs/arcadeimg.png",
    title: "PROJECT THREE",
    description: "three",
    tech: "tech three",
  },
  {
    id: 9374,
    image: "imgs/arcadeimg.png",
    title: "PROJECT FOUR",
    description: "four",
    tech: "tech four",
  },
  {
    id: 6025,
    image: "imgs/arcadeimg.png",
    title: "PROJECT FIVE",
    description: "five",
    tech: "tech five",
  },
  {
    id: 8143,
    image: "imgs/arcadeimg.png",
    title: "PROJECT SIX",
    description: "six",
    tech: "tech six",
  },
];

const Projects = () => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {projects.map((project) => (
        <div key={project.id}>
          <Grid
            item
            xs={2}
            style={{
              backgroundImage: `url(${project.image})`,
              height: "250px",
              width: "450px",
              backgroundSize: "cover",
              padding: "75px 150px 50px",
              fontFamily: "'Press Start 2P', sans-serif",
              color: "white",
            }}
          >
            {project.title}
            <p> {project.description}</p>
            <p> {project.tech}</p>
          </Grid>
        </div>
      ))}
    </Grid>
  );
};

export default Projects;
