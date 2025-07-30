import * as weatherServices from './services/weatherServices';
import WeatherSearch from './components/WeatherSearch/WeatherSearch';
import WeatherDetails from './components/weatherDetails/WeatherDetails';
import { useState } from 'react';
// src/App.jsx
const App = () => {
  const [weather,setWeather] = useState({})

  const fetchData = async (city) => {
    const data = await weatherServices.show(city);
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_c,
      condition: data.current.condition.text,
    };
    setWeather(newWeatherState);
  };

  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch fetchData={fetchData}/>
      <WeatherDetails {...weather}/>
    </main>
  );
};

export default App
