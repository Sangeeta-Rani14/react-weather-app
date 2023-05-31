import { DateTime } from "luxon";

const API_KEY = "143454aa39bbe3442a890cdbf3f9db36";


const makeIconURL = (iconId) =>
`https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getFormattedWeatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

    // console.log(data);

  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { country,sunrise,sunset },
    name,
    dt,
  } = data;

  const { description, icon } = weather[0];

  return {
    description,
    icon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    sunrise,
    sunset,
    name,
    dt,
  };
};
const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export { getFormattedWeatherData };
export{formatToLocalTime,makeIconURL};




// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=b87ce85e193d0ef3f70a5e01e55db90
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=b87ce85e193d0ef3f70a5e01e55db90