// src/components/KeyboardComponent/KeyboardComponent.jsx
import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Container, Grid } from "@mui/material";
import "./KeyboardComponent.css";

export default function KeyboardComponent({ onEnter, onSpecialEnter }) {
  const [equation, setEquation] = useState("");
  const [missButton, setMissButton] = useState(true);
  const [tonButton, setTonButton] = useState(true);
  const gameOver = useSelector((state) => state.game.gameOver);

  const handleNumberClick = (num) => {
    if (!gameOver) {
      setEquation((prev) => prev + num);
      setMissButton(false);
      setTonButton(false);
    }
  };

  const handleDeleteClick = () => {
    if (!gameOver) {
      setEquation((prev) => prev.slice(0, -1));
      if (equation.length <= 1) {
        setMissButton(true);
        setTonButton(true);
      }
    }
  };

  const handleEnterClick = () => {
    if (equation && !gameOver) {
      onEnter(equation);
      setEquation("");
      setMissButton(true);
      setTonButton(true);
    }
  };

  const handleSpecialButtonClick = (value) => {
    if (!gameOver) {
      onSpecialEnter(value);
    }
  };

  const handleMissClick = () => {
    if (!gameOver) {
      onSpecialEnter(0);
    }
  };

  const handleTon80Click = () => {
    if (!gameOver) {
      onSpecialEnter(180);
    }
  };

  const handleMultiplyClick = () => {
    if (!gameOver) {
      setEquation((prev) => prev + " X ");
      setMissButton(false);
      setTonButton(false);
    }
  };

  const handleAddClick = () => {
    if (!gameOver) {
      setEquation((prev) => prev + " + ");
      setMissButton(false);
      setTonButton(false);
    }
  };

  return (
    <>
      <Container>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="keyboard-container"
        >
          <Grid item xs={3}>
            <Button
              variant="contained"
              className="keyboard-delete"
              onClick={handleDeleteClick}
              disabled={gameOver}
            >
              DEL
            </Button>
          </Grid>
          <Grid item xs={6} className="equation-container">
            {equation}
          </Grid>
          <Grid item xs={3}>
            {missButton ? (
              <Button
                variant="contained"
                className="keyboard-missed"
                onClick={handleMissClick}
                disabled={gameOver}
              >
                Miss
              </Button>
            ) : (
              <Button
                variant="contained"
                className="keyboard-enter"
                onClick={handleEnterClick}
                disabled={gameOver}
              >
                Enter
              </Button>
            )}
          </Grid>
          <Grid item xs={1.5}>
            <button
              className="keyboard-hotkey-button"
              onClick={() => handleSpecialButtonClick(26)}
              disabled={gameOver}
            >
              26
            </button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              className="keyboard-number"
              onClick={() => handleNumberClick(1)}
              disabled={gameOver}
            >
              1
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              className="keyboard-number"
              onClick={() => handleNumberClick(2)}
              disabled={gameOver}
            >
              2
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              className="keyboard-number"
              onClick={() => handleNumberClick(3)}
              disabled={gameOver}
            >
              3
            </Button>
          </Grid>
          <Grid item xs={1.5}>
            <button
              className="keyboard-hotkey-button"
              onClick={() => handleSpecialButtonClick(57)}
              disabled={gameOver}
            >
              57
            </button>
          </Grid>
          <Grid item xs={1.5}>
            <button
              className="keyboard-hotkey-button"
              onClick={() => handleSpecialButtonClick(29)}
              disabled={gameOver}
            >
              29
            </button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              className="keyboard-number"
              onClick={() => handleNumberClick(4)}
              disabled={gameOver}
            >
              4
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              className="keyboard-number"
              onClick={() => handleNumberClick(5)}
              disabled={gameOver}
            >
              5
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              className="keyboard-number"
              onClick={() => handleNumberClick(6)}
              disabled={gameOver}
            >
              6
            </Button>
          </Grid>
          <Grid item xs={1.5}>
            <button
              className="keyboard-hotkey-button"
              onClick={() => handleSpecialButtonClick(60)}
              disabled={gameOver}
            >
              60
            </button>
          </Grid>
          <Grid item xs={1.5}>
            <button
              className="keyboard-hotkey-button"
              onClick={() => handleSpecialButtonClick(41)}
              disabled={gameOver}
            >
              41
            </button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              className="keyboard-number"
              onClick={() => handleNumberClick(7)}
              disabled={gameOver}
            >
              7
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              className="keyboard-number"
              onClick={() => handleNumberClick(8)}
              disabled={gameOver}
            >
              8
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              className="keyboard-number"
              onClick={() => handleNumberClick(9)}
              disabled={gameOver}
            >
              9
            </Button>
          </Grid>
          <Grid item xs={1.5}>
            <button
              className="keyboard-hotkey-button"
              onClick={() => handleSpecialButtonClick(95)}
              disabled={gameOver}
            >
              95
            </button>
          </Grid>
          <Grid item xs={1.5}>
            <button
              className="keyboard-hotkey-button"
              onClick={() => handleSpecialButtonClick(45)}
              disabled={gameOver}
            >
              45
            </button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              className="keyboard-eqx-buttons"
              onClick={handleMultiplyClick}
              disabled={gameOver}
            >
              X
            </Button>
          </Grid>
          <Grid item xs={3}>
            {tonButton ? (
              <Button
                variant="contained"
                className="keyboard-ton80"
                onClick={handleTon80Click}
                disabled={gameOver}
              >
                T80
              </Button>
            ) : (
              <Button
                variant="contained"
                className="keyboard-zero"
                onClick={() => handleNumberClick(0)}
                disabled={gameOver}
              >
                0
              </Button>
            )}
          </Grid>
          <Grid item xs={3}>
            <Button
              className="keyboard-eqx-buttons"
              variant="contained"
              onClick={handleAddClick}
              disabled={gameOver}
            >
              +
            </Button>
          </Grid>
          <Grid item xs={1.5}>
            <button
              className="keyboard-hotkey-button"
              onClick={() => handleSpecialButtonClick(100)}
              disabled={gameOver}
            >
              Ton
            </button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
