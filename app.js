/**
 * Author: Uyen Tran
 * 
 * Extracts weather information from API and display the weather by sending
 * information to HTML
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
    /*
    tempMax : {
        value: 30,
        unit : "celsius"
    },
    tempMin : {
        value: 20,
        unit : "celsius"
    },
    */
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

if ("geologcation" in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}
else {
    notifElement.style.display = "block";
    notifElement.innerHTML = "<p>Error: browser doesn't suport geolocation.</p>"
}

function setPosition(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    getWeather(lat, long);
}

function showError(error) {
    notifElement.style.display = "block";
    notifElement.innerHTML = `<p>Error: ${error.message} </p>`
}

const KELVIN = 273;
const key = "82005d27a116c2880c8f0fcb866998a0"

function getWeather(latitude, longitude) {
    let api = `http://api.openweatherapp.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    fetch(api).then(function(response) {
        let data = response.json();
        return data;
    }).then(function(data) {

    })
}


