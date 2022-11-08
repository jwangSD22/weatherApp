import { ktoC, ktoF } from "/src/tempConversion";
import { format } from "date-fns";
let localTz = format(new Date().getTime(), "X") * 60 * 60 * 1000;

let masterWeather = {
  mainTemp: "",
  max: "",
  min: "",
  tempToggle: "F",
  feelsLike: "",
  description: "",
  icon: "",
  rise: "",
  set: "",
  localTime: "",
  wind: "",
  degree: "",
  humidity: "",
  pressure: "",
  timezone: "",
  fullName: "",

  publish: function () {
    document.getElementById("mainTemp").innerHTML = `${convert(
      this.mainTemp
    )}°${this.tempToggle}`;
    document.getElementById("max").innerHTML = `<span id="innerHeader">Max</span><span id="innerContent">
      ${convert(this.max)}°${
        this.tempToggle
      }
    </span>`;
    document.getElementById("min").innerHTML = `<span id="innerHeader">Min</span><span id="innerContent">
      ${convert(this.min)}°${
        this.tempToggle
      }
    </span>`;
    document.getElementById("feelsLike").innerHTML = `<span id="innerHeader">Feels Like</span><span id="innerContent">
      ${convert(
        this.mainTemp
      )}°${this.tempToggle}
    </span>`;
    document.getElementById("description").innerHTML = this.description;
    document.getElementById(
      "icon"
    ).innerHTML = `<img src="https://openweathermap.org/img/wn/${this.icon}@2x.png">`;
    document.getElementById("rise").innerHTML = `<span id="innerHeader">Sunrise</span><span id="innerContent">
      ${format(
        this.rise * 1000 - localTz + this.timezone * 1000,
        "p"
      )}
    </span>`;
    document.getElementById("set").innerHTML = `<span id="innerHeader">Sunset</span> <span id="innerContent">
      ${format(
        this.set * 1000 - localTz + this.timezone * 1000,
        "p"
      )}
    </span>`;
    document.getElementById("localTime").innerHTML = `Local Time: ${format(
      new Date().getTime() - localTz + this.timezone * 1000,
      "p"
    )}`;
    document.getElementById("wind").innerHTML = `<span><img src="/src/svg/wind.svg" class="logo"></span><span id="innerHeader">Wind Speed</span><span id="innerContent">
      ${(
        this.wind * 2.237
      ).toFixed(1)}MPH-${degreeCalc(masterWeather.degree)}
    </span>`;
    document.getElementById(
      "humidity"
    ).innerHTML = `<span><img src="/src/svg/humidity.svg" class="logo"></span><span id="innerHeader">Humidity:</span><span id="innerContent">${this.humidity}%</span>`;
    document.getElementById(
      "pressure"
    ).innerHTML = `<span><img src="/src/svg/pressure.svg" class="logo"></span><span id="innerHeader">Pressure</span><span id="innerContent">${this.pressure} hpA</span>`;
    document.getElementById("locationDisplay").innerHTML = `${this.fullName}`;
    document.getElementById("tempToggle").addEventListener("click", toggler);
  },
};

function convert(x) {
  if (masterWeather.tempToggle === "F") {
    return ktoF(x);
  } else {
    return ktoC(x);
  }
}

function toggler() {
  if (masterWeather.tempToggle === "F") {
    masterWeather.tempToggle = "C";
  } else {
    masterWeather.tempToggle = "F";
  }
  masterWeather.publish();
}

function degreeCalc(degree) {
  let directions = ["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"]
  let calc = Math.floor(degree/22.5);
  return directions[calc]

}

export { masterWeather };
