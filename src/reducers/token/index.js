const SET_TOKEN_FROM_COOKIE = "SET_TOKEN_FROM_COOKIE";
const SET_TOKEN_EMPTY = "SET_TOKEN_EMPTY";

const initialstate = {
  token: "",
};

export const setTokenFromCookieReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SET_TOKEN_FROM_COOKIE:
      return {
        ...state,
        token: action.payload,
      };
    case SET_TOKEN_EMPTY:
      return {
        ...state,
        token: "",
      };
    default:
      return state;
  }
};
