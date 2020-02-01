import { createReducer } from "@reduxjs/toolkit";
import { playerMove } from "../actions/playerActions";
import { resetGame } from "../actions/gameActions";

const initialState = {
  pos: {
    x: 280,
    y: 280
  }
};

export default createReducer(initialState, {
  [playerMove]: (state, action) => ({
    ...state,
    pos: {
      x: action.payload.x,
      y: action.payload.y
    }
  }),
  [resetGame]: () => initialState
});
