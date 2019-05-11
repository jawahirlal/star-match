import React, { useState, useEffect } from "react";

import { isUnaryLike } from "@babel/types";
import utils from "../utils";
import PlayAgain from "../components/PlayAgain";
import DisplayPayNumbers from "../components/DisplayPlayNumbers";
import GameState from "../components/GameState";
import DisplayStars from "../components/DisplayStars";

//const selectNumber = (num, candidateSet);

const Game = props => {
  const {
    playNumbers,
    stars,
    getNumberStatus,
    selectNumber,
    gameStatus,
    secondsLeft,
    availableNums
  } = GameState(props);

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameStatus === "active" ? (
            <DisplayStars numberOfStars={stars} />
          ) : (
            <PlayAgain
              gameStatus={gameStatus}
              availableNums={availableNums.length}
              secondsLeft={secondsLeft}
              startNewGame={props.startNewGame}
            />
          )}
        </div>
        <div className="right">
          {utils.range(1, playNumbers).map(num => (
            <DisplayPayNumbers
              key={num}
              onClick={selectNumber}
              status={getNumberStatus(num)}
              num={num}
            />
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: {secondsLeft}</div>
    </div>
  );
};

export default Game;
