export default function pullData(e) {
    let queryData = queryField.value ;
    getGeocode(queryData)
    e.preventDefault();
    }
    
    
    let getGeocode = async function (query){
        let getOW = await fetch (`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=6e392d3485c73601214cf793446bf26c`,{mode:'cors'})
        let data =  await getOW.json();
    
        
    while (display.firstChild){
        display.removeChild(display.firstChild)
    }
    
        display.innerHTML = `<div id="resultHeader">Did you mean</div>`
        for (let i=0;i<data.length;i++){
           console.log(data[i])
            display.innerHTML += `<div id="resultContainer"
           onclick="getWeather(${data[i].lat},${data[i].lon})">
           ${data[i].name}, ${data[i].state}, ${data[i].country}</div>`
        }
    }