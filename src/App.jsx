import { useState } from "react"
import './Weat.css'

const App = () => {
  const api = {
    key:"c62845557f429e3b294421689c4da912",
    base:"https://api.openweathermap.org/data/2.5/weather"
  }

 const[weather,setWeather]=useState({})
 const[search,setSearch]=useState("")


 function handleClick(){
  fetch(`${api.base}?q=${search}&appid=${api.key}`)
  .then(res=>res.json())
  .then(d=>{setWeather(d)
     console.log(d);
  })
 }

  return (
    <div className="App">
       <h1>Weather App</h1>
      <section className="input">
        <input type="text" placeholder="Search City" onChange={(e)=>setSearch(e.target.value)} />
        <button onClick={handleClick}>Search</button>
      </section>
      {(typeof weather.main != "undefined")?(
        <div className="content">
          <div className="location">
          <h2>{weather.name}<span>({weather.sys.country})</span></h2>
          </div>

          <div className="description">
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
          <h3>{weather.weather[0].description}</h3>
          </div>

          <div className="temperature">
          <h1>{weather.main.temp} <span>&deg;C</span></h1>
          <h3>Feels Like {weather.main.feels_like} <span>&deg;C</span></h3>
          </div>

          <div className="weather">
          <h3>{weather.weather[0].main}</h3>
          </div>

        </div>
      ):("Not Found")}
    </div>
  )
}

export default App