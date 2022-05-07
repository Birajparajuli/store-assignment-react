import React from "react";
import "./GridItem.css";
const GridItem = ({ product }) => {
  return (
    <div className="grid-box">
      <div className="grid-image">
        <img src={product.lorempixel} alt="product" />
      </div>
      <div className="grid-name-price">
        <h3>{product.itemName}</h3>
        <p>${product.price}</p>
      </div>
      <div className="grid-description">
        <p>{product.itemBrief}</p>
      </div>
    </div>
  );
};

export default GridItem;
