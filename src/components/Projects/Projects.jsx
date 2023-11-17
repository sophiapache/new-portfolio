import "./Projects.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import React, { useState, useEffect } from "react";
const projects = [
  {
    id: 3721,
    image: "imgs/portfolio.png",
    title: "PORTFOLIO",
    description: "Original portfolio.",
    tech: "JavaScript, HTML, CSS",
    code: "",
    demo: "",
  },
  {
    id: 5498,
    image: "imgs/pokemon.png",
    title: "POKEMON GAME",
    description:
      "An interactive top-down pokemon game, tutorial by Chris Courses.",
    tech: "JavaScript, Canvas, Tiled, HTML, CSS",
    code: "https://github.com/sophiapache/pokemon-game",
    demo: "https://sophiapache.github.io/pokemon-game/",
  },
  {
    id: 1867,
    image: "imgs/atomic.png",
    title: "ATOMIC ACADEMY",
    description:
      "An educational science website for users looking to acquire knowledge in elementary biology, chemistry, and physics.",
    tech: "Vue.js, Express.js, MongoDB",
    code: "https://github.com/sophiapache/project3",
    demo: "https://atomic-academy.onrender.com/",
  },
  {
    id: 9374,
    image: "imgs/trx.png",
    title: "TRX",
    description:
      "A prescription tracking website, where a user can log current prescriptions and their histories.",
    tech: "React.js, Firebase",
    code: "https://github.com/sophiapache/project-02-TRx",
    demo: "https://trx-auth.web.app/",
  },
  {
    id: 6025,
    image: "imgs/attendr.png",
    title: "ATTENDR",
    description:
      "This social media website updates with current electronic music events for users to share",
    tech: "Ruby on Rails, Heroku",
    code: "https://github.com/sophiapache/project1",
    demo: "http://attendr-app.herokuapp.com/",
  },
  {
    id: 8143,
    image: "imgs/tictactoe.png",
    title: "TIC-TAC-TOE",
    description:
      "This is a classic game of childhood favorite game, Tic-Tac-Toe, with a spooky twist.",
    tech: "JavaScript, HTML, CSS",
    code: "https://github.com/sophiapache/project0",
    demo: "https://sophiapache.github.io/project0/",
  },
];

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Grid
      container
      // spacing={4}
      rowSpacing={4}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      justifyContent="center"
      alignItems="center"
    >
      {projects.map((project) => (
        <div key={project.id} style={{ margin: "20px" }}>
          <Grid
            item
            xs={4}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              position: "relative",
              backgroundImage: `url(${project.image})`,
              height: "250px",
              width: "370px",
              backgroundSize: "cover",
              // padding: "200px 200px 50px",
              fontFamily: "'Press Start 2P', sans-serif",
              color: "white",
              borderRadius: "60px",
              overflow: "hidden",
              transition: "0.3s ease-in-out", // Add transition for smooth effect
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(33, 33, 33, 0.8)", // Dark grey color
                opacity: isHovered ? 1 : 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              <span
                style={{
                  backgroundColor: "rgba(0,0,0,0)",
                  marginBottom: "15px",
                  width: "20vw",
                }}
              >
                {project.title}
              </span>
              <span
                style={{
                  backgroundColor: "rgba(0,0,0,0)",
                  fontSize: "14px",
                  marginBottom: "15px",
                  fontFamily: "'Play', sans-serif",
                  width: "20vw",
                }}
              >
                {project.description}
              </span>
              <span
                style={{
                  backgroundColor: "rgba(0,0,0,0)",
                  fontSize: "18px",
                  fontFamily: "'Play', sans-serif",
                  width: "20vw",
                  marginBottom: "15px",
                }}
              >
                {project.tech}
              </span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "rgba(0,0,0,0)",
                }}
              >
                <a href={project.code} className="button">
                  CODE
                </a>
                <a href={project.demo} className="button">
                  DEMO
                </a>
              </div>
            </div>
          </Grid>
        </div>
      ))}
    </Grid>
  );
};

export default Projects;
