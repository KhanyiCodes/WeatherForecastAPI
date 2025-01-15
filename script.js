document.getElementById('searchBtn').addEventListener('click', getWeather);

function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '4fc3060a14404894820134704251401';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayWeather(data);
        })
        .catch(error => alert('Error fetching weather data'));
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    if (data.current) {
        weatherInfo.innerHTML = `
            <h3>Weather in ${data.location.name}</h3>
            <div class="weather-item">
                <i class="fas fa-thermometer-half"></i>
                <p>Temperature: ${data.current.temp_c}°C</p>
            </div>
            <div class="weather-item">
                <i class="fas fa-tint"></i>
                <p>Humidity: ${data.current.humidity}%</p>
            </div>
            <div class="weather-item">
                <i class="fas fa-wind"></i>
                <p>Wind Speed: ${data.current.wind_kph} km/h</p>
            </div>
        `;
    } else {
        weatherInfo.innerHTML = `<p>City not found. Please try again.</p>`;
    }
}