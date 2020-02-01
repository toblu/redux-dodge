import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/rootReducer";
import gameSaga from "./sagas/gameSaga";

export default () => {
  const sagaMiddleware = createSagaMiddleware(gameSaga);
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
    devTools: true
  });
  sagaMiddleware.run(gameSaga);

  return store;
};
