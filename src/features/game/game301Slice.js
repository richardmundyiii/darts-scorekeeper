import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [
    { name: "Home", score: 301 },
    { name: "Away", score: 301 },
  ],
  currentPlayer: 0,
  history: [],
  gameOver: false,
  equation: "",
  editingPlayer: null,
};

const game301Slice = createSlice({
  name: "game301",
  initialState,
  reducers: {
    enterScore: (state, action) => {
      const score = action.payload;
      const playerIndex =
        state.editingPlayer !== null
          ? state.editingPlayer
          : state.currentPlayer;
      const player = state.players[playerIndex];

      if (player.score - score >= 0) {
        player.score -= score;
        state.history.push({
          player: playerIndex,
          score,
          equation: state.equation,
        });

        if (player.score === 0) {
          state.gameOver = true;
        } else {
          state.currentPlayer = (state.currentPlayer + 1) % 2;
        }
        state.equation = ""; // Reset equation
        state.editingPlayer = null; // Reset editing mode
      }
    },
  },
  specialEnterScore: (state, action) => {
    const score = action.payload;
    const playerIndex =
      state.editingPlayer !== null ? state.editingPlayer : state.currentPlayer;
    const player = state.players[playerIndex];

    if (player.score - score >= 0) {
      player.score -= score;
    } else {
      state.history.push({ player: playerIndex, score: 0, equation: "0" });
    }
    state.history.push({
      player: playerIndex,
      score,
      equation: state.equation,
    });

    if (player.score === 0) {
      state.gameOver = true;
    } else {
      state.currentPlayer = (state.currentPlayer + 1) % 2;
    }
    state.equation = ""; // Reset equation
    state.editingPlayer = null; // Reset editing mode
  },
  setEquationFromHistory: (state, action) => {
    const { equation, player } = action.payload;
    state.equation = equation.toString();
    state.editingPlayer = player;
  },
  resetGame: () => initialState,
});

export const {
  enterScore,
  specialEnterScore,
  setEquationFromHistory,
  resetGame,
} = game301Slice.actions;

export default game301Slice.reducer;
