import React from 'react';

const WeatherDetails = ({ weatherData }) => {
  return (
    <div id="weather-details">
      <h2>Weather Details</h2>
      <div className="detail">
        <span className="name">Temperature</span>
        <span className="value">{weatherData.main.temp}°C</span>
      </div>
      <div className="detail">
        <span className="name">Humidity</span>
        <span className="value">{weatherData.main.humidity}%</span>
      </div>
      <div className="detail">
        <span className="name">Wind Speed</span>
        <span className="value">{weatherData.wind.speed} m/s</span>
      </div>
    </div>
  );
};

export default WeatherDetails;
