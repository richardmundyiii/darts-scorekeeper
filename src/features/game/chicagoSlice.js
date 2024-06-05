import { createSlice } from "@reduxjs/toolkit";

const initialLegs = [
  { type: "301", winner: null, scores: { home: 301, away: 301 } },
  { type: "501", winner: null, scores: { home: 501, away: 501 } },
  { type: "cricket", winner: null, scores: { home: 0, away: 0 } },
];

const initialState = {
  legs: initialLegs,
  currentLegIndex: null,
  currentPlayer: 0,
  history: [],
  gameOver: false,
  equation: "",
  editingPlayer: null,
  legScores: {
    home: 0,
    away: 0,
  },
};

const chicagoSlice = createSlice({
  name: "chicago",
  initialState,
  reducers: {
    enterScore: (state, action) => {
      const score = action.payload;
      const playerIndex =
        state.editingPlayer !== null
          ? state.editingPlayer
          : state.currentPlayer;
      const player = state.players[playerIndex];
      const team = player.team;
      const currentLeg = state.legs[state.currentLegIndex];

      if (currentLeg.type !== "cricket") {
        if (currentLeg.scores[team] - score >= 0) {
          currentLeg.scores[team] -= score;
          state.history.push({
            player: playerIndex,
            score,
            equation: state.equation,
            leg: currentLeg.type,
          });

          if (currentLeg.scores[team] === 0) {
            currentLeg.winner = team;
            state.legScores[team] += 1;
            state.currentLegIndex = null;
            if (state.legs.every((leg) => leg.winner !== null)) {
              state.gameOver = true;
            }
          } else {
            state.currentPlayer =
              (state.currentPlayer + 1) % state.players.lenght;
          }
        }
      } else {
        // Cricket Logic Here...
      }

      (state.equation = ""), (state.editingPlayer = null);
    },
    setEquationFromHistory: (state, action) => {
      const { equation, player } = action.payload;
      state.equation = equation.toString();
      state.editingPlayer = player;
    },
    selectLeg: (state, action) => {
      state.currentLegIndex = action.payload;
    },
  },
});

export const { enterScore, setEquationFromHistory, selectLeg } =
  chicagoSlice.actions;

export default chicagoSlice.reducer;
