import React, { useState } from 'react'

const App = () => {

  let [city,setCity] = useState("");  
  let [weather,setWeather] = useState({ /* setting mumbai as default*/
                                        city: "Mumbai",
                                        country: "In",
                                        temperature: 28,
                                        condition: "cloudy",
                                        maxTemp: 31,
                                        minTemp: 24,
                                        humidity: 70,
                                        windSpeed: 5,
                                        pressure: 1212,
                                        visibility: 10
                                      });

  const handleSearch = () => {

    if(!city.trim())
    {
      alert("Enter a city name");
      return;
    }

    setWeather({
    city: city,
    country: "IN",
    temperature: 35,
    condition: "Sunny",
    maxTemp: 38,
    minTemp: 29,
    humidity: 50,
    windSpeed: 10,
    pressure: 1008,
    visibility: 8
    });

    console.log(city);
  }

  return (
    <div className='container'>

      <h1> Weather App </h1>
      <section className="search-section">
        <input
        type='text'
        placeholder='Enter City Name' 
        value={city}
        onChange={(e)=>setCity(e.target.value)}
        />

        <button onClick={handleSearch}>
          Search
        </button>
      </section>

      <section  className='weather-section'>
        <div className='weather-card'>
          <h2>{weather.city}, {weather.country}</h2>

          <p>Sunday, 07 Jun 2026 | 07:30 AM</p>

          <h1>{weather.temperature}°C</h1>

          <p>{weather.condition}</p>

          <div className="temp-range">
            <span>Max: {weather.maxTemp}°C</span> 
            <span>Min: {weather.minTemp}°C</span>
          </div>

        </div>
      </section>

      <section className="metrics-section">
        <div className='metric-card'>
          <h4>Humidity</h4>
          <p>{weather.humidity}%</p>  
        </div>

        <div className='metric-card'>
          <h4>Wind Speed</h4>
          <p>{weather.windSpeed} km/h</p>  
        </div>

        <div className='metric-card'>
          <h4>Pressure</h4>
          <p>{weather.pressure} hPa</p>  
        </div>

        <div className='metric-card'>
          <h4>Visibility</h4>
          <p>{weather.visibility} Km</p>  
        </div> 

      </section>

    </div>
  )
}

export default App;