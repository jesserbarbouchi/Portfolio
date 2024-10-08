import axios from 'axios';
import { useEffect, useState } from 'react';

const WeatherAPIIntegration = () => {
  const [weather, setWeather] = useState(null);
  const latitude = 35.6895; // Replace with desired latitude
  const longitude = 139.6917; // Replace with desired longitude

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

  return (
    <div className="weather-section">
      <h2>Current Weather Data</h2>
      {weather ? (
        <div className="weather-card">
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
