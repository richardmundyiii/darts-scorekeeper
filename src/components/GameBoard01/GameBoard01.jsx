// src/components/GameBoard01/GameBoard01.jsx
import { useSelector } from "react-redux";
import { Box, Container, Grid } from "@mui/material";
import "./GameBoard01.css";

export default function GameBoard01() {
  const history = useSelector((state) => state.game.history);

  return (
    <>
      <Container>
        <Box className="game-board-container">
          <Grid container style={{ height: "100%" }}>
            <Grid item xs={5}>
              {history
                .filter((entry) => entry.player === 0)
                .map((entry, index) => (
                  <div key={index}>{entry.score}</div>
                ))}
            </Grid>
            <Grid item xs={2} className="board-middle"></Grid>
            <Grid item xs={5}>
              {history
                .filter((entry) => entry.player === 1)
                .map((entry, index) => (
                  <div key={index}>{entry.score}</div>
                ))}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
