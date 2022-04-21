const SET_LOGIN_VALUES = "SET_LOGIN_VALUES";
const SET_LOGIN_EMPTY = "SET_LOGIN_EMPTY";
const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";

const initialState = {
  loginSuccess: {},
  loginFailed: {},
};

export const setLoginValuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_VALUES:
      return {
        ...state,
        loginSuccess: action.payload,
        loginFailed: {},
      };

    case SET_LOGIN_ERROR:
      return {
        ...state,
        loginSuccess: {},
        loginFailed: action.payload,
      };

    case SET_LOGIN_EMPTY:
      return {
        ...state,
        loginSuccess: {},
        loginFailed: {},
      };

    default:
      return state;
  }
};
