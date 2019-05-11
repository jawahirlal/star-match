import React from "react";
import AddGameHistory from "../components/AddGameHistory";

const PlayAgain = props => {
  if (props.gameStatus !== "active")
    return (
      <div className="game-done">
        <AddGameHistory
          game={{
            status: props.gameStatus,
            availableNums: props.availableNums,
            secondsLeft: props.secondsLeft,
            dateCreated: new Date().toLocaleString()
          }}
        />
        <div
          className="message"
          style={{ color: props.gameStatus === "lost" ? "red" : "green" }}
        >
          {props.gameStatus === "lost" ? "Game Over" : "Nice"}
        </div>
        <button onClick={() => props.startNewGame()}>Play Again</button>
      </div>
    );
  else return null;
};

export default PlayAgain;
