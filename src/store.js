import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./features/game/gameSlice";
import cricketReducer from "./features/cricket/cricketSlice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
    cricket: cricketReducer,
  },
});
