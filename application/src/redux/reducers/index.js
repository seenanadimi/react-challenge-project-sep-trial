import { combineReducers } from "redux";
import TempReducer from "./tempReducer";
import authReducer from "./authReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  temp: TempReducer,
  auth: authReducer,
  orderList: orderReducer,
});
