const SET_LOGIN_VALUES = "SET_LOGIN_VALUES";
const SET_LOGIN_EMPTY = "SET_LOGIN_EMPTY";
const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";
const SET_LOGIN_SUCCESS_TRUE = "SET_LOGIN_SUCCESS_TRUE";

const initialState = {
  loginSuccess: false,
  loginData: {},
  loginFailed: {},
};

export const setLoginValuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_SUCCESS_TRUE:
      return {
        ...state,
        loginSuccess: true,
        loginData: {},
        loginFailed: {},
      };

    case SET_LOGIN_VALUES:
      return {
        ...state,
        loginSuccess: true,
        loginData: action.payload,
        loginFailed: {},
      };

    case SET_LOGIN_ERROR:
      return {
        ...state,
        loginSuccess: false,
        loginData: {},
        loginFailed: action.payload,
      };

    case SET_LOGIN_EMPTY:
      return {
        ...state,
        loginSuccess: false,
        loginData: {},
        loginFailed: {},
      };

    default:
      return state;
  }
};
