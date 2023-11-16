import React from "react";

const WeatherDetails = ({ weatherData }) => {
  return (
    <>
      {weatherData && weatherData.main && weatherData.wind && (
        <div className="weather-details fadeIn">
          <div className="humidity">
            <i className="fa-solid fa-water"></i>
            <div className="text">
              <span>{weatherData.main.humidity}%</span>
              <p>Humidity</p>
            </div>
          </div>
          <div className="wind">
            <i className="fa-solid fa-wind"></i>
            <div className="text">
              <span>{weatherData.wind.speed} Km/h</span>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherDetails;
