const SET_REMEMBER_ME = "SET_REMEMBER_ME";

const rememberMe = true;

export const setRememberMeReducer = (state = rememberMe, action) => {
  switch (action.type) {
    case SET_REMEMBER_ME:
      return {
        ...state,
        rememberMe: action.payload,
      };
    default:
      return state;
  }
};
