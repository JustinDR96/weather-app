import React, { useState } from "react";


const SearchBox = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div className="search-box">
      <i className="fa-solid fa-location-dot"></i>
      <input
        type="text"
        placeholder="Enter your location"
        value={city}
        onChange={handleInputChange}
      />
      <button
        className="fa-solid fa-magnifying-glass"
        onClick={handleSearch}
      ></button>
    </div>
  );
};

export default SearchBox;
