/**
 * Author: Uyen Tran
 * 
 * Extracts weather information from API using the user's geolocation and display the 
 * weather by sending information to HTML
 * 
 * The temperature can be expressed by Celsius or Fahrenheit
 */

const notifElement = document.querySelector(".notif");
const iconElement = document.querySelector(".icon");
const tempElement = document.querySelector(".temp p");
const tempDescElement = document.querySelector(".temp-description p");
const locElement = document.querySelector(".location p");

const weather = {
    temp : {
        value : 24,
        unit : "celsius"
    },
    desc : "Sunny",
    iconId : "clouds_sun_sunny_weather",
    city : "San Diego"
};

function display() {
    iconElement.innerHTML = `<img src="icons/${weather.iconID}.png"/>`;
    tempElement.innerHTML = `${weather.temp.value}°<span>C</span>`;
    tempDescElement.innerHTML = weather.desc;
    locElement.innerHTML = `${weather.city}`;
}

function convertKelvinToCelcius() {
    weather.temp.value = 300 - 283;
}

function convertCelciusToFahrenheit(temp){
    return Math.floor((temp * 9/5) + 32);
}

tempElement.addEventListener("click", function(){
    if(weather.temp.value === undefined) {
        return;
    }
    // To change the unit to Fahrenheit
    else if(weather.temp.unit === "celsius") {
        let fahrenheitTemp = convertCelciusToFahrenheit(weather.temp.value);
        tempElement.innerHTML = `${fahrenheitTemp}°<span>F</span>`;
        weather.temp.unit = "fahrenheit";
    }
    // To change the unit to Celcius
    else {
        tempElement.innerHTML = `${weather.temp.value}°<span>C</span>`;
        weather.temp.unit = "celsius";
    }
});



