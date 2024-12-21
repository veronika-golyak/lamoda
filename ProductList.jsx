import React from "react";
import "./css/ProductList.css"; // Импорт стилей для списка товаров

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Категория: {product.category}</p>
            <p>Цвет: {product.color}</p>
            <p>Цена: {product.price} byn</p>
            <p>Рейтинг: {product.rating}</p>
          </div>
        ))
      ) : (
        <p>По вашему запросу ничего не найдено.</p>
      )}
    </div>
  );
};

export default ProductList;
