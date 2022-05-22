var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var name = document.querySelector('.description');
var name = document.querySelector('.temp');
var name = document.querySelector('.humidity');

button.addEventListener('click', function() {
    fetch('api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&appid=134a917d802ddc10f402d9450d227bd4') 
    .then(response => response.json())
    .then(data => console.log(data))

.catch(err => alert("Bad input!"))
})
