import { Button } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../actions/products";
import { getCookie } from "../../cookieCreator";

const ProductList = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.token);

  const fetchProductsHandler = () => {
    dispatch(fetchProducts(data.token));
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
