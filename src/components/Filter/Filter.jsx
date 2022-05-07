import React, { useState, useEffect } from "react";
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
        <a href="#">
          <svg width="28px" height="28px" viewBox="0 0 28 28" version="1.1">
            <g
              id="🔍-Product-Icons"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="ic_fluent_grid_28_filled"
                fill="#212121"
                fill-rule="nonzero"
              >
                <path
                  d="M10.75,15 C11.9926407,15 13,16.0073593 13,17.25 L13,22.75 C13,23.9926407 11.9926407,25 10.75,25 L5.25,25 C4.00735931,25 3,23.9926407 3,22.75 L3,17.25 C3,16.0073593 4.00735931,15 5.25,15 L10.75,15 Z M22.75,15 C23.9926407,15 25,16.0073593 25,17.25 L25,22.75 C25,23.9926407 23.9926407,25 22.75,25 L17.25,25 C16.0073593,25 15,23.9926407 15,22.75 L15,17.25 C15,16.0073593 16.0073593,15 17.25,15 L22.75,15 Z M10.75,3 C11.9926407,3 13,4.00735931 13,5.25 L13,10.75 C13,11.9926407 11.9926407,13 10.75,13 L5.25,13 C4.00735931,13 3,11.9926407 3,10.75 L3,5.25 C3,4.00735931 4.00735931,3 5.25,3 L10.75,3 Z M22.75,3 C23.9926407,3 25,4.00735931 25,5.25 L25,10.75 C25,11.9926407 23.9926407,13 22.75,13 L17.25,13 C16.0073593,13 15,11.9926407 15,10.75 L15,5.25 C15,4.00735931 16.0073593,3 17.25,3 L22.75,3 Z"
                  id="🎨-Color"
                ></path>
              </g>
            </g>
          </svg>
        </a>
        <a href="#">
          <svg width="28px" height="28px" viewBox="0 0 28 28" version="1.1">
            <g
              id="🔍-Product-Icons"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="ic_fluent_grid_28_filled"
                fill="#212121"
                fill-rule="nonzero"
              >
                <path
                  d="M10.75,15 C11.9926407,15 13,16.0073593 13,17.25 L13,22.75 C13,23.9926407 11.9926407,25 10.75,25 L5.25,25 C4.00735931,25 3,23.9926407 3,22.75 L3,17.25 C3,16.0073593 4.00735931,15 5.25,15 L10.75,15 Z M22.75,15 C23.9926407,15 25,16.0073593 25,17.25 L25,22.75 C25,23.9926407 23.9926407,25 22.75,25 L17.25,25 C16.0073593,25 15,23.9926407 15,22.75 L15,17.25 C15,16.0073593 16.0073593,15 17.25,15 L22.75,15 Z M10.75,3 C11.9926407,3 13,4.00735931 13,5.25 L13,10.75 C13,11.9926407 11.9926407,13 10.75,13 L5.25,13 C4.00735931,13 3,11.9926407 3,10.75 L3,5.25 C3,4.00735931 4.00735931,3 5.25,3 L10.75,3 Z M22.75,3 C23.9926407,3 25,4.00735931 25,5.25 L25,10.75 C25,11.9926407 23.9926407,13 22.75,13 L17.25,13 C16.0073593,13 15,11.9926407 15,10.75 L15,5.25 C15,4.00735931 16.0073593,3 17.25,3 L22.75,3 Z"
                  id="🎨-Color"
                ></path>
              </g>
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Filter;
