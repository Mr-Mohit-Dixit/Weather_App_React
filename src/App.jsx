import React from 'react'

const App = () => {
  return (
    <div className='container'>

      <h1> Weather App </h1>
      <section className="search-section">
        <input
        type='text'
        placeholder='Enter City Name' 
        />

        <button>
          Search
        </button>
      </section>

      <section  className='weather-section'>
        <div className='weather-card'>
          <h2>City, Country</h2>

          <p>Sunday, 07 Jun 2026 | 07:30 AM</p>

          <h1>28°C</h1>

          <p>Cloudy</p>

          <div className="temp-range">
            <span>Max: 31°C</span>
            <span>Min: 24°C</span>
          </div>

        </div>
      </section>

      <section className="metrics-section">
        <div className='metric-card'>
          <h4>Humidity</h4>
          <p>70%</p>  
        </div>

        <div className='metric-card'>
          <h4>Wind Speed</h4>
          <p>5 km/h</p>  
        </div>

        <div className='metric-card'>
          <h4>Pressure</h4>
          <p>1212hPa</p>  
        </div>

        <div className='metric-card'>
          <h4>Visibility</h4>
          <p>10 Km</p>  
        </div> 

      </section>

    </div>
  )
}

export default App;