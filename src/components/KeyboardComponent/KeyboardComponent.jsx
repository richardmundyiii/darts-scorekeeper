// src/components/KeyboardComponent/KeyboardComponent.jsx
import { useState } from "react";
import { Button, Container, Grid } from "@mui/material";
import "./KeyboardComponent.css";

export default function KeyboardComponent({ onEnter }) {
  const [equation, setEquation] = useState("");
  const [missButton, setMissButton] = useState(true);
  const [tonButton, setTonButton] = useState(true);

  const handleNumberClick = (num) => {
    setEquation((prev) => prev + num);
    setMissButton(false);
    setTonButton(false);
  };

  const handleDeleteClick = () => {
    setEquation((prev) => prev.slice(0, -1));
    if (equation.length <= 1) {
      setMissButton(true);
      setTonButton(true);
    }
  };

  const handleEnterClick = () => {
    if (equation) {
      onEnter(equation);
      setEquation("");
      setMissButton(true);
      setTonButton(true);
    }
  };

  const handleSpecialButtonClick = (value) => {
    setEquation((prev) => prev + value);
  };

  return (
    <>
      <Container maxWidth>
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
            >
              DEL
            </Button>
          </Grid>
          <Grid item xs={6} className="equation-container">
            {equation}
          </Grid>
          <Grid item xs={3}>
            {missButton ? (
              <Button variant="contained" className="keyboard-missed">
                Miss
              </Button>
            ) : (
              <Button
                variant="contained"
                className="keyboard-enter"
                onClick={handleEnterClick}
              >
                Enter
              </Button>
            )}
          </Grid>
          <Grid item xs={1.5}>
            <Button
              className="keyboard-quickHit"
              onClick={() => handleSpecialButtonClick(26)}
            >
              26
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              className="keyboard-number"
              onClick={() => handleNumberClick(1)}
            >
              1
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              className="keyboard-number"
              onClick={() => handleNumberClick(2)}
            >
              2
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              className="keyboard-number"
              onClick={() => handleNumberClick(3)}
            >
              3
            </Button>
          </Grid>
          <Grid item xs={1.5}>
            <Button
              className="keyboard-quickHit"
              onClick={() => handleSpecialButtonClick(57)}
            >
              57
            </Button>
          </Grid>
          <Grid item xs={1.5}>
            <Button
              className="keyboard-quickHit"
              onClick={() => handleSpecialButtonClick(29)}
            >
              29
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              className="keyboard-number"
              onClick={() => handleNumberClick(4)}
            >
              4
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              className="keyboard-number"
              onClick={() => handleNumberClick(5)}
            >
              5
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              className="keyboard-number"
              onClick={() => handleNumberClick(6)}
            >
              6
            </Button>
          </Grid>
          <Grid item xs={1.5}>
            <Button
              className="keyboard-quickHit"
              onClick={() => handleSpecialButtonClick(60)}
            >
              60
            </Button>
          </Grid>
          <Grid item xs={1.5}>
            <Button
              className="keyboard-quickHit"
              onClick={() => handleSpecialButtonClick(41)}
            >
              41
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              className="keyboard-number"
              onClick={() => handleNumberClick(7)}
            >
              7
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              className="keyboard-number"
              onClick={() => handleNumberClick(8)}
            >
              8
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              className="keyboard-number"
              onClick={() => handleNumberClick(9)}
            >
              9
            </Button>
          </Grid>
          <Grid item xs={1.5}>
            <Button
              className="keyboard-quickHit"
              onClick={() => handleSpecialButtonClick(95)}
            >
              95
            </Button>
          </Grid>
          <Grid item xs={1.5}>
            <Button
              className="keyboard-quickHit"
              onClick={() => handleSpecialButtonClick(45)}
            >
              45
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              className="keyboard-eqx-buttons"
              onClick={() => handleSpecialButtonClick("X")}
            >
              X
            </Button>
          </Grid>
          <Grid item xs={3}>
            {tonButton ? (
              <Button variant="contained" className="keyboard-ton80">
                T80
              </Button>
            ) : (
              <Button
                variant="contained"
                className="keyboard-zero"
                onClick={() => handleNumberClick(0)}
              >
                0
              </Button>
            )}
          </Grid>
          <Grid item xs={3}>
            <Button
              className="keyboard-eqx-buttons"
              variant="contained"
              onClick={() => handleSpecialButtonClick("+")}
            >
              +
            </Button>
          </Grid>
          <Grid item xs={1.5}>
            <Button
              variant="contained"
              className="keyboard-quickHit"
              onClick={() => handleSpecialButtonClick("100")}
            >
              Ton
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
