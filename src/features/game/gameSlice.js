// src/features/game/gameSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [
    { name: "Home", score: 501 },
    { name: "Away", score: 501 },
  ],
  currentPlayer: 0,
  history: [],
  gameOver: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    enterScore: (state, action) => {
      const score = action.payload;
      const player = state.players[state.currentPlayer];

      if (player.score - score >= 0) {
        player.score -= score;
        state.history.push({ player: state.currentPlayer, score });

        if (player.score === 0) {
          state.gameOver = true;
        } else {
          state.currentPlayer = (state.currentPlayer + 1) % 2;
        }
      }
    },
    specialEnterScore: (state, action) => {
      const score = action.payload;
      const player = state.players[state.currentPlayer];

      if (player.score - score >= 0) {
        player.score -= score;
      } else {
        state.history.push({ player: state.currentPlayer, score: 0 });
      }
      state.history.push({ player: state.currentPlayer, score });

      if (player.score === 0) {
        state.gameOver = true;
      } else {
        state.currentPlayer = (state.currentPlayer + 1) % 2;
      }
    },
    resetGame: () => initialState,
  },
});

export const { enterScore, specialEnterScore, resetGame } = gameSlice.actions;

export default gameSlice.reducer;
