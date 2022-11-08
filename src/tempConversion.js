let ktoC = function (input){
    return (input - 273.15).toFixed(0);
    
}

let ktoF = function (input){
    return (1.8*(input-273) + 32).toFixed(0)
}

export {ktoC,ktoF}