import showWeatherReport from './weather';

const weatherApi = {
  key: '716282e50b3279ab43fcb00aa8720927',
};

const message = document.querySelector('#error');
message.innerHTML = '';

const getReport = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApi.key}&units=metric`,
    );

    const result = await response.json();
    const weather = result;
    showWeatherReport(weather);
  } catch (error) {
    message.innerHTML = `this ${error}`;
  }
};

const search = document.querySelector('#input-box');

search.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    getReport(search.value);
    document.querySelector('.weather').style.display = 'block';
  }
});
