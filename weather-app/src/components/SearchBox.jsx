import React from "react";

const SearchBox = () => {
  return (
    <>
      <div className="search-box">
        <i className="fa-solid fa-location-dot"></i>
        <input type="text" placeholder="Enter your location" />
        <button className="fa-solid fa-magnifying-glass"></button>
      </div>
    </>
  );
};

export default SearchBox;
