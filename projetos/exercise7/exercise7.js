function collectTemperature() {
    let fahrenheit = prompt("Qual a temperatura atual em Fahrenheit?")
    return fahrenheit
}

function changeToCelsius(fahrenheit) {
    let celsius = (((fahrenheit-32)*5)/9)
    return celsius
}

function showCelsius(celsius) {
    alert(`A temperatura atual em Celsius é ${celsius}`)
}

let getTheInformation = collectTemperature()

let showTheInformation = changeToCelsius(getTheInformation)

showCelsius(showTheInformation)