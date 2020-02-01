import uuid from "uuid";
import { eventChannel, END } from "redux-saga";
import { take, fork, all, select, put, delay } from "redux-saga/effects";
import {
  addEnemy,
  removeEnemy,
  moveEnemy,
  setEnemyInterval
} from "../actions/enemiesActions";
import { getEnemies, getEnemy, getInterval } from "../selectors/enemySelectors";
import { isGameActive } from "../selectors/gameSelectors";

const STEP = 40;

const isOutsideOfBounds = (x, y) => x < -40 || x > 600 || y < -40 || y > 600;

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
            pos.y -= STEP / 4;
            break;
          }
          case "R": {
            pos.x += STEP / 4;
            break;
          }
          case "D": {
            pos.y += STEP / 4;
            break;
          }
          case "L": {
            pos.x -= STEP / 4;
            break;
          }
          default:
            break;
        }
        emitter(pos);
      }
    }, 50);
    return () => {
      // Unsubscribe interval
      clearInterval(iv);
    };
  });
};

const generateRandomStartingPos = () => {
  const directions = ["U", "R", "D", "L"]; // [up, right, down, left]
  const direction = directions[Math.round(3 * Math.random())];

  switch (direction) {
    case "U":
      return {
        x: 20 * Math.round(28 * Math.random()),
        y: 600,
        direction
      };

    case "R":
      return {
        x: -40,
        y: 20 * Math.round(28 * Math.random()),
        direction
      };

    case "D":
      return {
        x: 20 * Math.round(28 * Math.random()),
        y: -40,
        direction
      };

    case "L":
      return {
        x: 600,
        y: 20 * Math.round(28 * Math.random()),
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

export default function* handleEnemies() {
  const enemies = yield select(getEnemies);
  if (!enemies.length) {
    // No enemies yet, spawn new enemy
    yield fork(enemySaga);
  } else {
    // Trigger enemySaga for each enemy
    yield all(enemies.map(enemy => fork(enemySaga, enemy.id)));
  }
  let count = 0;
  while (true) {
    const interval = yield select(getInterval);
    yield delay(interval);
    yield fork(enemySaga);
    count++;
    if (count % 4 === 0) {
      // Decrease interval for every fourth enemy spawned
      yield put(setEnemyInterval(interval * 0.9));
    }
  }
}
