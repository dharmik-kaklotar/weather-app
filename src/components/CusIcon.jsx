import React from 'react'
import { FiSun } from "react-icons/fi";
import { CiCloudSun } from "react-icons/ci";
import { WiDayRainMix } from "react-icons/wi";
import { BsCloudRainHeavy } from "react-icons/bs";
import { MdOutlineThunderstorm } from "react-icons/md";
import { RiMistFill } from "react-icons/ri";
import { TiWeatherPartlySunny } from "react-icons/ti";


const CusIcon = (props) => {
let data = props.datas.toLowerCase();
function setWeather(){
  if (data === "clear") {
    return <FiSun size={"8rem"} color="#fff" />
  } else if (data === "clouds") {
    return <CiCloudSun size={"8rem"} color="#fff" />
  } else if (data === "thunderstorm") {
    return<FiSun size={"8rem"} color="#fff" />
  } else if (data === "drizzle") {
    return<BsCloudRainHeavy size={"8rem"} color="#fff" />
  } else if (data === "rain") {
    return<WiDayRainMix size={"8rem"} color="#fff" />
  } else if (data === "snow") {
    return<MdOutlineThunderstorm size={"98rem"} color="#fff" />
  } else if (
    data === "mist" ||
    data === "smoke" ||
    data === "haze" ||
    data === "fog"
  ) {
    return<RiMistFill size={"8rem"} color="#fff" />
  } else {
    return<TiWeatherPartlySunny size={"8rem"} color="#fff" />
    
  }
}

  return (
    <>
      {setWeather()}
    </>
  );
};




export default CusIcon;
