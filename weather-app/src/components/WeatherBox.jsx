import React from "react";

const WeatherBox = ({ weatherData }) => {
  return (
    <>
      {weatherData && weatherData.main && (
        <div className="weather-box">
          <img src="" />
          <p className="temperature">{Math.round(weatherData.main.temp)}°C</p>
          <p className="description">{weatherData.weather[0].description}</p>
        </div>
      )}
    </>
  );
};

export default WeatherBox;
