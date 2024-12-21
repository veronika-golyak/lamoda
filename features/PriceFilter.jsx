import React from "react";

const PriceFilter = ({ priceRange, handlePriceChange, handlePriceFocus }) => (
  <div className="price-filter">
    <h3 className="filter-title">По цене</h3>
    <div className="price-inputs">
      <label>
        <input
          type="number"
          value={priceRange.minPrice}
          onFocus={() => handlePriceFocus("minPrice")}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "") {
              handlePriceChange("minPrice", "");
            } else if (!isNaN(value) && value >= 0 && value <= 10000) {
              handlePriceChange("minPrice", Number(value));
            }
          }}
          className="price-input"
          placeholder="От"
        />
      </label>
      <label>
        <input
          type="number"
          value={priceRange.maxPrice}
          onFocus={() => handlePriceFocus("maxPrice")}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "") {
              handlePriceChange("maxPrice", "");
            } else if (!isNaN(value) && value >= 0 && value <= 10000) {
              handlePriceChange("maxPrice", Number(value));
            }
          }}
          className="price-input"
          placeholder="До"
        />
      </label>
    </div>
  </div>
);

export default PriceFilter;