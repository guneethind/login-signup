import { combineReducers } from "redux";
import { setLoginValuesReducer } from "./login";
import { setSignupValuesReducer } from "./signup";
import { setTokenFromCookieReducer } from "./token";

const rootreducer = combineReducers({
  login: setLoginValuesReducer,
  signup: setSignupValuesReducer,
  token: setTokenFromCookieReducer,
});

export default rootreducer;
