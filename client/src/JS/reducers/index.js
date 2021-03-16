import { combineReducers } from "redux";
import userReducer from "./userReducer";
import entrepriseReducer from "./entrepriseReducer"

const rootReducer = combineReducers({
  userReducer,
  entrepriseReducer,
});

export default rootReducer;
