import React from "react";

import ActionTypes from "../ActionTypes";
const addGameHistory = game => {
  return { type: ActionTypes.GAME_HISTORY, ...game };
};

export default addGameHistory;
