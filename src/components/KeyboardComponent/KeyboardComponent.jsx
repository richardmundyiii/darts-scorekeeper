import { useState } from "react";
import { Button, Container, Grid } from "@mui/material";
import "./KeyboardComponent.css";

export default function KeyboardComponent() {
  const [tonButton, setTonButton] = useState(false);
  const [missButton, setMissButton] = useState(false);
  const [equation, setEquation] = useState("");

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
            <Button variant="contained" className="keyboard-delete">
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
              <Button variant="contained" className="keyboard-enter">
                Enter
              </Button>
            )}
          </Grid>
          <Grid item xs={1.5}>
            <Button className="keyboard-quickHit">26</Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" className="keyboard-number">
              1
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" className="keyboard-number">
              2
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" className="keyboard-number">
              3
            </Button>
          </Grid>
          <Grid item xs={1.5}>
            <Button className="keyboard-quickHit">57</Button>
          </Grid>
          <Grid item xs={1.5}>
            <Button className="keyboard-quickHit">29</Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" className="keyboard-number">
              4
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" className="keyboard-number">
              5
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" className="keyboard-number">
              6
            </Button>
          </Grid>
          <Grid item xs={1.5}>
            <Button className="keyboard-quickHit">60</Button>
          </Grid>
          <Grid item xs={1.5}>
            <Button className="keyboard-quickHit">41</Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" className="keyboard-number">
              7
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" className="keyboard-number">
              8
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" className="keyboard-number">
              9
            </Button>
          </Grid>
          <Grid item xs={1.5}>
            <Button className="keyboard-quickHit">95</Button>
          </Grid>
          <Grid item xs={1.5}>
            <Button className="keyboard-quickHit">45</Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" className="keyboard-eqx-buttons">
              X
            </Button>
          </Grid>
          <Grid item xs={3}>
            {tonButton ? (
              <Button variant="contained" className="keyboard-ton80">
                T80
              </Button>
            ) : (
              <Button variant="contained" className="keyboard-zero">
                0
              </Button>
            )}
          </Grid>
          <Grid item xs={3}>
            <Button className="keyboard-eqx-buttons" variant="contained">
              +
            </Button>
          </Grid>
          <Grid item xs={1.5}>
            <Button variant="contained" className="keyboard-quickHit">
              Ton
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
