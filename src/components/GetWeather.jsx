import React, { useEffect, useState } from "react";
import "./GetWeather.css";

import { WiHumidity } from "react-icons/wi";
import CusIcon from "./CusIcon";
import { IoSearchSharp } from "react-icons/io5";




const GetWeather = ({ getWeather1 }) => {
  let [datas, SetDatas] = useState({
    temprature: "",
    weatherType: "",
    weatherdescription: "",
    city: "",
    country: "",
    windSpeed: "",
    humidity: "",
  });


  let [inputVal, setInputVal] = useState("");
  let [input, setInput] = useState("london");
 
const getdata = ()=>{
  
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${process.env.REACT_APP_APIID}&units=metric`
)
  .then((res) => res.json())
  .then((data) => {
    SetDatas({
      temprature: data.main.temp,
      weatherType: data.weather[0].main,
      weatherdescription: data.weather[0].description,
      city: data.name,
      country: data.sys.country,
      windSpeed: data.wind.speed,
      humidity: data.main.humidity,
    });
  })
  .catch(() => {
    // if any error occure than set display error message in city name field...
    SetDatas({
      ...datas,
      city: "Not Found ,Please Try Again",
      country: "",
    });
  });
}




  useEffect(() => {
    getdata();
  }, [input]);

  const SearchHandler = (e) => {
    setInputVal(e.target.value);
  };
  const submitHandler = (e) => {
    if (!inputVal) {
      return;
    }else{

      e.preventDefault();
      setInput(inputVal);
      setInputVal("");
     getdata();
    }
  };


  return (
    <div className="mc">
      <div className="weather-icon"></div>
      <div className="icon">
        <CusIcon datas={datas.weatherType} />
      </div>
      <div className="weather-name">
        <h1>{datas.weatherType}</h1>
      </div>
      <div className="input-box">
        <div className="input-container">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              id="input"
              required
              placeholder="Enter City Name"
              onInput={SearchHandler}
              value={inputVal}
            />
          </form>
          <div className="underline"></div>
        </div>
        <span onClick={submitHandler}>
          <IoSearchSharp size={"2rem"} color="#fff" />
        </span>
      </div>
      <div className="entered-city-name">
        <div className="tem">
          {datas.temprature}°C{getWeather1(datas.temprature)}
        </div>
        <h1>
          {datas.city},{datas.country}
        </h1>
      </div>
      <div className="weathor-information">
        <div className="description">{datas.weatherdescription}</div>
        <br />
        <div className="wind-speed">
          <div>
            <span>wind speed</span>
          </div>
          <span>
            <svg
              fill="#fff"
              width="1.5rem"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
            </svg>
          </span>
          <span> {Math.round(datas.windSpeed * 3.6)} km/h</span> <br />
        </div>
        <br />
        <div className="humidity">
          <div>
            <span>Humidity</span>
          </div>
          <span>
            <WiHumidity size={"1.6rem"} />
          </span>
          <span> {datas.humidity}%</span>
        </div>
      </div>
    </div>
  );
};

export default GetWeather;
