import { combineReducers } from "redux";
import { setLoginValuesReducer } from "./login";
import { setRememberMeReducer } from "./rememberMe";
import { setSignupValuesReducer } from "./signup";

const rootreducer = combineReducers({
  login: setLoginValuesReducer,
  signup: setSignupValuesReducer,
  // remember: setRememberMeReducer,
});

export default rootreducer;
