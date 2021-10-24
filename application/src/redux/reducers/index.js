import { combineReducers } from "redux";
import TempReducer from "./tempReducer";
import authReducer from "./authReducer";
import boolReducer from "./boolReducer";

export default combineReducers({
  temp: TempReducer,
  auth: authReducer,
  bool: boolReducer,
});
