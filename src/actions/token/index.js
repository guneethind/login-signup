export const setTokenFromCookie = (token) => {
  return {
    type: "SET_TOKEN_FROM_COOKIE",
    payload: token,
  };
};

export const setTokenEmpty = () => {
  return {
    type: "SET_TOKEN_EMPTY",
  };
};
