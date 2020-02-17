import uuid from "uuid";
import { eventChannel, END } from "redux-saga";
import { take, call, fork, all, select, put, delay } from "redux-saga/effects";
import {
  addEnemy,
  removeEnemy,
  moveEnemy,
  setEnemyInterval
} from "../actions/enemiesActions";
import { getEnemies, getEnemy, getInterval } from "../selectors/enemySelectors";
import { isGameActive } from "../selectors/gameSelectors";
import config from "../config";

const isOutsideOfBounds = (x, y) =>
  x < -config.cubeSize ||
  x > config.boardWidth ||
  y < -config.cubeSize ||
  y > config.boardHeight;

const enemyMoveChannel = (startingPos, direction) => {
  const pos = { ...startingPos };
  return eventChannel(emitter => {
    const iv = setInterval(() => {
      if (isOutsideOfBounds(pos.x, pos.y)) {
        // Enemy has moved outside of the game surface - close channel
        emitter(END);
      } else {
        switch (direction) {
          case "U": {
            pos.y -= config.enemyStep;
            break;
          }
          case "R": {
            pos.x += config.enemyStep;
            break;
          }
          case "D": {
            pos.y += config.enemyStep;
            break;
          }
          case "L": {
            pos.x -= config.enemyStep;
            break;
          }
          default:
            break;
        }
        emitter(pos);
      }
    }, config.enemyMoveInterval);
    return () => {
      // Unsubscribe interval
      clearInterval(iv);
    };
  });
};

const generateRandomStartingPos = () => {
  const directions = ["U", "R", "D", "L"]; // [up, right, down, left]
  const direction = directions[Math.round(3 * Math.random())];

  const randomXpos = () =>
    config.cubeSize *
    Math.round(
      ((config.boardWidth - config.cubeSize) / config.cubeSize) * Math.random()
    );

  const randomYpos = () =>
    config.cubeSize *
    Math.round(
      ((config.boardHeight - config.cubeSize) / config.cubeSize) * Math.random()
    );

  switch (direction) {
    case "U":
      return {
        x: randomXpos(),
        y: config.boardHeight,
        direction
      };

    case "R":
      return {
        x: -config.cubeSize,
        y: randomYpos(),
        direction
      };

    case "D":
      return {
        x: randomXpos(),
        y: -config.cubeSize,
        direction
      };

    case "L":
      return {
        x: config.boardWidth,
        y: randomYpos(),
        direction
      };

    default:
      return {
        x: 0,
        y: 0
      };
  }
};

function* enemySaga(id = uuid()) {
  if (!(yield select(getEnemy, id))) {
    // No enemy with the given ID exists, spawn a new one
    const { x, y, direction } = generateRandomStartingPos();
    yield put(addEnemy({ id, x, y, direction }));
  }

  // Get the enemy pos and direction
  const { pos, direction } = yield select(getEnemy, id);

  // Create channel to handle movement
  const enemyChannel = enemyMoveChannel(pos, direction);

  try {
    while (true) {
      // Dispatch action each time the enemy position updates
      const pos = yield take(enemyChannel);
      yield put(moveEnemy({ id, x: pos.x, y: pos.y }));
    }
  } finally {
    if (yield select(isGameActive)) {
      // Remove enemy when outside of bounds
      yield put(removeEnemy({ id }));
    }
  }
}

function* enemyInterval() {
  while (true) {
    const interval = yield select(getInterval);
    yield delay(2000); // Update interval every other second
    yield put(setEnemyInterval(interval * 0.8));
  }
}

function* handleEnemies() {
  const enemies = yield select(getEnemies);
  if (!enemies.length) {
    // No enemies yet, spawn new enemy
    yield fork(enemySaga);
  } else {
    // Trigger enemySaga for each enemy
    yield all(enemies.map(enemy => fork(enemySaga, enemy.id)));
  }
  while (true) {
    const interval = yield select(getInterval);
    yield delay(interval);
    yield fork(enemySaga);
  }
}

export default function* enemiesSaga() {
  yield fork(enemyInterval);
  yield call(handleEnemies);
}
