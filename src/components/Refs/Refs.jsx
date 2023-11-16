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
          // padding: "100px 200px 50px",
          padding: "50px",
          fontFamily: "'Play', sans-serif",
          color: "white",
          lineHeight: "25px",
        }}
      >
        <Grid item xs={6}>
          "Sophia is one of the most exceptional software developers I’ve had
          the opportunity of working with in my five years in development. We
          worked together for six months and her hard work and initiative
          propelled her and our clients to success. Sophia is a quick learner,
          asking the right questions and not afraid to learn languages or
          methods she’s not familiar with. She consistently took initiative to
          seek out new work and new experiences, developing in legacy code in
          Swift, PHP, and more languages, and was able to pivot efficiently as
          our needs changed. Sophia’s warm personality made working with her an
          absolute joy. I highly recommend her skills, enthusiasm, and heart,
          and firmly believe that she would be a perfect fit in any development
          team."
          <p>
            <span>- Stephanie Wilson, team lead at PK Info</span>
          </p>
        </Grid>
        <Grid item xs={6}>
          "As a partner at PK Information Systems, I had the pleasure of working
          directly with Sophia for the last six months. During this time, she
          consistently showcased an unparalleled commitment to her role, empathy
          towards her coleagues and clients, and an unwavering dedication that
          truly set her apart...In conclusion, I can't recommend Sophia highly
          enough. Any organization would be fortunate to have someone of her
          caliber on their team."
          <p>
            <span>- Justin Ruzinok, owner at PK Info</span>
          </p>
        </Grid>
      </Grid>
    </div>
  );
};
export default Refs;
