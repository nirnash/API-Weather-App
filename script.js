const URL = "https://api.openweathermap.org/data/2.5/weather"
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

getWeatherData = (city) => {
  fetch(`${URL}?q=${city}&appid=${API_KEY}&units=imperial`)
	.then(response => response.json())
	.then(data => {
    type1 = data.weather[0].main
    temp1 = data.main.temp 
    min1 = data.main.temp_min 
    max1 = data.main.temp_max
    weatherData = [type1, temp1, min1, max1]
    showWeatherData(weatherData)
    })
	.catch(err => console.error(err));
}

const searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city)
}

const showWeatherData = (weatherData) => {
  const name = document.getElementById('city-name')
  const type = document.getElementById('weather-type')
  const temp = document.getElementById('temp')
  const min = document.getElementById('min-temp')
  const max = document.getElementById('max-temp')
  const city = document.getElementById('city-input').value;
  name.innerText = `${city}`
  type.innerText = `${type1}`
  temp.innerText = `${temp1}`
  min.innerText = `${min1}`
  max.innerText = `${max1}`
}
