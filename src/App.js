
import './App.css';
import React from 'react';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButton from './component/TopButton';
import Input from './component/Input';
import TimeAndLoctaion from './component/TimeAndLoctaion';
import TempDetail from './component/TempDetail';
import { useEffect, useState } from "react";
import { getFormattedWeatherData,temp } from "./service/weatherservice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {

  const [city, setCity] = useState("Paris");
 const [query, setQuery] = useState({ q: city});
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData(city,units).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = ({weather:{temp}}) => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 10 : 20;
    if (weather.a < threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };


  return (
    <div className={`mx-auto max-w-screen-md mt-20 py-5 px-32 bg-gradient-to-br from-cyan-200 to-blue-500 h-fit shadow-xl shadow-gray-400
      ${formatBackground}`}>
      <TopButton setQuery={setCity } />
      <Input setQuery={setQuery} units={units} setUnits={setUnits} city={city} setCity={setCity } />
        {weather &&(
        <div>
        <TimeAndLoctaion  weather={weather}/>
        <TempDetail   weather={weather}/>
        </div>
      )}
      
  
      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>

  );
}

export default App;


