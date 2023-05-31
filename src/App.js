
import './App.css';
import React from 'react';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButton from './component/TopButton';
import Input from './component/Input';
import TimeAndLoctaion from './component/TimeAndLoctaion';
import TempDetail from './component/TempDetail';
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./service/weatherservice";


function App() {

  // const [city, setCity] = useState("delhi");
  const [query, setQuery] = useState({ q: "berlin" });
const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  
  // const [bg, setBg] = useState(hotBg);

 useEffect(()=>{
  const fetchWeatherData = async () => {
    const data = await getFormattedWeatherData('delhi');
    // console.log(data);
    setWeather(data);
    
    // dynamic bg
    // const threshold = units === "metric" ? 20 : 60;
    // if (data.temp <= threshold) setBg());
    // else setBg(hotBg);
  };

  fetchWeatherData();
 },[])



  return (
    <div className="mx-auto max-w-screen-md mt-20 py-5 px-32 bg-gradient-to-br from-cyan-200 to-blue-500 h-fit shadow-xl shadow-gray-400">
      <TopButton/>
      <Input/>
       {weather &&(
        <div>
        <TimeAndLoctaion  weather={weather}/>
        <TempDetail   weather={weather}/>
        </div>
       )}
      
  

    </div>

  );
}

export default App;


