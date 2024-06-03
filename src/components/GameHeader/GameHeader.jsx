import { Container, Grid } from "@mui/material";
import "./GameHeader.css";

export default function GameHeader() {
  return (
    <>
      <Container className="game-header-container">
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
              501
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={5} className="header-scores">
              501
            </Grid>
          </div>
        </Grid>
        <hr />
      </Container>
    </>
  );
}
