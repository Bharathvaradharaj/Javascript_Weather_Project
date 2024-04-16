const apikey = "1c3f82e70d93af9ee17dac235150ed64"
const apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`

const temp = document.querySelector('.temp')
const city = document.querySelector('.city')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')
const Searchbtn = document.querySelector('.search button')
const SearchInput = document.querySelector('.search input')
const WeatherIcon = document.querySelector('.weather_icon')
const weather = document.querySelector('.weather')
const err = document.querySelector('.err')
async function WeatherData(cityName) {

    const response = await fetch(apiurl + cityName + `&appid=${apikey}`)
    // ErrorMsg = data.message

    var data = await response.json()
    console.log(data)
    if (response.status == 404) {

        err.textContent = data.message;
        err.style.display = 'block';
        // tempElement.style.display = 'none';
    }
    else {
        const tempvalue = data.main.temp
        const cityValue = data.name
        const humidityValue = data.main.humidity
        const tempRound = Math.round(tempvalue)
        const windValue = data.wind.speed

        temp.textContent = tempRound + '°c'
        city.textContent = cityValue
        humidity.textContent = humidityValue
        wind.textContent = windValue + 'km/hour'



        if (data.weather[0].main == 'Clouds') {

            WeatherIcon.src = "images/clouds.png"
        }
        else if (data.weather[0].main == 'Clear') {
            WeatherIcon.src = "images/clear.png"

        }
        else if (data.weather[0].main == 'Rain') {
            WeatherIcon.src = "images/rain.png"

        }
        else if (data.weather[0].main == 'Drizzle') {
            WeatherIcon.src = "images/drizzle.png"

        }

        weather.style.display = 'block'
    }
}
Searchbtn.addEventListener('click', () => {

    if (SearchInput.value.trim() === '') {
        err.textContent = 'Please enter a value';
        err.style.display = 'block';
    } else {
        err.style.display = 'none';
        // Perform your search logic here
    }

    WeatherData(SearchInput.value)
})
