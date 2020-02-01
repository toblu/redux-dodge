import { createReducer } from "@reduxjs/toolkit";
import {
  addEnemy,
  moveEnemy,
  removeEnemy,
  setEnemyInterval
} from "../actions/enemiesActions";
import { resetGame } from "../actions/gameActions";

const initialState = {
  list: [],
  interval: 1000
};

export default createReducer(initialState, {
  [addEnemy]: (state, action) => {
    state.list.push({
      id: action.payload.id,
      direction: action.payload.direction,
      pos: { x: action.payload.x, y: action.payload.y }
    });
  },

  [removeEnemy]: (state, action) => ({
    ...state,
    list: state.list.filter(enemy => enemy.id !== action.payload.id)
  }),

  [moveEnemy]: (state, action) => {
    const enemy = state.list.filter(enemy => enemy.id === action.payload.id)[0];
    enemy.pos = {
      x: action.payload.x,
      y: action.payload.y
    };
  },

  [setEnemyInterval]: (state, action) => {
    state.interval = action.payload;
  },

  [resetGame]: () => initialState
});
