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

      </section>

      <section>
        Weather Section
      </section>

    </div>
  )
}

export default App;