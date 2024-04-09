import React from 'react';
import { useEffect, useState } from "react";
import "./DateAndTime.css";

const DateAndTime = () => {
    const [time, setTime] = useState(new Date());
    // const [date,setDate] = useState(new Date())
    useEffect(() => {
      setInterval(() => {
        setTime(new Date());
        // setDate(new Date())
      }, []);
    });

     let dt = new Date();
     const CurrentDate = () => {
       let months = [
         "January",
         "February",
         "March",
         "April",
         "May",
         "June",
         "July",
         "August",
         "September",
         "October",
         "November",
         "December",
       ];
       let days = [
         "Sunday",
         "Monday",
         "Tuesday",
         "Wednesday",
         "Thrusday",
         "Friday",
         "Saturday",
       ];
       let Day = days[dt.getDay()];
       let date = dt.getDate();
       let mon = months[dt.getMonth()];
       let year = dt.getFullYear();

       return `${Day} , ${date}  ${mon}  ${year} `;
     };
  return (
    <div>
      <div className="date-time">
        <div className="time">{time.toLocaleTimeString()}</div>
        <div className="date">{CurrentDate()}</div>
        {/* <div className="date">{date.toLocaleDateString()}</div> */}
      </div>
    </div>
  );
}

export default DateAndTime
