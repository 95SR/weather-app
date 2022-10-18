import React from 'react'

function Weather({city,temp, wth}) {
  return (
    <div>
        <p className='city'>{city}</p>
          <p className='temp'>{temp}ºC</p>
          <p className='wth'>{wth}</p>
    
    </div>
  )
}

export default Weather