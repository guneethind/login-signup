import { message } from "antd";
import fakeAPI from "../../apis/fakeAPI";

export const setLoginValues = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const response = await fakeAPI.post("/auth/login", {
        email: `${email}`,
        password: `${password}`,
      });
      if (response?.data?.access_token) {
        dispatch({
          type: "SET_LOGIN_VALUES",
          payload: response.data,
        });
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
    dispatch({
      type: "SET_LOGIN_EMPTY",
    });
  };
};
