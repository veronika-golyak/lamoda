// import React from "react";
// import { FaSearch } from "react-icons/fa";

// const SearchBar = ({ searchTerm, handleSearch }) => (
//   <div className="search-container">
//     <input
//       type="text"
//       placeholder="Поиск"
//       value={searchTerm}
//       onChange={handleSearch}
//       className="search-input"
//     />
//     <FaSearch className="search-icon" />
//   </div>
// );

// export default SearchBar;

import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchTerm, handleSearch }) => {
  const handleInputChange = (event) => {
    const value = event.target.value;

    // Регулярное выражение для разрешения только букв
    if (/^[a-zA-Zа-яА-ЯёЁ]*$/.test(value) || value === "") {
      handleSearch(value); // Вызываем оригинальный обработчик для допустимого значения
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Поиск"
        value={searchTerm}
        onChange={handleInputChange} // Используем новый обработчик
        className="search-input"
      />
      <FaSearch className="search-icon" />
    </div>
  );
};

export default SearchBar;



