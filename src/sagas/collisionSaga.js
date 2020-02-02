import { call, select, put, delay } from "redux-saga/effects";
import { gameOver } from "../actions/gameActions";
import { getPlayerPos } from "../selectors/playerSelectors";
import { getAllEnemyPositions } from "../selectors/enemySelectors";

const isCollision = ({ x: x1, y: y1 }, { x: x2, y: y2 }) =>
  Math.abs(x1 - x2) < 40 && Math.abs(y1 - y2) < 40;

const hasCollided = (playerPos, enemyPositions) =>
  enemyPositions.reduce(
    (hasCollided, pos) => hasCollided || isCollision(pos, playerPos),
    false
  );

export function* detectCollision() {
  const playerPos = yield select(getPlayerPos);
  const enemyPositions = yield select(getAllEnemyPositions);
  // Check if player has collided with any of the enemies
  const collision = hasCollided(playerPos, enemyPositions);
  if (collision) {
    // Dispatch game over action
    yield put(gameOver());
    return;
  }
}

export default function* collisionSaga() {
  while (true) {
    // Trigger detectCollision every 30ms
    yield delay(30);
    yield call(detectCollision);
  }
}
