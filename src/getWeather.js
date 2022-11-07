import { format } from 'date-fns'
import {resetField} from '/src/parseQuery'

let booty = format(new Date().getTime(),'X')*60*60*1000

export default async function getWeather (lat,lon){
    let getOW = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6e392d3485c73601214cf793446bf26c`, {mode:'cors'})
    let data = await getOW.json();
    console.log([
        data,
        data.clouds.all,
        data.dt,
        data.main.temp,
        data.main.feels_like,
        data.weather[0].description,
        data.timezone])
        weatherIcon.setAttribute("src",`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        tempDisplay.textContent = `${format(new Date().getTime()-booty+(data.timezone*1000),'p')}`
        
    




        toggleOn();
        resetField();


}

let toggleOn = function(){
    let getEle = document.querySelectorAll('.toggle')
    console.log(getEle);
    getEle.forEach((e)=>e.style.display='flex')

}