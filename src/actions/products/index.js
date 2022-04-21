import fakeAPI from "../../apis/fakeAPI";

export const fetchProducts = (token, id = "") => {
  return async (dispatch) => {
    const response = await fakeAPI.get(`/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
};
