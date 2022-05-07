import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxes,
  faList,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import "./Filter.css";

const Filter = () => {
  const [Categories, fetchCategories] = useState([]);

  const getData = () => {
    fetch("https://6245f389e3450d61b0f926c1.mockapi.io/api/v1/categories")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        fetchCategories(res);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="filter-container">
      <div className="filter">
        <h3>Filters:</h3>
        <div className="categories">
          {Categories.map((category) => (
            <div className="filter">
              <input type="radio" value={category.name} name="hello" />
              <label for={category.name}>{category.name}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="view-switch">
        <a href="/">
          <FontAwesomeIcon
            icon={faList}
            size="2x"
            className="switch-icon active-icon"
          />
          <FontAwesomeIcon
            icon={faTableCellsLarge}
            size="2x"
            className="switch-icon "
          />
        </a>
      </div>
    </div>
  );
};

export default Filter;
