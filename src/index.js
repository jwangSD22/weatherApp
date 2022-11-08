//openweather API - 6e392d3485c73601214cf793446bf26c
import "./styles.css"
import getWeather from '/src/getWeather'
import pullData from '/src/parseQuery'
import "./outerContainers.css"
import {masterWeather} from '/src/masterWeather'
import { format } from 'date-fns'
import { toggleOff } from "./parseQuery"


window.document.addEventListener(
    'DOMContentLoaded',
    () => {
const queryForm = document.getElementById('queryForm');
const queryField = document.getElementById('queryField');
const submitButton = document.getElementById('submitButton');
const display = document.getElementById('display');
const tempDisplay = document.getElementById('tempDisplay');
const weatherIcon = document.getElementById('weatherIcon');
const locationDisplay = document.getElementById('locationDisplay');
queryForm.addEventListener('submit',pullData)
window.getWeather = getWeather
window.masterWeather = masterWeather;
toggleOff();
})




