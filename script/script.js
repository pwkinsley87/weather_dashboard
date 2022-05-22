var languageButtonsEl = document.querySelector('#language-buttons');
var citySearchFormEl = document.querySelector('#city-search-form');


var formSubmitHandler = function(event) {
    // prevent page from refreshing
    event.preventDefault();
  
    // get value from input element
    var city = cityInputEl.value.trim();
  
    if (city) {
      getCityData(city);
  
      // clear old content
      cityContainerEl.textContent = '';
      cityInputEl.value = '';
    } else {
      alert('Please enter a city');
    }
  };

  var buttonClickHandler = function(event) {
    // get the language attribute from the clicked element
    var weather = event.target.getAttribute("current");
  
    if (weather) {
      getCityData (weather);
  
      // clear old content
      cityContainerEl.textContent = "";
    }
  };

  var getCityData = function(city) {
    // format the github api url
    var apiUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=134a917d802ddc10f402d9450d227bd4' + city + '/current';
  
    // make a get request to url
    fetch(apiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          console.log(response);
          response.json().then(function(data) {
            console.log(data);
            displayCity(data, city);
          });
        } else {
          alert('Error: City not found');
        }
      })
      .catch(function(error) {
        alert('Unable to connect to weather. Is there any weather there? Maybe they have run out of weather.');
      });
  };

  var displayCity = function(city, searchTerm) {
    // check if api returned any repos
    if (cities.length === 0) {
      cityContainerEl.textContent = 'No data found.';
      return;
    }
  
    cityInputEl.textContent = searchTerm;
  
    // loop over repos
    for (var i = 0; i < cities.length; i++) {
      // format repo name
      var cityName = cities[i].owner.login + '/' + cities[i].name;
  
      // create a container for each repo
      var cityEl = document.createElement('div');
      cityEl.classList = 'list-item flex-row justify-space-between align-center';
  
      // create a span element to hold repository name
      var titleEl = document.createElement('span');
      titleEl.textContent = cityName;
  
      // append to container
      cityEl.appendChild(titleEl);
  
      // create a status element
      var statusEl = document.createElement('span');
      statusEl.classList = 'flex-row align-center';
  
      // append to container
      cityEl.appendChild(statusEl);
  
      // append container to the dom
      cityContainerEl.appendChild(cityEl);
    }
     
var buttonClickHandler = (function(event) {
    var language = event.target.getAttribute("data-language")
    console.log(language)
}
  )};

citySearchFormEl.addEventListener("click", buttonClickHandler);



