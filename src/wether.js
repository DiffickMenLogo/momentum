export async function getWeather() {  
    const city = document.querySelector(".city");
    const weatherIcon = document.querySelector('.weather-icon');
    const temperature = document.querySelector('.temperature');
    const weatherDescription = document.querySelector('.weather-description');
    

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=406905cee9f385b9b6fc9f1741cd8abe&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 

    weatherIcon.className = 'weather-icon owf';
    
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
  }