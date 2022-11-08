let ktoC = function (input){
    return (input - 273.15).toFixed(1);
    
}

let ktoF = function (input){
    return (1.8*(input-273) + 32).toFixed(1)
}

export {ktoC,ktoF}