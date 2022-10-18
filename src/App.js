import axios from 'axios';
import { useState,useRef} from 'react';
import './App.css';
import Weather from './Weather';
import bg from '../src/img/bg.jpg'

function App() {
  const [place,setPlace] = useState("Seoul");
  const [result, setResult] = useState({});
  const rslt = useRef();

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

  const handleButtonClick = () => {
    rslt.current.style.animation = "0.7s ease-in-out 0s 1 show";
}

const handleAnimationEnd = () => {
  rslt.current.style.animation = "none";
}

  

 
  

  return (
    <div className="App" style={{ backgroundImage:`url(${bg})` }}>
      <div className='container'>
        <h1>React Weather App</h1>
        <main>
          <div className='form'>
              <input type='text' value={place} onChange={(e) => setPlace(e.target.value) } />
              <button  onClick={() => { getWeatherData(); handleButtonClick();}}>Search</button>
          </div>
        
        {Object.keys(result).length !== 0 && (

          <div className='result' ref={rslt} onAnimationEnd={handleAnimationEnd}>
            <Weather  city={result.data.name} temp={result.data.main.temp} wth={result.data.weather[0].main}/>

          </div>

          
          
          

        )}

          

      
        </main>
        
      </div>
      <footer>
          Page created by Syahri
        </footer>
      
    </div>
  );
}

export default App;
