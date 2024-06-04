// src/components/KeyboardComponent/KeyboardComponent.jsx
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Container, Grid } from "@mui/material";
import "./KeyboardComponent.css";

export default function KeyboardComponent({ onEnter, onSpecialEnter }) {
  const equationFromState = useSelector((state) => state.game.equation);
  const [missButton, setMissButton] = useState(true);
  const [tonButton, setTonButton] = useState(true);
  const gameOver = useSelector((state) => state.game.gameOver);
  const [equation, setEquation] = useState("");

  useEffect(() => {
    if (equationFromState) {
      setEquation(equationFromState);
    }
  }, [equationFromState]);

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

  const handleMissClick = () => handleSpecialButtonClick(0);
  const handleTon80Click = () => handleSpecialButtonClick(180);
  const handleMultiplyClick = () => handleNumberClick(" X ");
  const handleAddClick = () => handleNumberClick(" + ");

  const hotkeyButtonsLeft = [
    { label: "26", onClick: () => handleSpecialButtonClick(26) },
    { label: "57", onClick: () => handleSpecialButtonClick(57) },
    { label: "29", onClick: () => handleSpecialButtonClick(29) },
    { label: "60", onClick: () => handleSpecialButtonClick(60) },
  ];

  const hotkeyButtonsRight = [
    { label: "41", onClick: () => handleSpecialButtonClick(41) },
    { label: "95", onClick: () => handleSpecialButtonClick(95) },
    { label: "45", onClick: () => handleSpecialButtonClick(45) },
    { label: "Ton", onClick: () => handleSpecialButtonClick(100) },
  ];

  const calculatorButtons = [
    { label: "1", onClick: () => handleNumberClick(1) },
    { label: "2", onClick: () => handleNumberClick(2) },
    { label: "3", onClick: () => handleNumberClick(3) },
    { label: "4", onClick: () => handleNumberClick(4) },
    { label: "5", onClick: () => handleNumberClick(5) },
    { label: "6", onClick: () => handleNumberClick(6) },
    { label: "7", onClick: () => handleNumberClick(7) },
    { label: "8", onClick: () => handleNumberClick(8) },
    { label: "9", onClick: () => handleNumberClick(9) },
    {
      label: tonButton ? "T80" : "0",
      onClick: tonButton ? handleTon80Click : () => handleNumberClick(0),
    },
    { label: "X", onClick: handleMultiplyClick },
    { label: "+", onClick: handleAddClick },
  ];

  return (
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

        <Grid container item xs={12} spacing={2}>
          <Grid item xs={1.5}>
            {hotkeyButtonsLeft.map((btn, index) => (
              <Grid item key={index}>
                <Button
                  className="keyboard-hotkey-button"
                  onClick={btn.onClick}
                  disabled={gameOver}
                >
                  {btn.label}
                </Button>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={9}>
            <Grid container spacing={1}>
              {calculatorButtons.map((btn, index) => (
                <Grid item xs={4} key={index}>
                  <Button
                    variant="contained"
                    className={
                      btn.label === "X" || btn.label === "+"
                        ? "keyboard-eqx-buttons"
                        : "keyboard-number"
                    }
                    onClick={btn.onClick}
                    disabled={gameOver}
                  >
                    {btn.label}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={1.5}>
            {hotkeyButtonsRight.map((btn, index) => (
              <Grid item key={index}>
                <Button
                  className="keyboard-hotkey-button"
                  onClick={btn.onClick}
                  disabled={gameOver}
                >
                  {btn.label}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
