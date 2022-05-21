// create a request variable and assign a new XMLHttpRequest object to it

var city = document.querySelector('#city');

var request= new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.openweathermap.org/data/', true)

request.onload = function () {
    //begin accessing JSON data here 
    var data = JSON.parse(this.response)
};

// send request 
request.send()