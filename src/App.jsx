import React from 'react'

const App = () => {
  return (
    <div className='container'>

      <h1> Weather App </h1>
      <section>
        {/* Search Section */}
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

          <p>Day, DD MM YYYY | Time</p>

          <h1>28°C</h1>

          <p>Cloudy</p>

          <div>
            <span>Max: 31°C</span>
            <span>Min: 24°C</span>
          </div>

        </div>
      </section>

    </div>
  )
}

export default App;