import React from 'react'

function Weather({city,temp, wth}) {
  return (
    <div>
        <p>{city}</p>
          <p>{temp}ºC</p>
          <p>{wth}</p>
    
    </div>
  )
}

export default Weather