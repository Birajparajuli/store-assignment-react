import React, { useState, useEffect } from "react";

import Product from "../Product/Product";

import "./ProductList.css";

const ProductList = () => {
  const [Products, fetchProducts] = useState([]);

  const getData = () => {
    fetch(
      "https://6245f389e3450d61b0f926c1.mockapi.io/api/v1/categories/2/items"
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.items);
        fetchProducts(res.items);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div product-list>
      {Products.map((product) => (
        <Product key={product.productId} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
