// src/features/game/cricketSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [
    { name: "Home", score: 0 },
    { name: "Away", score: 0 },
  ],
  currentPlayer: 0,
  history: [],
  gameOver: false,
  equation: "",
  editingPlayer: null,
};

const cricketSlice = createSlice({
  name: "cricket",
  initialState,
  reducers: {
    enterScore: (state, action) => {
      // Similar to game501Slice
    },
    specialEnterScore: (state, action) => {
      // Similar to game501Slice
    },
    setEquationFromHistory: (state, action) => {
      const { equation, player } = action.payload;
      state.equation = equation.toString();
      state.editingPlayer = player;
    },
    resetGame: () => initialState,
  },
});

export const {
  enterScore,
  specialEnterScore,
  setEquationFromHistory,
  resetGame,
} = cricketSlice.actions;

export default cricketSlice.reducer;
