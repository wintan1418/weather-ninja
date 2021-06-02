const view = (() => {
  function setSearchOutput(weatherData) {
    if (!weatherData) return;

    const searchOutput = document.getElementById('searchOutput');
    searchOutput.classList.add('active');

    const city = document.getElementById('city');
    const temperature = document.getElementById('temperature');
    const possibility = document.getElementById('possibility');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');

    city.textContent = `${weatherData.city}`;
    temperature.textContent = `${weatherData.temperature} °C`;
    possibility.textContent = `possibility: ${weatherData.possibility} °C`;
    humidity.textContent = `Humidity: ${weatherData.humidity} %`;
    wind.textContent = `Wind: ${weatherData.windSpeed} km/h`;
  }

  return { setSearchOutput };
})();

export default view;
