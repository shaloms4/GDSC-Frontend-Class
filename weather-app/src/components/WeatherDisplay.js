import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  return (
    <div id="weather-display">
      <h1 id="temperature">{weatherData.main.temp}°C</h1>
      <div id="location-description">
        <h2 id="location">{weatherData.name}</h2>
        <p id="date">
          {new Date().toLocaleDateString('en-GB', {
            weekday: 'long',
            day: 'numeric',
            month: 'short',
            year: '2-digit',
          })}
        </p>
      </div>
      <div id="weather-condition">
        <i className={`fa ${getIconClass(weatherData.weather[0].description)}`}></i>
        <div id="weather-description-container">
          <p id="weather-description">{weatherData.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
};

const getIconClass = (description) => {
  const weatherIcons = {
    'clear sky': 'fa-sun',
    'few clouds': 'fa-cloud-sun',
    'scattered clouds': 'fa-cloud',
    'broken clouds': 'fa-cloud-meatball',
    'shower rain': 'fa-cloud-showers-heavy',
    'rain': 'fa-cloud-showers-water',
    'thunderstorm': 'fa-bolt',
    'snow': 'fa-snowflake',
    'mist': 'fa-smog',
  };
  return weatherIcons[description] || 'fa-cloud';
};

export default WeatherDisplay;
