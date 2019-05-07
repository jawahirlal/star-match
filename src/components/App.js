import React, { useState } from "react";
import Game from "../components/Game";
import { Router, Link } from "@reach/router";
import Header from "../components/common/header";

let About = () => <div>Star match game react implementation.</div>;

const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
};

export function App({ initialData }) {
  return (
    <div>
      <Header />

      <Router>
        <StarMatch path="/" />
        <About path="about" />
      </Router>
    </div>
  );
}
