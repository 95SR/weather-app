import axios from 'axios';
import { useState} from 'react';
import './App.css';
import Weather from './Weather';

function App() {
  const [place,setPlace] = useState("Seoul");
  const [result, setResult] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=5c1418d2691f1c0b65a2911bef502740&units=metric`

  const getWeatherData = async () => {
    try {
      const data = await axios({
        method: 'get',
        url: url
      })
      console.log(data)
      setResult(data)
      

    } catch (error) {
      console.log(error)
    }
  }

  

  const city='ssi'
  const temp= 20
  const wth = 'hot'
  

  return (
    <div className="App">
      <h1>React Weather App</h1>
      <main>
        
        <input type='text' value={place} onChange={(e) => setPlace(e.target.value) }/>
        <button onClick={getWeatherData}>Search</button>
        {Object.keys(result).length !== 0 && (

          <Weather city={result.data.name} temp={result.data.main.temp} wth={result.data.weather[0].main}/>
          
          

        )}

        

    
      </main>
      <footer>
        Page created by Syahri
      </footer>
    </div>
  );
}

export default App;
