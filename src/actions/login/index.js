import fakeAPI from "../../apis/fakeAPI";
import { cookieCreator } from "../../cookieCreator";

export const setLoginValues = ({ email, password, remember }) => {
  return async (dispatch) => {
    try {
      const response = await fakeAPI.post("/auth/login", {
        email: `${email}`,
        password: `${password}`,
      });
      if (response?.data?.access_token) {
        cookieCreator("token", response.data.access_token, 5);
        if (remember) {
          dispatch({
            type: "SET_LOGIN_VALUES",
            payload: response.data,
          });
        } else {
          dispatch({
            type: "SET_LOGIN_SUCCESS_TRUE",
          });
        }
      } else if (response?.data?.status === 401) {
        dispatch({
          type: "SET_LOGIN_ERROR",
          payload: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: "SET_LOGIN_ERROR",
        payload: e.response.data,
      });
    }
  };
};

export const setLoginEmpty = () => {
  return async (dispatch) => {
    cookieCreator("token", "", 0);
    dispatch({
      type: "SET_LOGIN_EMPTY",
    });
  };
};
