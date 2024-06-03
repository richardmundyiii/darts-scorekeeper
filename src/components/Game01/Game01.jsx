import { Container } from "@mui/material";
import KeyboardComponent from "../KeyboardComponent/KeyboardComponent";
import GameHeader from "../GameHeader/GameHeader";
import GameBoard01 from "../GameBoard01/GameBoard01";

export default function Game01() {
  return (
    <>
      <Container sx={{ height: "100vh" }}>
        <GameHeader />
        <GameBoard01 />
        <KeyboardComponent />
      </Container>
    </>
  );
}
