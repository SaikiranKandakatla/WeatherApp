import { useState } from 'react'
import './App.css';

import SearchBox from './searchBox';
import WeatherInfo from './WeatherInfo';
export default function WeatherStructureComponent() {
    const[Weather,setWeather]=useState({
        city:"hyderabad",
        tempearture:32.23,
        tempearturemaximum:32.23,
        tempearturemin:31.73,
        humidity:55,
        desc:"scattered clouds",
        feelsLike: 36.12,
       
    });
    let updateInfo=(results)=>{
        setWeather(results)
    }
  return(
    <>
    <SearchBox updateInfo={updateInfo}/>
    <WeatherInfo Weather={Weather}/>
    </>
  )
}