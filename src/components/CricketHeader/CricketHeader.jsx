import { Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";

export default function CricketHeader() {
  const players = useSelector((state) => state.cricket.players);

  console.log(players);

  return (
    <>
      <Container>
        <Grid container>
          <div className="header-names-container">
            <Grid item xs={5} className="header-home-name">
              Home
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={5} className="header-away-name">
              Away
            </Grid>
          </div>
          <div className="header-scores-container">
            <Grid item xs={5} className="header-scores">
              {players[0].score}
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={5} className="header-scores">
              {players[1].score}
            </Grid>
          </div>
        </Grid>
      </Container>
    </>
  );
}
