import { testSaga, expectSaga } from "redux-saga-test-plan";
import { PLAYER_MOVE, playerMove } from "../actions/playerActions";
import { MOVE_ENEMY } from "../actions/enemiesActions";
import collisionSaga, { detectCollision } from "./collisionSaga";
import rootReducer from "../reducers/rootReducer";
import { gameOver } from "../actions/gameActions";

const enemies = {
  list: [
    {
      id: "foo",
      pos: {
        x: 40,
        y: 80
      }
    },
    {
      id: "bar",
      pos: {
        x: 200,
        y: 400
      }
    }
  ]
};

describe("Collision saga", () => {
  it("triggers collision detection every time a player or enemy moves", () => {
    testSaga(collisionSaga)
      .next()
      .takeEvery([PLAYER_MOVE, MOVE_ENEMY], detectCollision);
  });

  it("should dispatch GAME OVER action if collision", () => {
    return expectSaga(collisionSaga)
      .withReducer(rootReducer)
      .withState({
        enemies
      })
      .put(gameOver())
      .dispatch(playerMove({ x: 220, y: 420 })) // Collides with enemy "bar"
      .silentRun();
  });

  it("should not dispatch GAME OVER action of no collision", () => {
    return expectSaga(collisionSaga)
      .withReducer(rootReducer)
      .withState(enemies)
      .not.put(gameOver())
      .dispatch(playerMove({ x: 240, y: 440 })) // No collision
      .silentRun();
  });
});
