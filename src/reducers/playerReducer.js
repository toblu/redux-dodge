import { createReducer } from "@reduxjs/toolkit";
import { playerMove } from "../actions/playerActions";
import { resetGame } from "../actions/gameActions";
import config from "../config";

const initialState = {
  pos: {
    x: (config.boardWidth - config.cubeSize) / 2,
    y: (config.boardHeight - config.cubeSize) / 2
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
