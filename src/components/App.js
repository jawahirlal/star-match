import React, { useState } from "react";
import Game from "../components/Game";
import { Router, Link } from "@reach/router";
import Header from "../components/common/header";
import configureStore from "../redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import GameHistory from "../components/GameHistory";

let About = () => <div>Star match game react implementation.</div>;

const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
};

const store = configureStore();

export function App({ initialData }) {
  return (
    <div>
      <Header />
      <ReduxProvider store={store}>
        <Router>
          <StarMatch path="/" />
          <GameHistory path="game-history" />
          <About path="about" />
        </Router>
      </ReduxProvider>
    </div>
  );
}
