// import { useState } from "react";
// import "./css/Filters.css";

// const useFilters = (colors) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [priceRange, setPriceRange] = useState({ minPrice: "", maxPrice: "" });
//   const [sortOrder, setSortOrder] = useState("priceAsc");

//   const handleSearch = (e) => setSearchTerm(e.target.value);

//   const handleColorChange = (color) => {
//     setSelectedColors((prev) =>
//       prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color],
//     );
//   };

//   const handlePriceChange = (key, value) => {
//     setPriceRange((prev) => ({ ...prev, [key]: value }));
//   };

//   const handlePriceFocus = (key) => {
//     setPriceRange((prev) => ({ ...prev, [key]: "" })); // Очищаем поле при фокусе
//   };

//   const handleSortChange = (order) => {
//     setSortOrder(order);
//   };

//   const filters = [
//     (product) =>
//       product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       product.description.toLowerCase().includes(searchTerm.toLowerCase()),
//     (product) => selectedColors.length === 0 || selectedColors.includes(product.color),
//     (product) =>
//       product.price >= (priceRange.minPrice || 0) && product.price <= (priceRange.maxPrice || 9999),
//   ];

//   return {
//     searchTerm,
//     selectedColors,
//     priceRange,
//     handleSearch,
//     handleColorChange,
//     handlePriceChange,
//     handlePriceFocus,
//     filters,
//     sortOrder,
//     handleSortChange,
//   };
// };

// export default useFilters;

import { useState } from "react";
import "./css/Filters.css";

const useFilters = (colors) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState({ minPrice: "", maxPrice: "" });
  const [sortOrder, setSortOrder] = useState("priceAsc");

  const handleSearch = (value) => {
    setSearchTerm(value);
  };
  const handleColorChange = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color],
    );
  };

  const handlePriceChange = (key, value) => {
    setPriceRange((prev) => ({ ...prev, [key]: value }));
  };

  const handlePriceFocus = (key) => {
    setPriceRange((prev) => ({ ...prev, [key]: "" })); // Очищаем поле при фокусе
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const filters = [
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()),
    (product) => selectedColors.length === 0 || selectedColors.includes(product.color),
    (product) =>
      product.price >= (priceRange.minPrice || 0) && product.price <= (priceRange.maxPrice || 9999),
  ];

  return {
    searchTerm,
    selectedColors,
    priceRange,
    handleSearch,
    handleColorChange,
    handlePriceChange,
    handlePriceFocus,
    filters,
    sortOrder,
    handleSortChange,
  };
};

export default useFilters;