import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="single-product">
      <div className="product-image">
        <img src={product.lorempixel} alt="product" />
      </div>
      <div className="product-name">
        <h3>{product.itemName}</h3>
      </div>
      <div className="product-description">
        <p>{product.itemBrief}</p>
      </div>
      <div className="product-price">
        <p> ${product.price}</p>
      </div>
    </div>
  );
};

export default Product;
