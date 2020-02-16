import { createSelector } from "@reduxjs/toolkit";

export const getCurrentScore = state => state.game.score;
export const getHighscore = state => state.game.highscore;
export const getGameStatus = state => state.game.status;

export const isGameStarted = createSelector(
  [getGameStatus],
  status => status !== "NOT_STARTED"
);
export const isGameActive = createSelector(
  [getGameStatus],
  status => status === "GAME_ACTIVE"
);
export const isGamePaused = createSelector(
  [getGameStatus],
  status => status === "GAME_PAUSED"
);
export const isGameOver = createSelector(
  [getGameStatus],
  status => status === "GAME_OVER"
);
