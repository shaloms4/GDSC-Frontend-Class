import React from 'react';

const SearchBar = ({ inputValue, setInputValue, handleSearch, handleKeyPress }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter a location"
      />
      <button onClick={handleSearch}>
        <i className="fa-solid fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
