import { toggleOn,resetField } from "./helperFxns";
import { masterWeather } from "./masterWeather";

export default async function getWeather(lat, lon) {
  let getOW = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6e392d3485c73601214cf793446bf26c`,
    { mode: "cors" }
  );
  let data = await getOW.json();
  console.log(data);

  masterWeather.mainTemp = data.main.temp;
  masterWeather.max = data.main.temp_max;
  masterWeather.min = data.main.temp_min;
  masterWeather.feelsLike = data.main.feels_like;
  masterWeather.description = convertCase(data.weather[0].description);
  masterWeather.icon = data.weather[0].icon;
  masterWeather.rise = data.sys.sunrise;
  masterWeather.set = data.sys.sunset;
  masterWeather.localTime = data.timezone;
  masterWeather.wind = data.wind.speed;
  masterWeather.degree = data.wind.deg;
  masterWeather.humidity = data.main.humidity;
  masterWeather.pressure = data.main.pressure;
  masterWeather.timezone = data.timezone;

  masterWeather.publish();
  toggleOn();
  resetField();
}





function convertCase(text){
let myText = text
return myText.toLowerCase()
.split(' ')
.map((x)=>x.charAt(0).toUpperCase()+x.substring(1))
.join(' ');
}

