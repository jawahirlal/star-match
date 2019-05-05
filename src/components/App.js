import React, { useState, useEffect } from "react";
import { isUnaryLike } from "@babel/types";

const DisplayStars = props => {
  return utils
    .range(1, props.numberOfStars)
    .map(starId => <div key={starId} className="star" />);
};

//const selectNumber = (num, candidateSet);

const DisplayPayNumbers = props => (
  <button
    className="number"
    onClick={() => props.onClick(props.num)}
    style={{ backgroundColor: colors[props.status] }}
  >
    {props.num}
  </button>
);
const PlayAgain = props => (
  <div className="game-done">
    <div
      className="message"
      style={{ color: props.gameStatus === "lost" ? "red" : "green" }}
    >
      {props.gameStatus === "lost" ? "Game Over" : "Nice"}
    </div>
    <button onClick={() => props.startNewGame()}>Play Again</button>
  </div>
);

const useGameState = () => {
  const playNumbers = 9;
  const [stars, setStars] = useState(utils.random(1, playNumbers));
  const [availableNums, setAvailableNums] = useState(
    utils.range(1, playNumbers)
  );
  const [selectedNums, setSelectedNums] = useState([]);

  const [secondsLeft, setSecondsLeft] = useState(10);
  const [gameStatus, setGameStatus] = useState("active");
  useEffect(() => {
    if (gameStatus(availableNums) === "active") {
      const timerId = setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000);
      return () => {
        clearTimeout(timerId);
      };
    }
  });

  const gameStatus = newAvailableNums => {
    const newStatus =
      secondsLeft <= 0 && newAvailableNums.length !== 0
        ? "lost"
        : newAvailableNums.length === 0
        ? "won"
        : "active";
    setGameStatus(newStatus);
    return newStatus;
  };

  const getNumberStatus = selectedNum => {
    let state = "available";

    if (selectedNums.includes(selectedNum))
      state = utils.sum(selectedNums) > stars ? "wrong" : "candidate";
    else if (!availableNums.includes(selectedNum)) state = "used";

    return state;
  };

  const selectNumber = (selectedNum, currentStatus) => {
    if (gameStatus(availableNums) !== "active") return;
    let newAvailableNums = [];
    let newSelectedNums = [];
    if (currentStatus === "used") return;

    if (selectedNums.includes(selectedNum)) {
      newSelectedNums = selectedNums.filter(x => x != selectedNum);
      newAvailableNums = availableNums.concat(selectedNum);
    } else {
      newSelectedNums = selectedNums.concat(selectedNum);
      newAvailableNums = availableNums.filter(x => x != selectedNum);
    }

    if (utils.sum(newSelectedNums) === stars) {
      const newStars = utils.randomSumIn(newAvailableNums, playNumbers);

      setStars(newStars);
      setSelectedNums([]);
      setAvailableNums(newAvailableNums);
    } else {
      setSelectedNums(newSelectedNums);
      setAvailableNums(newAvailableNums);
    }
  };
  return {
    playNumbers,
    stars,
    getNumberStatus,
    selectNumber,
    gameStatus,
    secondsLeft
  };
};

const Game = props => {
  const {
    playNumbers,
    stars,
    getNumberStatus,
    selectNumber,
    gameStatus,
    secondsLeft
  } = useGameState();

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

// Color Theme
const colors = {
  available: "lightgray",
  used: "lightgreen",
  wrong: "lightcoral",
  candidate: "deepskyblue"
};
const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
};
// Math science
const utils = {
  // Sum an array
  sum: arr => arr.reduce((acc, curr) => acc + curr, 0),

  // create an array of numbers between min and max (edges included)
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

  // pick a random number between min and max (edges included)
  random: (min, max) => min + Math.floor(max * Math.random()),

  // Given an array of numbers and a max...
  // Pick a random sum (< max) from the set of all available sums in arr
  randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length)];
  }
};

export function App({ initialData }) {
  return <StarMatch />;
}
