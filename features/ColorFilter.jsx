import React, { useCallback } from "react";

const ColorFilter = ({ colors, selectedColors, handleColorChange }) => {
  const handleChange = useCallback(
    (color) => {
      handleColorChange(color);
    },
    [handleColorChange],
  );

  return (
    <div className="filters">
      <h3 className="filter-title">По цвету</h3>
      <div className="color-options">
        {colors.map((color) => (
          <label key={color} className="color-option">
            <input
              type="checkbox"
              checked={selectedColors.includes(color)}
              onChange={() => handleChange(color)}
            />
            {color}
          </label>
        ))}
      </div>
    </div>
  );
};

export default ColorFilter;
