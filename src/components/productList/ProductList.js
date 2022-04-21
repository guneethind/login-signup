import { Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../actions/products";

const ProductList = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.login.loginSuccess);

  const fetchProductsHandler = () => {
    dispatch(fetchProducts(data.access_token));
  };
  return (
    <>
      <div>productList</div>
      <Button onClick={fetchProductsHandler} type="primary">
        Hello{" "}
      </Button>
    </>
  );
};

export default ProductList;
