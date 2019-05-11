import React, { useState, useEffect } from "react";

import utils from "../utils";

function GameState(props) {
  const playNumbers = 9;
  const [stars, setStars] = useState(utils.random(1, playNumbers));
  const [availableNums, setAvailableNums] = useState(
    utils.range(1, playNumbers)
  );
  const [selectedNums, setSelectedNums] = useState([]);

  const [secondsLeft, setSecondsLeft] = useState(2);
  const [gameStatus, setGameStatus] = useState("active");
  useEffect(() => {
    if (updateGameStatus(availableNums) === "active") {
      const timerId = setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000);
      return () => {
        clearTimeout(timerId);
      };
    }
  });

  const updateGameStatus = newAvailableNums => {
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
    if (updateGameStatus(availableNums) !== "active") return;
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
    secondsLeft,
    availableNums
  };
}
// useGameState.propTypes = {
//   dispatch: propTypes.func.isRequired,
//   GameHistory: propTypes.array.isRequired
// };

// const mapStateToProps = state => {
//   return { GameHistory: state };
// };

export default GameState;
