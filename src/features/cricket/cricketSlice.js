import { createSlice, current } from "@reduxjs/toolkit";

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
    enterScore: (state, action) => {},
  },
});

export const { enterScore } = cricketSlice.actions;

export default cricketSlice.reducer;
