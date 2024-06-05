import { createSlice } from "@reduxjs/toolkit";
import { resetGame } from "./game501Slice";

const initialPlayers = Array.from({ length: 4 }, (_, index) => ({
  name: `Player ${index + 1}`,
  team: index % 2 === 0 ? "home" : "away",
}));

const initialState = {
  players: initialPlayers,
  scores: {
    home: 701,
    away: 701,
  },
  currentPlayer: 0,
  history: [],
  gameOver: false,
  equation: "",
  editingPlayer: null,
};

const teamSlice = createSlice({
  name: "team",
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

      if (state.scores[team] - score >= 0) {
        state.scores[team] -= score;
        state.history.push({
          player: playerIndex,
          score,
          equation: state.equation,
        });

        if (state.scores[team] === 0) {
          state.gameOver = true;
        } else {
          state.currentPlayer =
            (state.currentPlayer + 1) % state.players.length;
        }
        state.equation = "";
        state.editingPlayer = null;
      }
    },
    specialEnterScore: (state, action) => {
      const score = action.payload;
      const playerIndex =
        state.editingPlayer !== null
          ? state.editingPlayer
          : state.currentPlayer;

      const player = state.players[playerIndex];
      const team = player.team;

      if (state.scores[team] - score >= 0) {
        state.scores[team] -= score;
      } else {
        state.history.push({ player: playerIndex, score: 0, equation: "0" });
      }
      state.history.push({
        player: playerIndex,
        score,
        equation: state.equation,
      });

      if (state.scores[team] === 0) {
        state.gameOver = true;
      } else {
        state.currentPlayer = (state.currentPlayer + 1) % state.players.length;
      }
      state.equation = "";
      state.editingPlayer = null;
    },
    setEquationFromHistory: (state, action) => {
      const { equation, player } = action.payload;
      state.equation = equation.toString();
      state.editingPlayer = player;
    },
    resetGame: (state) => {
      state.players = Array.from(
        { length: initialState.players.length },
        (_, index) => ({
          name: `Player ${index + 1}`,
          team: index % 2 === 0 ? "home" : "away",
        })
      );
      state.scores = {
        home: 701,
        away: 701,
      };
      state.currentPlayer = 0;
      state.history = [];
      state.gameOver = false;
      state.equation = "";
      state.editingPlayer = null;
    },
    setPlayers: (state, action) => {
      const numberOfPlayers = action.payload;
      state.players = Array.from({ length: numberOfPlayers }, (_, index) => ({
        name: `Player ${index + 1}`,
        team: index % 2 === 0 ? "home" : "away",
      }));
      state.scores = {
        home: 701,
        away: 701,
      };
      state.currentPlayer = 0;
      state.history = [];
      state.gameOver = false;
      state.equation = "";
      state.editingPlayer = null;
    },
  },
});

export const {
  enterScore,
  specialEnterScore,
  setEquationFromHistory,
  resetGame,
  setPlayers,
} = teamSlice.actions;

export default teamSlice.reducer;
