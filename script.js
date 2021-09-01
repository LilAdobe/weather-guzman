var cityFormEl = document.querySelector('#city-form');
//var cityButtonsEl = document.querySelector('#city-buttons');
var cityInputEl = document.querySelector('#cityname');
var weatherContainerEl = document.querySelector('#city-container');
var citySearchName = document.querySelector('#city-search-name');
var APIKey = '8e571819bbb8c12a8df6f271868e5021';
var city;

var windInputEl = document.querySelector('#wind');
var tempInputEL = document.querySelector('#temp');
var humidityInputEl = document.querySelector('#humid');


//FORCAST var
var forcast1InputEl = document.querySelector('#forcast1');
var forcast2InputEl = document.querySelector('#forcast2');
var forcast3InputEl = document.querySelector('#forcast3');
var forcast4InputEl = document.querySelector('#forcast4');
var forcast5InputEl = document.querySelector('#forcast5');
//Forcast Var

//UV
var uvInputEl = document.querySelector('#uv');
//UV
var SubmitHandler = function (event) { // should be able to enter the city name and return the weather for the stated city
    event.preventDefault();

    var cityname = cityInputEl.value.trim();

    if (cityname) {
        getCityWeather(cityname)
        getCityForcast(cityname)

        weatherContainerEl.textContent = '';
        cityInputEl.value = ''; // input
    } else {
        alert('Enter the name of the city'); // if no name entered. 
    }
};


//--forcast
var getCityForcast = function (city) {
    var weatherApi1 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;

    fetch(weatherApi1)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data1) {

                    displayForcast(data1, city);
                    console.log(city)
                });
            } else {
                alert('Error Input: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('no connection');
        });
};

var displayForcast = function (cityData, cityName1) {
    if (cityData.length === 0) {
        weatherContainerEl.textContent = 'No city  found';
        return;

    }
    console.log(cityData)
    citySearchName.textContent = cityName1

    forcast1InputEl.textContent =  cityData.list[0].dt_txt + " Temperature: " + cityData.list[0].main.temp + " Kelvin " + "   Wind: " + cityData.list[0].wind.speed + "MPH " + "Humidity: " + cityData.list[0].main.humidity + "%";

    forcast2InputEl.textContent = cityData.list[8].dt_txt + " Temperature: " + cityData.list[8].main.temp + " Kelvin " + "   Wind: " + cityData.list[8].wind.speed + "MPH " + "Humidity: " + cityData.list[8].main.humidity + "%";

    forcast3InputEl.textContent = cityData.list[16].dt_txt + " Temperature: " + cityData.list[16].main.temp + " Kelvin " + "   Wind: " + cityData.list[16].wind.speed + "MPH " + "Humidity: " + cityData.list[16].main.humidity + "%";

    forcast4InputEl.textContent = cityData.list[24].dt_txt + " Temperature: " + cityData.list[24].main.temp + " Kelvin " + "   Wind: " + cityData.list[24].wind.speed + "MPH " + "Humidity: " + cityData.list[24].main.humidity + "%";

    forcast5InputEl.textContent = cityData.list[32].dt_txt + " Temperature: " + cityData.list[32].main.temp + " Kelvin " + "   Wind: " + cityData.list[32].wind.speed + "MPH " + "Humidity: " + cityData.list[32].main.humidity + "%";

    //cityData.list[0].weather[0].icon+'.png ' icon have to put it in image src. for each forcast day.

}
//--forcast

//--UV

var getCityUv = function (city) {
    var WeatherApi = "https://api.openweathermap.org/data/2.5/onecall?q=" + city + "&appid=" + APIKey;

    fetch(WeatherApi)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data2) {

                    displayUv(data2, city);
                    console.log(city)
                });
            } else {
                alert('Error Input: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('no connection');
        });
};


var displayUv = function (cityData, cityName1) {
    if (cityData.length === 0) {
        weatherContainerEl.textContent = 'No city  found';
        return;

    }
    console.log(cityData)
    citySearchName.textContent = cityName1

    uvInputEl.textContent = cityData.current.uvi;

}
//--UV

var getCityWeather = function (city) {
    var WeatherApi = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

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


    windInputEl.textContent = 'Wind Speed: ' + cityData.wind.speed + " MPH";
    tempInputEL.textContent = 'Temperature: ' + cityData.main.temp + " Kelvin";
    humidityInputEl.textContent = 'Humidity: ' + cityData.main.humidity + "%";

    // left to do
    // UV index - 
    //uv index- color change 
    //search history


    // done
    //humidity, temperature,wind speed
}







cityFormEl.addEventListener('submit', SubmitHandler);
//cityButtonsEl.addEventListener('click', buttonClickHandler);
