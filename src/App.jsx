import React, { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import WeatherBox from "./components/WeatherBox";
import WeatherDetails from "./components/WeatherDetails";
import NotFound from "./components/NotFound";
import "./assets/styles/main.scss";
const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);
  const [containerHeight, setContainerHeight] = useState("min-content");

  const handleSearch = async (city) => {
    const APIKey = import.meta.env.VITE_REACT_APP_API_KEY;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
      );
      const json = await response.json();

      if (json.cod === "404") {
        setWeatherData(null);
        setError(true);
        setContainerHeight("400px");
      } else {
        setWeatherData(json);
        setError(false);
        setContainerHeight("590px");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(null);
      setError(true);
      setContainerHeight("400px");
    }
  };

  return (
    <main className="container" style={{ height: containerHeight }}>
      <SearchBox onSearch={handleSearch} />
      {error ? (
        <NotFound />
      ) : (
        <>
          {weatherData && <WeatherBox weatherData={weatherData} />}
          {weatherData && <WeatherDetails weatherData={weatherData} />}
        </>
      )}
    </main>
  );
};

export default App;
