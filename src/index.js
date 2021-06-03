import weather from './page/weather';
import view from './page/view';
import convertTemp from './page/toogle';

const form = document.getElementById('form');
const formInputs = document.getElementById('formInputs');
const searchBtn = document.getElementById('searchBtn');

form.addEventListener('submit', (f) => {
  f.preventDefault();
});

searchBtn.addEventListener('click', async () => {
  if (formInputs.value === '') return;
  const weatherData = await weather.getData(formInputs.value);
  view.setSearchOutput(weatherData);
  convertTemp.tempToF(weather.main.temp);
});
