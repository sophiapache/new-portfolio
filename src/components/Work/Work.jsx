import "./Work.css";
import Divider from "./Divider.jsx";
import CompanyTitle from "./CompanyTitle.jsx";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

const Work = () => {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      style={{
        // height: "50vw",
        width: "80vw",
        // padding: "100px 200px 50px",
        padding: "20px",
        fontFamily: "'Play', sans-serif",
        color: "white",
        lineHeight: "25px",
        fontSize: "20px",
      }}
    >
      <Grid item xs={5}>
        <div className="work">WORK</div>
      </Grid>
      <Grid item xs={2}>
        <div className="divider">
          <Divider />
        </div>
      </Grid>
      <Grid item xs={5}>
        <div className="companyTitleContainer">
          <CompanyTitle />
        </div>
      </Grid>
    </Grid>
  );
};
export default Work;
