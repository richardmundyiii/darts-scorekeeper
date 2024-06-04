import { Container, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  enterScore,
  specialEnterScore,
  resetGame,
} from "../../features/game/gameSlice";
import { evaluate } from "mathjs";
import KeyboardComponent from "../KeyboardComponent/KeyboardComponent";
import GameHeader from "../GameHeader/GameHeader";
import GameBoard01 from "../GameBoard01/GameBoard01";

export default function Game01() {
  const dispatch = useDispatch();
  const gameOver = useSelector((state) => state.game.gameOver);

  const handleEnter = (equation) => {
    try {
      const score = evaluate(equation.replace(/X/g, "*"));
      dispatch(enterScore(score));
    } catch (error) {}
  };

  const handleSpecialEnter = (score) => {
    dispatch(specialEnterScore(score));
  };

  const handleNewGame = () => {
    dispatch(resetGame());
  };

  return (
    <>
      <Container sx={{ mt: 1, height: "100vh" }}>
        <GameHeader />
        <GameBoard01 />
        <KeyboardComponent
          onEnter={handleEnter}
          onSpecialEnter={handleSpecialEnter}
        />
        {/* <Button variant="contained" onClick={handleNewGame}>
          New Game
        </Button> */}
      </Container>
    </>
  );
}
