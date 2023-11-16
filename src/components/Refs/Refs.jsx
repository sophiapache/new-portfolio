import "./Refs.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
const Refs = () => {
  return (
    <div className="refsContainer">
      <div className="refsTitle">REFS</div>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        style={{
          height: "50vw",
          width: "100vw",
          backgroundSize: "cover",
          // padding: "100px 200px 50px",
          padding: "50px",
          fontFamily: "'Press Start 2P', sans-serif",
          color: "white",
        }}
      >
        <Grid item xs={6}>
          hello
          <p>
            <span>- Person</span>
          </p>
        </Grid>
        <Grid item xs={6}>
          hello
          <p>
            <span>- Person</span>
          </p>
        </Grid>
      </Grid>
    </div>
  );
};
export default Refs;
