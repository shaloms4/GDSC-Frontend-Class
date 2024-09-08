import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import WeatherDisplay from '../components/WeatherDisplay';
import WeatherDetails from '../components/WeatherDetails';

const Home = () => {
  const [city, setCity] = useState('London');
  const [weatherData, setWeatherData] = useState(null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    getWeather(city);
  }, [city]);

  useEffect(() => {
    if (weatherData) {
      changeBackground(weatherData.weather[0].description);
    }
  }, [weatherData]);

  const getWeather = (city) => {
    const apiKey = 'd0a212324f2eda2d3bc9b874b1baeef0';
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(currentWeatherUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          setWeatherData(data);
        } else {
          console.error('Error fetching weather data:', data.message);
        }
      })
      .catch((error) => console.error('Error fetching weather data:', error));
  };

  const handleSearch = () => {
    if (inputValue) {
      setCity(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const changeBackground = (description) => {
    let backgroundImage = '';
    if (/clear/i.test(description)) {
      backgroundImage = 'url("/assets/images/sunny.jpg")';
    } else if (/cloud/i.test(description)) {
      backgroundImage = 'url("/assets/images/cloudy.jpg")';
    } else if (/rain|shower/i.test(description)) {
      backgroundImage = 'url("/assets/images/rainy.jpg")';
    } else if (/snow/i.test(description)) {
      backgroundImage = 'url("/assets/images/snow.jpg")';
    } else if (/mist|haze/i.test(description)) {
      backgroundImage = 'url("/assets/images/mist.jpg")';
    } else {
      backgroundImage = 'url("/assets/images/default.jpg")';
    }
    
    document.body.style.backgroundImage = backgroundImage;
  };

  return (
    <div className="container">
      <h1 id="app-title">s.weather</h1>
      {weatherData && (
        <>
          <WeatherDisplay weatherData={weatherData} />
          <WeatherDetails weatherData={weatherData} />
        </>
      )}
      <div className="form-container">
        <SearchBar
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSearch={handleSearch}
          handleKeyPress={handleKeyPress}
        />
        <ul className="city-list">
          {['Canada', 'Frane', 'New York'].map((city) => (
            <li key={city} onClick={() => setCity(city)}>
              {city}
            </li>
          ))}
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default Home;
