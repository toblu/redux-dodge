export const getCurrentPoints = state => state.game.points;
export const getHighscore = state => state.game.highscore;

export const getGameStatus = state => state.game.status;
export const isGameStarted = state => getGameStatus(state) !== "NOT_STARTED";
export const isGameActive = state => getGameStatus(state) === "GAME_ACTIVE";
export const isGamePaused = state => getGameStatus(state) === "GAME_PAUSED";
export const isGameOver = state => getGameStatus(state) === "GAME_OVER";
