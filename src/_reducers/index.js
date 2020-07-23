import { combineReducers } from "redux";
import alert from "./alert.reducers";
import authentication from "./auth.reducers";
import registration from "./register.reducers";

export default combineReducers({
  alert,
  authentication,
  registration,
});
