import React from "react";
import { connect } from "react-redux";
import Player from "../Player";
import Enemies from "../Enemies";
import GameOverlay from "../GameOverlay";
import * as gameActions from "../../actions/gameActions";
import * as gameSelectors from "../../selectors/gameSelectors";
import "./Board.css";

const Board = ({
  startGame,
  resetGame,
  isGameStarted,
  isGameActive,
  isGamePaused,
  isGameOver,
  score
}) => {
  const renderOverlay = () => {
    if (!isGameStarted) {
      return (
        <GameOverlay>
          <button onClick={() => startGame()}>Start game</button>
        </GameOverlay>
      );
    }
    if (isGamePaused) {
      return (
        <>
          <GameOverlay>
            <h1>GAME PAUSED</h1>
            <button onClick={() => startGame()}>RESUME</button>
            <button onClick={() => resetGame()}>RESTART</button>
          </GameOverlay>
        </>
      );
    }
    if (isGameOver) {
      return (
        <GameOverlay>
          <h1>GAME OVER</h1>
          <h2>SCORE: {score}</h2>
          <button onClick={() => resetGame()}>Play again</button>
        </GameOverlay>
      );
    }
  };

  return (
    <div className="board">
      {!isGameActive && renderOverlay()}
      {isGameStarted && (
        <>
          <Player />
          <Enemies />
        </>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  isGameStarted: gameSelectors.isGameStarted(state),
  isGameActive: gameSelectors.isGameActive(state),
  isGamePaused: gameSelectors.isGamePaused(state),
  isGameOver: gameSelectors.isGameOver(state),
  score: gameSelectors.getCurrentScore(state)
});

const mapDispatchToProps = {
  startGame: gameActions.startGame,
  resetGame: gameActions.resetGame
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
