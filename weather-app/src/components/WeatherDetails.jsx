import React from "react";

const WeatherDetails = () => {
  return (
    <>
      <div className="weather-details">
        <div className="humidity">
          <i className="fa-solid fa-water"></i>
          <div className="text">
            <span></span>
            <p>Humidity</p>
          </div>
        </div>
        <div className="wind">
          <i className="fa-solid fa-wind"></i>
          <div className="text">
            <span></span>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default WeatherDetails;
