import React from "react";
import { connect } from "react-redux";
import Cube from "../Cube";
import GameOverlay from "../GameOverlay";
import * as gameActions from "../../actions/gameActions";
import * as gameSelectors from "../../selectors/gameSelectors";
import * as playerSelectors from "../../selectors/playerSelectors";
import * as enemySelectors from "../../selectors/enemySelectors";
import "./Board.css";

const Board = ({
  startGame,
  resetGame,
  isGameStarted,
  isGameActive,
  isGamePaused,
  isGameOver,
  points,
  player,
  enemies
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
          <h2>SCORE: {points}</h2>
          <button onClick={() => resetGame()}>Play again</button>
        </GameOverlay>
      );
    }
  };

  return (
    <div className="board">
      {!isGameActive && renderOverlay()}
      {isGameStarted && <Cube type="player" {...player}></Cube>}
      {enemies.map(enemy => (
        <Cube key={enemy.id} type="enemy" {...enemy}></Cube>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  isGameStarted: gameSelectors.isGameStarted(state),
  isGameActive: gameSelectors.isGameActive(state),
  isGamePaused: gameSelectors.isGamePaused(state),
  isGameOver: gameSelectors.isGameOver(state),
  points: gameSelectors.getCurrentPoints(state),
  player: playerSelectors.getPlayer(state),
  enemies: enemySelectors.getEnemies(state)
});

const mapDispatchToProps = {
  startGame: gameActions.startGame,
  resetGame: gameActions.resetGame
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
