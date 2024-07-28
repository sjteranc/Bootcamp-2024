import { useState } from 'react';
import './App.css';

// Mock data for weather conditions
const mockWeatherData = {
 'New York': {
   temperature: '22°C',
   humidity: '56%',
   windSpeed: '15 km/h'
 },
 'Los Angeles': {
   temperature: '27°C',
   humidity: '45%',
   windSpeed: '10 km/h',
 },
 'London': {
   temperature: '15°C',
   humidity: '70%',
   windSpeed: '20 km/h'
 },
};

function HistoryButton({ city, onClick }) {
 return (
   <button key={city} id="cityButton" onClick={() => onClick(city)}>
     {city}
   </button>
 );
}

function WeatherDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(null);
  
  const handleSearch = () => {
    const city = searchTerm.trim();
    if (mockWeatherData[city]) {
      setWeatherData(mockWeatherData[city]);
      setError(null);
      if (!history.includes(city)) {
        setHistory([...history, city]);
      }
    } else {
      setWeatherData(null);
      setError('City not found.');
    }
  };

  const handleHistoryClick = (city) => {
    setWeatherData(mockWeatherData[city]);
    setError(null);
  };

  return (
    <div id="weatherDashboard">
      <input
        id="cityInput"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button id="searchButton" onClick={handleSearch}>Search</button>
      <div id="weatherData">
        {weatherData ? (
          <div>
            <p>Temperature: {weatherData.temperature}</p>
            <p>Humidity: {weatherData.humidity}</p>
            <p>Wind Speed: {weatherData.windSpeed}</p>
          </div>
        ) : (
          error && <p>{error}</p>
        )}
      </div>
      <div id="history">
        {history.map((city) => (
          <HistoryButton key={city} city={city} onClick={handleHistoryClick} />
        ))}
      </div>
    </div>
  );
}

export default WeatherDashboard;
