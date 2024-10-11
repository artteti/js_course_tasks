const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')

const API_LINK ='https://api.openweathermap.org/data/2.5/weather?q='
const API_UNITS = '&units=metric'
const API_KEY = '&appid=b59092aafd080fe34f5791c41e997d6a'

const getWether = () => {
    const city = input.value || 'London'
    const URL = API_LINK + city + API_KEY + API_UNITS

    axios.get(URL).then(res =>{
        console.log(res.data)
        const temp = res.data.main.temp
        const hum = res.data.main.humidity
        const statusId = res.data.weather[0].id

        cityName.textContent = res.data.name
        temperature.textContent = Math.floor(temp) + '°C'
        humidity.textContent = hum + '%'
        weather.textContent = res.data.weather[0].main

        if (statusId >= 200 && statusId < 300){
            photo.setAttribute('src', './img/thunderstorm.png')
        }else if (statusId >= 300 && statusId < 400){
            photo.setAttribute('src', './img/drizzle.png')
        }else if (statusId >= 500 && statusId < 600){
            photo.setAttribute('src', './img/rain.png')
        }else if (statusId >= 600 && statusId < 700){
            photo.setAttribute('src', './img/ice.png')
        }else if (statusId >= 700 && statusId < 800){
            photo.setAttribute('src', './img/fog.png')
        }else if (statusId === 800){
            photo.setAttribute('src', './img/sun.png')
        }else if (statusId >= 800 && statusId < 900){
            photo.setAttribute('src', './img/cloud.png')
        }else{
            photo.setAttribute('src', './img/unknown.png')
        }

    })
}


button.addEventListener('click', getWether)
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        getWether()
    }
  })