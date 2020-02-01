import { createAction } from "@reduxjs/toolkit";

export const GAME_START = "game/START";
export const startGame = createAction(GAME_START);

export const GAME_PAUSE = "game/PAUSE";
export const pauseGame = createAction(GAME_PAUSE);

export const GAME_OVER = "game/GAME_OVER";
export const gameOver = createAction(GAME_OVER);

export const SET_POINTS = "game/POINTS";
export const setPoints = createAction(SET_POINTS);

export const SET_HIGHSCORE = "game/SET_HIGHSCORE";
export const setHighscore = createAction(SET_HIGHSCORE);

export const RESET_GAME = "game/RESET";
export const resetGame = createAction(RESET_GAME);
