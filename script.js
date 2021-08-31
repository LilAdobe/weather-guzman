var cityFormEl = document.querySelector('#city-form');
var cityButtonsEl = document.querySelector('#city-buttons');
var cityInputEl = document.querySelector('#cityname');
var weatherContainerEl = document.querySelector('#city-container');
var citySearchName = document.querySelector('#city-search-name');
var APIKey = '8e571819bbb8c12a8df6f271868e5021';
var city;

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


var button

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

var displayWeather = function (city, searchName) {
    if (city.length === 0) {
        weatherContainerEl.textContent = 'No city  found';
        return;
    }

    citySearchName.textContent = searchName 

    for (var i = 0; i < city.length; i++) {
        var cityData = city[i].location.cityinput + '/' + [i].name
    }
    var cityEl = document.createElement('h2');
    cityEl.classList = 'list-item flex-row justify-space-between align-center';

    var infoEl = document.createElement('span');
    infoEl.textContent = cityData;

    cityEl.appendChild(infoEl);

    var currentWetEl = document.createElement('span');
    currentWetEl.classList = 'flex-row align-center';

   cityEl.appendChild(currentWetEl);
   weatherContainerEl.appendChild(cityEl);
}









cityFormEl.addEventListner('submit', SubmitHandler);
cityButtonsEl.addEventListener('click', buttonClickHandler);
