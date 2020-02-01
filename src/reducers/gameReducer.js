import { createReducer } from "@reduxjs/toolkit";
import {
  startGame,
  pauseGame,
  gameOver,
  setPoints,
  setHighscore,
  resetGame
} from "../actions/gameActions";

const initialState = {
  points: 0,
  highscore: window.localStorage.getItem("highscore") || 0,
  status: "NOT_STARTED"
};

export default createReducer(initialState, {
  [startGame]: state => ({
    ...state,
    status: "GAME_ACTIVE"
  }),

  [pauseGame]: state => ({
    ...state,
    status: "GAME_PAUSED"
  }),

  [gameOver]: state => ({
    ...state,
    status: "GAME_OVER"
  }),

  [setPoints]: (state, action) => ({
    ...state,
    points: action.payload
  }),

  [setHighscore]: (state, action) => {
    window.localStorage.setItem("highscore", action.payload);
    return {
      ...state,
      highscore: action.payload
    };
  },

  [resetGame]: state => ({ ...initialState, highscore: state.highscore })
});
