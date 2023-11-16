import React from "react";

const WeatherDetails = ({ weatherData }) => {
  return (
    <>
      {weatherData && weatherData.main && weatherData.wind && (
        <div className="weather-details">
          <div className="humidity">
            <i className="fa-solid fa-water"></i>
            <div className="text">
              <span></span>
              <p>Humidity: {weatherData.main.humidity}%</p>
            </div>
          </div>
          <div className="wind">
            <i className="fa-solid fa-wind"></i>
            <div className="text">
              <span></span>
              <p>Wind Speed: {weatherData.wind.speed}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherDetails;
