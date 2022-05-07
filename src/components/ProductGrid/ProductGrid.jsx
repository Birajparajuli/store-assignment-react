import React, { useState, useEffect } from "react";
import GridItem from "../GridItem/GridItem";
import "./ProductGrid.css";

const ProductGrid = () => {
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
    <div className="product-grid">
      {Products.map((product) => (
        <GridItem key={product.productId} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
