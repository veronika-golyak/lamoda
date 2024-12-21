import React, { useState, useEffect, useMemo, useCallback } from "react";
import Chance from "chance";
import useFilters from "./useFilters";
import ProductList from "./ProductList";
import "./css/App.css";
import SearchBar from "./features/SearchBar";
import SortFilter from "./features/SortFilter";
import TotalProducts from "./features/TotalProducts";
import ColorFilter from "./features/ColorFilter";
import PriceFilter from "./features/PriceFilter";

const chance = new Chance();

const colors = ["белый", "чёрный", "коричневый", "зелёный", "голубой"];
const categories = [
  "Майка",
  "Джинсы",
  "Жакет",
  "Рубашка",
  "Юбка",
  "Сумка",
  "Платье",
  "Свитшот",
  "Шорты",
  "Худи",
];

const imageUrls = [
  "/images/1.webp",
  "/images/2.webp",
  "/images/3.webp",
  "/images/4.webp",
  "/images/5.webp",
  "/images/6.webp",
  "/images/7.webp",
  "/images/8.webp",
  "/images/9.webp",
  "/images/10.webp",
];

const createProduct = () => ({
  id: chance.guid(),
  name: chance.word(),
  description: chance.sentence({ words: 10 }),
  color: chance.pickone(colors),
  category: chance.pickone(categories),
  price: chance.integer({ min: 10, max: 9999 }),
  rating: chance.floating({ min: 0, max: 5, fixed: 1 }),
  imageUrl: chance.pickone(imageUrls),
});

const products = Array.from({ length: 10 }, createProduct);

const App = () => {
  const {
    searchTerm,
    selectedColors,
    priceRange,
    handleSearch,
    handleColorChange,
    handlePriceChange,
    filters,
    sortOrder,
    handleSortChange,
    handlePriceFocus,
  } = useFilters(colors);

  const sortedProducts = useMemo(() => {
    return products
      .filter((product) => filters.every((filter) => filter(product)))
      .sort((a, b) => {
        if (sortOrder === "priceAsc") return a.price - b.price;
        if (sortOrder === "priceDesc") return b.price - a.price;
        if (sortOrder === "ratingDesc") return b.rating - a.rating;
        return 0;
      });
  }, [filters, sortOrder]);

  useEffect(() => {
    console.log("Продукты обновлены:", sortedProducts.length);
  }, [sortedProducts.length]);

  return (
    <div className="app">
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      <SortFilter sortOrder={sortOrder} handleSortChange={handleSortChange} />
      <div className="filters-and-products">
        <div className="filters-container">
          <ColorFilter
            colors={colors}
            selectedColors={selectedColors}
            handleColorChange={handleColorChange}
          />
          <PriceFilter
            priceRange={priceRange}
            handlePriceChange={handlePriceChange}
            handlePriceFocus={handlePriceFocus}
          />
          <TotalProducts count={sortedProducts.length} />
        </div>
        <ProductList products={sortedProducts} />
      </div>
    </div>
  );
};

export default App;