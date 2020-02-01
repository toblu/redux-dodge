import { take, select, put, fork, cancel, delay } from "redux-saga/effects";
import {
  GAME_START,
  GAME_OVER,
  GAME_PAUSE,
  RESET_GAME,
  setPoints,
  setHighscore
} from "../actions/gameActions";
import { getCurrentPoints, getHighscore } from "../selectors/gameSelectors";
import playerSaga from "./playerSaga";
import enemiesSaga from "./enemiesSaga";
import collisionSaga from "./collisionSaga";

function* scoreSaga() {
  try {
    while (true) {
      const score = yield select(getCurrentPoints);
      yield delay(1000);
      // Increase score by 10
      yield put(setPoints(score + 10));
    }
  } finally {
    const score = yield select(getCurrentPoints);
    const highscore = yield select(getHighscore);
    if (score > highscore) {
      // Update highscore
      yield put(setHighscore(score));
    }
  }
}

export default function* gameSaga() {
  while (true) {
    yield take(GAME_START);
    // Start tasks
    const playerTask = yield fork(playerSaga);
    const enemiesTask = yield fork(enemiesSaga);
    const collisionTask = yield fork(collisionSaga);
    const pointsTask = yield fork(scoreSaga);

    yield take([GAME_OVER, GAME_PAUSE, RESET_GAME]);
    // Cancel all tasks
    yield cancel(playerTask);
    yield cancel(enemiesTask);
    yield cancel(collisionTask);
    yield cancel(pointsTask);
  }
}
