import { testSaga, expectSaga } from "redux-saga-test-plan";
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
  it("triggers collision detection every 50ms", () => {
    testSaga(collisionSaga)
      .next()
      .delay(30)
      .next()
      .call(detectCollision)
      .next()
      .delay(30)
      .next()
      .call(detectCollision);
  });

  it("should dispatch GAME OVER action if collision", () => {
    return expectSaga(collisionSaga)
      .withReducer(rootReducer)
      .withState({
        enemies,
        player: { pos: { x: 220, y: 420 } } // collides with "bar"
      })
      .put(gameOver())
      .silentRun();
  });

  it("should not dispatch GAME OVER action of no collision", () => {
    return expectSaga(collisionSaga)
      .withReducer(rootReducer)
      .withState({ enemies, player: { pos: { x: 240, y: 440 } } })
      .not.put(gameOver())
      .silentRun();
  });
});
