// access elements from html file 
let input=document.getElementById("inpt");
let searchbtn=document.getElementById("search-btn");
let cityName=document.getElementById("cityName");
let Temperature=document.getElementById("Temperature");
let weatherCondition=document.getElementById("WeatherCondition");
let humidity=document.getElementById("humidity");
let windspeed=document.getElementById("windspeed");

// add eventlistner on search button 
searchbtn.addEventListener("click",(e)=>
{
    let city=input.value;
    e.preventDefault();
    getWeather(city);
});

//when page is reload data of pune city will be shown
window.addEventListener("load", () => {
    getWeather("Pune");
});

async function getWeather(city) {
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f87f8144155134ee4dbc022c0ac277ef`;

    // request api 
    let response = await fetch(URL);
    let data = await response.json();

    // stored all the the respective value throungh data analysis 
    cityName.textContent = data.name;
    Temperature.textContent = data.main.temp;
    weatherCondition.textContent = data.weather[0].main;
    humidity.textContent = data.main.humidity;
    windspeed.textContent = data.wind.speed;
}
