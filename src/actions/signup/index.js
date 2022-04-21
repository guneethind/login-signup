import fakeAPI from "../../apis/fakeAPI";

export const setSignupValues = (values) => {
  return async (dispatch) => {
    try {
      const response = await fakeAPI.post("/auth/register", {
        email: `${values.email}`,
        password: `${values.password}`,
        name: `${values.name}`,
        address: `${values.address}`,
        phone: `${values.phone}`,
        gender: `${values.gender}`,
      });
      if (response?.status === 200 && response?.data?.access_token) {
        console.log(response.status);
        dispatch({
          type: "SET_SIGNUP_VALUES",
        });
      } else if (response?.status !== 200) {
        dispatch({
          type: "SET_SIGNUP_ERROR",
          payload: response.data,
        });
      }
    } catch (e) {
      dispatch({
        type: "SET_SIGNUP_ERROR",
        payload: e.response.data,
      });
    }
  };
};

export const setSignupEmpty = () => {
  console.log("hello");
  return {
    type: "SET_SIGNUP_EMPTY",
  };
};
