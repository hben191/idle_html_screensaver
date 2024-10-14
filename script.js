// OpenWeatherMap API key
const apiKey = '8b52ec854e71a55f98dc0f1658922cf9';
const city = 'Aix-en-Provence'; // You can replace this with your preferred city

// Function to update time
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0'); // Get hours in 24-hour format
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Get minutes
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Get seconds
    const timeString = `${hours}:${minutes}:${seconds}`; // Format time

    document.getElementById('time').innerText = timeString; // Update the time display
}

// Function to fetch weather data
function updateWeather() {
    const weatherElement = document.getElementById('weather');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temp = data.main.temp;
            const description = data.weather[0].description;
            weatherElement.innerHTML = `${temp}°C - ${description}`;
        })
        .catch(error => {
            weatherElement.innerHTML = 'Weather data not available';
            console.error('Error fetching weather data:', error);
        });
}

function closeWindow() {
    window.close();
}

// Update time every second
setInterval(updateTime, 1000);

// Close on keypress or click to make it more screensaver like ;)
document.addEventListener('click', closeWindow);
document.addEventListener('keypress', closeWindow);

// Update weather every 15 minutes
updateWeather();
setInterval(updateWeather, 15 * 60 * 1000);

// Initial load
updateTime();
updateWeather();
