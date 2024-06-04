// src/components/GameBoard01/GameBoard01.jsx
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { setEquationFromHistory } from "../../features/game/gameSlice";
import "./GameBoard01.css";

export default function GameBoard01() {
  const history = useSelector((state) => state.game.history);
  const dispatch = useDispatch();

  const handleHistoryClick = (equation, player) => {
    dispatch(setEquationFromHistory({ equation, player }));
  };

  return (
    <>
      <Container>
        <Box className="game-board-container">
          <Grid container style={{ height: "100%" }}>
            <Grid item xs={5}>
              <List>
                {history
                  .filter((entry) => entry.player === 0)
                  .map((entry, index) => (
                    <ListItem
                      button
                      key={index}
                      onClick={() =>
                        handleHistoryClick(entry.equation, entry.player)
                      }
                    >
                      <ListItemText
                        primary={`${entry.equation} = ${entry.score}`}
                      />
                    </ListItem>
                  ))}
              </List>
            </Grid>
            <Grid item xs={2} className="board-middle"></Grid>
            <Grid item xs={5}>
              <List>
                {history
                  .filter((entry) => entry.player === 1)
                  .map((entry, index) => (
                    <ListItem
                      button
                      key={index}
                      onClick={() =>
                        handleHistoryClick(entry.equation, entry.player)
                      }
                    >
                      <ListItemText
                        primary={`${entry.equation} = ${entry.score}`}
                      />
                    </ListItem>
                  ))}
              </List>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
