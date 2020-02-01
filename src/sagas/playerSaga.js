import { eventChannel, END } from "redux-saga";
import { take, call, select, put } from "redux-saga/effects";
import { pauseGame } from "../actions/gameActions";
import { playerMove } from "../actions/playerActions";
import { getPlayerPos } from "../selectors/playerSelectors";
import { isGameActive } from "../selectors/gameSelectors";

const STEP = 40;

const playerInteractionChannel = startingPos => {
  const pos = { ...startingPos };

  return eventChannel(emitter => {
    const keyboardListener = e => {
      const prevPos = { ...pos };

      switch (e.code) {
        case "ArrowUp":
          if (pos.y >= 40) {
            pos.y -= STEP;
          }
          break;
        case "ArrowRight":
          if (pos.x <= 520) {
            pos.x += STEP;
          }
          break;
        case "ArrowDown":
          if (pos.y <= 520) {
            pos.y += STEP;
          }
          break;
        case "ArrowLeft":
          if (pos.x >= 40) {
            pos.x -= STEP;
          }
          break;
        case "Escape":
        case "Space":
          return emitter(END);
        default:
          return;
        // do nothing
      }

      if (pos.x !== prevPos.x || pos.y !== prevPos.y) {
        // Emit new position
        return emitter(pos);
      }
    };

    // Subscribe to keyboard events
    document.addEventListener("keydown", keyboardListener);

    // Clean-up event listener
    return () => document.removeEventListener("keydown", keyboardListener);
  });
};

export default function* handlePlayer() {
  const playerPos = yield select(getPlayerPos);
  const interactionChannel = yield call(playerInteractionChannel, playerPos);
  try {
    while (true) {
      // Update the player position when user interacts with keyboard
      const pos = yield take(interactionChannel);
      yield put(playerMove(pos));
    }
  } finally {
    const gameActive = yield select(isGameActive);
    if (gameActive) {
      // gameActive === true here means that END was emitted from the interaction channel (user paused the game)
      // Dispatch pause action
      yield put(pauseGame());
    }
  }
}
