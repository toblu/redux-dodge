import React from "react";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import Board from "./components/Board";
import ScoreCard from "./components/ScoreCard";
import "./App.css";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Board />
        <ScoreCard />
      </div>
    </Provider>
  );
}

export default App;
