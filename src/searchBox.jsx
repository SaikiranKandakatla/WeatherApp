import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function search({updateInfo}){
    const[city,setCity]=useState("");
    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY="70bdc5cc2bfa922f4d887d644de0ebe6";
    let getWeatherInfo=async ()=>{
    let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let data=await response.json();
    let results={
      city:city,
      tempearture:data.main.temp,
      tempearturemaximum:data.main.temp_max,
      tempearturemin:data.main.temp_min,
      humidity:data.main.humidity,
      feelsLike:data.main.feels_like,
      desc:data.weather[0].description

    }
    return results;

  }
  let handlechange=(event)=>{
    setCity(event.target.value);
  }
  let handlesubmit=async (event)=>{
    event.preventDefault();
    setCity("");
    let result=await getWeatherInfo();
    updateInfo(result);
    
  }
  return (
    <div className='city'>
      <h2>Enter Your City</h2>
      <form onSubmit={handlesubmit}>
        <TextField id="city" label="city" variant="outlined"  
        value={city} onChange={handlechange} required/>
        <br/><br/>
       
        <Button variant="contained" type="submit">submit</Button>
        <br/><br/>
      </form>
    </div>
  )
}