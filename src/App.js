import axios from 'axios';
import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const [place,setPlace] = useState("Seoul");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=5c1418d2691f1c0b65a2911bef502740`

  const getWeatherData = async () => {
    try {
      const data = await axios({
        method: 'get',
        url: url
      })
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  

  return (
    <div className="App">
      <h1>React Weather App</h1>
      <main>
        
        <input type='text' value={place} onChange={(e) => setPlace(e.target.value) }/>
        <button onClick={getWeatherData}>Search</button>
      </main>
      <footer>
        Page created by Syahri
      </footer>
    </div>
  );
}

export default App;
