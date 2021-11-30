import counter from "./counter";
import logged from "./loggedIn";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  myCounter: counter,
  logged,
});

export default rootReducer;
