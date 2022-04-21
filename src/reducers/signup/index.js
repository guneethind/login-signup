const SET_SIGNUP_VALUES = "SET_SIGNUP_VALUES";
const SET_SIGNUP_ERROR = "SET_SIGNUP_ERROR";
const SET_SIGNUP_EMPTY = "SET_SIGNUP_EMPTY";

const initialState = {
  signupSuccess: false,
  signupFailed: {},
};

export const setSignupValuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIGNUP_VALUES:
      return {
        ...state,
        signupFailed: {},
        signupSuccess: true,
      };

    case SET_SIGNUP_ERROR:
      return {
        ...state,
        signupSuccess: false,
        signupFailed: action.payload,
      };

    case SET_SIGNUP_EMPTY:
      return {
        ...state,
        signupSuccess: false,
        signupFailed: {},
      };

    default:
      return state;
  }
};
