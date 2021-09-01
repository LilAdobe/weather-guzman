var cityFormEl = document.querySelector('#city-form');
//var cityButtonsEl = document.querySelector('#city-buttons');
var cityInputEl = document.querySelector('#cityname');
var weatherContainerEl = document.querySelector('#city-container');
var citySearchName = document.querySelector('#city-search-name');
var APIKey = '8e571819bbb8c12a8df6f271868e5021';
var city;

var windInputEl =document.querySelector('#wind');
var tempInputEL =document.querySelector('#temp');
var humidityInputEl = document.querySelector('#humid');

var SubmitHandler = function (event) { // should be able to enter the city name and return the weather for the stated city
    event.preventDefault();

    var cityname = cityInputEl.value.trim();

    if (cityname) {
        getCityWeather(cityname)


        weatherContainerEl.textContent = '';
        cityInputEl.value = ''; // input
    } else {
        alert('Enter the name of the city'); // if no name entered. 
    }
};




var getCityWeather = function (city) {
    var WeatherApi = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

    fetch(WeatherApi)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {

                    displayWeather(data, city);
                });
            } else {
                alert('Error Input: ' + response.statusText);
            }
        })
        .catch(function (error) {
        alert('no connection');
    });
};

var displayWeather = function (cityData, cityName1) {
    if (cityData.length === 0) {
        weatherContainerEl.textContent = 'No city  found';
        return;
 
    }     
    console.log(cityData)
    citySearchName.textContent = cityName1
windInputEl.textContent = 'Wind Speed: ' + cityData.wind.speed +" MPH";
tempInputEL.textContent = 'Temperature: ' + cityData.main.temp + " Kelvin";
humidityInputEl.textContent = 'Humidity: ' + cityData.main.humidity + "%";


//humidity, temperature, UV index - 
//uv index- color change 
// five day forcast
//search history




    // for (var i = 0; i < city.length; i++) {
    //     var cityData = city[i].location.cityinput + '/' + [i].name
    // }
    
//     var cityEl = document.createElement('h2');
//     cityEl.classList = 'list-item flex-row justify-space-between align-center';

//     var infoEl = document.createElement('span');
//     infoEl.textContent = cityData;

//     cityEl.appendChild(infoEl);

//     var currentWetEl = document.createElement('span');
//     currentWetEl.classList = 'flex-row align-center';

//    cityEl.appendChild(currentWetEl);
//    weatherContainerEl.appendChild(cityEl);
// 
}






//city.addEventListener()


cityFormEl.addEventListener('submit', SubmitHandler);
//cityButtonsEl.addEventListener('click', buttonClickHandler);
