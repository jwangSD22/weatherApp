import { masterWeather } from "./masterWeather";

export default function pullData(e) {
  let queryData = queryField.value;

  getGeocode(queryData);
  document.getElementById("locationDisplay").textContent = "";
  e.preventDefault();
}

let getGeocode = async function (query) {
if (query === ''){console.log('hey')}
else{
  let getOW = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=6e392d3485c73601214cf793446bf26c`,
    { mode: "cors" }
  );
 
  let data = await getOW.json();

    while (display.firstChild) {
    display.removeChild(display.firstChild);
  }
if (data.length === 0){
    display.innerHTML = `<span id="resultHeader">No results found! Please try again</span>`
}
else{
  display.innerHTML = `<span id="resultHeader">Did you mean</span>`;
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
    display.innerHTML += `<span id="resultContainer"
           onclick="getWeather(${data[i].lat},${data[i].lon})" country ="${data[i].name}, ${data[i].state}, ${data[i].country}">
           ${data[i].name}, ${data[i].state}, ${data[i].country}</span>`;
  }
}
  display.innerHTML += `<span id="newQuery">New Search</span>`;
  submitButton.style.display = "none";
  const newQuery = document.getElementById("newQuery");
  newQuery.addEventListener("click", resetToggle);

  const locationDisplay = document.getElementById("locationDisplay");
  function addEl() {
    const results = document.querySelectorAll("#resultContainer");
    for (let i = 0; i < results.length; i++) {
      results[i].addEventListener(
        "click",
        () => (masterWeather.fullName = results[i].getAttribute("country"))
      );
    }
  }
  addEl();

}
}

function resetToggle() {
  resetField();
  toggleOff();
}

function resetField() {
  while (display.firstChild) {
    display.removeChild(display.firstChild);
  }
  submitButton.style.display = "flex";
  
  queryForm.reset();
}

let toggleOff = function () {
  let getEle = document.querySelectorAll(".toggle");
  getEle.forEach((e) => (e.style.display = "none"));
};

export { resetField, toggleOff };
