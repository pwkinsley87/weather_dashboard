var button = document.querySelector('btn');
var inputValue = document.querySelector('inputValue');
var name = document.querySelector('name');
var description = document.querySelector('description');
var temp = document.querySelector('temp');
var humidity = document.querySelector('humidity');

button.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputValue+'&appid=134a917d802ddc10f402d9450d227bd4') 
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var temp = data['main']['temp'];
        var descriptionValue = data['weather'][0]['description'];

        cityName.innerHTML =nameValue;
        temp.innerHTML = tempValue;
        description.innerHTML = descriptionValue;
    })

.catch(err => alert("Bad input!"))
});


