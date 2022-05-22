var languageButtonsEl = document.querySelector('#language-buttons');
var citySearchFormEl = document.querySelector('#city-search-form');
var cityContainerEl = document.querySelector('#city-container');
var cityInputEl = document.querySelector('#city');


var formSubmitHandler = function (event) {
  // prevent page from refreshing
  event.preventDefault();
  console.log(event);
};

  // get value from input element
  var city = cityInputEl.value.trim();

  var getCityData = function(city) {
    // make a get request to url
    fetch(apiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          console.log(response)
          response.json();
        }
      }).then(function (data) {
          console.log(data);
          displayCity(data);
      })
      .catch(function (error) {
        alert('Unable to connect to weather. Is there any weather there? Maybe they have run out of weather.')
      })

var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=134a917d802ddc10f402d9450d227bd4'

var displayCity = function (city) {
  // check if api returned any cities
  if (city.length === 0) {
    cityContainerEl.textContent = 'No data found.';
    return;
  }

var searchTerm = document.querySelector(searchTerm.textContent);

  // loop over cities
  for (var i = 0; i < city.length; i++) {
    // format city name
    var cityName = city[i].owner.login + '/' + city[i].name;

    // create a container for each city
    var cityEl = document.createElement('div');
    cityEl.classList = 'list-item flex-row justify-space-between align-center';

    // create a span element to hold city name
    var titleEl = document.createElement('span');
    titleEl.textContent = cityName;

    // append to container
    cityContainerEl.appendChild(titleEl);

    // create a status element
    var statusEl = document.createElement('span');
    statusEl.classList = 'flex-row align-center';

    // append to container
    cityContainerEl.appendChild(statusEl);

    // append container to the dom
    cityContainerEl.appendChild(cityContainerEl);
  }

};
var buttonClickHandler = function (event) {
  event(preventDefault);
  console.log(data);
};

citySearchFormEl.addEventListener("submit", formSubmitHandler)};