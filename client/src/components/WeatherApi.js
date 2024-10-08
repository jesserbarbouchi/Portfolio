import axios from 'axios';
import { useEffect, useState } from 'react';
import sunnyImage from '../assets/img/sunny.png'; // Add appropriate weather images
import rainyImage from '../assets/img/rainy.png';
import cloudyImage from '../assets/img/cloudy.png';

const WeatherAPIIntegration = () => {
  const [weather, setWeather] = useState(null);
  const latitude = 45.5017; // Replace with desired latitude
  const longitude = -73.5673; // Replace with desired longitude

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        setWeather(response.data.current_weather);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [latitude, longitude]);

  const getWeatherImage = (code) => {
    switch (code) {
      case 0: // Clear sky
        return sunnyImage;
      case 1: // Partly cloudy
        return cloudyImage;
      case 2: // Overcast
        return cloudyImage;
      case 3: // Fog
        return cloudyImage;
      case 45: // Fog
        return rainyImage;
      case 51: // Drizzle
        return rainyImage;
      // Add more cases based on weather codes
      default:
        return cloudyImage; // Default image
    }
  };

  return (
    <div className="weather-section">
      <h2 className="text-center">Current Weather Data</h2>
      {weather ? (
        <div className="weather-card">
          <img src={getWeatherImage(weather.weathercode)} alt="Weather Icon" className="weather-icon" />
          <h3>Temperature: {weather.temperature} °C</h3>
          <p>Wind Speed: {weather.windspeed} km/h</p>
          <p>Wind Direction: {weather.winddirection}°</p>
          <p>Weather Code: {weather.weathercode}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherAPIIntegration;
