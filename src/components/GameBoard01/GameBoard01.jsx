import { Box, Container, Grid } from "@mui/material";
import "./GameBoard01.css";

export default function GameBoard01() {
  return (
    <>
      <Container>
        <Box className="game-board-container">
          <Grid container style={{ height: "100%" }}>
            <Grid item xs={5}>
              Numbers
            </Grid>
            <Grid item xs={2} className="board-middle"></Grid>
            <Grid item xs={5}>
              Numbers
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
