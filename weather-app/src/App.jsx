import React, { useState } from "react";
import "./assets/styles/main.scss"; // Make sure to import your main styles
import SearchBox from "./components/SearchBox";
import WeatherBox from "./components/WeatherBox";
import WeatherDetails from "./components/WeatherDetails";
import NotFound from "./components/NotFound";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);
  const [containerHeight, setContainerHeight] = useState("590px");

  const handleSearchResult = (data, hasError) => {
    if (hasError) {
      setWeatherData(null);
      setError(true);
      setContainerHeight("400px");
    } else {
      setWeatherData(data);
      setError(false);
      setContainerHeight("590px");
    }
  };

  return (
    <main className="container" style={{ height: containerHeight }}>
      <SearchBox onSearchResult={handleSearchResult} />
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
}

export default App;
