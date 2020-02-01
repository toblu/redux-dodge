import { expectSaga, testSaga } from "redux-saga-test-plan";
import { startGame, setPoints, setHighscore } from "../actions/gameActions";
import playerSaga from "./playerSaga";
import gameSaga, { scoreSaga } from "./gameSaga";
import rootReducer from "../reducers/rootReducer";
import collisionSaga from "./collisionSaga";
import enemiesSaga from "./enemiesSaga";
import { getCurrentPoints, getHighscore } from "../selectors/gameSelectors";

describe("Game saga", () => {
  it("it triggers playerSaga, collisionSaga, enemiesSaga and scoreSaga for GAME_START action", () => {
    return expectSaga(gameSaga)
      .withReducer(rootReducer)
      .fork(playerSaga)
      .fork(collisionSaga)
      .fork(enemiesSaga)
      .fork(scoreSaga)
      .dispatch(startGame())
      .silentRun();
  });

  it("updates score every second", () => {
    testSaga(scoreSaga)
      .next()
      .select(getCurrentPoints)
      .next(0)
      .delay(1000)
      .next()
      .put(setPoints(10))
      .next()
      .select(getCurrentPoints)
      .next(10)
      .delay(1000)
      .next()
      .put(setPoints(20));
  });

  it("updates highscore if score is above previous highscore", () => {
    testSaga(scoreSaga)
      .next()
      .finish()
      .select(getCurrentPoints)
      .next(20)
      .select(getHighscore)
      .next(10)
      .put(setHighscore(20))
      .next()
      .isDone();
  });

  it("does not update highscore if score is below highscore", () => {
    testSaga(scoreSaga)
      .next()
      .finish()
      .select(getCurrentPoints)
      .next(10)
      .select(getHighscore)
      .next(20)
      .isDone();
  });
});
