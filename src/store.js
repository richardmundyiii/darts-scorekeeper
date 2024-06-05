import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    game501: gameReducer,
    game301: game301Reducer,
    team: teamReducer,
    cricket: cricketReducer,
    chicago: chicagoReducer,
  },
});
