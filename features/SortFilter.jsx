import React from "react";

const SortFilter = ({ sortOrder, handleSortChange }) => (
  <div className="sort-filter">
    <div className="filter-buttons">
      <button
        onClick={() => handleSortChange("priceAsc")}
        className={`filter-button ${sortOrder === "priceAsc" ? "active" : ""}`}
      >
        Сначала дешевые
      </button>
      <button
        onClick={() => handleSortChange("priceDesc")}
        className={`filter-button ${sortOrder === "priceDesc" ? "active" : ""}`}
      >
        Сначала дорогие
      </button>
      <button
        onClick={() => handleSortChange("ratingDesc")}
        className={`filter-button ${sortOrder === "ratingDesc" ? "active" : ""}`}
      >
        Сначала популярные
      </button>
    </div>
  </div>
);

export default SortFilter;
