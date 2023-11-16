import React, { useState } from "react";

const SearchBox = ({ onSearchResult, weatherData }) => {
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = async () => {
    console.log(weatherData);
    const APIKey = "0bd93777b73a9d55a014861565a6a41e";
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
      );
      const json = await response.json();

      // Pass the result to the callback in App component
      onSearchResult(json, false);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      // Pass an error to the callback in App component
      onSearchResult(null, true);
    }
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
