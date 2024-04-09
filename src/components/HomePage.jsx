import { useState } from "react";
import DateAndTime from "./DateAndTime";
import GetWeather from "./GetWeather";
import "./HomePage.css";


const HomePage = () => {
    let [weatherData1,getWeatherData1] = useState();
   
  
     const getTemp = (w) => {
       // 👇️ take the parameter passed from the Child component
       getWeatherData1(w);
     };
     
  return (
    <div className="container">
      <div className="image-container">
        <DateAndTime />
        <div className="temp">{weatherData1}°</div>
      </div>
      <div className="info-container">
        <GetWeather getWeather1={getTemp} />
      </div>
    </div>
  );
}

export default HomePage;
