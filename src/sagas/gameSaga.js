import {
  take,
  select,
  put,
  fork,
  all,
  cancel,
  delay
} from "redux-saga/effects";
import {
  GAME_START,
  GAME_OVER,
  GAME_PAUSE,
  setPoints,
  setHighscore
} from "../actions/gameActions";
import { getCurrentScore, getHighscore } from "../selectors/gameSelectors";
import playerSaga from "./playerSaga";
import enemiesSaga from "./enemiesSaga";
import collisionSaga from "./collisionSaga";

export function* scoreSaga() {
  try {
    while (true) {
      const score = yield select(getCurrentScore);
      yield delay(1000);
      // Increase score every second
      yield put(setPoints(score + 10));
    }
  } finally {
    const score = yield select(getCurrentScore);
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
    const tasks = yield all([
      fork(playerSaga),
      fork(enemiesSaga),
      fork(collisionSaga),
      fork(scoreSaga)
    ]);

    yield take([GAME_OVER, GAME_PAUSE]);
    // Cancel all tasks
    yield all(tasks.map(task => cancel(task)));
  }
}
