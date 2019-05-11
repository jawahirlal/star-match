import { combineReducers } from "redux";
import gameHistory from "../reducers/gameHistoryReducer";

const rootReducer = combineReducers({
  gameHistory
});

export default rootReducer;
