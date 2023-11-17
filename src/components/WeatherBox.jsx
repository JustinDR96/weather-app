import React from "react";

const WeatherBox = ({ weatherData }) => {
  const getWeatherImage = () => {
    switch (weatherData.weather[0].main) {
      case "Clear":
        return "./images/clear.png";
      case "Rain":
        return "./images/rain.png";
      case "Snow":
        return "./images/snow.png";
      case "Clouds":
        return "./images/cloud.png";
      case "Mist":
        return "./images/mist.png";
      default:
        return "";
    }
  };

  return (
    <>
      {weatherData && weatherData.main && (
        <div className="weather-box fadeIn">
          <img src={getWeatherImage()} alt="Weather" />
          <p className="temperature">{Math.round(weatherData.main.temp)}°C</p>
          <p className="description">{weatherData.weather[0].description}</p>
        </div>
      )}
    </>
  );
};

export default WeatherBox;
