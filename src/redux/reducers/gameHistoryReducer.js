import React from "react";
import ActionTypes from "../ActionTypes";

const GameHistoryReduer = (state = [], game) => {
  switch (game.type) {
    case ActionTypes.GAME_HISTORY:
      return [...state, game];

    default:
      return state;
  }
};
export default GameHistoryReduer;
