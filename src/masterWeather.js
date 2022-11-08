import {ktoC,ktoF} from '/src/tempConversion'
import { format } from 'date-fns'
let localTz = format(new Date().getTime(),'X')*60*60*1000

let masterWeather = {
mainTemp:'',
max:'',
min:'',
tempToggle:'F',
feelsLike:'',
description:'',
icon:'',
rise:'',
set:'',
localTime:'',
wind:'',
degree:'',
humidity:'',
pressure:'',
timezone:'',

publish: function(){
document.getElementById('mainTemp').innerHTML=`${convert(this.mainTemp)}°${this.tempToggle}`
document.getElementById('max').innerHTML=`Max:${convert(this.max)}°${this.tempToggle}`
document.getElementById('min').innerHTML=`Min:${convert(this.min)}°${this.tempToggle}`
document.getElementById('feelsLike').innerHTML=`Feels Like: ${convert(this.mainTemp)}°${this.tempToggle}`
document.getElementById('description').innerHTML=this.description
document.getElementById('icon').innerHTML=`<img src="https://openweathermap.org/img/wn/${this.icon}@2x.png">`
document.getElementById('rise').innerHTML= `Sunrise: ${format((this.rise*1000)-localTz+(this.timezone*1000),'p')}`
document.getElementById('set').innerHTML=`Sunset: ${format((this.set*1000)-localTz+(this.timezone*1000),'p')}`
document.getElementById('localTime').innerHTML=`Local Time: ${format(new Date().getTime()-localTz+(this.timezone*1000),'p')}`
document.getElementById('wind').innerHTML= `Wind:${(this.wind*2.237).toFixed(1)}MPH`
document.getElementById('humidity').innerHTML= `Humidity:${this.humidity}%`
document.getElementById('pressure').innerHTML= `Pressure:${this.pressure} hpA`
document.getElementById('tempToggle').addEventListener('click',toggler)


}

}

function convert(x) {

    if(masterWeather.tempToggle==='F'){
        return ktoF(x);
    }
    else{return ktoC(x);}
}

function toggler(){
    if(masterWeather.tempToggle==='F'){
        masterWeather.tempToggle='C'
    }
    else{
        masterWeather.tempToggle='F'
    }
    masterWeather.publish();
}


export {masterWeather}